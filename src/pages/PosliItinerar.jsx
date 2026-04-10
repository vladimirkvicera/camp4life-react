import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const emptyStop = () => ({
  name: '',
  highlights: '',
  description: '',
  pictures: [],
})

export default function PosliItinerar() {
  const [stops, setStops] = useState([emptyStop()])
  const [captchaToken, setCaptchaToken] = useState(null)
  const [captchaError, setCaptchaError] = useState(false)
  const recaptchaRef = useRef(null)

  function updateStop(index, field, value) {
    setStops(prev => prev.map((stop, i) => i === index ? { ...stop, [field]: value } : stop))
  }

  function handleFiles(index, files) {
    setStops(prev => prev.map((stop, i) => i === index ? { ...stop, pictures: Array.from(files) } : stop))
  }

  function addStop() {
    setStops(prev => [...prev, emptyStop()])
  }

  function removeStop(index) {
    setStops(prev => prev.filter((_, i) => i !== index))
  }

  function handleSubmit(e) {
    if (!captchaToken) {
      e.preventDefault()
      setCaptchaError(true)
    }
  }

  return (
    <form
      className="itinerary-form"
      action="https://submit-form.com/8VDdh9XbW"
      method="post"
      onSubmit={handleSubmit}
    >
      <h1 className="main-title">Pošlete nám svůj itinerář</h1>
      <p className="itinerary-form__intro">
        Podělte se s námi o svůj cestovní itinerář. Vyplňte název cesty a přidejte jednotlivé zastávky s popisem, hlavními místy a fotografiemi.
      </p>

      <div className="form-field">
        <label className="form__label" htmlFor="tripName">Název cesty:</label>
        <input
          className="form__input"
          type="text"
          id="tripName"
          name="Název cesty"
          placeholder="např. Road trip 2024 – Francie a Španělsko"
          required
        />
      </div>

      <div className="form-field">
        <label className="form__label" htmlFor="email">Váš email:</label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          placeholder="vas@email.cz"
        />
      </div>

      <h2 className="main-subtitle">Zastávky</h2>

      {stops.map((stop, index) => (
        <div key={index} className={`itinerary-stop${index % 2 === 1 ? ' itinerary-stop--color' : ''}`}>
          <div className="itinerary-stop__header">
            <h3 className="itinerary-stop__title">Zastávka {index + 1}</h3>
            {stops.length > 1 && (
              <button
                type="button"
                className="itinerary-stop__remove"
                onClick={() => removeStop(index)}
              >
                Odebrat zastávku
              </button>
            )}
          </div>

          <div className="form-field">
            <label className="form__label" htmlFor={`stop-name-${index}`}>
              1. Název zastávky:
            </label>
            <input
              className="form__input"
              type="text"
              id={`stop-name-${index}`}
              name={`Zastávka ${index + 1} – název`}
              placeholder="např. Bodamské jezero"
              required
            />
          </div>

          <div className="form-field">
            <label className="form__label" htmlFor={`stop-highlights-${index}`}>
              2. Hlavní místa trasy (oddělěné pomlčkou):
            </label>
            <textarea
              className="form__input"
              id={`stop-highlights-${index}`}
              name={`Zastávka ${index + 1} – hlavní místa`}
              rows="4"
              placeholder="Lindau - Turín - Nice - Avalon"
            />
          </div>

          <div className="form-field">
            <label className="form__label" htmlFor={`stop-pictures-${index}`}>
              3. Fotografie:
            </label>
            <input
              className="form__input form__input--file"
              type="file"
              id={`stop-pictures-${index}`}
              name={`Zastávka ${index + 1} – fotky`}
              accept="image/*"
              multiple
              onChange={e => handleFiles(index, e.target.files)}
            />
            {stop.pictures.length > 0 && (
              <p className="itinerary-form__file-count">
                Vybráno: {stop.pictures.length} {stop.pictures.length === 1 ? 'soubor' : stop.pictures.length < 5 ? 'soubory' : 'souborů'}
              </p>
            )}
          </div>

          <div className="form-field">
            <label className="form__label" htmlFor={`stop-description-${index}`}>
              4. Popis zastávky:
            </label>
            <textarea
              className="form__input"
              id={`stop-description-${index}`}
              name={`Zastávka ${index + 1} – popis`}
              rows="6"
              placeholder="Popište zastávku – co jste zažili, co doporučujete, co byste příště udělali jinak... a nezapomeňte na souřadnice zajímavích míst!"
            />
          </div>
        </div>
      ))}

      <div className="itinerary-form__captcha">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LefILEsAAAAABAtP17Qymcp_LYiw-H6umLTCmIb"
          onChange={token => { setCaptchaToken(token); setCaptchaError(false) }}
          onExpired={() => setCaptchaToken(null)}
        />
        {captchaError && (
          <p className="itinerary-form__captcha-error">Prosím potvrďte, že nejste robot.</p>
        )}
      </div>

      <div className="itinerary-form__actions">
        <button type="button" className="form__button form__button--secondary" onClick={addStop}>
          + Přidat zastávku
        </button>
        <button type="submit" className="form__button">
          Odeslat itinerář
        </button>
      </div>
    </form>
  )
}
