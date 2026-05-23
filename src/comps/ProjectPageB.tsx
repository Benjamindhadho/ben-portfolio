import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projectsData'
import CaseSection from '../comps/CaseSection'
import ProjectCarousel from '../comps/ProjectCarousel'
import './ProjectPageB.css'

export default function ProjectPageB) {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="csB">
        <div className="csB-bg" aria-hidden="true">
          <div className="csB-dots" />
          <div className="csB-ring1" />
        </div>
        <div className="csB-inner">
          <Link to="/" className="csB-back">Back home</Link>
          <div style={{ padding: '4rem 2rem' }}>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', letterSpacing: '.02em' }}>
              Project not found.
            </h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="csB">
      {/* Persistent BG geometry */}
      <div className="csB-bg" aria-hidden="true">
        <div className="csB-dots" />
        <div className="csB-ring1" />
        <div className="csB-ring2" />
        <div className="csB-square" />
        <div className="csB-diag" />
      </div>

      <div className="csB-inner">
        <Link to="/" className="csB-back">← Back home</Link>

        {/* ── Hero ── */}
        <header className="csB-hero">
          <div className="csB-eyebrow-row">
            <span className="csB-eyebrow">
              {String(project.id).padStart(2, '0')} / Case Study / {project.year}
            </span>
            <div className="csB-rule" aria-hidden="true" />
          </div>

          <h1>{project.title}</h1>

          <div className="csB-hero-body">
            <p className="csB-intro">{project.description}</p>
            <div className="csB-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ── Carousel ── */}
        <div className="csB-carousel-wrap">
          <ProjectCarousel
            slug={project.slug}
            title={project.title}
            images={project.images}
          />
        </div>

        {/* ── Stat strip ── */}
        <section className="csB-stats" aria-label="Project metrics">
          {project.metrics.map((metric, index) => (
            <div className="csB-stat" key={metric.value}>
              <span className="csB-stat-idx" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="csB-stat-value">{metric.value}</span>
              <p className="csB-stat-label">{metric.label}</p>
            </div>
          ))}
        </section>

        {/* ── Overview — asymmetric magazine grid ── */}
        <section className="csB-overview" aria-label="Project overview">
          <article className="csB-ov-card large">
            <span className="csB-cn">01 / Overview</span>
            <h2>About this project</h2>
            <p>{project.overview}</p>
          </article>

          <article className="csB-ov-card">
            <span className="csB-cn">02 / Role</span>
            <h2>My role</h2>
            <p>{project.role}</p>
          </article>

          <article className="csB-ov-card">
            <span className="csB-cn">03 / Stack</span>
            <h2>Tech used</h2>
            <ul className="csB-stack-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        {/* ── Case sections — rendered via CaseSection component ── */}
        <div className="csB-sections">
          {project.caseSections.map((section, i) => (
            <div className="csB-section" key={section.title}>
              {/* Label column */}
              <div className="csB-sec-label-col">
                <span className="csB-sec-eyebrow">{section.eyebrow}</span>
                <span className="csB-sec-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content column */}
              <div>
                <h2 className="csB-sec-title">{section.title}</h2>
                {section.body && (
                  <p className="csB-sec-body">{section.body}</p>
                )}
                {section.steps && section.steps.length > 0 && (
                  <ul className="csB-sec-steps">
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}