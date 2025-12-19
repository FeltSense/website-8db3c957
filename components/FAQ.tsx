'use client'

import { useState } from 'react'
import { Plus, Minus, Leaf, Heart, Package, Sparkles } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  icon: any
}

const faqData: FAQItem[] = [
  {
    question: "What makes Bloom & Wild different from other skincare brands?",
    answer: "We bridge the gap between nature and science. Every formula is crafted with sustainably sourced, potent botanicals backed by clinical research. We're transparent about our ingredients, committed to eco-friendly practices, and dedicated to delivering visible results. Plus, our products are cruelty-free, vegan, and packaged in recyclable materials.",
    icon: Leaf
  },
  {
    question: "How long before I see results?",
    answer: "While everyone's skin is unique, most customers notice improvements within 2-3 weeks of consistent use. For deeper transformations like fine lines or hyperpigmentation, we recommend giving your skin 6-8 weeks to complete its natural renewal cycle. Think of it as nurturing a garden—patience and consistency yield the most beautiful blooms.",
    icon: Sparkles
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer: "Absolutely! We formulate with gentle, skin-loving ingredients that respect your skin's natural barrier. All our products are dermatologist-tested, hypoallergenic, and free from harsh chemicals, synthetic fragrances, and irritants. We recommend patch testing any new product, but our formulas are designed to nourish even the most delicate skin.",
    icon: Heart
  },
  {
    question: "What is your subscription model?",
    answer: "Our flexible subscription ensures you never run out of your favorites while saving 15% on every order. Choose your delivery frequency (every 30, 60, or 90 days), and we'll send your products right when you need them. You can pause, skip, or cancel anytime—no strings attached. It's self-care, simplified.",
    icon: Package
  },
  {
    question: "What ingredients do you avoid and why?",
    answer: "We say no to parabens, sulfates, phthalates, synthetic fragrances, mineral oils, and silicones. These ingredients can disrupt your skin's natural balance or harm the environment. Instead, we harness the power of plant-based actives, vitamins, and bio-fermented ingredients that work in harmony with your skin.",
    icon: Leaf
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes! We stand behind our formulas with a 60-day satisfaction guarantee. If you're not absolutely glowing with your results, simply reach out to our customer care team for a full refund—no questions asked. We want you to feel confident investing in your skin's health.",
    icon: Heart
  },
  {
    question: "How sustainable is your packaging?",
    answer: "Sustainability is woven into everything we do. Our packaging is made from recycled glass and PCR plastic, fully recyclable, and designed to minimize waste. We use biodegradable shipping materials and offset our carbon footprint with every order. Beautiful skin shouldn't cost the earth.",
    icon: Leaf
  },
  {
    question: "Can I use multiple products together?",
    answer: "Yes! Our products are designed to layer beautifully and complement each other. We recommend starting with a cleanser, followed by serum, moisturizer, and SPF during the day. For personalized routine guidance based on your skin concerns, our skincare quiz or customer care team can help create your perfect regimen.",
    icon: Sparkles
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6 shadow-lg shadow-primary-200">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Questions? We've Got{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600">
              Answers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about nurturing your skin with science-backed, sustainable skincare
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 lg:gap-6">
            {faqData.map((faq, index) => {
              const Icon = faq.icon
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 lg:gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-200' 
                          : 'bg-gray-50 group-hover:bg-primary-50'
                      }`}>
                        <Icon className={`w-6 h-6 lg:w-7 lg:h-7 transition-all duration-300 ${
                          isOpen ? 'text-white' : 'text-primary-500'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className={`text-lg lg:text-xl font-semibold transition-colors duration-300 pr-2 ${
                            isOpen ? 'text-primary-600' : 'text-gray-900 group-hover:text-primary-600'
                          }`}>
                            {faq.question}
                          </h3>
                          
                          {/* Toggle Icon */}
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isOpen 
                              ? 'bg-primary-100 rotate-180' 
                              : 'bg-gray-100 group-hover:bg-primary-50'
                          }`}>
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-primary-600" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors duration-300" />
                            )}
                          </div>
                        </div>

                        {/* Answer */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-block bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
              Our skincare experts are here to help you find your perfect routine
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}