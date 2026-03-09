import { Link } from 'react-router-dom'
import TripCard from '../components/TripCard.jsx'

// To add a new trip card, add an object to this array.
const trips = [
  {
    year: 2019,
    title: 'Road trip 2019',
    description: 'Přes Rakousko do Alsaska, centrální Francie, Paříže a Disneylandu',
    image: 'RT2019.jpeg',
    imageAlt: 'Eiffelova věž',
    path: '/roadtrips/2019',
    published: true,
  },
  {
    year: 2021,
    title: 'Road trip 2021',
    description: 'Strasbourg, Champagne, Paříž, Normandie, skoro Bretaň a zámky na Loiře',
    image: 'Clip2Comic-Brittany-boats-low-tide.jpeg',
    imageAlt: 'Bretaň odliv',
    path: '/roadtrips/2021',
    published: true,
  },
  {
    year: 2022,
    title: 'Road trip 2022',
    description: "Pobřeží Atlantiku od duny Pyla směr sever k pevnosti Boyard a Île d'Oléron",
    image: 'Clip2Comic-macarons-brown.jpeg',
    imageAlt: 'makronky',
    path: '/roadtrips/2022',
    published: true,
  },
  {
    year: 2023,
    title: 'Road trip 2023',
    description: 'Turín, Albenga, Nice, Hyeres, Martigues, Camargue a Avignon',
    image: 'Clip2Comic-macarons-brown.jpeg',
    imageAlt: 'makronky',
    path: '/roadtrips/2023',
    published: false,
  },
  {
    year: 2024,
    title: 'Road trip 2024',
    description: "Paříž, Carnac, pobřeží Atlantiku směr jih na Île de Ré",
    image: 'Clip2Comic-macarons-brown.jpeg',
    imageAlt: 'makronky',
    path: '/roadtrips/2024',
    published: false,
  },
  {
    year: 2025,
    title: 'Road trip 2025',
    description: 'Doplňte podtitulek cesty',
    image: 'Clip2Comic-macarons-brown.jpeg',
    imageAlt: 'makronky',
    path: '/roadtrips/2025',
    published: true,
  },
]

export default function Home() {
  return (
    <>
      <h1 className="main-title">Obytňákem s rodinou do Francie i jinam</h1>

      <p>Naším cílem je sdílet s vámi inspirativní itineráře a tipy na výlety obytným automobilem. Chceme vám pomoci objevovat zajímavá místa k vidění, možnosti přenocování nebo odpočinku a také gastronomické zážitky v různých regionech.</p>

      <p>Naše první cesta byla inspirovaná velmi podrobným itinerářem, který nám kromě popisu míst poskytoval také přesné GPS souřadnice, informace o vhodných místech k přenocování nebo aktivitách. Díky tomu jsme mohli navštívit místa, která byla naprosto úžasná a pravděpodobně bychom je jinak minuli.</p>

      <p>Neméně důležité je také sdílet tipy na restaurace, bistra nebo jiné gastronomické zážitky. Hledání takových míst není vždy jednoduché, a spoléhání se jen na hodnocení na Google Maps nám někdy nepřineslo očekávané výsledky. Proto jsme se rozhodli sestavit tuto platformu, kde budeme sdílet vlastních zkušenosti a itineráře, abychom vám usnadnili plánování vaší cesty.</p>

      <p>Budeme velmi rádi, pokud i vy přispějete svými zážitky a tipy, a pomůžete tak vytvořit pestrou a inspirativní komunitu cestovatelů. Těšíme se na vaše příběhy, fotografie a doporučení! <Link className="random-ref" to="/napisnam">Napište nám!</Link></p>

      <div className="tiles">
        {trips.map((trip) => (
          <TripCard key={trip.year} {...trip} />
        ))}
      </div>
    </>
  )
}
