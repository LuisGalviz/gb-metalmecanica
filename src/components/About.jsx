import '../styles/About.css'

const About = () => {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Con más de 20 años de experiencia nos dedicamos a la fabricación, 
              comercialización, instalación y mantenimiento de equipos de metal 
              mecánica especialistas en soluciones industriales ofreciendo la 
              más alta calidad siendo competitivos en diferentes industrias.
            </p>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <h3>Misión</h3>
              <p>
                Contribuir al desarrollo y rentabilidad de los negocios de 
                diferentes industrias; ofreciendo soluciones integrales, 
                adecuadas a las necesidades específicas de nuestros clientes.
              </p>
            </div>

            <div className="vision">
              <h3>Visión</h3>
              <p>
                Seremos una empresa líder, con nivel de competencia internacional, 
                elegidos por la calidad de nuestros productos y servicios. 
                Logrando con nuestros colaboradores, un proceso confiable y 
                sostenible, convirtiéndonos así, en el más grande aliado de 
                nuestros clientes para el 2026.
              </p>
            </div>
          </div>

          <div className="values">
            <h3>Nuestros Valores</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>Integridad</h4>
                <p>Actuamos con honestidad y transparencia en todas nuestras relaciones comerciales.</p>
              </div>
              <div className="value-item">
                <h4>Excelencia</h4>
                <p>Buscamos continuamente la perfección en nuestros productos y servicios.</p>
              </div>
              <div className="value-item">
                <h4>Compromiso</h4>
                <p>Nos dedicamos completamente al éxito de nuestros clientes y proyectos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About