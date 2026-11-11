'use client';

import React, { useState } from 'react';
import { Product } from '../data/products';

interface CheckoutModalProps {
  product: Product | null;
  onClose: () => void;
  adminPhoneNumber?: string; // e.g. "923130661471"
}

export default function CheckoutModal({
  product,
  onClose,
  adminPhoneNumber = '923130661471', // Apni WhatsApp Number Yahan Set Karein
}: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    quantity: 1,
    paymentMethod: 'Cash on Delivery',
  });

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatted WhatsApp Message Text
    const message = `*📦 NEW ORDER CONFIRMED!*
-----------------------------------
*Product:* ${product.name}
*Price:* ${product.price}
*Quantity:* ${formData.quantity}
-----------------------------------
*CUSTOMER DETAILS:*
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
🏙️ *City:* ${formData.city}
📍 *Address:* ${formData.address}
💳 *Payment:* ${formData.paymentMethod}
-----------------------------------
_Order Placed via Digital Bazaar Website_`;

    // Encode text for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-gray-800">Confirm Your Order</h2>
        <p className="text-sm text-gray-500 mb-4">
          Fill details to send instant order via WhatsApp.
        </p>

        {/* Selected Product Summary */}
        <div className="mb-4 flex items-center space-x-3 rounded-lg bg-gray-50 p-3 border border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-14 w-14 rounded-md object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">{product.name}</h4>
            <p className="text-xs font-bold text-amber-600">{product.price}</p>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Ali Raza"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-gray-700">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="03001234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">City *</label>
              <input
                type="text"
                required
                placeholder="e.g. Multan"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700">Complete Delivery Address *</label>
            <textarea
              required
              rows={2}
              placeholder="House/Street No, Area name..."
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">Payment Method</label>
              <select
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-amber-500 focus:outline-none"
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Bank Transfer / EasyPaisa">Bank / EasyPaisa</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
          >
            <span>Confirm Order via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}