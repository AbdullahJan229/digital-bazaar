'use client';

import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = '923017604303';

  const orderMessage = encodeURIComponent(
    `AoA! Mujhe Digital Bazaar se yeh product khareedna hai:\n\n*Product:* ${product.name}\n*Condition:* ${product.condition}\n*Price:* ${product.price}\n\nKya yeh available hai?`
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-gray-200">
      <div>
        {/* Product Image & Badges */}
        <div className="relative h-48 w-full bg-gray-50 overflow-hidden border-b border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                product.condition.includes('New')
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {product.condition}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs mt-2 line-clamp-2">
            {product.description}
          </p>

          {/* Specs List */}
          <div className="mt-4 space-y-1.5">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex items-center text-xs text-gray-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & WhatsApp Action */}
      <div className="p-5 pt-0 mt-4">
        <div className="flex items-baseline space-x-2 mb-4">
          <span className="text-xl font-extrabold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${orderMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-sm transition-colors shadow-md shadow-emerald-600/10"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}