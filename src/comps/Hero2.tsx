import './Hero2.css'

export default function Hero2() {
  return (
    <section className="hv2" id="home">

      {/* Geometric background shapes */}
      <div className="hv2-geo" aria-hidden="true">
        <div className="hv2-circle hv2-circle--lg" />
        <div className="hv2-circle hv2-circle--sm" />
        <div className="hv2-stripe hv2-stripe--1" />
        <div className="hv2-stripe hv2-stripe--2" />
      </div>

      {/* Nav-level label bar */}
      <div className="hv2-bar">
        <span className="hv2-bar-label">BDhado.dev</span>
        <span className="hv2-bar-label">Fullstack Developer</span>
        <span className="hv2-bar-label">2025 ©</span>
      </div>

      {/* Main hero body */}
      <div className="hv2-body">

        <div className="hv2-left">
          <p className="hv2-tag">[ FSD ]</p>
          <h1 className="hv2-headline">
            <span className="hv2-word">Simple.</span>
            <span className="hv2-word hv2-word--accent">Polished.</span>
            <span className="hv2-word hv2-word--outline">Real.</span>
          </h1>
        </div>

        <div className="hv2-right">
          <div className="hv2-card">
            <div className="hv2-card-inner">
              <p className="hv2-intro">
                I build responsive websites and interfaces with clean code,
                clear structure, and practical design decisions.
              </p>
              <div className="hv2-actions">
                <a className="hv2-btn hv2-btn--solid" href="#projects">
                  <span>View Projects</span>
                  <span className="hv2-btn-arrow">→</span>
                </a>
                <a className="hv2-btn hv2-btn--outline" href="mailto:dhadhobenjamin@gmail.com">
                  Get in Touch ↗
                </a>
              </div>
            </div>
            <div className="hv2-card-badge">
              <span>Open to</span>
              <strong>Opportunities</strong>
            </div>
          </div>

          {/* Stats row */}
          <div className="hv2-stats">
            {[
              { n: '3+', label: 'Years exp.' },
              { n: '20+', label: 'Projects' },
              { n: '∞', label: 'Commits' },
            ].map(({ n, label }) => (
              <div className="hv2-stat" key={label}>
                <span className="hv2-stat-n">{n}</span>
                <span className="hv2-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}