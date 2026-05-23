import './HighlightsB.css'

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

export default function HighlightsB() {
  return (
    <section className="hlB" id="work">
      {/* Background shapes */}
      <div className="hlB-shapes" aria-hidden="true">
        <div className="hlB-dots" />
        <div className="hlB-ring1" />
        <div className="hlB-ring2" />
        <div className="hlB-tri1" />
        <div className="hlB-tri2" />
      </div>

      <div className="hlB-inner">
        <div className="hlB-header">
          <p className="hlB-label">[ Services ]</p>
          <h2 className="hlB-title">What I build</h2>
        </div>

        <div className="hlB-grid">
          {items.map(({ num, title, desc }) => (
            <article className="hlB-card" key={num}>
              <div className="hlB-num-wrap">
                <span className="hlB-num">{num}</span>
              </div>
              <h3 className="hlB-card-title">{title}</h3>
              <p className="hlB-card-desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}