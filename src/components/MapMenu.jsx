// MapMenu renders the trip map + in-page navigation shown at the top of roadtrip pages.
// Props:
//   mapImage   - filename from /images/, e.g. "maptrip2021.jpg"
//   mapAlt     - alt text for the map image
//   stops      - array of { id, label } for the in-page nav links
export default function MapMenu({ mapImage, mapAlt, stops }) {
  return (
    <div className="map-menu">
      <figure className="map">
        <img className="map__img" src={`/images/${mapImage}`} alt={mapAlt} />
        <figcaption className="map__capt">Ilustrační mapka</figcaption>
      </figure>

      <nav className="menu-roadtrip">
        <ul className="menu-roadtrip__list">
          {stops.map((stop) => (
            <li key={stop.id} className="menu-roadtrip__item">
              <a href={`#${stop.id}`} className="menu-roadtrip__link">{stop.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
