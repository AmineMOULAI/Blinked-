# 🚀 Quick Start - Blinked Next.js

## Installation et Démarrage Rapide

### 1️⃣ Ajouter les Images

Avant de démarrer, placez vos 5 images dans `/public/images/` :

```
/public/images/
  ├── logo-full.png
  ├── logo-icon.png
  ├── hero-illustration.png
  ├── problem-illustration.png
  └── solution-mockup.png
```

> **Important** : Les noms de fichiers doivent correspondre exactement à ceux ci-dessus.

---

### 2️⃣ Démarrer le Serveur de Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

### 3️⃣ Build pour la Production

```bash
npm run build
npm run start
```

---

## 📝 Différences avec l'Ancien Projet

| Aspect | Avant (Vite) | Maintenant (Next.js) |
|--------|--------------|----------------------|
| **Démarrage** | `npm run dev` (Vite) | `npm run dev` (Next.js) |
| **Build** | `vite build` | `next build` |
| **Entry Point** | `/src/app/App.tsx` | `/src/app/page.tsx` |
| **Images** | `figma:asset` | `/public/images/` |
| **Fonts** | Google Fonts CDN | `next/font/google` |
| **Composants** | Client-side uniquement | Server + Client Components |

---

## ✅ Ce qui est Déjà Configuré

- ✅ Next.js 15 installé
- ✅ App Router configuré
- ✅ Tous les composants migrés avec "use client"
- ✅ Images optimisées avec `next/image`
- ✅ Police Inter via `next/font/google`
- ✅ Tailwind CSS v4 configuré
- ✅ Radix UI components conservés
- ✅ Motion (Framer Motion) configuré
- ✅ TypeScript configuration

---

## 🎨 Design & Animations

Toutes les animations et le design sont **100% identiques** à l'original :

- ✅ Animations au scroll (fade-in up)
- ✅ Chain animations sur les témoignages
- ✅ Hover effects
- ✅ Mobile responsive
- ✅ Palette de couleurs (#3B82F6, #1E40AF, #1F2937, #F3F4F6)

---

## 🔧 Dépannage

### Erreur "Image not found"

➡️ **Solution** : Vérifiez que vos 5 images sont bien dans `/public/images/` avec les noms corrects.

### Erreur "Module not found"

➡️ **Solution** : Exécutez `npm install` pour installer toutes les dépendances.

### La page ne charge pas

➡️ **Solution** : 
1. Vérifiez que le port 3000 est libre
2. Essayez `npm run dev -- -p 3001` pour utiliser un autre port

---

## 📦 Déploiement

### Vercel (Recommandé)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Autres Plateformes

Le projet peut aussi être déployé sur :
- **Netlify** (avec next-on-netlify)
- **AWS Amplify**
- **Digital Ocean App Platform**

---

## 📚 Documentation Complète

Consultez [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) pour tous les détails de la migration.

---

**Prêt à démarrer ! 🎉**
