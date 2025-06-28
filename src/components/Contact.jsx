import { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2>Contáctanos</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="contact-item">
              <h4>Teléfono</h4>
              <p>+57 (301) 569-6300</p>
            </div>
            <div className="contact-item">
              <h4>Email</h4>
              <p>servindustrialesgb@gmail.com</p>
            </div>
            <div className="contact-item">
              <h4>Dirección</h4>
              <p>
                Calle 39 #46-225
                <br />
                Barranquilla, Colombia
              </p>
            </div>
            <div className="contact-item">
              <h4>Horarios</h4>
              <p>
                Lunes a Viernes: 7:00 AM - 5:00 PM
                <br />
                Sábados: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Servicio de interés</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar servicio</option>
                <option value="soldadura">Soldadura Industrial</option>
                <option value="mecanizado">Mecanizado CNC</option>
                <option value="fabricacion">Fabricación Metálica</option>
                <option value="mantenimiento">Mantenimiento Industrial</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
