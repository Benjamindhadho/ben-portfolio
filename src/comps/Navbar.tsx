import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SocialLinks from './SocialLinks'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${hash}`
      return
    }
    const element = document.querySelector(hash)
    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Ben.
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation links — desktop & mobile drawer */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a
            href="#projects"
            className="navbar-link"
            onClick={(e) => handleHashLink(e, '#projects')}
          >
            Projects
          </a>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <a
            href="#contact"
            className="navbar-link"
            onClick={(e) => handleHashLink(e, '#contact')}
          >
            Contact
          </a>

          {/* Social icons inside mobile drawer */}
          <div className="navbar-mobile-social">
            <SocialLinks size="md" />
          </div>
        </div>

        {/* Social icons — desktop bar */}
        <div className="navbar-social">
          <SocialLinks size="sm" />
        </div>
      </div>
    </nav>
  )
}