'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Share2 } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '923000000000'; // Cousin ka real WhatsApp number yahan update karein

  return (
    <footer className="bg-black text-slate-400 pt-14 pb-8 border-t border-[#C19A6B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative overflow-hidden rounded-xl border border-[#C19A6B]/40 bg-black p-0.5 shadow-sm">
                <img 
                  src="/logo.jpeg" 
                  alt="Digital Bazaar Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-lg font-extrabold text-white">
                Digital <span style={{ color: '#C19A6B' }}>Bazaar</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your one-stop digital hub for new & tested pre-loved gadgets, smartphones, audio systems, and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-[#C19A6B] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#C19A6B] transition-colors">Categories Catalog</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C19A6B] transition-colors">About Our Store</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Top Gadgets</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/categories" className="hover:text-[#C19A6B] transition-colors">Used & New Mobiles</Link></li>
              <li><Link href="/categories" className="hover:text-[#C19A6B] transition-colors">Bluetooth Speakers</Link></li>
              <li><Link href="/categories" className="hover:text-[#C19A6B] transition-colors">Powerbanks & Chargers</Link></li>
              <li><Link href="/categories" className="hover:text-[#C19A6B] transition-colors">Smartwatches & Lights</Link></li>
            </ul>
          </div>

          {/* Social & Direct Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Connect With Us</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: 'rgba(193, 154, 107, 0.15)', borderColor: 'rgba(193, 154, 107, 0.4)' }}
                className="w-9 h-9 rounded-full border text-[#C19A6B] flex items-center justify-center hover:bg-[#C19A6B] hover:text-black transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                title="Facebook Page"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Instant inquiries & daily stock updates on WhatsApp & Facebook.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-slate-500">
          <p>© 2026 Digital Bazaar. All rights reserved. Developed as a University Assignment Project.</p>
        </div>
      </div>
    </footer>
  );
}