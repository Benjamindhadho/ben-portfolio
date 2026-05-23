import './Hero1.css'

export default function Hero() {
  return (
    <section className="hv1" id="home">
      <div className="hv1-grid">

        {/* Left rail — vertical label */}
        <aside className="hv1-rail">
          <span className="hv1-rail-text">PORTFOLIO · 2025</span>
          <span className="hv1-index">001</span>
        </aside>

        {/* Main content */}
        <div className="hv1-content">
          <header className="hv1-header">
            <p className="hv1-eyebrow">
              <span className="hv1-dot" />
              Fullstack Developer
            </p>
            <h1 className="hv1-headline">
              <span className="hv1-line hv1-line--outline">Simple,</span>
              <span className="hv1-line hv1-line--filled">polished</span>
              <span className="hv1-line hv1-line--small">web experiences.</span>
            </h1>
          </header>

          <footer className="hv1-footer">
            <p className="hv1-intro">
              I build responsive websites and interfaces with clean code,
              clear structure, and practical design decisions.
            </p>
            <div className="hv1-actions">
              <a className="hv1-btn hv1-btn--primary" href="#projects">
                View Projects
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a className="hv1-btn hv1-btn--ghost" href="mailto:dhadhobenjamin@gmail.com">
                Get in Touch ↗
              </a>
            </div>
          </footer>
        </div>

        {/* Right column — availability ticker */}
        <aside className="hv1-status">
          <div className="hv1-available">
            <span className="hv1-pulse" />
            Available for work
          </div>
          <div className="hv1-scroll-hint">
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
              <rect x="1" y="1" width="10" height="16" rx="5" stroke="currentColor" strokeWidth="1.2"/>
              <circle className="hv1-scroll-dot" cx="6" cy="6" r="1.5" fill="currentColor"/>
            </svg>
            <span>Scroll</span>
          </div>
        </aside>

      </div>

      {/* Full-width ruled lines decoration */}
      <div className="hv1-rules" aria-hidden="true">
        {[...Array(6)].map((_, i) => <div key={i} className="hv1-rule" style={{ '--i': i } as React.CSSProperties} />)}
      </div>
    </section>
  )
}