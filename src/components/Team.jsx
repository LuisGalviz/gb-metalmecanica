import '../styles/Team.css'

const Team = () => {
  const teamMembers = [
    {
      name: 'Gustavo Bohorquez',
      position: 'CEO',
      description: 'Líder visionario con más de 20 años de experiencia en la industria metalmecánica.'
    },
    {
      name: 'Equipo Técnico',
      position: 'Especialistas',
      description: 'Profesionales altamente calificados en diseño, fabricación y mantenimiento industrial.'
    }
  ]

  return (
    <section id="equipo" className="team">
      <div className="container">
        <h2>Nuestro Equipo</h2>
        <p className="team-intro">
          Contamos con un equipo de profesionales altamente capacitados y comprometidos
          con la excelencia en cada proyecto.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team