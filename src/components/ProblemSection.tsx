"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base-alt to-base" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`reveal-left ${isVisible ? "visible" : ""} flex items-center gap-3 mb-6`}>
          <div className="w-8 h-px bg-gold" />
          <span className="text-xs font-mono text-gold tracking-widest uppercase">Why We Exist</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className={`reveal ${isVisible ? "visible" : ""} delay-100 text-2xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 text-3d`}>
              우리가 해결하는<br />
              <span className="text-gradient-gold text-3d-gold">신용의 역설.</span>
            </h2>
            <p className={`reveal ${isVisible ? "visible" : ""} delay-200 text-text-secondary text-sm md:text-lg leading-relaxed mb-6 md:mb-8`}>
              신용을 쌓으려면 이력이 필요하고, 이력을 쌓으려면 신용이 필요합니다.
              이 순환적 구조는 전 세계 수백만 명의 학생, 이주민, 프리랜서를 금융 시스템 밖에 가둡니다.
            </p>
            <p className={`reveal ${isVisible ? "visible" : ""} delay-300 text-text-muted text-xs md:text-base leading-relaxed`}>
              XENONIX는 이 문제를 해결하기 위해 설립되었습니다.
              대안 데이터와 행동 기반 AI를 활용하여, 누구에게나 열린 새로운 금융 정체성의 길을 만들어갑니다.
            </p>
          </div>

          <div className={`reveal-scale ${isVisible ? "visible" : ""} delay-300 relative`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-gold-border" />
              <div className="absolute inset-4 rounded-full border border-dashed border-cyan/20 animate-spin-slow" />
              <div className="absolute inset-12 rounded-full border border-dashed border-gold/15 animate-spin-slow-reverse" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold-bg border border-gold-border flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="font-mono text-xs text-text-muted">CREDIT PARADOX</div>
                  <div className="text-sm text-text-secondary mt-2 font-medium">이력 없음 = 신용 없음</div>
                  <div className="text-sm text-text-secondary">신용 없음 = 이력 없음</div>
                </div>
              </div>

              {[
                { text: "Students", angle: 30, color: "cyan" },
                { text: "Expats", angle: 150, color: "gold" },
                { text: "Freelancers", angle: 270, color: "cyan" },
              ].map((item) => {
                const rad = (item.angle * Math.PI) / 180;
                const x = 50 + 42 * Math.cos(rad);
                const y = 50 + 42 * Math.sin(rad);
                return (
                  <div key={item.text} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-mono shadow-sm ${
                      item.color === "cyan" ? "bg-cyan-bg border border-cyan-border text-cyan" : "bg-gold-bg border border-gold-border text-gold"
                    }`}>
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
