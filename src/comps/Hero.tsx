import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Fullstack Developer</p>
        <h1>
          Simple, <em>polished</em> web experiences for real projects.
        </h1>
        <p className="intro">
          I build responsive websites and interfaces with clean code, clear
          structure, and practical design decisions.
        </p>
        <div className="actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button secondary" href="mailto:dhadhobenjamin@gmail.com">
            Get in Touch ↗
          </a>
        </div>
      </div>
    </section>
  )
}