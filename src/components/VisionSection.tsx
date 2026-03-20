"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function VisionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base-alt to-base" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan/3 blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`reveal ${isVisible ? "visible" : ""} flex items-center justify-center gap-3 mb-6`}>
          <div className="w-8 h-px bg-gold" />
          <span className="text-xs font-mono text-gold tracking-widest uppercase">Our Vision</span>
          <div className="w-8 h-px bg-gold" />
        </div>

        <h2 className={`reveal ${isVisible ? "visible" : ""} delay-100 text-3xl md:text-5xl font-bold leading-tight mb-8 text-3d`}>
          금융 포용의 경계를<br />
          <span className="text-gradient-gold text-3d-gold">확장합니다.</span>
        </h2>

        <p className={`reveal ${isVisible ? "visible" : ""} delay-200 text-text-secondary text-lg leading-relaxed mb-16 max-w-2xl mx-auto`}>
          XENONIX는 금융 정체성이 특권이 아닌 권리가 되는 세상을 만들어갑니다.
          전 세계 17억 금융 소외 인구를 글로벌 경제로 이끄는 인프라를 구축합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              title: "글로벌 확장",
              description: "한국에서 시작하여 아시아-태평양 및 신흥 시장으로 단계적 확장을 추진합니다.",
            },
            {
              icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
              title: "금융 생태계 확장",
              description: "은행, 핀테크사와 파트너십을 통해 기존 금융 생태계의 외연을 넓힙니다.",
            },
            {
              icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
              title: "모두를 위한 금융",
              description: "학생, 이민자, 긱 워커 등 금융 정체성을 가질 자격이 있는 모든 이를 위합니다.",
            },
          ].map((pillar, i) => (
            <div
              key={pillar.title}
              className={`reveal ${isVisible ? "visible" : ""} glass-card rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-500`}
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-bg border border-gold-border flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{pillar.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div
          id="contact"
          className={`reveal ${isVisible ? "visible" : ""} delay-600 bg-white rounded-3xl p-10 md:p-14 max-w-2xl mx-auto border border-border shadow-lg shadow-cyan/5`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            함께 <span className="text-gradient-cyan">성장할 파트너</span>를 찾습니다.
          </h3>
          <p className="text-text-muted text-sm mb-8">투자, 파트너십, 채용 등 어떤 문의든 환영합니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:contact@xenonix.io" className="px-8 py-3.5 rounded-full bg-cyan text-white font-semibold text-sm hover:bg-cyan-light hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300">
              contact@xenonix.io
            </a>
            <a href="#" className="px-8 py-3.5 rounded-full border border-border text-text-secondary font-semibold text-sm hover:border-gold hover:text-gold transition-all duration-300">
              회사소개서 다운로드
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
