import { Link } from 'react-router-dom'
import './PageBanner.css'

export default function PageBanner({ label, title, description, image }) {
  return (
    <section className={`page-banner ${image ? 'page-banner--image' : ''}`}>
      <div
        className="page-banner__bg"
        aria-hidden="true"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      />
      {image && <div className="page-banner__overlay" aria-hidden="true" />}
      <div className="container page-banner__inner">
        <nav className="page-banner__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{label}</span>
        </nav>
        <span className="section-label">{label}</span>
        <h1 className="page-banner__title">{title}</h1>
        {description && <p className="page-banner__desc">{description}</p>}
      </div>
    </section>
  )
}
