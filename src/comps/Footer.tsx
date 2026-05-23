import '@/comps/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-brand">Ben.</span>
          <p className="footer-note">
            Built with React, Django, and a focus on clean UI.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ben</span>
        <a href="mailto:dhadhobenjamin@gmail.com">
          dhadhobenjamin@gmail.com
        </a>
      </div>
    </footer>
  )
}