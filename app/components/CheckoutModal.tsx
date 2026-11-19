'use client';

import React, { useState } from 'react';
import { Product } from '../data/products';

interface CheckoutModalProps {
  product: Product | null;
  onClose: () => void;
  adminPhoneNumber?: string;
}

export default function CheckoutModal({
  product,
  onClose,
  adminPhoneNumber = '923017604303',
}: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    quantity: 1,
    paymentMethod: 'Cash on Delivery',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMsg(null);

    const numericPrice =
      Number(String(product.price).replace(/[^0-9.]/g, '')) || 0;
    const totalProductPrice = numericPrice * formData.quantity;

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: formData.name,
          phone: formData.phone,
          city: formData.city,
          address: formData.address,
          product: `${product.name} (x${formData.quantity})`,
          productPrice: totalProductPrice,
          quantity: formData.quantity,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Order submit nahi ho saka');
      }

      setConfirmedOrderId(data.orderId);
    } catch (err) {
      console.error('Order submit error:', err);
      setErrorMsg(
        'Server se connection nahi ho saka. Check karein ke n8n aur Cloudflare tunnel chal rahe hain.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppReceipt = () => {
    const message = `*📦 ORDER RECEIPT (${confirmedOrderId})*
-----------------------------------
*Product:* ${product.name}
*Price:* ${product.price}
*Quantity:* ${formData.quantity}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*City:* ${formData.city}
*Address:* ${formData.address}
*Payment:* ${formData.paymentMethod}`;

    window.open(
      `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
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

        {confirmedOrderId ? (
          /* Order Confirmation View */
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Order Placed Successfully!
            </h2>
            <p className="text-sm text-gray-500">
              Aapka order confirm ho gaya hai. Hamari team jald aap se rabta karegi.
            </p>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs uppercase tracking-wider text-amber-700">
                Your Order ID
              </p>
              <p className="mt-1 text-xl font-extrabold text-amber-900">
                {confirmedOrderId}
              </p>
            </div>
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleWhatsAppReceipt}
                className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
              >
                Send Receipt on WhatsApp (Optional)
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          /* Order Form View */
          <>
            <h2 className="text-xl font-bold text-gray-800">Confirm Your Order</h2>
            <p className="text-sm text-gray-500 mb-4">
              Fill your delivery details to place an instant order.
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

            {errorMsg && (
              <div className="mb-3 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-700">
                {errorMsg}
              </div>
            )}

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
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none"
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
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">Payment Method</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    <option value="Bank Transfer / EasyPaisa">Bank / EasyPaisa</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Placing Order...' : 'Place Order Now'}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}