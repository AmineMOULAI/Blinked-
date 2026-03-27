import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Blinked - Transformez l\'expérience collaborateur',
    template: '%s | Blinked',
  },
  description: 'Une plateforme simple pour permettre à vos équipes d\'échanger conseils, bonnes pratiques et retours d\'expérience au quotidien.',
  keywords: [
    'collaboration',
    'partage de connaissances',
    'knowledge sharing',
    'entreprise',
    'B2B',
    'plateforme collaborative',
    'bonnes pratiques',
  ],
  authors: [{ name: 'Blinked' }],
  creator: 'Blinked',
  publisher: 'Blinked',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://blinked.io',
    title: 'Blinked - Transformez l\'expérience collaborateur',
    description: 'Une plateforme simple pour permettre à vos équipes d\'échanger conseils, bonnes pratiques et retours d\'expérience au quotidien.',
    siteName: 'Blinked',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blinked - Transformez l\'expérience collaborateur',
    description: 'Une plateforme simple pour permettre à vos équipes d\'échanger conseils, bonnes pratiques et retours d\'expérience au quotidien.',
    creator: '@blinked',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
