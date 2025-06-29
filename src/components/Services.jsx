import '../styles/Services.css'
import corteLaserImg from '../assets/maquina-corte-laser.webp'

const Services = () => {
  const services = [
    {
      title: 'Diseño y Desarrollo',
      description: 'Diseño y desarrollo de proyectos industriales personalizados',
      features: [
        'Diseño CAD',
        'Desarrollo de proyectos',
        'Ingeniería especializada',
        'Planos técnicos',
      ],
    },
    {
      title: 'Fabricación y Corte Láser',
      description: 'Fabricación y corte con láser de alta precisión',
      features: ['Corte láser', 'Fabricación metálica', 'Alta precisión', 'Control de calidad'],
    },
    {
      title: 'Soldadura y Ensamblaje',
      description: 'Proceso de soldadura profesional y ensamblaje de estructuras',
      features: ['Soldadura especializada', 'Ensamblaje', 'Acero inoxidable', 'Aluminio'],
    },
    {
      title: 'Instalación y Mantenimiento',
      description: 'Instalación y mantenimiento preventivo, correctivo y reparación',
      features: [
        'Instalación profesional',
        'Mantenimiento preventivo',
        'Mantenimiento correctivo',
        'Reparación de equipos',
      ],
    },
  ]

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <p className="services-intro">
          Ofrecemos servicios integrales de metalmecánica con los más altos
          estándares de calidad
        </p>

        <div className="services-hero">
          <img
            src={corteLaserImg}
            alt="Máquina de corte láser industrial en funcionamiento"
            className="services-image"
          />
          <div className="services-overlay">
            <h3>Tecnología de Precisión</h3>
            <p>Equipos de última generación para resultados excepcionales</p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                className="service-btn"
                aria-label={`Más información sobre ${service.title}`}
              >
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
