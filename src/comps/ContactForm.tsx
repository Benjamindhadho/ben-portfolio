import { useState, FormEvent } from 'react'
import './ContactForm.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

interface FormFields {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (key: keyof FormFields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Replace with your actual endpoint / form service
      const res = await fetch('https://formspree.io/f/YOUR_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })

      if (res.ok) {
        setStatus('sent')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        {/* ── Left col — label + copy ── */}
        <div className="contact-meta">
          <p className="case-eyebrow">
            <span>04</span> / Contact
          </p>
          <h2>Let's work together.</h2>
          <p className="contact-desc">
            Have a project in mind or just want to say hello? Drop me a message
            and I'll get back to you within a day or two.
          </p>

          <ul className="contact-links">
            <li>
              <span className="contact-link-label">Email</span>
              <a href="mailto:dhadhobenjamin@gmail.com">dhadhobenjamin@gmail.com</a>
            </li>
            <li>
              <span className="contact-link-label">Based in</span>
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        {/* ── Right col — form ── */}
        <div className="contact-form-wrap">
          {status === 'sent' ? (
            <div className="contact-success" role="status">
              <span className="contact-success-icon" aria-hidden="true">✓</span>
              <p>Message sent — I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-row">
                <label className="contact-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={set('name')}
                    required
                    autoComplete="name"
                  />
                </label>

                <label className="contact-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={fields.email}
                    onChange={set('email')}
                    required
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={fields.message}
                  onChange={set('message')}
                  required
                />
              </label>

              {status === 'error' && (
                <p className="contact-error" role="alert">
                  Something went wrong — please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                className="button primary contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}