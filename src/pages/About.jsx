import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page" style={{ paddingTop: '70px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">À Propos</h1>
            <p className="section-description">
              Expert en cybersécurité avec une approche personnalisée pour chaque client
            </p>
          </div>
          {/* Contenu à développer */}
          <div className="text-center">
            <p>Page en construction...</p>
            <Link to="/contact" className="btn btn-primary">
              Discutons de votre projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;