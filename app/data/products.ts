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
  // Aap ke baaki products yahan aate rahenge...
];