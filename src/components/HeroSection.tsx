"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan/5 blur-[100px]" />

      {/* Particle grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-base to-transparent" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-border bg-cyan-bg mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-xs font-mono text-cyan tracking-widest uppercase">AI-Driven Credit Infrastructure</span>
        </div>

        <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-3d">
          <span className="text-text-primary">Empowering Your</span><br />
          <span className="text-gradient-cyan text-3d-cyan">Financial Identity.</span>
        </h1>

        <p className="animate-fade-up-delay-2 text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          XENONIX는 AI 기반 대안 신용평가 인프라를 구축하여, 기존 금융 시스템에서 소외된 사람들에게 새로운 금융 정체성을 제공합니다.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#about" className="px-8 py-3.5 rounded-full bg-cyan text-white font-semibold text-sm tracking-wide hover:bg-cyan-light hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 card-elevated">
            About Us &nbsp;&rarr;
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full border border-border text-text-secondary font-semibold text-sm tracking-wide hover:border-cyan hover:text-cyan transition-all duration-300 card-elevated">
            Contact Us &nbsp;&rarr;
          </a>
        </div>

        <div className="animate-fade-in-delay-6 mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
          {[
            { value: "2026", label: "Founded" },
            { value: "Seoul", label: "Headquarters" },
            { value: "Fintech", label: "Industry" },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card rounded-xl p-3 md:p-4 card-elevated">
              <div className="text-base md:text-2xl font-bold font-mono text-cyan text-3d-cyan break-words">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in-delay-12 absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce-scroll w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-cyan/60" />
        </div>
      </div>
    </section>
  );
}
