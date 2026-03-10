import { Link } from 'react-router-dom'

// TripCard renders a single tile on the homepage.
// Props:
//   title      - e.g. "Road trip 2021"
//   description - short subtitle text
//   image      - filename from /images/, e.g. "RT2019.jpeg"
//   imageAlt   - alt text
//   path       - route path, e.g. "/roadtrips/2021"
//   published  - if false, renders a "coming soon" overlay
export default function TripCard({ title, description, image, imageAlt, path, published }) {
  if (published) {
    return (
      <Link className="ref-tile" to={path}>
        <div className="tile">
          <div className="tile-descr">
            <h3 className="tile__trip-title">{title}</h3>
            <p className="tile__trip-text">{description}</p>
          </div>
          <div className="tile__img">
            <img className="tile__act-img" src={`${import.meta.env.BASE_URL}images/${image}`} alt={imageAlt} />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <a className="ref-tile tile--coming-soon" href="#">
      <div className="tile">
        <div className="tile-descr">
          <h3 className="tile__trip-title">{title}</h3>
          <p className="tile__trip-text">{description}</p>
        </div>
        <div className="tile__img">
          <img className="tile__act-img" src={`${import.meta.env.BASE_URL}images/${image}`} alt={imageAlt} />
        </div>
      </div>
    </a>
  )
}
