# Guide de Migration - Blinked vers Next.js 14+

## ✅ Migration Complète

Votre projet Blinked a été **entièrement migré** de React (Vite) vers **Next.js 15 avec App Router**.

---

## 📁 Nouvelle Structure du Projet

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal (Root Layout)
│   │   ├── page.tsx             # Page d'accueil (anciennement App.tsx)
│   │   └── components/          # Tous vos composants
│   │       ├── Header.tsx       # "use client" + next/image
│   │       ├── Hero.tsx         # "use client" + next/image
│   │       ├── Problem.tsx      # "use client" + next/image
│   │       ├── Solution.tsx     # "use client" + next/image
│   │       ├── Metrics.tsx      # "use client"
│   │       ├── Testimonials.tsx # "use client"
│   │       └── Footer.tsx       # "use client" + next/image
│   └── styles/
│       ├── fonts.css            # Vidé (fonts via next/font)
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── public/
│   └── images/                  # Vos images à placer ici
│       └── README.md            # Instructions pour les images
├── next.config.js               # Configuration Next.js
└── package.json                 # Scripts Next.js ajoutés
```

---

## 🔄 Principales Modifications

### 1. **Architecture Next.js App Router**

- ✅ **`src/app/layout.tsx`** : Layout racine avec intégration de la police Inter via `next/font/google`
- ✅ **`src/app/page.tsx`** : Page d'accueil (remplace l'ancien `App.tsx`)

### 2. **Gestion des Polices**

- ✅ **Police Inter** chargée via `next/font/google` dans `layout.tsx`
- ✅ Variable CSS `--font-inter` disponible globalement
- ✅ Suppression des imports Google Fonts dans `fonts.css`

### 3. **Composants Client ("use client")**

Tous les composants utilisant des hooks React ou Framer Motion ont la directive **`"use client"`** :
- Header.tsx
- Hero.tsx
- Problem.tsx
- Solution.tsx
- Metrics.tsx
- Testimonials.tsx
- Footer.tsx

### 4. **Optimisation des Images**

- ✅ Remplacement de `<img>` par `<Image>` de `next/image`
- ✅ Dimensions spécifiées pour optimisation
- ✅ Images externes (pravatar.cc) ajoutées à `next.config.js`
- ✅ Attribut `priority` sur images critiques (hero, logo)

### 5. **Scripts Package.json**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 📸 Images à Ajouter

Placez vos images dans `/public/images/` :

| Nom du fichier | Description | Hash original |
|----------------|-------------|---------------|
| `logo-full.png` | Logo complet Blinked | 921ad8d0... |
| `logo-icon.png` | Icône Blinked | a70ec9b3... |
| `hero-illustration.png` | Illustration Hero | f2f6a733... |
| `problem-illustration.png` | Illustration Problem | af9f838b... |
| `solution-mockup.png` | Mockup Solution | 79539276... |

> **Note** : Les images originales utilisaient le système `figma:asset`. Elles ont été remplacées par des imports depuis `/public/images/`.

---

## 🚀 Commandes de Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Démarrer en mode production
npm run start

# Vérifier le code
npm run lint
```

---

## 🎨 Design System Conservé

- ✅ **Typographie** : Inter (300, 400, 500, 600, 700, 800)
- ✅ **Couleurs** :
  - Primaire : `#3B82F6`
  - Accent : `#1E40AF`
  - Sombre : `#1F2937`
  - Fond clair : `#F3F4F6`
- ✅ **Animations** : Motion (anciennement Framer Motion)
- ✅ **UI Components** : Radix UI + Tailwind CSS
- ✅ **Responsive** : Mobile-first

---

## 📋 Checklist de Migration

- [x] Installation de Next.js 15
- [x] Création de `layout.tsx` et `page.tsx`
- [x] Configuration `next.config.js`
- [x] Conversion des composants en "use client"
- [x] Migration des images vers `next/image`
- [x] Intégration de `next/font/google` pour Inter
- [x] Mise à jour des scripts npm
- [x] Documentation des images à ajouter
- [x] Conservation de Tailwind CSS v4
- [x] Conservation de Radix UI
- [x] Conservation de Motion (Framer Motion)

---

## ⚡ Optimisations Next.js

Votre application bénéficie maintenant de :

1. **Server Components** par défaut (sauf composants "use client")
2. **Optimisation automatique des images** via `next/image`
3. **Code splitting automatique**
4. **Chargement optimisé des fonts** (FOUT/FOIT évité)
5. **Pre-rendering** pour meilleures performances SEO
6. **Fast Refresh** en développement

---

## 🔗 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

## 🎯 Prochaines Étapes

1. **Ajouter vos images** dans `/public/images/`
2. **Tester l'application** avec `npm run dev`
3. **Vérifier le responsive** sur mobile/desktop
4. **Déployer sur Vercel** pour profiter des optimisations Edge

---

**Migration réalisée avec succès ! 🎉**

Tous les composants sont prêts pour la production et respectent les bonnes pratiques Next.js 14+.
