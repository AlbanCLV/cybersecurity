# CyberSec Expert - Site Vitrine Cybersécurité

Site vitrine professionnel pour entreprise de cybersécurité, développé avec React et Vite. Optimisé pour GitHub Pages.

## 🚀 Fonctionnalités

### Pages principales
- **Accueil** : Présentation de l'entreprise avec hero section, services, méthodologie et CTA
- **Services** : Détail des 6 services principaux avec tarifs et FAQ
- **Méthodologie** : Approche en 3 étapes (à développer)
- **À Propos** : Présentation personnelle et expertise (à développer)
- **Blog** : Articles cybersécurité (à développer)
- **Contact** : Formulaire de contact avec informations de contact

### Services proposés
1. **Audit d'Applications Web** - Tests de pénétration et analyse de vulnérabilités
2. **Scan Active Directory** - Analyse avec PingCastle
3. **Tests de Fraude aux Supports** - Ingénierie sociale sur helpdesk/IT/RH
4. **Campagnes de Phishing Simulées** - Sensibilisation des employés
5. **Suivi de Sécurité Continue** - Monitoring 24/7
6. **Formation et Sensibilisation** - Ateliers interactifs

### Caractéristiques techniques
- ✅ Responsive design (mobile-first)
- ✅ Navigation moderne avec dropdown
- ✅ Animations CSS fluides
- ✅ Thème professionnel cybersécurité (bleu/vert)
- ✅ Optimisé pour GitHub Pages
- ✅ SEO-friendly
- ✅ Accessibilité web
- ✅ Performance optimisée

## 🛠️ Technologies Utilisées

- **React 19** - Framework UI
- **Vite** - Build tool moderne et rapide
- **React Router DOM** - Navigation SPA
- **Lucide React** - Icônes modernes
- **CSS3** - Styling avec variables CSS et Grid/Flexbox
- **GitHub Pages** - Hébergement gratuit

## 📦 Installation et Développement

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/AlbanCLV/cybersecurity.git
cd cybersecurity

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/cybersecurity/`

### Scripts disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Preview du build
npm run lint         # Linter ESLint
npm run deploy       # Déploiement GitHub Pages
```

## 🚀 Déploiement

### GitHub Pages (Automatique)
Le déploiement se fait automatiquement via GitHub Actions lors d'un push sur `main`.

### Déploiement manuel
```bash
npm run build
npm run deploy
```

## 📁 Structure du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── Header.jsx       # Navigation principale
│   ├── Footer.jsx       # Pied de page
│   └── Layout.jsx       # Layout principal
├── pages/               # Pages du site
│   ├── Home.jsx         # Page d'accueil
│   ├── Services.jsx     # Page services
│   ├── Contact.jsx      # Page contact
│   ├── Methodology.jsx  # Page méthodologie
│   ├── About.jsx        # Page à propos
│   └── Blog.jsx         # Page blog
├── styles/              # Styles CSS
│   └── global.css       # Styles globaux et variables
├── App.jsx              # Configuration routing
└── main.jsx             # Point d'entrée
```

## 🎨 Design System

### Couleurs
- **Primary**: `#0066cc` (Bleu cybersécurité)
- **Secondary**: `#00d4aa` (Vert tech)
- **Accent**: `#ff6b35` (Orange alerte)
- **Dark**: `#1a1a2e` (Bleu foncé)
- **Text**: `#343a40` (Gris foncé)

### Typographie
- **Font**: Inter (Google Fonts fallback)
- **Headings**: 600-700 weight
- **Body**: 400 weight
- **Line height**: 1.6 (lisibilité optimale)

### Composants
- **Buttons**: 3 variantes (primary, outline, large)
- **Cards**: Shadow et hover effects
- **Grid**: Responsive avec CSS Grid
- **Animations**: Transitions fluides 0.3s

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large**: > 1024px

## 🔍 SEO et Performance

### Optimisations incluses
- Meta tags appropriés
- Structure sémantique HTML5
- Images optimisées (à ajouter)
- Lazy loading (à implémenter)
- Lighthouse score > 90

### À ajouter
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Open Graph tags
- [ ] Schema.org markup
- [ ] Google Analytics

## 🚀 Améliorations Futures

### Contenu
- [ ] Compléter page Méthodologie
- [ ] Développer page À Propos avec photo
- [ ] Ajouter articles de blog
- [ ] Témoignages clients
- [ ] Études de cas anonymisées

### Fonctionnalités
- [ ] Système de blog CMS (Contentful/Strapi)
- [ ] Intégration Calendly pour RDV
- [ ] Chat bot pour support
- [ ] Newsletter avec MailChimp
- [ ] Formulaire de contact fonctionnel
- [ ] Système de tracking analytics

### Technique
- [ ] Tests unitaires (Jest/RTL)
- [ ] Tests E2E (Cypress)
- [ ] PWA support
- [ ] Dark mode
- [ ] Internationalisation (i18n)

## 📞 Contact

Pour toute question sur ce projet :
- Email: contact@cybersec-expert.fr
- LinkedIn: [Votre profil]
- GitHub: [@AlbanCLV](https://github.com/AlbanCLV)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**CyberSec Expert** - Protégez vos systèmes, formez vos équipes, réduisez vos risques.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
