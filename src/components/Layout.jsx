import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <img className="logo" src="/images/logo.svg" alt="logo Camp4life" width="100" />
        </Link>

        <nav className="menu">
          <div className="menu__item">
            <Link className="menu__link" to="/">Naše cesty</Link>
            <div className="menu__dropdown">
              <button className="dropdown__button">
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown__content">
                <Link className="dropdown__link" to="/roadtrips/2019">Roadtrip 2019</Link>
                <Link className="dropdown__link" to="/roadtrips/2021">Roadtrip 2021</Link>
                <Link className="dropdown__link" to="/roadtrips/2022">Roadtrip 2022</Link>
                <span className="dropdown__link" style={{color: 'silver', cursor: 'default'}}>Roadtrip 2023</span>
                <span className="dropdown__link" style={{color: 'silver', cursor: 'default'}}>Roadtrip 2024</span>
                <Link className="dropdown__link" to="/roadtrips/2025">Roadtrip 2025</Link>
              </div>
            </div>
          </div>
          <Link className="menu__link" to="/cestovani">Cestování ve Francii</Link>
          <Link className="menu__link" to="/napisnam">Napiš nám</Link>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer__text">&copy;2025, Svoboda! aneb svoje h*vn* si vezeme s sebou</p>
      </footer>
    </div>
  )
}
