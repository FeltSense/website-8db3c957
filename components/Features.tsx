'use client'

import { Sparkles, Leaf, Shield, Package, Heart, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Sparkles,
      title: 'Clinically Proven Results',
      description: 'Science-backed formulations that deliver visible improvements in just 4-8 weeks. Our active ingredients are carefully selected for maximum efficacy.',
      image: '/images/features-benefits-feature-1766163864512.png',
      color: 'primary'
    },
    {
      icon: Leaf,
      title: 'Truly Sustainable',
      description: '100% sustainable packaging and carbon-neutral shipping. We believe caring for your skin and caring for the planet go hand in hand.',
      image: '/images/features-ingredients-product-1766163859499.png',
      color: 'secondary'
    },
    {
      icon: Shield,
      title: 'Clean & Transparent',
      description: 'Free from harmful chemicals, parabens, and synthetic fragrances. We list every ingredient and explain why it\'s there—no secrets.',
      image: '/images/gallery-results-feature-1766163873157.png',
      color: 'accent'
    },
    {
      icon: Package,
      title: 'Flexible Subscription',
      description: 'Save 15-20% with our flexible subscription. Free shipping, pause anytime, and never run out of your favorites.',
      image: '/images/features-subscription-product-1766163872187.png',
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'Dermatologist-Tested',
      description: 'Rigorously tested and suitable for all skin types, including sensitive skin. Gentle yet effective formulations you can trust.',
      image: '/images/pricing-options-product-1766163880076.png',
      color: 'secondary'
    },
    {
      icon: CheckCircle,
      title: '30-Day Guarantee',
      description: 'Not seeing results? We offer a full 30-day satisfaction guarantee. Your confidence in our products is our priority.',
      image: '/images/features-guarantee-feature-1766163880981.png',
      color: 'accent'
    }
  ]

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colors = {
      primary: {
        bg: 'bg-primary-500',
        text: 'text-primary-500',
        border: 'border-primary-500',
        gradientFrom: 'from-primary-500',
        gradientTo: 'to-primary-600'
      },
      secondary: {
        bg: 'bg-secondary-500',
        text: 'text-secondary-500',
        border: 'border-secondary-500',
        gradientFrom: 'from-secondary-500',
        gradientTo: 'to-secondary-600'
      },
      accent: {
        bg: 'bg-accent-500',
        text: 'text-accent-500',
        border: 'border-accent-500',
        gradientFrom: 'from-accent-500',
        gradientTo: 'to-accent-600'
      }
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">What Makes Us Different</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Bloom & Wild
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Where science meets sustainability. Every product is crafted with care for your skin and our planet.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = getColorClasses(feature.color, hoveredIndex === index)
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`
                  relative h-full bg-white rounded-2xl overflow-hidden
                  transition-all duration-500 ease-out
                  ${isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg'}
                  border border-gray-100
                `}>
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-gray-50">
                    <div className="absolute inset-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className={`
                          object-cover transition-transform duration-700
                          ${isHovered ? 'scale-110' : 'scale-100'}
                        `}
                      />
                      <div className={`
                        absolute inset-0 bg-gradient-to-t ${colorClasses.gradientFrom}/0 ${colorClasses.gradientTo}/40
                        transition-opacity duration-500
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                      `} />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className={`
                      absolute top-4 left-4 p-3 rounded-xl
                      transition-all duration-500
                      ${isHovered ? `${colorClasses.bg} shadow-lg scale-110` : 'bg-white shadow-md'}
                    `}>
                      <Icon className={`
                        w-6 h-6 transition-colors duration-500
                        ${isHovered ? 'text-white' : colorClasses.text}
                      `} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-7">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`
                      h-1 rounded-full mt-6 transition-all duration-500
                      ${isHovered ? `w-full ${colorClasses.bg}` : 'w-12 bg-gray-200'}
                    `} />
                  </div>

                  {/* Hover gradient overlay */}
                  <div className={`
                    absolute inset-0 pointer-events-none
                    bg-gradient-to-br ${colorClasses.gradientFrom}/0 ${colorClasses.gradientTo}/5
                    transition-opacity duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Join thousands of happy customers who've transformed their skincare routine
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300">
              Shop Best Sellers
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-300">
              Take Our Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}