import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section-fullwidth">
        <div className="container-narrow">
          <h1 className="about-hero-title">À propos de nous</h1>
          <p className="about-hero-description">
            Experts en cybersécurité depuis plus de 10 ans, nous protégeons vos systèmes 
            et formons vos équipes aux meilleures pratiques de sécurité informatique.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <h2>Notre Mission</h2>
            <p>Votre sécurité est notre priorité absolue</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-fullwidth section-dark">
        <div className="container-narrow">
          <div className="cta-content">
            <h2>Prêt à sécuriser votre entreprise ?</h2>
            <p>Contactez-nous pour une consultation gratuite et personnalisée.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Nous contacter <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;