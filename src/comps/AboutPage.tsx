import { Link } from 'react-router-dom'
import './AboutPageA.css'

interface AboutCard {
  id: string
  title: string
  description: string
  large?: boolean
}

const AboutPage: React.FC = () => {
  const cards: AboutCard[] = [
    {
      id: '01',
      title: 'What I do',
      description:
        'I design and build web and mobile applications with clear structure, reusable components, and reliable backend systems.',
      large: true,
    },
    {
      id: '02',
      title: 'Frontend',
      description: 'React, React Native, TypeScript, responsive UI, and clean CSS.',
    },
    {
      id: '03',
      title: 'Backend',
      description: 'Django, REST APIs, GraphQL, authentication, databases, and admin systems.',
    },
  ]

  return (
    <main className="abtA">
      {/* Persistent BG geometry */}
      <div className="abtA-bg" aria-hidden="true">
        <div className="abtA-dots" />
        <div className="abtA-ring1" />
        <div className="abtA-ring2" />
        <div className="abtA-cross" />
        <div className="abtA-tri" />
      </div>

      <div className="abtA-inner">
        <Link to="/" className="abtA-back">Back home</Link>

        {/* ── Hero ── */}
        <section className="abtA-hero">
          <p className="abtA-eyebrow">About</p>
          <h1>I build clean, practical interfaces for real-world products.</h1>
          <p className="abtA-intro">
            I'm Benjamin, a fullstack developer focused on React, React Native,
            Django, and clean product experiences. I enjoy turning ideas into
            responsive, usable, and maintainable applications.
          </p>
        </section>

        {/* ── Cards ── */}
        <section className="abtA-grid" aria-label="Skills">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`abtA-card${card.large ? ' large' : ''}`}
            >
              <span className="abtA-num">{card.id}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </article>
          ))}
        </section>

        {/* ── Approach ── */}
        <section className="abtA-approach">
          <div className="abtA-approach-label">
            <span className="abtA-approach-eyebrow">Approach</span>
          </div>
          <div className="abtA-approach-content">
            <h2>Simple systems, polished details.</h2>
            <p>
              My approach is to keep products understandable, scalable, and easy
              to use. I focus on clear flows, readable code, good spacing, and
              practical features that solve real user needs.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutPage