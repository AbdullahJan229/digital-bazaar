export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  condition: string;
  image: string;
  description: string;
  fullDescription?: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: 'google-pixel-7-pta',
    name: 'Google Pixel 7 (8GB / 128GB)',
    category: 'Mobiles',
    price: 'DM for Price',
    condition: '9.8/10 Super Clean Condition',
    image: 'https://img.drz.lazcdn.com/static/pk/p/57849cb15190119e64e5cbf5d962ffbd.jpg_720x720q80.jpg_.webp',
    description: 'Official PTA Approved Google Pixel 7 in pristine condition with Tensor G2 processor and 50MP flagship cameras.',
    fullDescription: 'Upgrade your lifestyle with the Google Pixel 7 in super clean 9.8/10 mint condition. 100% genuine hardware featuring Official PTA Approval. Powered by the advanced Google Tensor G2 processor, 8GB RAM, and 128GB internal storage. Captures life in vibrant colors with its industry-leading 50MP dual rear camera setup and 10.8MP front selfie camera. Equipped with a smooth 6.3-inch AMOLED 90Hz display and a durable 4355mAh fast-charging battery.',
    specs: [
      'Official PTA Approved',
      '8GB RAM | 128GB Storage',
      'Google Tensor G2 Flagship Processor',
      '50MP Dual Rear Camera | 10.8MP Selfie',
      '6.3" AMOLED 90Hz Smooth Display',
      '9.8/10 Pristine Mint Condition (100% Genuine)'
    ]
  },
  {
    id: 'airpods-pro-3-tws',
    name: 'AirPods Pro 3 TWS Wireless Earbuds',
    category: 'Speakers',
    price: 'DM for Price',
    condition: 'Brand New Condition',
    image: 'https://img.drz.lazcdn.com/static/pk/p/7cb1739c9e7bc2a6d8122d1df930c722.png_720x720q80.png_.webp',
    description: 'Smart TWS wireless earbuds featuring premium audio clarity, sleek design, and extended battery life.',
    fullDescription: 'Upgrade your audio game with the AirPods Pro 3 with TWS! Engineered with smart features, crystal-clear sound acoustics, active noise reduction support, and a sleek modern design. Offers exceptional battery backup with its wireless charging case for all-day continuous music playback and hands-free HD calls.',
    specs: [
      'True Wireless Stereo (TWS) Sound',
      'Smart Touch Controls & HD Mic',
      'Long-Lasting Battery Backup',
      'Compact Wireless Charging Case',
      'Instant Auto-Pairing Bluetooth 5.3',
      'Sleek Premium Ergonomic Fit'
    ]
  },
  {
    id: 'iphone-16-pro-max-256gb',
    name: 'Apple iPhone 16 Pro Max (256GB)',
    category: 'Mobiles',
    price: 'DM for Price',
    condition: 'Brand New Condition',
    image: 'https://img.drz.lazcdn.com/g/30000000/100000000/100000000/100000000/p-0-1.jpg_720x720q80.jpg_.webp',
    description: 'Official PTA Approved iPhone 16 Pro Max in Desert Titanium color with 100% battery health and complete box.',
    fullDescription: 'Premium Apple iPhone 16 Pro Max (256GB Storage) in stunning Desert Titanium finish. The device is official PTA Approved (Gnext variant) with Physical SIM + eSIM capability. Features 100% Battery Health with only 194 charge cycles used. Comes with complete original box packing and an unused charging cable. Apple Official Warranty recently ended in June 2026.',
    specs: [
      '256GB Storage Capacity',
      'Official PTA Approved (Physical SIM + eSIM)',
      'Desert Titanium Color',
      '100% Battery Health (194 Cycles Only)',
      'Original Unused Cable & Complete Box',
      'Brand New Condition (Apple Warranty Exp. June 2026)'
    ]
  },
  {
    id: 'infinix-xpower-20go',
    name: 'Infinix XPOWER 20 GO Power Bank',
    category: 'Powerbanks',
    price: 'Rs. 4,099',
    originalPrice: 'Rs. 5,500',
    condition: 'Brand New (12+1 Months Warranty)',
    image: 'https://img.drz.lazcdn.com/static/pk/p/f8c7512ac8963d6f318b84cff6ffd2c8.png_720x720q80.png_.webp',
    description: 'Powerful 20,000mAh high-capacity power bank with 15W fast charging and multi-device support.',
    fullDescription: 'Never run out of power during load shedding or travel! The Infinix XPOWER 20 GO is an original 20000mAh high-capacity power bank engineered for maximum efficiency and safety. It features 15W fast charging output, Type-C 5V/3A dual input & output compatibility, and allows simultaneous multi-device charging. Comes equipped with comprehensive safety protection against short-circuits and overheating, plus a complimentary high-speed 3A Type-C charging cable inside the box.',
    specs: [
      '20,000mAh Heavy Duty Capacity',
      '15W Fast Charging Support',
      'Type-C 5V/3A Dual Input/Output',
      'Multi-Device Simultaneous Charging',
      'Free 3A High-Speed Type-C Cable Included',
      'Official 12+1 Months Brand Warranty'
    ]
  }
];