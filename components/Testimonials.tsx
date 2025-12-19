'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useState } from 'react'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  image: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The Vitamin C serum absolutely transformed my skin! I noticed a visible glow within two weeks, and my dark spots have faded significantly. Plus, knowing it's sustainable makes me feel even better about my choice.",
    name: "Sarah Mitchell",
    role: "Verified Customer",
    image: "/images/testimonial-testimonials-customers-0-1766163852856.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "I've struggled with sensitive skin for years, but Bloom & Wild's gentle cleanser has been a game-changer. It's science-backed, effective, and doesn't irritate my skin at all. I'm obsessed!",
    name: "Emily Chen",
    role: "Skincare Enthusiast",
    image: "/images/testimonial-testimonials-customers-1-1766163853230.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "Finally, a brand that delivers on its promises! The hydrating night cream has improved my skin texture dramatically. I love that they're transparent about ingredients and committed to sustainability.",
    name: "Jessica Parker",
    role: "Beauty Editor",
    image: "/images/testimonial-testimonials-customers-2-1766163853859.jpg",
    rating: 5
  }
]

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 font-medium text-sm mb-6">
            <Star className="w-4 h-4 fill-current" />
            Trusted by Thousands
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Real stories from real people who've discovered the power of sustainable, science-backed skincare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredCard === testimonial.id ? 'ring-2 ring-primary-500/50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary-500 fill-current transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-8 text-base lg:text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary-500/20 group-hover:ring-primary-500/40 transition-all duration-300">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg group-hover:text-primary-500 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-gray-600 text-lg mb-6">
            Join thousands of happy customers experiencing visible results
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-100">
            Start Your Journey
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}