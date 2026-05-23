import { Link } from 'react-router-dom'
import { projects } from '../data/projectsData'
import '@/comps/Projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-label="Projects">
      <div className="projects-header">
        <p className="projects-eyebrow">Selected Work</p>
        <h2 className="projects-title">Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card${project.featured ? ' featured' : ''}`}
          >
            <div className="project-meta">
              <span className="project-num">{project.id}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <div className="project-body">
              <div className="project-top">
                <h3 className="project-title">{project.title}</h3>
                {project.featured && (
                  <span className="project-badge">Featured</span>
                )}
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-footer">
                <ul className="project-tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <Link
                  className="project-link"
                  to={`/projects/${project.slug}`}
                  aria-label={`View ${project.title}`}
                >
                  View ↗
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}