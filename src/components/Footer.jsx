import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { scrollToAnchor } from '../utils/anchorUtils';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (event, path, anchor) => {
    event.preventDefault();
    
    if (location.pathname === path) {
      // Same page, just scroll
      scrollToAnchor(anchor);
    } else {
      // Different page, navigate then scroll
      navigate(`${path}#${anchor}`);
    }
  };

  const services = [
    { name: 'Audit Web', path: '/services', anchor: 'audit-web' },
    { name: 'Scan Active Directory', path: '/services', anchor: 'scan-ad' },
    { name: 'Tests de Fraude', path: '/services', anchor: 'tests-fraude' },
    { name: 'Phishing Simulé', path: '/services', anchor: 'phishing' },
    { name: 'Suivi Sécurité', path: '/services', anchor: 'suivi' },
    { name: 'Formation', path: '/services', anchor: 'formation' }
  ];

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Méthodologie', path: '/methodologie' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <Shield className="footer-logo-icon" />
                <div className="footer-logo-text">
                  <span className="footer-logo-main">CyberSec Expert</span>
                  <span className="footer-logo-tagline">Votre sécurité, notre expertise</span>
                </div>
              </div>
              <p className="footer-description">
                Spécialiste en cybersécurité, je vous accompagne dans la protection de vos systèmes 
                d'information et la formation de vos équipes. Une approche personnalisée pour des 
                résultats durables.
              </p>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <a href="mailto:contact@cybersec-expert.fr">contact@cybersec-expert.fr</a>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>France</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={`${service.path}#${service.anchor}`}
                      className="footer-link"
                      onClick={(e) => handleAnchorClick(e, service.path, service.anchor)}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Liens Rapides</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="footer-cta">
                <Link to="/contact" className="btn btn-outline btn-footer">
                  Demander un Audit
                  <ExternalLink className="btn-icon" />
                </Link>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="footer-section">
              <h4 className="footer-title">Restez Informé</h4>
              <p className="newsletter-description">
                Recevez nos conseils en cybersécurité et les dernières actualités du secteur.
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="newsletter-input"
                />
                <button className="btn btn-primary newsletter-btn">
                  S'abonner
                </button>
              </div>
              <div className="social-links">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} CyberSec Expert. Tous droits réservés.
            </p>
            <div className="footer-legal">
              <Link to="/mentions-legales" className="legal-link">
                Mentions Légales
              </Link>
              <Link to="/politique-confidentialite" className="legal-link">
                Politique de Confidentialité
              </Link>
              <Link to="/cgv" className="legal-link">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;