import "./footer.css"

export const Footer = () => {
  return(
    <footer className="footer__container">
      <div className="footer__social">
        <a href="/">
          <img src="/images/facebook.svg" alt="facebook-icon" />
        </a>
        <a href="/">
          <img src="/images/twitter.svg" alt="facebook-icon" />
        </a>
        <a href="/">
          <img src="/images/instagram.svg" alt="facebook-icon" />
        </a>
      </div>
      <img className="footer__logo" src="/images/logo.svg" alt="app-logo" />
      <span className="footer__dev">Desarrollado por Walter Romero</span>
    </footer>
  )
}