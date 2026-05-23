type CaseStep = {
  title: string
  body: string
}

interface CaseSectionProps {
  eyebrow: string
  title: string
  body?: string
  steps?: CaseStep[]
}

export default function CaseSection({
  eyebrow,
  title,
  body,
  steps,
}: CaseSectionProps) {
  return (
    <section className="case-section">
      <p className="case-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>

      {body && <p>{body}</p>}

      {steps && (
        <div className="case-process">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span className="case-num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}