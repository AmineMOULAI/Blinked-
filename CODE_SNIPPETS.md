# Code Snippets - Blinked Next.js

Snippets utiles pour développer sur ce projet Next.js.

---

## 🎨 Composants Client avec Animations

### Nouveau Composant avec Motion

```tsx
"use client";

import { motion } from "motion/react";

export function MyComponent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={itemVariants}>
        {/* Votre contenu */}
      </motion.div>
    </motion.section>
  );
}
```

---

## 🖼️ Images Optimisées

### Image Simple

```tsx
import Image from "next/image";

<Image 
  src="/images/my-image.png" 
  alt="Description"
  width={600}
  height={400}
  className="w-full h-auto"
/>
```

### Image avec Priority (Above the Fold)

```tsx
<Image 
  src="/images/hero.png" 
  alt="Hero"
  width={1200}
  height={800}
  priority
  className="w-full h-auto"
/>
```

### Image Externe

```tsx
// 1. Ajouter dans next.config.js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'example.com',
    },
  ],
}

// 2. Utiliser dans le composant
<Image 
  src="https://example.com/image.jpg" 
  alt="External"
  width={400}
  height={300}
  fill // Pour images responsive avec position absolute
  className="object-cover"
/>
```

---

## 📝 Metadata SEO

### Page Statique

```tsx
// src/app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Description de la page',
};

export default function AboutPage() {
  return <div>...</div>;
}
```

### Metadata Dynamique

```tsx
// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Article: ${params.slug}`,
  };
}

export default function BlogPost({ params }: Props) {
  return <div>{params.slug}</div>;
}
```

---

## 🎯 Animations Communes

### Fade In Up

```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  {/* Contenu */}
</motion.div>
```

### Stagger Children

```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

<motion.div variants={container} initial="hidden" whileInView="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={item}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover & Tap

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 bg-blue-500 text-white rounded-lg"
>
  Cliquez-moi
</motion.button>
```

### Floating Animation

```tsx
<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ 
    repeat: Infinity, 
    duration: 6, 
    ease: "easeInOut" 
  }}
>
  {/* Élément flottant */}
</motion.div>
```

---

## 🔤 Typographie avec next/font

### Police Personnalisée Locale

```tsx
// src/app/layout.tsx
import localFont from 'next/font/local';

const myFont = localFont({
  src: './fonts/my-font.woff2',
  display: 'swap',
  variable: '--font-custom',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={myFont.variable}>
        {children}
      </body>
    </html>
  );
}
```

### Plusieurs Polices Google

```tsx
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

<body className={`${inter.variable} ${roboto.variable}`}>
  {children}
</body>
```

---

## 🎨 Tailwind CSS Utilitaires

### Classes Personnalisées

```tsx
// Gradient Text
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
  Gradient Text
</h1>

// Glass Effect
<div className="bg-white/10 backdrop-blur-md border border-white/20">
  Glass Morphism
</div>

// Shadows
<div className="shadow-[0_10px_20px_-10px_rgba(59,130,246,0.6)]">
  Custom Shadow
</div>
```

---

## 🔗 Navigation & Links

### Link Next.js

```tsx
import Link from 'next/link';

<Link 
  href="/about"
  className="text-blue-500 hover:text-blue-700"
>
  À Propos
</Link>
```

### Scroll Smooth vers Section

```tsx
<a 
  href="#contact"
  className="cursor-pointer"
  onClick={(e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }}
>
  Contact
</a>
```

---

## 📱 Hooks Utiles

### useInView (Intersection Observer)

```tsx
"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

export function MyComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      {isInView && <p>Visible !</p>}
    </div>
  );
}
```

### useMediaQuery

```tsx
"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

// Usage
const isMobile = useMediaQuery('(max-width: 768px)');
```

---

## 🎭 Layout Patterns

### Grid Responsive

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</div>
```

### Container Centered

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Contenu centré avec padding responsive */}
</div>
```

### Full Height Section

```tsx
<section className="min-h-screen flex items-center justify-center">
  {/* Contenu vertical center */}
</section>
```

---

## 🎯 Formulaires

### Formulaire Simple

```tsx
"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nom"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
        Envoyer
      </button>
    </form>
  );
}
```

---

## 🎨 Composants Radix UI

### Dialog (Modal)

```tsx
"use client";

import * as Dialog from '@radix-ui/react-dialog';

export function MyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Ouvrir
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg">
          <Dialog.Title>Mon Dialog</Dialog.Title>
          <Dialog.Description>Description...</Dialog.Description>
          <Dialog.Close asChild>
            <button>Fermer</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

---

## 🚀 Optimisations

### Lazy Loading Component

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Chargement...</p>,
  ssr: false // Désactiver SSR si nécessaire
});
```

### Suspense

```tsx
import { Suspense } from 'react';

<Suspense fallback={<Loading />}>
  <AsyncComponent />
</Suspense>
```

---

## 📊 Variables d'Environnement

### Accès dans Composant Client

```tsx
// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com

// Composant
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### Accès Côté Serveur

```tsx
// .env.local
SECRET_KEY=my-secret

// Server Component ou API Route
const secret = process.env.SECRET_KEY;
```

---

## 🎯 Conseils de Performance

1. **Utiliser `priority` sur images above-the-fold**
2. **Lazy load composants lourds avec `dynamic()`**
3. **Memoizer les calculs coûteux avec `useMemo`**
4. **Debounce les inputs** pour éviter trop de re-renders
5. **Utiliser `viewport={{ once: true }}` sur animations**

---

Ces snippets vous aideront à développer rapidement de nouvelles fonctionnalités tout en maintenant la qualité et les performances du projet ! 🚀
