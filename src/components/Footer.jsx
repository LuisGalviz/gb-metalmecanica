import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Servicios Industriales GB</h3>
            <p>
              Con más de 20 años de experiencia nos dedicamos a la fabricación,
              comercialización, instalación y mantenimiento de equipos de metal
              mecánica.
            </p>
          </div>
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li>Diseño y Desarrollo</li>
              <li>Fabricación y Corte Láser</li>
              <li>Soldadura y Ensamblaje</li>
              <li>Instalación y Mantenimiento</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>+57 (301) 569-6300</li>
              <li>servindustrialesgb@gmail.com</li>
              <li>Calle 39 #46-225, Barranquilla</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 Servicios Industriales GB. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
