import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projectsData'
import CaseSection from '../comps/CaseSection'
import ProjectImageCarousel from '../comps/carousel/ProjectImageCarousel'
import '@/comps/ProjectPage.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="case-study">
        <Link to="/" className="case-back">← Back home</Link>
        <h1>Project not found.</h1>
      </main>
    )
  }

  // Sample image data - replace with your actual images
  const projectImages = [
    {
      src: `/projects/${project.slug}-cover.jpg`,
      alt: `${project.title} - Main view`,
      caption: 'Main dashboard view'
    },
    {
      src: `/projects/${project.slug}-2.jpg`,
      alt: `${project.title} - Mobile view`,
      caption: 'Responsive mobile experience'
    },
    {
      src: `/projects/${project.slug}-3.jpg`,
      alt: `${project.title} - Features`,
      caption: 'Key features and functionality'
    }
  ]

  return (
    <main className="case-study">
      <Link to="/" className="case-back">← Back home</Link>

      {/* ── Hero ── */}
      <section className="case-hero">
        <p className="case-eyebrow">
          {project.id} / Case Study / {project.year}
        </p>

        <h1>{project.title}</h1>

        <p className="case-intro">{project.description}</p>

        <div className="case-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      {/* ── Image Carousel ── */}
      <ProjectImageCarousel 
        images={projectImages}
        projectTitle={project.title}
      />

      {/* ── Metrics ── */}
      <section className="case-metrics">
        {project.metrics.map((metric, index) => (
          <article key={metric.value}>
            <span className="case-num">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2>{metric.value}</h2>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      {/* ── Overview Grid ── */}
      <section className="case-grid">
        <article className="case-card large">
          <span className="case-num">01</span>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </article>

        <article className="case-card">
          <span className="case-num">02</span>
          <h2>Role</h2>
          <p>{project.role}</p>
        </article>

        <article className="case-card">
          <span className="case-num">03</span>
          <h2>Stack</h2>
          <ul className="case-stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      {/* ── Dynamic Case Sections ── */}
      {project.caseSections.map((section) => (
        <CaseSection
          key={section.title}
          eyebrow={section.eyebrow}
          title={section.title}
          body={section.body}
          steps={section.steps}
        />
      ))}
    </main>
  )
}