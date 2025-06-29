import '../styles/Clients.css'
import olimpicaLogo from '../assets/clients/olimpica.webp'
import cajacapiLogo from '../assets/clients/Cajacopi-logo.webp'
import buenaVistaLogo from '../assets/clients/buena-vista-logo.webp'
import combarranquillaLogo from '../assets/clients/combarranquilla-logo.webp'
import hotelBqLogo from '../assets/clients/hotel-bq-plaza-logo.webp'
import uacLogo from '../assets/clients/uac_logo.webp'

const Clients = () => {
  const clients = [
    { logo: olimpicaLogo, alt: 'Olímpica' },
    { logo: cajacapiLogo, alt: 'Cajacopi' },
    { logo: buenaVistaLogo, alt: 'Buena Vista' },
    { logo: combarranquillaLogo, alt: 'Combarranquilla' },
    { logo: hotelBqLogo, alt: 'Hotel BQ Plaza' },
    { logo: uacLogo, alt: 'UAC' }
  ]

  const projects = [
    {
      name: 'Muelle 1888',
      description: 'Proyecto de infraestructura portuaria',
      status: 'Completado'
    },
    {
      name: 'Fiscalía Popayán',
      description: 'Instalaciones para entidad gubernamental',
      status: 'Completado'
    },
    {
      name: 'Bodega Triana',
      description: 'Estructura industrial y logística',
      status: 'Completado'
    }
  ]

  return (
    <section id="clientes" className="clients">
      <div className="container">
        <h2>Nuestros Clientes</h2>
        <p className="clients-intro">
          Empresas e instituciones que confían en nuestros servicios
        </p>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img 
                src={client.logo} 
                alt={client.alt}
                className="client-logo"
              />
            </div>
          ))}
        </div>

        <div className="projects-section">
          <h3>Proyectos Destacados</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h4>{project.name}</h4>
                  <span className="project-status">{project.status}</span>
                </div>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients