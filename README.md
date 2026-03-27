# Blinked - Landing Page B2B

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)

Landing page moderne et responsive pour **Blinked**, plateforme B2B de partage de connaissances en entreprise.

---

## 🎯 Aperçu

Blinked est une plateforme qui permet aux équipes d'échanger conseils, bonnes pratiques et retours d'expérience au quotidien. Cette landing page présente la solution avec des animations fluides et un design professionnel.

### ✨ Fonctionnalités

- 🎨 **Design Moderne** : Interface épurée et professionnelle
- 📱 **100% Responsive** : Optimisé mobile, tablette et desktop
- 🚀 **Performances Optimales** : Next.js 15 + App Router
- ✨ **Animations Fluides** : Motion (Framer Motion) au scroll
- 🎭 **Témoignages Animés** : Chain animations staggered
- 🖼️ **Images Optimisées** : next/image pour chargement rapide
- 🔤 **Typographie Optimisée** : next/font/google (Inter)
- 🎯 **SEO Ready** : Metadata, OpenGraph, Robots.txt

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Motion](https://motion.dev/) (Framer Motion)
- **UI Components** : [Radix UI](https://www.radix-ui.com/)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Utilities** : clsx, tailwind-merge

---

## 🚀 Quick Start

### Prérequis

- Node.js 18+ 
- npm ou pnpm

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-org/blinked.git
cd blinked

# Installer les dépendances
npm install

# Ajouter vos images dans /public/images/
# (voir public/images/README.md)
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

### Build Production

```bash
npm run build
npm run start
```

---

## 📁 Structure du Projet

```
blinked/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout racine + next/font
│   │   ├── page.tsx                # Page d'accueil
│   │   ├── metadata.ts             # SEO metadata
│   │   └── components/
│   │       ├── Header.tsx          # Header avec navigation
│   │       ├── Hero.tsx            # Section hero
│   │       ├── Problem.tsx         # Section problème
│   │       ├── Solution.tsx        # Section solution
│   │       ├── Metrics.tsx         # Section métriques
│   │       ├── Testimonials.tsx    # Témoignages animés
│   │       └── Footer.tsx          # Footer + CTA
│   └── styles/
│       ├── index.css               # Imports CSS
│       ├── tailwind.css            # Tailwind base
│       ├── theme.css               # Tokens design
│       └── fonts.css               # (vide - fonts via next/font)
├── public/
│   ├── images/                     # Assets images
│   ├── manifest.json               # PWA manifest
│   └── robots.txt                  # SEO robots
├── next.config.js                  # Config Next.js
├── tsconfig.json                   # Config TypeScript
└── package.json
```

---

## 🎨 Design System

### Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Primaire | `#3B82F6` | CTA, liens, accents |
| Accent | `#1E40AF` | Hover states, emphasis |
| Sombre | `#1F2937` | Texte principal, footer |
| Fond clair | `#F3F4F6` | Sections alternées |

### Typographie

- **Police** : Inter (300, 400, 500, 600, 700, 800)
- **Chargement** : next/font/google avec `display: swap`

### Animations

- **Fade-in up** : Sections au scroll
- **Staggered** : Listes et cartes
- **Chain animations** : Témoignages (délai 0.2s entre chaque)
- **Floating** : Éléments décoratifs
- **Hover effects** : Boutons, cartes, liens

---

## 📦 Sections de la Landing Page

1. **Header** : Navigation fixe avec menu mobile
2. **Hero** : Titre principal + CTA + illustration
3. **Problem** : Présentation du problème avec liste animée
4. **Solution** : Fonctionnalités en grille avec cartes
5. **Metrics** : Chiffres clés sur fond bleu
6. **Testimonials** : 4 témoignages avec chain animation
7. **Footer** : CTA final + liens + contact

---

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm run start

# Vérifier le code
npm run lint
```

---

## 🌐 Déploiement

### Vercel (Recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/votre-org/blinked)

### Autres Plateformes

- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Cloudflare Pages

---

## 📈 Performances

- ✅ **Core Web Vitals** optimisés
- ✅ **LCP** : < 2.5s (images optimisées)
- ✅ **FID** : < 100ms (code splitting)
- ✅ **CLS** : < 0.1 (dimensions d'images fixes)
- ✅ **Lighthouse Score** : 95+ (mobile & desktop)

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit (`git commit -m 'Ajout d'une amélioration'`)
4. Push (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

---

## 📝 Documentation Additionnelle

- [Guide de Migration](./MIGRATION_GUIDE.md) - Détails de la migration React → Next.js
- [Quick Start](./QUICK_START.md) - Démarrage rapide
- [Images README](./public/images/README.md) - Instructions pour les images

---

## 📄 Licence

Ce projet est sous licence MIT.

---

## 👥 Équipe

Développé avec ❤️ par l'équipe Blinked

---

## 📞 Contact

- **Email** : contact@blinked.io
- **Téléphone** : +33 1 23 45 67 89
- **Adresse** : 123 Avenue de la République, 75011 Paris, France

---

**Blinked** - Transformez l'expérience collaborateur grâce au partage de connaissances 🚀
