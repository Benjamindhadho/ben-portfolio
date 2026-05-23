import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projectsData'
import CaseSection from '../comps/CaseSection'
import ProjectCarousel from '../comps/ProjectCarousel'
import './ProjectPageA.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="csA">
        <div className="csA-bg" aria-hidden="true">
          <div className="csA-dots" />
          <div className="csA-ring1" />
          <div className="csA-ring2" />
        </div>
        <div className="csA-inner">
          <Link to="/" className="csA-back">Back home</Link>
          <h1 style={{ fontFamily: 'Syne, sans-serif', marginTop: '4rem' }}>Project not found.</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="csA">
      {/* Persistent background geometry */}
      <div className="csA-bg" aria-hidden="true">
        <div className="csA-dots" />
        <div className="csA-ring1" />
        <div className="csA-ring2" />
        <div className="csA-cross" />
        <div className="csA-tri" />
      </div>

      <div className="csA-inner">
        <Link to="/" className="csA-back">Back home</Link>

        {/* ── Hero ── */}
        <section className="csA-hero">
          <p className="csA-eyebrow">
            {String(project.id).padStart(2, '0')} / Case Study / {project.year}
          </p>
          <h1>{project.title}</h1>
          <p className="csA-intro">{project.description}</p>
          <div className="csA-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        {/* ── Carousel ── */}
        <div className="csA-carousel">
          <ProjectCarousel
            slug={project.slug}
            title={project.title}
            images={project.images}
          />
        </div>

        {/* ── Metrics ── */}
        <section className="csA-metrics" aria-label="Project metrics">
          {project.metrics.map((metric, index) => (
            <div className="csA-metric-item" key={metric.value}>
              <span className="csA-metric-num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="csA-metric-val">{metric.value}</span>
              <p className="csA-metric-label">{metric.label}</p>
            </div>
          ))}
        </section>

        {/* ── Overview grid ── */}
        <section className="csA-grid" aria-label="Project overview">
          <article className="csA-card large">
            <span className="csA-num">01</span>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </article>
          <article className="csA-card">
            <span className="csA-num">02</span>
            <h2>Role</h2>
            <p>{project.role}</p>
          </article>
          <article className="csA-card">
            <span className="csA-num">03</span>
            <h2>Stack</h2>
            <ul className="csA-stack">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        {/* ── Case sections ── */}
        {project.caseSections.map((section) => (
          <CaseSection
            key={section.title}
            eyebrow={section.eyebrow}
            title={section.title}
            body={section.body}
            steps={section.steps}
          />
        ))}
      </div>
    </main>
  )
}