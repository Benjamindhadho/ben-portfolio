import './HighlightsA.css'

const items = [
  {
    num: '01',
    title: 'Backend Development',
    desc: 'Clean APIs and database design for seamless data flow.',
  },
  {
    num: '02',
    title: 'React & React Native Apps',
    desc: 'Web and mobile apps with a focus on good user experience.',
  },
  {
    num: '03',
    title: 'Responsive UI',
    desc: 'Pages that work comfortably on phones, tablets, and desktops.',
  },
]

export default function HighlightsA() {
  return (
    <section className="hlA" id="work">
      {/* Background shapes */}
      <div className="hlA-shapes" aria-hidden="true">
        <div className="hlA-sq1" />
        <div className="hlA-sq2" />
        <div className="hlA-diag" />
      </div>

      <div className="hlA-inner">
        <p className="hlA-label">What I do</p>

        <div className="hlA-grid">
          {items.map(({ num, title, desc }) => (
            <article className="hlA-card" key={num}>
              <div className="hlA-diamond">
                <span className="hlA-num">{num}</span>
              </div>
              <h2 className="hlA-title">{title}</h2>
              <p className="hlA-desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}