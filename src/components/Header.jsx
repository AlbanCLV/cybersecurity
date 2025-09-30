import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { scrollToAnchor } from '../utils/anchorUtils';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const handleAnchorClick = (event, path, anchor) => {
    event.preventDefault();
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    
    if (location.pathname === path) {
      // Same page, just scroll
      scrollToAnchor(anchor);
    } else {
      // Different page, navigate then scroll
      navigate(`${path}#${anchor}`);
    }
  };

  const navItems = [
    { path: '/', label: 'Accueil' },
    { 
      path: '/services', 
      label: 'Services',
      dropdown: [
        { path: '/services', anchor: 'audit-web', label: 'Audit Web' },
        { path: '/services', anchor: 'scan-ad', label: 'Scan Active Directory' },
        { path: '/services', anchor: 'tests-fraude', label: 'Tests de Fraude' },
        { path: '/services', anchor: 'phishing', label: 'Phishing Simulé' },
        { path: '/services', anchor: 'suivi', label: 'Suivi Sécurité' },
        { path: '/services', anchor: 'formation', label: 'Formation' }
      ]
    },
    { path: '/methodologie', label: 'Méthodologie' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <Shield className="logo-icon" />
            <span className="logo-text">
              <span className="logo-main">CyberSec</span>
              <span className="logo-sub">Expert</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  {item.dropdown ? (
                    <div 
                      className="nav-dropdown"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className={`nav-link dropdown-trigger ${
                          location.pathname === item.path ? 'active' : ''
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="dropdown-icon" />
                      </Link>
                      <ul className={`dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
                        {item.dropdown.map((subItem) => (
                          <li key={`${subItem.path}#${subItem.anchor}`}>
                            <a 
                              href={`${subItem.path}#${subItem.anchor}`}
                              className="dropdown-link"
                              onClick={(e) => handleAnchorClick(e, subItem.path, subItem.anchor)}
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${
                        location.pathname === item.path ? 'active' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link to="/contact" className="btn btn-primary btn-cta">
            Audit Gratuit
          </Link>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Navigation mobile */}
        <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-mobile-item">
                <Link
                  to={item.path}
                  className={`nav-mobile-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul className="nav-mobile-submenu">
                    {item.dropdown.map((subItem) => (
                      <li key={`${subItem.path}#${subItem.anchor}`}>
                        <a 
                          href={`${subItem.path}#${subItem.anchor}`}
                          className="nav-mobile-sublink"
                          onClick={(e) => handleAnchorClick(e, subItem.path, subItem.anchor)}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="nav-mobile-item">
              <Link
                to="/contact"
                className="btn btn-primary btn-large"
                onClick={() => setIsMenuOpen(false)}
              >
                Audit Gratuit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;