"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-base-alt">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-bg border border-cyan-border flex items-center justify-center">
                <span className="text-cyan font-bold text-sm">X</span>
              </div>
              <span className="text-lg font-bold tracking-wider text-text-primary">
                XENON<span className="text-cyan">IX</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-4">
              AI 기반 대안 신용평가 인프라를 구축하여,
              금융 소외 계층에게 새로운 금융 정체성을 제공합니다.
            </p>
            <p className="text-text-muted text-xs">
              서울특별시 | contact@xenonix.io
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 tracking-wide">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "What We Do", href: "#whatwedo" },
                { label: "Team", href: "#team" },
                { label: "Vision", href: "#vision" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 tracking-wide">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "이메일 문의", href: "mailto:contact@xenonix.io" },
                { label: "파트너십", href: "#contact" },
                { label: "채용", href: "#contact" },
                { label: "투자 문의", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 XENONIX Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
