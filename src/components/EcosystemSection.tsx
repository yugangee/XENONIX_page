"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";

const BASE_PATH = "/XENONIX_page";

const members = [
  {
    name: "Jimin Shin",
    role: "Co-Founder & CEO",
    company: "Deloitte RA Intern · Cheil Worldwide Data Global Marketing · HP AI Research",
    education: "B.S. Information Science, University of Michigan - Ann Arbor",
    initials: "JS",
    photo: "/Jimin shin.png",
  },
  {
    name: "Halim Jung",
    role: "Founder & CEO",
    company: "MS/PhD Student, CSE Quant Lab",
    education: "Dept. of Computer Science and Engineering, Sogang University",
    initials: "HJ",
    photo: "/halim.png",
  },
  {
    name: "Yugyeong Heo",
    role: "Co-Founder & CTO",
    company: "IT Development Intern, Seoul Economic Daily",
    education: "B.A. AI Convergence & Economics, Sungshin Women's University",
    initials: "YH",
    photo: "/yugyeong-heo.jpg",
  },
];

export default function EcosystemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base-alt to-base" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`reveal ${isVisible ? "visible" : ""} text-center mb-20`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-3d">Meet the Team</h2>
          <div className="w-8 h-0.5 bg-text-primary mx-auto" />
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {members.map((member, i) => (
            <TiltCard
              key={member.name}
              className={`reveal ${isVisible ? "visible" : ""} bg-white rounded-xl border border-border overflow-hidden card-elevated`}
            >
              {/* Photo */}
              <div className="px-10 pt-10 pb-4 flex items-end justify-center">
                {member.photo ? (
                  <img
                    src={`${BASE_PATH}${member.photo}`}
                    alt={member.name}
                    className="w-full max-w-[240px] aspect-[3/4] object-cover object-top rounded-sm grayscale"
                  />
                ) : (
                  <div className="w-full max-w-[240px] aspect-[3/4] bg-base-alt rounded-sm flex items-center justify-center">
                    <span className="text-4xl font-bold text-text-muted/30 select-none">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                {member.role && (
                  <p className="text-xs text-text-muted tracking-wide mb-1">
                    {member.role}
                  </p>
                )}
                <h3 className="text-lg font-bold text-text-primary mb-4">
                  {member.name}
                </h3>

                {(member.company || member.education) && (
                  <div className="space-y-1 text-sm text-text-secondary">
                    {member.company && <p>{member.company}</p>}
                    {member.education && <p>{member.education}</p>}
                  </div>
                )}

                {/* LinkedIn icon */}
                <div className="mt-5">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-7 h-7 rounded bg-text-primary text-white hover:bg-cyan transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Company stats */}
        <div className={`reveal ${isVisible ? "visible" : ""} delay-600 mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6`}>
          {[
            { value: "2026", label: "회사 설립" },
            { value: "1.7B+", label: "글로벌 타겟" },
            { value: "4+", label: "핵심 기술" },
            { value: "APAC", label: "확장 로드맵" },
          ].map((m) => (
            <div key={m.label} className="glass-card rounded-xl p-4 md:p-6 text-center">
              <div className="text-lg md:text-2xl font-bold font-mono text-cyan mb-1">{m.value}</div>
              <div className="text-[10px] md:text-xs text-text-muted">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
