export interface Product {
  id: string;
  name: string;
  category: 'Mobiles' | 'Speakers' | 'Lights' | 'Powerbanks' | 'Watches';
  condition: 'New' | 'Used - Like New' | 'Used - Good';
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 13 Pro (128GB)',
    category: 'Mobiles',
    condition: 'Used - Like New',
    price: 'Rs. 185,000',
    originalPrice: 'Rs. 195,000',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80',
    description: '100% original, Non-PTA / Physical SIM working, 89% Battery Health.',
    specs: ['128GB Storage', '89% Battery', 'Graphite Color', 'Condition 9.5/10']
  },
  {
    id: '2',
    name: 'JBL Charge 5 Portable Speaker',
    category: 'Speakers',
    condition: 'New',
    price: 'Rs. 42,000',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80',
    description: 'Original JBL Charge 5 with IP67 Waterproof rating and powerful bass.',
    specs: ['20 Hours Playtime', 'IP67 Dust/Waterproof', 'Built-in Powerbank']
  },
  {
    id: '3',
    name: 'Anker 20,000mAh Power Bank',
    category: 'Powerbanks',
    condition: 'New',
    price: 'Rs. 12,500',
    originalPrice: 'Rs. 14,000',
    image: 'https://images.unsplash.com/photo-1609592424009-84724a737873?w=500&q=80',
    description: '22.5W Fast Charging Power Bank with dual USB and Type-C ports.',
    specs: ['20,000mAh Capacity', '22.5W Fast Charge', 'Dual Input/Output']
  },
  {
    id: '4',
    name: 'RGB Desktop Smart Ambient Light',
    category: 'Lights',
    condition: 'New',
    price: 'Rs. 4,500',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80',
    description: 'Smart Bluetooth RGB Bar Lights sync with music and gaming setup.',
    specs: ['App Control', 'Music Sync Mode', 'USB Powered']
  },
  {
    id: '5',
    name: 'Ultra Smartwatch (AMOLED Display)',
    category: 'Watches',
    condition: 'Used - Good',
    price: 'Rs. 8,900',
    originalPrice: 'Rs. 11,500',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80',
    description: 'Ultra 2 Clone with HD AMOLED Display, Bluetooth calling, and health sensors.',
    specs: ['AMOLED Display', 'Bluetooth Calling', 'Wireless Charging']
  }
];