'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { 
  Smartphone, 
  Speaker, 
  BatteryCharging, 
  Lightbulb, 
  Watch 
} from 'lucide-react';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mobiles', 'Speakers', 'Powerbanks', 'Lights', 'Watches'];

  const categoryCards = [
    { name: 'Mobiles', icon: Smartphone, count: 'Used & New Phones', color: 'bg-blue-50 text-blue-600' },
    { name: 'Speakers', icon: Speaker, count: 'Bluetooth & Party', color: 'bg-purple-50 text-purple-600' },
    { name: 'Powerbanks', icon: BatteryCharging, count: 'Fast Charging', color: 'bg-emerald-50 text-emerald-600' },
    { name: 'Lights', icon: Lightbulb, count: 'RGB & Desk Lamps', color: 'bg-amber-50 text-amber-600' },
    { name: 'Watches', icon: Watch, count: 'Smart & Fitness', color: 'bg-rose-50 text-rose-600' },
  ];

  const filteredProducts = products.filter((product) => {
    return selectedCategory === 'All' || product.category === selectedCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Browse by Category</h1>
          <p className="text-gray-500 text-sm mt-2">Select a category to filter gadgets</p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categoryCards.map((item) => {
            const Icon = item.icon;
            const isActive = selectedCategory === item.name;
            return (
              <div
                key={item.name}
                onClick={() => setSelectedCategory(item.name)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all text-center flex flex-col items-center justify-center ${
                  isActive 
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-600/20' 
                    : 'border-gray-200 bg-white hover:border-emerald-500 hover:shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{item.name}</h3>
                <span className="text-[11px] text-gray-500 mt-1">{item.count}</span>
              </div>
            );
          })}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center space-x-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}