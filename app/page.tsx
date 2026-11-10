'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { products } from './data/products';
import { Search, Sparkles, ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Mobiles', 'Speakers', 'Powerbanks', 'Lights', 'Watches'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section with exact #C19A6B Background */}
      <section 
        style={{ backgroundColor: '#C19A6B' }}
        className="relative py-16 sm:py-20 text-slate-950 shadow-md border-b border-black/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div 
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-950/10 border border-slate-950/20 text-slate-950 text-xs font-bold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Premium New & Certified Used Gadgets</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-white drop-shadow-sm">
            Upgrade Your Tech Style with <span className="text-slate-950">Digital Bazaar</span>
          </h1>

          <p className="mt-4 text-slate-900/90 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            Find the best deals on original smartphones, wireless audio, high-capacity power banks, and smart lighting solutions.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search gadgets (e.g. iPhone, JBL, Powerbank)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-full py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3 text-slate-800 text-sm font-bold">
            <ShieldCheck className="w-5 h-5 text-[#C19A6B]" />
            <span>100% Tested & Verified Gadgets</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-slate-800 text-sm font-bold">
            <Truck className="w-5 h-5 text-[#C19A6B]" />
            <span>Fast Cash on Delivery Nationwide</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-slate-800 text-sm font-bold">
            <Headphones className="w-5 h-5 text-[#C19A6B]" />
            <span>Instant WhatsApp Buying Support</span>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Direct stock available for immediate WhatsApp dispatch</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto max-w-full pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={
                  selectedCategory === cat 
                    ? { backgroundColor: '#C19A6B', color: '#FFFFFF' }
                    : {}
                }
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'shadow-md shadow-[#C19A6B]/20'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-slate-400 font-medium bg-white rounded-2xl border border-dashed border-slate-300">
              No gadgets found matching your search.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}