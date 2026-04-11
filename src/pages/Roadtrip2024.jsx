import MapMenu from '../components/MapMenu.jsx'
import TripStop from '../components/TripStop.jsx'
import CopyCoords from '../components/CopyCoords.jsx'

// Stops for the in-page nav. Add a new object here when adding a new stop below.
const stops = [
  { id: 'Zastavka1', label: 'Zastávka 1' },
]

export default function Roadtrip2024() {
  return (
    <>
      <h1 className="main-title">Road trip 2024</h1>
      <h2 className="main-subtitle">Doplňte podtitulek cesty</h2>

      <MapMenu
        mapImage="Clip2Comic-macarons-brown.jpeg"
        mapAlt="ilustrační mapa"
        stops={stops}
      />

      <TripStop id="Zastavka1" title="Zastávka 1" color={false}>
        <div className="stop__text-picture">
          <img className="stop__img stop__img--left" src={`${import.meta.env.BASE_URL}images/Clip2Comic-macarons-brown.jpeg`} alt="Zastávka 1" />
          <p>Doplňte text o první zastávce.</p>
        </div>
      </TripStop>
    </>
  )
}
