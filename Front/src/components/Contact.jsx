import { useState } from 'react';
import { contactInfo } from '../data/content';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-title">
              SEND US A <span className="accent">MESSAGE</span>
            </h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">FIRST NAME</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">LAST NAME</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">PHONE</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2 className="contact-title">
              CONTACT <span className="accent">INFORMATION</span>
            </h2>
            
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>VISIT US</h3>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>CALL US</h3>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>EMAIL US</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="opening-hours">
              <h3 className="hours-title">OPENING HOURS</h3>
              <div className="hours-list">
                {contactInfo.hours.map((hour, index) => (
                  <div key={index} className="hours-item">
                    <span className="hours-day">{hour.day}</span>
                    <span className="hours-time">{hour.time}</span>
                  </div>
                ))}
              </div>
              <p className="hours-note">{contactInfo.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
