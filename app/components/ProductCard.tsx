'use client';

import React, { useState } from 'react';
import { ShoppingBag, CheckCircle2, Eye, X, ShieldCheck } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOrderNow?: () => void;
}

export default function ProductCard({ product, onOrderNow }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#C19A6B] transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1">
        <div>
          {/* Image Banner */}
          <div className="relative h-60 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${
                  product.condition.includes('New')
                    ? 'bg-emerald-600/90 text-white border-emerald-500'
                    : 'bg-amber-500/90 text-white border-amber-400'
                }`}
              >
                {product.condition}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-5">
            <span className="text-[11px] font-bold text-[#C19A6B] uppercase tracking-widest">
              {product.category}
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-[#C19A6B] transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Quick Specs */}
            <div className="mt-4 space-y-1.5">
              {product.specs.slice(0, 3).map((spec, index) => (
                <div key={index} className="flex items-center text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C19A6B] mr-2 flex-shrink-0" />
                  <span className="truncate">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Buttons */}
        <div className="p-5 pt-0 mt-2">
          <div className="flex items-baseline space-x-2 mb-4">
            <span className="text-xl font-extrabold text-slate-900">{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          <div className="grid grid-cols-5 gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="col-span-2 flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl font-bold text-xs transition-all border border-slate-200"
            >
              <Eye className="w-4 h-4 text-slate-700" />
              <span>Details</span>
            </button>

            {/* Direct Form Trigger */}
            <button
              onClick={onOrderNow}
              className="col-span-3 flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs transition-all shadow-md active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#C19A6B]" />
                <h3 className="font-extrabold text-slate-900 text-base">Product Details</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 p-1 flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#C19A6B] uppercase tracking-wider">{product.category}</span>
                  <h4 className="font-bold text-slate-900 text-base">{product.name}</h4>
                  <p className="text-lg font-extrabold text-emerald-600 mt-0.5">{product.price}</p>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Description</h5>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {product.fullDescription || product.description}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Specifications & Highlights</h5>
                <div className="space-y-2">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center text-xs font-semibold text-slate-800 bg-emerald-50/50 p-2 rounded-lg border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  if (onOrderNow) onOrderNow();
                }}
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}