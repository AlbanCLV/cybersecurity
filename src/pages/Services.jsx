import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Database, 
  Phone, 
  Mail, 
  Eye, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  FileText,
  Shield,
  Target,
  AlertTriangle,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'audit-web',
      icon: <Globe className="service-detail-icon" />,
      title: "Audit d'Applications Web",
      subtitle: "Sécurisez vos applications avant qu'il ne soit trop tard",
      description: "Identifier et corriger les failles de vos sites et applications web avant qu'elles ne soient exploitées par des attaquants. Notre audit complet couvre les vulnérabilités OWASP Top 10 et bien plus.",
      features: [
        "Tests de pénétration manuels et automatisés",
        "Analyse de code source (SAST)",
        "Tests d'injection SQL, XSS, CSRF",
        "Audit des configurations serveur",
        "Vérification des certificats SSL/TLS",
        "Rapport détaillé avec recommandations"
      ],
      benefits: [
        "Protection contre les cyberattaques",
        "Conformité réglementaire (RGPD)",
        "Préservation de votre réputation",
        "Réduction des risques financiers"
      ],
      process: [
        "Analyse de la surface d'attaque",
        "Tests de vulnérabilités",
        "Exploitation contrôlée",
        "Documentation des failles",
        "Plan de remédiation"
      ],
      duration: "3-5 jours",
      deliverables: "Rapport exécutif + technique, plan de remédiation, support post-audit"
    },
    {
      id: 'scan-ad',
      icon: <Database className="service-detail-icon" />,
      title: "Scan Active Directory (PingCastle)",
      subtitle: "Cartographiez et sécurisez votre environnement Active Directory",
      description: "Analyse complète de votre Active Directory avec PingCastle pour identifier les faiblesses de configuration, les comptes privilégiés non sécurisés et les chemins d'attaque potentiels.",
      features: [
        "Audit automatisé avec PingCastle",
        "Analyse des relations d'approbation",
        "Détection des comptes dormants",
        "Évaluation des privilèges excessifs",
        "Cartographie des chemins d'attaque",
        "Score de risque détaillé"
      ],
      benefits: [
        "Visibilité complète sur votre AD",
        "Réduction des chemins d'attaque",
        "Amélioration de la posture sécuritaire",
        "Conformité aux bonnes pratiques"
      ],
      process: [
        "Collecte des données AD",
        "Analyse avec PingCastle",
        "Évaluation manuelle",
        "Priorisation des risques",
        "Recommandations détaillées"
      ],
      duration: "2-3 jours",
      deliverables: "Dashboard PingCastle, rapport d'analyse, guide de durcissement"
    },
    {
      id: 'tests-fraude',
      icon: <Phone className="service-detail-icon" />,
      title: "Tests de Fraude aux Supports",
      subtitle: "Évaluez la résistance de vos équipes à l'ingénierie sociale",
      description: "Tests ciblés sur vos processus internes (helpdesk, IT, RH) pour détecter les vulnérabilités humaines et organisationnelles face aux techniques d'ingénierie sociale.",
      features: [
        "Scénarios d'attaque personnalisés",
        "Tests helpdesk et support IT",
        "Tests sur les processus RH",
        "Évaluation téléphonique",
        "Tests d'accès physique",
        "Analyse des procédures"
      ],
      benefits: [
        "Identification des failles humaines",
        "Amélioration des procédures",
        "Sensibilisation des équipes",
        "Renforcement de la sécurité globale"
      ],
      process: [
        "Reconnaissance des processus",
        "Élaboration des scénarios",
        "Exécution des tests",
        "Documentation des résultats",
        "Formation corrective"
      ],
      duration: "3-7 jours",
      deliverables: "Rapport de test, recommandations procédurales, session de sensibilisation"
    },
    {
      id: 'phishing',
      icon: <Mail className="service-detail-icon" />,
      title: "Campagnes de Phishing Simulées",
      subtitle: "Mesurez et améliorez la vigilance de vos employés",
      description: "Campagnes de phishing simulées réalistes pour tester la vigilance de vos employés et mesurer leur résistance aux attaques par email. Formation intégrée pour les personnes ayant échoué.",
      features: [
        "Templates d'emails personnalisés",
        "Campagnes ciblées par département",
        "Suivi en temps réel des clics",
        "Capture de données sensibles (simulation)",
        "Formation automatique post-clic",
        "Métriques et analytics détaillées"
      ],
      benefits: [
        "Sensibilisation pratique",
        "Réduction du risque humain",
        "Culture sécurité renforcée",
        "Mesure de l'efficacité"
      ],
      process: [
        "Définition des cibles",
        "Création des campagnes",
        "Lancement progressif",
        "Suivi et analyse",
        "Formation des utilisateurs"
      ],
      duration: "1-4 semaines",
      deliverables: "Dashboard de suivi, rapport d'analyse, modules de formation"
    },
    {
      id: 'suivi',
      icon: <Eye className="service-detail-icon" />,
      title: "Suivi de Sécurité Continue",
      subtitle: "Surveillance proactive de votre infrastructure",
      description: "Service de surveillance continue de vos systèmes d'information, mails et serveurs web avec alertes en temps réel et rapports réguliers pour maintenir un niveau de sécurité optimal.",
      features: [
        "Monitoring 24/7 des vulnérabilités",
        "Surveillance des certificats SSL",
        "Détection de malwares",
        "Analyse des logs de sécurité",
        "Alertes temps réel",
        "Rapports mensuels automatisés"
      ],
      benefits: [
        "Détection précoce des menaces",
        "Réaction rapide aux incidents",
        "Visibilité continue",
        "Tranquillité d'esprit"
      ],
      process: [
        "Configuration du monitoring",
        "Mise en place des alertes",
        "Surveillance continue",
        "Analyse des événements",
        "Reporting régulier"
      ],
      duration: "Service continu",
      deliverables: "Dashboard en temps réel, alertes, rapports mensuels"
    },
    {
      id: 'formation',
      icon: <BookOpen className="service-detail-icon" />,
      title: "Sensibilisation et Formation",
      subtitle: "Transformez vos employés en première ligne de défense",
      description: "Ateliers interactifs et formations personnalisées pour renforcer la culture cybersécurité dans votre entreprise. Contenu adapté aux rôles et responsabilités de chaque équipe.",
      features: [
        "Ateliers interactifs en présentiel/distanciel",
        "Contenu personnalisé par métier",
        "Simulations d'incidents",
        "Quiz et évaluations",
        "Certification des participants",
        "Support post-formation"
      ],
      benefits: [
        "Équipes sensibilisées",
        "Réduction des erreurs humaines",
        "Culture sécurité développée",
        "Conformité réglementaire"
      ],
      process: [
        "Évaluation des besoins",
        "Création du contenu",
        "Planification des sessions",
        "Animation des formations",
        "Évaluation des acquis"
      ],
      duration: "1-3 jours",
      deliverables: "Supports de formation, certificats, guide de bonnes pratiques"
    }
  ];

  const pricingPackages = [
    {
      name: "Pack Découverte",
      price: "Sur devis",
      description: "Parfait pour une première évaluation",
      features: [
        "Audit web basique",
        "Scan Active Directory",
        "Rapport synthétique",
        "1 session de conseil"
      ],
      cta: "Demander un devis",
      popular: false
    },
    {
      name: "Pack Sécurité",
      price: "Sur devis", 
      description: "Solution complète pour PME",
      features: [
        "Audit web complet",
        "Tests de phishing",
        "Formation équipes",
        "Suivi 3 mois",
        "Support prioritaire"
      ],
      cta: "Contactez-nous",
      popular: true
    },
    {
      name: "Pack Enterprise",
      price: "Sur devis",
      description: "Pour les grandes organisations",
      features: [
        "Tous les audits inclus",
        "Suivi continu 12 mois",
        "Formation sur mesure",
        "Support 24/7",
        "Reporting exécutif"
      ],
      cta: "Discutons ensemble",
      popular: false
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">Nos Services de Cybersécurité</h1>
            <p className="services-hero-description">
              Une gamme complète de services pour protéger votre entreprise contre les menaces actuelles. 
              De l'audit à la formation, en passant par la surveillance continue, nous vous accompagnons 
              dans tous les aspects de votre sécurité informatique.
            </p>
            <div className="services-hero-stats">
              <div className="hero-stat">
                <Shield className="stat-icon" />
                <div>
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Audits Réalisés</div>
                </div>
              </div>
              <div className="hero-stat">
                <Target className="stat-icon" />
                <div>
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Failles Détectées</div>
                </div>
              </div>
              <div className="hero-stat">
                <Users className="stat-icon" />
                <div>
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Employés Formés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-detailed-grid">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="service-detailed-card">
                <div className="service-detailed-header">
                  <div className="service-detailed-icon-wrapper">
                    {service.icon}
                  </div>
                  <div className="service-detailed-title-section">
                    <h2 className="service-detailed-title">{service.title}</h2>
                    <p className="service-detailed-subtitle">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="service-detailed-content">
                  <div className="service-detailed-left">
                    <p className="service-detailed-description">{service.description}</p>
                    
                    <div className="service-info-grid">
                      <div className="service-info-item">
                        <Clock className="info-icon" />
                        <div>
                          <strong>Durée:</strong> {service.duration}
                        </div>
                      </div>
                      <div className="service-info-item">
                        <FileText className="info-icon" />
                        <div>
                          <strong>Livrables:</strong> {service.deliverables}
                        </div>
                      </div>
                    </div>

                    <div className="service-benefits">
                      <h4>Bénéfices Clés</h4>
                      <ul className="benefits-list">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="benefit-item">
                            <CheckCircle className="benefit-check" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-detailed-right">
                    <div className="service-features-section">
                      <h4>Ce qui est inclus</h4>
                      <ul className="service-features-list">
                        {service.features.map((feature, i) => (
                          <li key={i} className="service-feature-item">
                            <Zap className="feature-icon" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-process">
                      <h4>Processus</h4>
                      <ol className="process-list">
                        {service.process.map((step, i) => (
                          <li key={i} className="process-step">
                            <span className="step-number">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="service-cta">
                      <Link to="/contact" className="btn btn-primary">
                        Demander un Devis
                        <ArrowRight className="btn-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Offres</h2>
            <p className="section-description">
              Des solutions adaptées à chaque taille d'entreprise et chaque budget
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Populaire</div>}
                <div className="pricing-header">
                  <h3 className="pricing-title">{pkg.name}</h3>
                  <div className="pricing-price">{pkg.price}</div>
                  <p className="pricing-description">{pkg.description}</p>
                </div>
                <ul className="pricing-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="pricing-feature">
                      <CheckCircle className="pricing-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} pricing-cta`}>
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions Fréquentes</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">Combien de temps dure un audit de sécurité ?</h4>
              <p className="faq-answer">
                La durée varie selon la complexité de votre infrastructure. Un audit web basique prend 2-3 jours, 
                tandis qu'un audit complet peut nécessiter 1-2 semaines.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Vos tests perturbent-ils le fonctionnement normal ?</h4>
              <p className="faq-answer">
                Nos tests sont conçus pour minimiser l'impact sur vos opérations. Nous planifions les interventions 
                selon vos contraintes et utilisons des méthodes non intrusives.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Que contient le rapport final ?</h4>
              <p className="faq-answer">
                Chaque rapport inclut un résumé exécutif, une analyse technique détaillée, une priorisation des risques, 
                et un plan de remédiation avec des recommandations concrètes.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Proposez-vous un suivi après l'audit ?</h4>
              <p className="faq-answer">
                Oui, nous offrons différents niveaux de suivi, de la simple vérification des corrections 
                à la surveillance continue selon vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="services-cta-title">Prêt à Sécuriser Votre Entreprise ?</h2>
            <p className="services-cta-description">
              Discutons de vos besoins en cybersécurité et trouvons ensemble la solution qui vous convient.
            </p>
            <div className="services-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Demander un Audit Gratuit
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/methodologie" className="btn btn-outline btn-large">
                Découvrir Notre Approche
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;