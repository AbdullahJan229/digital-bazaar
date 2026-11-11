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
    id: 'skmei-2624-dual-time-watch',
    name: 'SKMEI Original Dual Time Watch (Model 2624)',
    category: 'Smartwatches & Lights',
    price: 'DM for Price',
    condition: 'Brand New (100% Original)',
    image: '/Watch.jpg',
    description: 'Original SKMEI Model 2624 featuring dual time display, premium steel chain, and water resistance.',
    fullDescription: 'Authentic SKMEI Model 2624 dual time wristwatch engineered with a durable stainless steel chain and heavy-duty 147-gram build. Features dual time zone display functionality, water resistance, and a modern executive design suitable for both formal and daily casual wear.',
    specs: [
      '100% Original SKMEI (Model# 2624)',
      'Dual Time Zone Display',
      'Premium Stainless Steel Chain',
      'Water Resistant Build',
      'Solid 147 Gram Weight'
    ]
  },
  {
    id: 'nephoo-np-56-wireless-mic',
    name: 'Nephoo NP 56 Wireless Microphone',
    category: 'Speakers',
    price: 'DM for Price',
    condition: 'Brand New (Tested Quality)',
    image: '/Neepho.jpg',
    description: 'Budget-friendly wireless lapel microphone system with excellent sound clarity for content creators and video recording.',
    fullDescription: 'High-quality and affordable wireless microphone solution from Nephoo. Fully tested for crystal-clear audio recording, low noise distortion, and reliable wireless range. Ideal for vlogging, online classes, content creation, and live interviews without overcharging your budget.',
    specs: [
      'Tested & Verified Audio Quality',
      'Plug & Play Wireless Connectivity',
      'Compact & Lightweight Lapel Design',
      'Low Noise Distortion & Clear Vocal Capture',
      'Budget-Friendly High-Value Stock'
    ]
  },
  {
    id: 'dell-latitude-5470-i7',
    name: 'DELL Latitude 5470 (i7 6th Gen HQ)',
    category: 'Mobiles', // Laptop category filter add hone tak catalog me display hone k liye
    price: 'DM for Price',
    condition: 'Grade A Quality Stock',
    image: '/Dell.jfif',
    description: 'High-performance business laptop ideal for online courses, thesis work, digital marketing, and web development.',
    fullDescription: 'An extremely powerful and reliable laptop unit suited for students, digital marketers, research scholars, e-commerce freelancers (Amazon, eBay, Daraz), and office tasks. Features a high-performance Intel Core i7 6th Gen HQ processor, 8GB DDR4 RAM, and a super-fast 250GB M.2 SSD. Comes equipped with a crisp 14-inch FHD Display, Backlit Keyboard, HD Web Camera, and 2+ Hours Battery Backup. Only 4 pristine Grade A units available in stock!',
    specs: [
      'Intel Core i7 6th Gen HQ High-Performance Processor',
      '8GB DDR4 RAM | 250GB M.2 High-Speed SSD',
      '14" Full HD (FHD) Anti-Glare Display',
      'Backlit Keyboard & HD Web Camera',
      '2+ Hours Long Battery Backup',
      'Pristine Grade A Condition (Limited Stock: 4 Units)'
    ]
  },
  {
    id: 'apple-iphone-14-128gb',
    name: 'Apple iPhone 14 (128GB)',
    category: 'Mobiles',
    price: 'DM for Price',
    condition: '100% Genuine Like New Condition',
    image: '/iphone.jfif',
    description: 'Official PTA Approved iPhone 14 in pristine Blue color with 100% sealed waterpack condition and premium performance.',
    fullDescription: 'Handpicked 100% genuine Apple iPhone 14 (128GB) in stunning Blue finish. Unlike heavily used market stock, these pristine devices are in like-new condition, with select pieces available at 0 battery cycles! Features Official PTA Approval with Physical SIM + eSIM support, 90% to 96% battery health, and guaranteed 100% sealed water-pack integrity.',
    specs: [
      '128GB Internal Storage',
      'Official PTA Approved (Physical SIM + eSIM)',
      '100% Sealed Water Pack Guarantee',
      '90% – 96% Battery Health (0 Cycle Pieces Available)',
      'Stunning Blue Color Finish',
      '100% Genuine Like New Condition'
    ]
  },
  {
    id: 'google-pixel-7-pta',
    name: 'Google Pixel 7 (8GB / 128GB)',
    category: 'Mobiles',
    price: 'DM for Price',
    condition: '9.8/10 Super Clean Condition',
    image: '/Pixels.jfif',
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
    id: 'iphone-16-pro-max-256gb',
    name: 'Apple iPhone 16 Pro Max (256GB)',
    category: 'Mobiles',
    price: 'DM for Price',
    condition: 'Brand New Condition',
    image: '/iphone16pro.jfif',
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
    id: 'airpods-pro-3-tws',
    name: 'AirPods Pro 3 TWS Wireless Earbuds',
    category: 'Speakers',
    price: 'DM for Price',
    condition: 'Brand New Condition',
    image: 'AirPod.jfif',
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
    id: 'infinix-xpower-20go',
    name: 'Infinix XPOWER 20 GO Power Bank',
    category: 'Powerbanks',
    price: 'Rs. 4,099',
    originalPrice: 'Rs. 5,500',
    condition: 'Brand New (12+1 Months Warranty)',
    image: 'Infinix.jfif',
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