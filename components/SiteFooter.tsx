import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              DARIO<span>.DEV</span>
            </div>
            <p>Portfolio web developera iz Subotice.</p>
          </div>

          <div className="footer-links">
            <h4>Stranice</h4>
            <ul>
              <li>
                <Link href="/">Početna</Link>
              </li>
              <li>
                <Link href="/o-meni">O meni</Link>
              </li>
              <li>
                <Link href="/projekti">Projekti</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Kontakt</h4>
            <p>
              <i className="fas fa-envelope" /> buljovcicdario@gmail.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt" /> Subotica, Srbija
            </p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Dario Buljovčić. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
