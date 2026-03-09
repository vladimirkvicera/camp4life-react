// TripStop wraps a single stop section on a roadtrip page.
// Props:
//   id       - anchor id for the in-page nav
//   title    - stop heading
//   color    - if true, adds the alternating cream background
//   children - the stop content (images + paragraphs)
export default function TripStop({ id, title, color, children }) {
  return (
    <div className={`stop${color ? ' stop--color' : ''}`}>
      <h2 className="main-subtitle" id={id}>{title}</h2>
      {children}
    </div>
  )
}
