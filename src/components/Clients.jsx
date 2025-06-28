import '../styles/Clients.css'

const Clients = () => {
  const featuredClients = [
    { name: 'Super Tiendas Olímpicas', category: 'Retail' },
    { name: 'Tecnoglass', category: 'Industrial' },
    { name: 'Universidad del Norte', category: 'Educación' },
    { name: 'Metro de Barranquilla', category: 'Transporte' },
    { name: 'Postobón', category: 'Bebidas' },
    { name: 'Procaps', category: 'Farmacéutica' }
  ]

  const otherClients = [
    'Cajacopi', 'Colchones Spring', 'Fundación Universitaria María Cano',
    'Fundación Tecnológica Antonio Arévalo', 'Fundación ITSA', 'Terminal de Pasajeros',
    'Friogan', 'Industrias ESTRA', 'Propilco', 'Plastilene', 'Sanofi',
    'Zona Franca La Cayena', 'Zona Franca del Caribe', 'Carvajal Empaques',
    'Casa Editorial El Tiempo', 'Adidas', 'Dexter', 'Mineros S.A', 'C.I. Excelsa',
    'Refisal', 'Corporación Minuto de Dios UNIMINUTO', 'Servientrega',
    'Comfamiliar del Atlántico', 'Fundación CERES', 'Universidad Pontificia Bolivariana',
    'Universidad de San Buenaventura', 'Fundación Instituto Tecnológico Comfenalco'
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
          Más de 30 empresas e instituciones confían en nosotros para sus proyectos industriales
        </p>
        
        <div className="featured-clients">
          <h3>Clientes Destacados</h3>
          <div className="featured-grid">
            {featuredClients.map((client, index) => (
              <div key={index} className="featured-client">
                <div className="client-logo">
                  <span>{client.name.charAt(0)}</span>
                </div>
                <div className="client-info">
                  <h4>{client.name}</h4>
                  <span className="client-category">{client.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="other-clients">
          <h3>Otros Clientes</h3>
          <div className="clients-list">
            {otherClients.map((client, index) => (
              <span key={index} className="client-tag">{client}</span>
            ))}
          </div>
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