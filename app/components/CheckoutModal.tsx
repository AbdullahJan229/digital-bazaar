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
    email: '',
    city: '',
    address: '',
    quantity: 1,
    paymentMethod: 'Cash on Delivery',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    orderDate: string;
    productPrice: number;
    deliveryCharges: number;
    totalAmount: number;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMsg(null);

    const priceMatch = String(product.price).replace(/,/g, '').match(/\d+(\.\d+)?/);
    const numericPrice = priceMatch ? Number(priceMatch[0]) : 0;
    const totalProductPrice = numericPrice * formData.quantity;
    const deliveryCharges = 250;

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: formData.name,
          phone: formData.phone,
          email: formData.email.trim(),
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

      setConfirmedOrder({
        orderId: data.orderId,
        orderDate:
          data.orderDate ||
          new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
        productPrice: totalProductPrice,
        deliveryCharges: data.deliveryCharges ?? deliveryCharges,
        totalAmount: data.totalAmount ?? totalProductPrice + deliveryCharges,
      });
    } catch (err) {
      console.error('Order submit error:', err);
      setErrorMsg(
        'Server se connection nahi ho saka. Check karein ke n8n aur Cloudflare tunnel chal rahe hain.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Download Branded PNG Receipt Image (Works on Mobile & Desktop)
  const handleDownloadReceipt = () => {
    if (!confirmedOrder) return;

    const canvas = document.createElement('canvas');
    canvas.width = 720;
    canvas.height = 920;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header Banner (Dark + Camel Accent)
    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, canvas.width, 150);
    ctx.fillStyle = '#C19A6B';
    ctx.fillRect(0, 142, canvas.width, 8);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 34px sans-serif';
    ctx.fillText('DIGITAL BAZAAR', 45, 70);

    ctx.fillStyle = '#C19A6B';
    ctx.font = '18px sans-serif';
    ctx.fillText('OFFICIAL ORDER RECEIPT / INVOICE', 45, 108);

    // Order ID Badge
    ctx.fillStyle = '#FEF3C7';
    ctx.fillRect(45, 180, 630, 80);
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 180, 630, 80);

    ctx.fillStyle = '#92400E';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('ORDER ID:', 65, 212);
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText(confirmedOrder.orderId, 65, 244);

    ctx.textAlign = 'right';
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#78350F';
    ctx.fillText('DATE & TIME', 655, 212);
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(confirmedOrder.orderDate, 655, 240);
    ctx.textAlign = 'left';

    // Details Section
    let y = 310;
    const drawRow = (label: string, value: string, bold = false) => {
      ctx.fillStyle = '#6B7280';
      ctx.font = '18px sans-serif';
      ctx.fillText(label, 45, y);

      ctx.fillStyle = '#111827';
      ctx.font = bold ? 'bold 19px sans-serif' : '18px sans-serif';
      const maxChars = 34;
      const displayVal =
        value.length > maxChars ? value.slice(0, maxChars) + '...' : value;
      ctx.textAlign = 'right';
      ctx.fillText(displayVal, 675, y);
      ctx.textAlign = 'left';

      ctx.strokeStyle = '#E5E7EB';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(45, y + 16);
      ctx.lineTo(675, y + 16);
      ctx.stroke();
      y += 52;
    };

    drawRow('Customer Name', formData.name, true);
    drawRow('Phone / WhatsApp', formData.phone);
    if (formData.email) drawRow('Email', formData.email);
    drawRow('City', formData.city);
    drawRow('Delivery Address', formData.address);
    drawRow('Product', `${product.name} (x${formData.quantity})`, true);
    drawRow('Payment Method', formData.paymentMethod);
    drawRow(
      'Product Price',
      confirmedOrder.productPrice > 0
        ? `Rs. ${confirmedOrder.productPrice}`
        : String(product.price)
    );
    drawRow('Delivery Charges', `Rs. ${confirmedOrder.deliveryCharges}`);

    // Total Box
    y += 10;
    ctx.fillStyle = '#111827';
    ctx.fillRect(45, y, 630, 68);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('TOTAL PAYABLE:', 65, y + 42);
    ctx.fillStyle = '#C19A6B';
    ctx.textAlign = 'right';
    ctx.fillText(
      confirmedOrder.productPrice > 0
        ? `Rs. ${confirmedOrder.totalAmount}`
        : `${product.price} + Rs. 250 Delivery`,
      655,
      y + 42
    );
    ctx.textAlign = 'left';

    // Footer
    ctx.fillStyle = '#6B7280';
    ctx.font = '15px sans-serif';
    ctx.fillText(
      'Thank you for shopping with Digital Bazaar! Support: +92 301 7604303',
      45,
      880
    );

    const link = document.createElement('a');
    link.download = `Receipt-${confirmedOrder.orderId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleWhatsAppReceipt = () => {
    if (!confirmedOrder) return;
    const message = `*📦 ORDER RECEIPT (${confirmedOrder.orderId})*
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {confirmedOrder ? (
          /* Digital Order Receipt Card */
          <div className="py-3 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
              ✓
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Order Confirmed!
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {formData.email
                  ? `Receipt aapki email (${formData.email}) par bhi bhej di gayi hai.`
                  : 'Apni order slip neeche button se save kar lein.'}
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-amber-200 pb-2">
                <span className="text-amber-800 font-medium">Order ID:</span>
                <span className="font-extrabold text-amber-950 text-sm">
                  {confirmedOrder.orderId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Customer:</span>
                <span className="font-semibold text-gray-800">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Phone:</span>
                <span className="font-medium text-gray-800">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Product:</span>
                <span className="font-semibold text-gray-800">
                  {product.name} (x{formData.quantity})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">City & Payment:</span>
                <span className="font-medium text-gray-800">
                  {formData.city} • {formData.paymentMethod}
                </span>
              </div>
              <div className="flex justify-between border-t border-amber-200 pt-2 text-sm">
                <span className="font-bold text-gray-800">Total Amount:</span>
                <span className="font-extrabold text-emerald-700">
                  {confirmedOrder.productPrice > 0
                    ? `Rs. ${confirmedOrder.totalAmount}`
                    : `${product.price} + Rs. 250`}
                </span>
              </div>
            </div>

            <div className="pt-1 space-y-2">
              <button
                type="button"
                onClick={handleDownloadReceipt}
                className="w-full rounded-xl bg-amber-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-700 transition"
              >
                📥 Download Order Receipt (Image)
              </button>
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
                className="w-full rounded-xl border border-gray-300 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 transition"
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
                <label className="block text-xs font-medium text-gray-700">
                  Email <span className="text-gray-400 font-normal">(Optional - for Email Receipt)</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. ali@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none"
                />
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