import React from 'react';
import { Link } from 'react-router-dom';

const Methodology = () => {
  return (
    <div className="methodology-page" style={{ paddingTop: '70px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Notre Méthodologie</h1>
            <p className="section-description">
              Une approche structurée en 3 étapes pour des résultats concrets et durables
            </p>
          </div>
          {/* Contenu à développer */}
          <div className="text-center">
            <p>Page en construction...</p>
            <Link to="/contact" className="btn btn-primary">
              Contactez-nous pour plus d'informations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;