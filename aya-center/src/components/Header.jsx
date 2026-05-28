import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import EnquireModal from './EnquireModal'
import './Header.css'
import logo from '../assets/LGAC-logo4.png'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/stories', label: 'Stories' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [enquireOpen, setEnquireOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (enquireOpen) return
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, enquireOpen])

  const closeMenu = () => setMenuOpen(false)

  const openEnquire = () => {
    closeMenu()
    setEnquireOpen(true)
  }

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--menu-open' : ''}`}
        style={{
          backgroundColor:
            location.pathname === "/" ? "transparent" : "#fff",
        }}>
        <div className="container header__inner">
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <span className="header__logo-icon" aria-hidden="true">
              <img src={logo} alt="Aya Center Logo" />
            </span>
            {/* <span className="header__logo-text">
              <strong>Aya</strong> Center
            </span> */}
          </Link>

          <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? 'header__link header__link--active' : 'header__link'
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn-gold header__cta"
              onClick={openEnquire}
            >
              Enquire now
            </button>
          </nav>

          <button
            type="button"
            className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <EnquireModal isOpen={enquireOpen} onClose={() => setEnquireOpen(false)} />
    </>
  )
}
