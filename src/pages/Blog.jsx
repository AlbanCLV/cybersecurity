import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero section-fullwidth">
        <div className="container-narrow">
          <h1 className="blog-hero-title">Blog Cybersécurité</h1>
          <p className="blog-hero-description">
            Actualités, conseils et bonnes pratiques en cybersécurité pour protéger votre entreprise
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <h2>Derniers Articles</h2>
            <p>Restez informés des dernières menaces et solutions</p>
          </div>
          <div className="text-center">
            <BookOpen size={64} style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Articles à venir prochainement...</p>
            <Link to="/contact" className="btn btn-primary">
              Être notifié des nouveaux articles <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;