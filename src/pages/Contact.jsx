import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare,
  Calendar,
  Shield
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez intégrer avec un service d'email ou une API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const services = [
    'Audit d\'applications web',
    'Scan Active Directory',
    'Tests de fraude aux supports',
    'Campagnes de phishing simulées',
    'Suivi de sécurité continue',
    'Formation et sensibilisation',
    'Autre'
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero section-fullwidth">
        <div className="container-narrow">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contactez-nous</h1>
            <p className="contact-hero-description">
              Prêt à sécuriser votre entreprise ? Discutons de vos besoins en cybersécurité 
              et trouvons ensemble la solution qui vous convient.
            </p>
            <div className="hero-benefits">
              <div className="hero-benefit">
                <Shield className="benefit-icon" />
                <span>Audit gratuit disponible</span>
              </div>
              <div className="hero-benefit">
                <Clock className="benefit-icon" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="hero-benefit">
                <CheckCircle className="benefit-icon" />
                <span>Devis personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-main-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-header">
                <h2>Demander un Audit ou un Devis</h2>
                <p>
                  Remplissez ce formulaire et nous vous recontacterons rapidement 
                  pour discuter de votre projet.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Votre nom et prénom"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="votre.email@entreprise.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency" className="form-label">
                      Niveau d'urgence
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="normal">Normal (réponse sous 48h)</option>
                      <option value="urgent">Urgent (réponse sous 24h)</option>
                      <option value="emergency">Urgence (réponse immédiate)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Décrivez votre besoin *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-textarea"
                      placeholder="Décrivez votre infrastructure, vos préoccupations de sécurité, ou toute information qui nous aiderait à mieux comprendre votre besoin..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large form-submit">
                    Envoyer ma demande
                    <Send className="btn-icon" />
                  </button>
                </form>
              ) : (
                <div className="contact-success">
                  <CheckCircle className="success-icon" />
                  <h3>Merci pour votre demande !</h3>
                  <p>
                    Nous avons bien reçu votre message et vous recontacterons dans les plus brefs délais.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <h3>Informations de Contact</h3>
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <Mail className="contact-info-icon" />
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:contact@cybersec-expert.fr">
                        contact@cybersec-expert.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <Phone className="contact-info-icon" />
                    <div>
                      <strong>Téléphone</strong>
                      <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <MapPin className="contact-info-icon" />
                    <div>
                      <strong>Zone d'intervention</strong>
                      <span>France entière (distanciel/présentiel)</span>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <Clock className="contact-info-icon" />
                    <div>
                      <strong>Horaires</strong>
                      <span>Lundi - Vendredi : 9h - 18h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Réponse Rapide</h3>
                <p>
                  Besoin d'une intervention urgente ? N'hésitez pas à nous appeler 
                  directement pour une réponse immédiate.
                </p>
                <div className="urgent-contact">
                  <a href="tel:+33123456789" className="btn btn-outline">
                    <Phone className="btn-icon" />
                    Appel d'urgence
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Prendre Rendez-vous</h3>
                <p>
                  Planifiez un appel de découverte gratuit de 30 minutes pour 
                  discuter de vos besoins en cybersécurité.
                </p>
                <div className="calendar-booking">
                  <a href="#" className="btn btn-primary">
                    <Calendar className="btn-icon" />
                    Réserver un créneau
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions Fréquentes</h2>
          </div>
          <div className="contact-faq">
            <div className="faq-item">
              <div className="faq-question">
                <MessageSquare className="faq-icon" />
                <h4>Combien coûte un audit de sécurité ?</h4>
              </div>
              <p className="faq-answer">
                Nos tarifs varient selon la complexité de votre infrastructure. 
                Nous proposons un audit gratuit initial pour évaluer vos besoins.
              </p>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <Clock className="faq-icon" />
                <h4>Dans quels délais intervenez-vous ?</h4>
              </div>
              <p className="faq-answer">
                Pour les urgences, nous pouvons intervenir sous 24h. 
                Pour les projets planifiés, les délais varient de 1 à 2 semaines.
              </p>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <MapPin className="faq-icon" />
                <h4>Vous déplacez-vous dans toute la France ?</h4>
              </div>
              <p className="faq-answer">
                Oui, nous intervenons sur tout le territoire français, 
                en présentiel ou à distance selon vos préférences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;