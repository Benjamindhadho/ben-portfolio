import { Link } from 'react-router-dom'
import '@/comps/AboutPage.css'

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
      description: 'I design and build web and mobile applications with clear structure, reusable components, and reliable backend systems.',
      large: true
    },
    {
      id: '02',
      title: 'Frontend',
      description: 'React, React Native, TypeScript, responsive UI, and clean CSS.'
    },
    {
      id: '03',
      title: 'Backend',
      description: 'Django, REST APIs, GraphQL, authentication, databases, and admin systems.'
    }
  ]

  return (
    <main className="about-page">
      <Link to="/" className="about-back">
       Back home
      </Link>

      <section className="about-hero">
        <p className="about-eyebrow">About</p>

        <h1>
          I build clean, practical interfaces for real-world products.
        </h1>

        <p className="about-intro">
          I'm Benjamin, a fullstack developer focused on React, React Native,
          Django, and clean product experiences. I enjoy turning ideas into
          responsive, usable, and maintainable applications.
        </p>
      </section>

      <section className="about-grid">
        {cards.map((card) => (
          <article 
            key={card.id}
            className={`about-card ${card.large ? 'large' : ''}`}
          >
            <span className="about-num">{card.id}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="about-section">
        <p className="about-eyebrow">Approach</p>
        <h2>Simple systems, polished details.</h2>
        <p>
          My approach is to keep products understandable, scalable, and easy to
          use. I focus on clear flows, readable code, good spacing, and practical
          features that solve real user needs.
        </p>
      </section>
    </main>
  )
}

export default AboutPage