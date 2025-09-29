import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Database, 
  Phone, 
  Mail, 
  BookOpen, 
  Eye,
  TrendingUp,
  Award,
  Clock,
  Zap
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <Globe className="service-icon" />,
      title: "Audit d'Applications Web",
      description: "Identifier et corriger les failles de vos sites et applications avant qu'elles ne soient exploitées.",
      features: ["Tests de pénétration", "Analyse de code", "Rapport détaillé"]
    },
    {
      icon: <Database className="service-icon" />,
      title: "Scan Active Directory",
      description: "Cartographie des faiblesses de votre AD et recommandations pratiques avec PingCastle.",
      features: ["Analyse complète AD", "Recommandations", "Suivi des corrections"]
    },
    {
      icon: <Phone className="service-icon" />,
      title: "Tests de Fraude",
      description: "Détecter les risques liés à l'ingénierie sociale dans vos processus internes.",
      features: ["Tests helpdesk", "Tests RH/IT", "Rapport de vulnérabilités"]
    },
    {
      icon: <Mail className="service-icon" />,
      title: "Phishing Simulé",
      description: "Tester la vigilance de vos employés et mesurer leur résistance aux attaques réelles.",
      features: ["Campagnes personnalisées", "Métriques détaillées", "Formation ciblée"]
    },
    {
      icon: <Eye className="service-icon" />,
      title: "Suivi de Sécurité",
      description: "Surveillance continue et rapports réguliers pour assurer une protection durable.",
      features: ["Monitoring 24/7", "Alertes temps réel", "Rapports mensuels"]
    },
    {
      icon: <BookOpen className="service-icon" />,
      title: "Formation",
      description: "Ateliers interactifs pour renforcer la culture cybersécurité dans votre entreprise.",
      features: ["Sessions interactives", "Contenu personnalisé", "Certification"]
    }
  ];

  const stats = [
    { icon: <Shield />, number: "100+", label: "Audits Réalisés" },
    { icon: <Target />, number: "95%", label: "Failles Détectées" },
    { icon: <Users />, number: "50+", label: "Clients Satisfaits" },
    { icon: <Award />, number: "5+", label: "Années d'Expérience" }
  ];

  const methodology = [
    {
      step: "01",
      title: "Audit",
      description: "Analyse complète de votre infrastructure et identification des vulnérabilités",
      icon: <Target />
    },
    {
      step: "02", 
      title: "Recommandations",
      description: "Plan d'action détaillé avec priorités et solutions adaptées à vos besoins",
      icon: <CheckCircle />
    },
    {
      step: "03",
      title: "Suivi",
      description: "Accompagnement dans la mise en œuvre et surveillance continue",
      icon: <TrendingUp />
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero section-fullwidth">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title animate-fadeInUp">
                Protégez vos systèmes, 
                <span className="text-gradient"> formez vos équipes</span>,
                <br />réduisez vos risques.
              </h1>
              <p className="hero-description animate-fadeInUp">
                Expert en cybersécurité, j'accompagne les PME et ETI dans la sécurisation 
                de leurs systèmes d'information. Une approche personnalisée alliant audit, 
                formation et suivi pour une protection optimale.
              </p>
              <div className="hero-features animate-fadeInUp">
                <div className="hero-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Audit gratuit de vos vulnérabilités</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Accompagnement personnalisé</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Résultats mesurables</span>
                </div>
              </div>
              <div className="hero-actions animate-fadeInUp">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Demander un Audit Gratuit
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link to="/services" className="btn btn-outline btn-large">
                  Découvrir nos Services
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card">
                <Shield className="hero-shield" />
                <div className="security-indicators">
                  <div className="indicator active">
                    <div className="indicator-dot"></div>
                    <span>Systèmes Protégés</span>
                  </div>
                  <div className="indicator">
                    <div className="indicator-dot"></div>
                    <span>Surveillance Active</span>
                  </div>
                  <div className="indicator">
                    <div className="indicator-dot"></div>
                    <span>Équipes Formées</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container-narrow">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <h2 className="section-title">Nos Services de Cybersécurité</h2>
            <p className="section-description">
              Une gamme complète de services pour protéger votre entreprise contre les menaces actuelles
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  {service.icon}
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="service-feature">
                      <CheckCircle className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">
              Voir Tous nos Services
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section section-light">
        <div className="container-narrow">
          <div className="section-header">
            <h2 className="section-title">Notre Méthodologie</h2>
            <p className="section-description">
              Une approche structurée en 3 étapes pour des résultats concrets et durables
            </p>
          </div>
          <div className="methodology-grid">
            {methodology.map((step, index) => (
              <div key={index} className="methodology-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="why-choose-us">
            <div className="why-content">
              <h2 className="section-title">Pourquoi Nous Choisir ?</h2>
              <div className="advantages">
                <div className="advantage">
                  <Zap className="advantage-icon" />
                  <div>
                    <h4>Réactivité</h4>
                    <p>Intervention rapide et solutions adaptées à vos urgences</p>
                  </div>
                </div>
                <div className="advantage">
                  <Users className="advantage-icon" />
                  <div>
                    <h4>Proximité</h4>
                    <p>Accompagnement personnalisé et suivi de proximité</p>
                  </div>
                </div>
                <div className="advantage">
                  <Shield className="advantage-icon" />
                  <div>
                    <h4>Expertise</h4>
                    <p>5+ années d'expérience et certifications reconnues</p>
                  </div>
                </div>
                <div className="advantage">
                  <Clock className="advantage-icon" />
                  <div>
                    <h4>Disponibilité</h4>
                    <p>Support continu et surveillance 24h/24 si nécessaire</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="security-dashboard">
                <div className="dashboard-header">
                  <div className="dashboard-title">Tableau de Bord Sécurité</div>
                  <div className="status-indicator safe">SÉCURISÉ</div>
                </div>
                <div className="dashboard-metrics">
                  <div className="metric">
                    <span className="metric-label">Vulnérabilités</span>
                    <span className="metric-value success">0</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Surveillance</span>
                    <span className="metric-value active">ACTIVE</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Dernière Analyse</span>
                    <span className="metric-value">Il y a 2h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-fullwidth">
        <div className="container-narrow">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à Sécuriser Votre Entreprise ?</h2>
            <p className="cta-description">
              Bénéficiez d'un audit gratuit de vos vulnérabilités et découvrez comment 
              améliorer votre posture de sécurité dès aujourd'hui.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Audit Gratuit
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/a-propos" className="btn btn-outline btn-large">
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;