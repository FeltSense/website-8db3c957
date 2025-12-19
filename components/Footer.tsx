'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Leaf, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const productLinks = [
    { name: 'Face Care', href: '/products/face' },
    { name: 'Body Care', href: '/products/body' },
    { name: 'Clean Beauty', href: '/products/clean' },
    { name: 'Gift Sets', href: '/products/gifts' },
    { name: 'Bestsellers', href: '/products/bestsellers' },
  ];

  const companyLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Science & Research', href: '/science' },
    { name: 'Press', href: '/press' },
    { name: 'Careers', href: '/careers' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Track Order', href: '/track' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/footer-main-background-1766163882680.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-slate-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-primary-500 uppercase tracking-wider">
                    Join Our Community
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Nourish your inbox
                </h3>
                <p className="text-slate-400 text-sm lg:text-base">
                  Get expert skincare tips, early access to new products, and exclusive offers that help you bloom.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:ring-primary-500/50 transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-300 group-hover:scale-110">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Bloom & Wild
                </span>
              </Link>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                Sustainable, science-backed skincare that delivers visible results while caring for the planet. Empowering your natural glow, one product at a time.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Leaf className="w-4 h-4 text-primary-500" />
                  <span className="text-slate-400">100% Sustainable</span>
                </div>
                <div className="w-px h-4 bg-slate-700" />
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-accent-500" />
                  <span className="text-slate-400">Cruelty-Free</span>
                </div>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 bg-slate-800/50 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20 group"
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-primary-500 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-1.5 bg-primary-500 rounded-full transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-primary-500 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-1.5 bg-primary-500 rounded-full transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-primary-500 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-1.5 bg-primary-500 rounded-full transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Bloom & Wild. All rights reserved. Made with{' '}
                <Heart className="inline w-4 h-4 text-accent-500 fill-accent-500" /> for your skin.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-primary-500 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-primary-500 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-slate-400 hover:text-primary-500 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}