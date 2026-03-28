// src/components/ui/ImageWithFallback.tsx
"use client";

import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

/**
 * Composant utilitaire pour afficher une image avec une gestion d'erreur élégante.
 * Affiche un espace réservé (placeholder) si le lien de l'image est brisé ou manquant.
 */
export function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  style, 
  ...props 
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [hasError, setHasError] = useState(false);

  // Si l'image ne charge pas ou qu'il n'y a pas de source, on affiche notre fallback
  if (hasError || !src) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl overflow-hidden ${className || ''}`}
        style={style}
        title="Image indisponible"
      >
        <ImageOff className="w-8 h-8 text-gray-300" />
      </div>
    );
  }

  // Comportement normal : on tente de charger l'image
  return (
    <img
      src={src}
      alt={alt || "Illustration"}
      className={className}
      style={style}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}