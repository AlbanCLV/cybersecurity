import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blog-page" style={{ paddingTop: '70px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Blog Cybersécurité</h1>
            <p className="section-description">
              Actualités, conseils et bonnes pratiques en cybersécurité
            </p>
          </div>
          {/* Contenu à développer */}
          <div className="text-center">
            <p>Articles à venir prochainement...</p>
            <Link to="/contact" className="btn btn-primary">
              Être notifié des nouveaux articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;