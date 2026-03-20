"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";

const areas = [
  {
    title: "대안 데이터 엔진",
    description: "통신비, 구독 서비스, 공과금 등 비금융 데이터를 분석하여 기존 신용이력 없이도 정밀한 금융 프로파일을 생성합니다.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    tag: "DATA", color: "cyan" as const, span: "md:col-span-2",
  },
  {
    title: "행동 기반 AI 스코어링",
    description: "ML 알고리즘으로 소비 패턴, 상환 행동, 금융 습관을 분석해 리스크를 정밀 예측합니다.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    tag: "AI/ML", color: "gold" as const, span: "md:col-span-1",
  },
  {
    title: "신용 성장 프로토콜",
    description: "체계적인 5단계 신용 구축 시스템으로 Thin-file 사용자를 신용 보유자로 전환합니다.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    tag: "PROTOCOL", color: "cyan" as const, span: "md:col-span-1",
  },
  {
    title: "실시간 CB 리포팅",
    description: "NICE, KCB 등 신용평가사에 자동 보고하여, 사용자의 모든 긍정적 금융 활동이 즉시 공식 신용점수에 반영됩니다.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    tag: "REPORTING", color: "gold" as const, span: "md:col-span-2",
  },
];

export default function TechnologySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="whatwedo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base-alt to-base" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`reveal-left ${isVisible ? "visible" : ""} flex items-center gap-3 mb-6`}>
          <div className="w-8 h-px bg-cyan" />
          <span className="text-xs font-mono text-cyan tracking-widest uppercase">What We Do</span>
        </div>

        <h2 className={`reveal ${isVisible ? "visible" : ""} delay-100 text-2xl md:text-5xl font-bold mb-4 text-3d`}>
          우리의 <span className="text-gradient-cyan text-3d-cyan">핵심 사업 영역.</span>
        </h2>
        <p className={`reveal ${isVisible ? "visible" : ""} delay-200 text-text-secondary text-sm md:text-lg max-w-2xl mb-10 md:mb-16`}>
          XENONIX는 4가지 핵심 기술 영역에서 차세대 신용 인프라를 구축하고 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {areas.map((area, i) => (
            <TiltCard
              key={area.title}
              className={`${area.span} reveal ${isVisible ? "visible" : ""} glass-card card-elevated rounded-2xl p-8 group relative overflow-hidden`}
            >
              <div style={{ transitionDelay: `${0.2 + i * 0.1}s` }} />
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${area.color === "cyan" ? "bg-cyan/8" : "bg-gold/8"}`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-md ${area.color === "cyan" ? "text-cyan bg-cyan-bg border border-cyan-border" : "text-gold bg-gold-bg border border-gold-border"}`}>
                    {area.tag}
                  </span>
                  <div className={`p-2.5 rounded-xl ${area.color === "cyan" ? "bg-cyan-bg text-cyan" : "bg-gold-bg text-gold"}`}>
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{area.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{area.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
