'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

interface GalleryItem {
  src: string
  alt: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/features-benefits-feature-1766163864512.png',
    alt: 'Science-backed skincare benefits',
    category: 'Benefits'
  },
  {
    src: '/images/features-ingredients-product-1766163859499.png',
    alt: 'Natural ingredients collection',
    category: 'Ingredients'
  },
  {
    src: '/images/gallery-results-feature-1766163873157.png',
    alt: 'Visible skincare results',
    category: 'Results'
  },
  {
    src: '/images/features-subscription-product-1766163872187.png',
    alt: 'Subscription products',
    category: 'Products'
  },
  {
    src: '/images/testimonials-press-background-1766163873174.png',
    alt: 'Customer testimonials and press features',
    category: 'Community'
  },
  {
    src: '/images/features-guarantee-feature-1766163880981.png',
    alt: 'Quality guarantee promise',
    category: 'Trust'
  },
  {
    src: '/images/pricing-options-product-1766163880076.png',
    alt: 'Flexible pricing options',
    category: 'Options'
  },
  {
    src: '/images/footer-main-background-1766163882680.png',
    alt: 'Sustainable skincare philosophy',
    category: 'Sustainability'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Where Science Meets
            <span className="block mt-2 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our journey of creating sustainable, effective skincare that nourishes both your skin and the planet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                index === 0 || index === 4
                  ? 'sm:col-span-2 sm:row-span-2'
                  : ''
              }`}
              onClick={() => setSelectedImage(item)}
              style={{
                aspectRatio: index === 0 || index === 4 ? '1/1' : '1/1.2'
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <ZoomIn className="w-10 h-10 text-white mb-3" />
                <span className="text-white font-semibold text-lg mb-1">{item.category}</span>
                <span className="text-white/80 text-sm px-4 text-center">{item.alt}</span>
              </div>

              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                <span className="text-xs font-semibold text-primary-600">{item.category}</span>
              </div>

              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl border border-primary-100/50">
            <p className="text-gray-600 max-w-2xl">
              Each product in our collection is thoughtfully crafted with sustainable practices and science-backed formulations, 
              delivering visible results you can feel good about.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="px-4 py-2 bg-white rounded-full border border-primary-200">
                <span className="text-sm font-medium text-gray-700">🌱 100% Sustainable</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-full border border-secondary-200">
                <span className="text-sm font-medium text-gray-700">🔬 Science-Backed</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-full border border-accent-200">
                <span className="text-sm font-medium text-gray-700">✨ Visible Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative max-w-6xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full mb-2">
                {selectedImage.category}
              </span>
              <p className="text-white text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}