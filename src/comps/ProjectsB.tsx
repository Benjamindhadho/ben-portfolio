import { Link } from 'react-router-dom'
import { projects } from '../data/projectsData'
import './ProjectsB.css'

export default function ProjectsB() {
  return (
    <section className="prjB" id="projects" aria-label="Projects">

      {/* HighlightsB-style background */}
      <div className="prjB-shapes" aria-hidden="true">
        <div className="prjB-dots" />
        <div className="prjB-ring1" />
        <div className="prjB-ring2" />
        <div className="prjB-cross" />
        <div className="prjB-cross2" />
        <div className="prjB-tri" />
      </div>

      <div className="prjB-inner">
        {/* Header */}
        <div className="prjB-header">
          <p className="prjB-eyebrow">[ Selected Work ]</p>
          <h2 className="prjB-heading">Projects</h2>
        </div>

        {/* Bento grid */}
        <div className="prjB-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              className={`prjB-card${project.featured ? ' featured' : ''}`}
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.title}`}
            >
              {/* Giant watermark number */}
              <span className="prjB-watermark" aria-hidden="true">
                {String(project.id).padStart(2, '0')}
              </span>

              {/* Top row — meta + badge */}
              <div className="prjB-card-top">
                <div className="prjB-meta">
                  <span className="prjB-num">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <span className="prjB-year">{project.year}</span>
                </div>
                {project.featured && (
                  <span className="prjB-badge">Featured</span>
                )}
              </div>

              {/* Body */}
              <div className="prjB-card-body">
                <h3 className="prjB-card-title">{project.title}</h3>
                <p className="prjB-desc">{project.description}</p>

                <div className="prjB-card-footer">
                  <ul className="prjB-tags" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="prjB-link">View ↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}