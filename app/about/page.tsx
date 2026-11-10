'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Store, CheckCircle, MessageCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <Store className="w-4 h-4" />
              <span>About Digital Bazaar</span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Your Trusted Online Hub for Modern & Pre-Loved Tech
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Digital Bazaar started as an exclusive online catalog serving tech enthusiasts across social platforms. We specialize in bringing hand-picked, thoroughly tested smartphones, high-performance audio systems, and daily essential digital accessories directly to your doorstep.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Strict Quality Check:</strong> Every used phone and accessory is 100% bench-tested for battery health, functionality, and body condition.</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Zero Hassle Ordering:</strong> Skip long checkouts. Connect directly on WhatsApp with our team for live photos, video proof, and instant deals.</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-xl">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Have Questions or Looking for a Specific Product?</h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Our official stock updates daily on WhatsApp and Facebook. Talk to us directly for custom gadget requests or bulk orders.
              </p>

              <div className="pt-4 border-t border-slate-700">
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}