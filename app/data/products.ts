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