'use client';

import { Check, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Pricing() {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    'Early access to our award-winning serum',
    'Exclusive founding member pricing - save $20',
    'Free premium skincare consultation ($50 value)',
    'Priority shipping on launch day',
    'Lifetime VIP community access & tips'
  ];

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Limited Early Access</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Reserve Your Spot
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join our founding members and be the first to experience sustainable skincare that truly delivers
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-500 ease-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card Content */}
            <div className="relative bg-white m-[2px] rounded-3xl p-8 sm:p-10 lg:p-12">
              {/* Badge */}
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-3 font-bold text-sm">
                  Save $20
                </div>
              </div>

              {/* Product Image */}
              <div className="mb-8 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
                <Image
                  src="/images/pricing-options-product-1766163880076.png"
                  alt="Bloom & Wild Premium Skincare Product"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              {/* Title & Badge */}
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Founding Member
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Early Access Pre-Order
                </h3>
                <p className="text-gray-600">Be part of our sustainable skincare revolution</p>
              </div>

              {/* Price */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-gray-400 line-through font-medium">$49</span>
                  <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                    $29
                  </span>
                </div>
                <p className="text-sm text-gray-500">One-time pre-order price</p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group/item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-md transition-transform duration-300 group-hover/item:scale-110">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 font-medium flex-1 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a 
                href="https://buy.stripe.com/prod_TJtceEOGnyYvh1"
                className="block w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white text-center py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Pre-Order for $29
              </a>

              {/* Social Proof */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-primary-500">2,847+</span> skincare enthusiasts have already reserved their spot
                </p>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600 font-medium">4.9/5 from early testers</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span>Risk-free guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span>Ships February 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center mt-8 text-sm text-gray-500 max-w-xl mx-auto">
            Your payment is secure and processed through Stripe. By pre-ordering, you're locking in the founding member price and supporting sustainable beauty innovation.
          </p>
        </div>
      </div>
    </section>
  );
}