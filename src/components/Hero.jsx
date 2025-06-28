import '../styles/Hero.css'
import operadorImg from '../assets/operador-industrial.avif'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Servicios Industriales GB</h1>
          <h2>Más de 20 años de experiencia industrial</h2>
          <p>
            Nos dedicamos a la fabricación, comercialización, instalación y
            mantenimiento de equipos de metal mecánica. Especialistas en
            soluciones industriales ofreciendo la más alta calidad.
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary">
              Ver Servicios
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={operadorImg}
            alt="Operador profesional trabajando con máquinas de corte láser industrial"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
