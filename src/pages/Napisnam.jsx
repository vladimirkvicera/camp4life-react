export default function Napisnam() {
  return (
    <form className="form" action="https://submit-form.com/8VDdh9XbW" method="post">
      <h2 className="main-subtitle main-subtitle--form">
        Zanechte nám svůj komentář nebo tip na cestu nebo zastávku či cokoli dalšího chcete.
      </h2>

      <div className="form-field">
        <label className="form__label" htmlFor="email">Váš email:</label>
        <input className="form__input" type="email" name="email" id="email" />
      </div>

      <div className="form-field">
        <label className="form__label" htmlFor="comment">Váš komentář nebo tip:</label>
        <textarea className="form__input" name="comment" id="comment" rows="10"></textarea>
      </div>

      <button className="form__button" type="submit">Odeslat</button>
    </form>
  )
}
