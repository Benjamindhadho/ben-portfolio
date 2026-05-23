import { Link } from 'react-router-dom'
import { projects } from '../data/projectsData'
import './ProjectsA.css'

export default function ProjectsA() {
  return (
    <section className="prjA" id="projects" aria-label="Projects">

      {/* HighlightsB-style background */}
      <div className="prjA-shapes" aria-hidden="true">
        <div className="prjA-dots" />
        <div className="prjA-ring1" />
        <div className="prjA-ring2" />
        <div className="prjA-tri" />
      </div>

      <div className="prjA-inner">
        {/* Header */}
        <div className="prjA-header">
          <p className="prjA-eyebrow">[ Selected Work ]</p>
          <h2 className="prjA-title">Projects</h2>
        </div>

        {/* List */}
        <div className="prjA-list" role="list">
          {projects.map((project) => (
            <Link
              key={project.id}
              className={`prjA-row${project.featured ? ' featured' : ''}`}
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.title}`}
              role="listitem"
            >
              {/* Number */}
              <span className="prjA-num">{project.id}</span>

              {/* Mid — title + tags */}
              <div className="prjA-mid">
                <h3 className="prjA-name">{project.title}</h3>
                <ul className="prjA-tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              {/* Right — year, badge, link */}
              <div className="prjA-right">
                <span className="prjA-year">{project.year}</span>
                {project.featured && (
                  <span className="prjA-badge">Featured</span>
                )}
                <span className="prjA-link">View ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}