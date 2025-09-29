import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, TrendingUp, ArrowRight, Settings } from 'lucide-react';
import './Methodology.css';

const Methodology = () => {
  return (
    <div className="methodology-page">
      {/* Hero Section */}
      <section className="methodology-hero section-fullwidth">
        <div className="container-narrow">
          <h1 className="methodology-hero-title">Notre Méthodologie</h1>
          <p className="methodology-hero-description">
            Une approche structurée en 3 étapes pour des résultats concrets et durables dans la sécurisation de votre système d'information
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <h2>Notre Processus</h2>
            <p>Une méthode éprouvée pour garantir votre sécurité</p>
          </div>
          <div className="text-center">
            <Settings size={64} style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Processus détaillé en cours de finalisation...</p>
            <Link to="/contact" className="btn btn-primary">
              Découvrir notre approche <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;