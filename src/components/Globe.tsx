"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Load earth texture for accurate land detection
    const img = new Image();
    img.crossOrigin = "anonymous";
    // Use NASA Blue Marble simplified - equirectangular land/ocean map
    img.src = "/earth-map.png";

    img.onload = () => {
      // Draw image to canvas to read pixel data
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const isLand = (lat: number, lng: number): boolean => {
        const x = Math.floor(((lng + 180) / 360) * canvas.width);
        const y = Math.floor(((90 - lat) / 180) * canvas.height);
        const cx = Math.max(0, Math.min(canvas.width - 1, x));
        const cy = Math.max(0, Math.min(canvas.height - 1, y));
        const idx = (cy * canvas.width + cx) * 4;
        // Green channel > threshold = land (works for most earth maps)
        const r = imageData.data[idx];
        const g = imageData.data[idx + 1];
        const b = imageData.data[idx + 2];
        // Land is typically green/brown, ocean is blue/dark
        // Simple heuristic: if brightness > threshold and not predominantly blue
        const brightness = (r + g + b) / 3;
        return brightness > 60 && !(b > r + 30 && b > g + 30);
      };

      const landPositions: number[] = [];
      const landColors: number[] = [];
      const oceanPositions: number[] = [];

      const totalDots = 30000;
      for (let i = 0; i < totalDots; i++) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / totalDots);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);

        const lat = 90 - (phi * 180) / Math.PI;
        const lng = (theta * 180) / Math.PI;
        const normLng = ((lng % 360) + 360) % 360 - 180;

        if (isLand(lat, normLng)) {
          landPositions.push(x, y, z);
          const b = 0.8 + Math.random() * 0.2;
          landColors.push(0.03 * b, 0.7 * b, 0.9 * b);
        } else {
          oceanPositions.push(x, y, z);
        }
      }

      // Land points
      const landGeo = new THREE.BufferGeometry();
      landGeo.setAttribute("position", new THREE.Float32BufferAttribute(landPositions, 3));
      landGeo.setAttribute("color", new THREE.Float32BufferAttribute(landColors, 3));
      globeGroup.add(
        new THREE.Points(
          landGeo,
          new THREE.PointsMaterial({
            size: 0.016,
            vertexColors: true,
            transparent: true,
            opacity: 1.0,
            sizeAttenuation: true,
          })
        )
      );

      // Ocean points
      const oceanGeo = new THREE.BufferGeometry();
      oceanGeo.setAttribute("position", new THREE.Float32BufferAttribute(oceanPositions, 3));
      globeGroup.add(
        new THREE.Points(
          oceanGeo,
          new THREE.PointsMaterial({
            size: 0.006,
            color: new THREE.Color("#0891B2"),
            transparent: true,
            opacity: 0.08,
            sizeAttenuation: true,
          })
        )
      );
    };

    // Fallback: show globe outline even before texture loads
    // Atmosphere glow layers
    const glowLayers = [
      { radius: 1.04, opacity: 0.08, color: "#0891B2" },
      { radius: 1.1, opacity: 0.05, color: "#06B6D4" },
      { radius: 1.2, opacity: 0.03, color: "#0891B2" },
      { radius: 1.35, opacity: 0.015, color: "#0E7490" },
    ];
    for (const g of glowLayers) {
      const geo = new THREE.SphereGeometry(g.radius, 64, 64);
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(g.color),
        transparent: true,
        opacity: g.opacity,
        side: THREE.BackSide,
      });
      globeGroup.add(new THREE.Mesh(geo, mat));
    }

    // Connection arcs
    const arcs: [number, number, number, number][] = [
      [37, 127, 37, -122],
      [51, 0, 40, -74],
      [1, 104, -33, 151],
      [25, 55, 19, 73],
      [35, 139, 34, -118],
    ];
    for (const [lat1, lng1, lat2, lng2] of arcs) {
      const toVec = (lat: number, lng: number) => {
        const p = ((90 - lat) * Math.PI) / 180;
        const t = ((lng + 180) * Math.PI) / 180;
        return new THREE.Vector3(
          Math.sin(p) * Math.cos(t),
          Math.cos(p),
          -Math.sin(p) * Math.sin(t)
        );
      };
      const s = toVec(lat1, lng1);
      const e = toVec(lat2, lng2);
      const d = s.distanceTo(e);
      const m = s.clone().add(e).multiplyScalar(0.5).normalize().multiplyScalar(1 + d * 0.25);
      const curve = new THREE.QuadraticBezierCurve3(s, m, e);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
      globeGroup.add(
        new THREE.Line(
          arcGeo,
          new THREE.LineBasicMaterial({
            color: new THREE.Color("#06B6D4"),
            transparent: true,
            opacity: 0.3,
          })
        )
      );
    }

    globeGroup.rotation.x = 0.3;

    let animationId: number;
    const animate = () => {
      globeGroup.rotation.y += 0.002;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}
