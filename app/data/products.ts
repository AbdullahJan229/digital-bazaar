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
    id: 'remax-s2-bluetooth-headset',
    name: 'REMAX S2 Magnet Sports Bluetooth Headset',
    category: 'Speakers',
    price: 'DM for Price',
    condition: 'Brand New (100% Original)',
    image: '/Remax.jpg',
    description: 'Stylish wireless Bluetooth headset featuring magnetic earbuds, HD calling mic, deep bass audio, and secure ergonomic fit.',
    fullDescription: 'Upgrade your daily audio and sports routine with the REMAX S2 Magnet Bluetooth Headset[cite: 19]! Designed with a stylish neckband form factor and magnetic earbuds that snap together securely when not in use[cite: 19]. Delivers rich HD sound performance for music playback and crystal-clear wireless voice calling[cite: 19]. Lightweight, comfortable, and sweat-proof build ideal for workouts, travel, and hands-free daily usage[cite: 19].',
    specs: [
      'Magnetic Earbuds Lock Mechanism',
      'High-Clarity HD Voice Calling Mic',
      'Rich Bass & Dynamic Audio Output',
      'Bluetooth Wireless Connectivity',
      'Ergonomic Lightweight Sports Design'
    ]
  },
  {
    id: 'partybox-15w-flame-led-speaker',
    name: 'PARTYBOX 15W Flame LED Speaker',
    category: 'Speakers',
    price: 'DM for Price',
    condition: 'Brand New (Flame LED Effects)',
    image: '/Party.jpg',
    description: '15W portable Bluetooth speaker featuring smooth audio output, warm flame LED light effects, TF card support, and Type-C fast charging.',
    fullDescription: 'Experience music that relaxes your soul! The PARTYBOX Bluetooth speaker combines 15W smooth and soothing acoustic sound with mesmerising Flame LED lighting effects to create the ultimate relaxing atmosphere[cite: 18]. Equipped with Bluetooth wireless connectivity, TF card playback support, and modern Type-C fast charging[cite: 18]. Designed for those who appreciate pure audio warmth and soothing ambient lighting[cite: 18].',
    specs: [
      '15W Smooth & Calming Sound Output',
      'Warm Flame LED Ambient Lights',
      'Seamless Bluetooth Wireless Connectivity',
      'TF Memory Card Support',
      'Modern Type-C Fast Charging Port'
    ]
  },
  {
    id: 'classic-rgb-bluetooth-speaker',
    name: 'Premium Classic RGB Bluetooth Speaker',
    category: 'Speakers',
    price: 'Rs. 2,200',
    originalPrice: 'Rs. 3,200',
    condition: 'Brand New (Classic Look & RGB Lights)',
    image: '/Bluetooth.jpg',
    description: 'Portable Bluetooth speaker combining classic vintage design with modern RGB lighting, deep bass, TF card, and USB playback support.',
    fullDescription: 'Classic aesthetics meet modern technology! This Premium Portable Bluetooth Speaker features an elegant vintage look elevated by vibrant dynamic RGB lights[cite: 17]. Delivers powerful sound output with deep bass performance for indoor gatherings, outdoor hangouts, and daily music listening[cite: 17]. Equipped with seamless Bluetooth connectivity, TF card reader, USB drive support, and a premium durable finish[cite: 17].',
    specs: [
      'Powerful Sound Output & Deep Bass',
      'Dynamic RGB Party Lighting',
      'Bluetooth Wireless Connectivity',
      'TF Card & USB Playback Support',
      'Classic Vintage Design with Modern Touch'
    ]
  },
  {
    id: '26cm-led-ring-light-tripod',
    name: '26cm LED Ring Light with Tripod Stand',
    category: 'Smartwatches & Lights',
    price: 'Rs. 1,100',
    originalPrice: 'Rs. 1,800',
    condition: 'Brand New (Free Delivery)',
    image: '/Ring.jpg',
    description: 'Professional 26cm LED ring light with adjustable brightness modes and tripod stand, perfect for TikTok reels, vlogging, and product photography.',
    fullDescription: 'Illuminate every shot with professional clarity! The 26cm LED Ring Light is an essential setup for content creators making Instagram reels, YouTube videos, live streaming, online product photography, or personal selfies[cite: 16]. Features adjustable light intensity modes for soft and bright lighting setups, uniform facial illumination, and includes a durable tripod stand with Free Delivery included[cite: 16]!',
    specs: [
      '26cm Big Diameter LED Ring Light',
      'Adjustable Brightness & Color Modes',
      'Durable Tripod Stand Included',
      'Perfect for Reels, YouTube, Vlogging & Product Shoot',
      'Free Delivery Included'
    ]
  },
  {
    id: 'buds-pro-4-wireless-earbuds',
    name: 'BUDS PRO 4 Wireless Earbuds',
    category: 'Speakers',
    price: 'Rs. 1,800',
    originalPrice: 'Rs. 2,800',
    condition: 'Brand New (Milad-un-Nabi Special)',
    image: '/Budspro.jpg',
    description: 'Feature-rich TWS earbuds with 3-voice changer modes, clear powerful sound, smart touch controls, and Free Delivery across Pakistan.',
    fullDescription: 'Experience premium sound and smart style with BUDS PRO 4! Special Milad-un-Nabi offer deal featuring a unique 3 Voice Changer feature to transform your voice into different modes during calls. Engineered with clear & powerful sound output, built-in HD calling mic, smart volume & touch controls, fast stable Bluetooth connectivity, and a sleek glossy finish. Ideal for music, gaming, and daily calls with Free Delivery across Pakistan!',
    specs: [
      '3 Fun Voice Changer Modes',
      'Clear & Powerful Sound Performance',
      'Smart Touch & Volume Control',
      'Clear Calling HD Built-in Mic',
      'Fast & Stable Bluetooth Connection',
      'Premium Glossy Finish Design',
      'Free Delivery Across Pakistan'
    ]
  },
  {
    id: 'premium-digital-smart-watch',
    name: 'Premium Digital Smart Watch',
    category: 'Smartwatches & Lights',
    price: 'Rs. 1,800',
    originalPrice: 'Rs. 2,800',
    condition: 'Brand New (Multiple Straps Included)',
    image: '/Digital.jpg',
    description: 'Versatile digital smartwatch featuring multiple quick-release silicone straps, crisp digital display, and water-resistant design.',
    fullDescription: 'One watch with endless style possibilities! The Premium Digital Smart Watch allows you to customize your look for every occasion with multiple interchangeable, soft, and durable silicone straps. Features a crisp digital display, lightweight ergonomic fit, sweat and water resistance, and complete box packaging with a charging cable and user manual. Available in a wide array of vibrant colors including Black, White, Grey, Pink, Blue, Green, and Red.',
    specs: [
      'Premium High-Clarity Digital Display',
      'Multiple Stylish Quick-Release Silicone Straps',
      'Sweat & Water Resistant Build',
      'Vibrant Colors: Black, White, Grey, Pink, Blue, Green, Red',
      'Includes Charging Cable, User Manual & Box Packaging'
    ]
  },
  {
    id: 'buds-pro-16-wireless-earbuds',
    name: 'BUDS PRO 16 Wireless Earbuds',
    category: 'Speakers',
    price: 'Rs. 2,000',
    originalPrice: 'Rs. 3,200',
    condition: 'Brand New (Sealed Packaging)',
    image: '/Buds.jpg',
    description: 'Premium BUDS PRO 16 featuring ANC/ENC noise reduction, Hi-Fi deep bass sound, Bluetooth 5.3, and long battery backup.',
    fullDescription: 'Elevate your sound experience with BUDS PRO 16! Engineered with advanced ANC / ENC noise reduction technology for crystal-clear calls and immersive music listening with deep bass acoustics. Features Bluetooth 5.3 fast auto-pairing, smart touch controls, sweat resistance, quick charging, and an ergonomic lightweight fit. Comes in sealed premium original packaging with delivery available across Pakistan.',
    specs: [
      'ANC / ENC Advanced Noise Reduction',
      'Hi-Fi Sound Acoustics & Deep Bass Response',
      'Bluetooth 5.3 Fast & Stable Connection',
      'Smart Touch Controls & Crystal Clear Mic',
      'Sweat Resistant & Quick Charging Support',
      'Long Battery Backup with Premium Charging Case',
      'Sealed Premium Packaging'
    ]
  },
  {
    id: 'romoss-20000mah-high-capacity-powerbank',
    name: 'ROMOSS 20000mAh High-Capacity Power Bank',
    category: 'Powerbanks',
    price: 'Rs. 3,600',
    originalPrice: 'Rs. 4,800',
    condition: 'Brand New (Milad-un-Nabi Special)',
    image: '/Romo.jpg',
    description: 'Massive 20,000mAh capacity power bank with fast multi-device charging, durable build, and Free Delivery all over Pakistan.',
    fullDescription: 'Milad-un-Nabi Special Offer from Digital Bazaar! Eliminate low-battery anxiety with this powerful 20,000mAh Romoss power bank. Perfect for smartphones, earbuds, smartwatches, and gadgets during home, office, university, or outdoor travel. Features strong durable construction, fast efficient charging for multiple devices simultaneously, long-lasting battery backup, and Free Delivery across Pakistan!',
    specs: [
      '20,000mAh Massive Real Battery Capacity',
      'Fast & Efficient Multi-Device Charging',
      'Compact & Travel-Friendly Durable Build',
      'Compatible with Smartphones, Earbuds & Smartwatches',
      'Free Delivery All Over Pakistan'
    ]
  },
  {
    id: 'romoss-10000mah-30w-powerbank',
    name: 'Romoss 10000mAh 30W Fast Power Bank',
    category: 'Powerbanks',
    price: 'DM for Price',
    condition: 'Brand New (Azadi Sale Special)',
    image: '/Romosss.jpg',
    description: 'Compact 10000mAh power bank with 30W powerful fast charging, multiple ports, and C-to-C charging support.',
    fullDescription: 'Azadi Sale Special! Say goodbye to load shedding and low-battery worries during daily travel[cite: 15]. The Romoss 10000mAh 30W power bank offers fast and powerful charging performance for smartphones and gadgets[cite: 15]. Features multiple output ports and Type-C to Type-C fast charging capability[cite: 15]. Highly durable, solid, and travel-friendly build[cite: 15]!',
    specs: [
      '10,000mAh Real Capacity',
      '30W Powerful Fast Charger Output',
      'Multiple Charging Ports',
      'Type-C to Type-C Fast Charging Support',
      'Compact, Solid & Pocket-Friendly Design'
    ]
  },
  {
    id: 'romoss-27000mah-65w-powerbank',
    name: 'Romoss 27000mAh 65W Laptop Power Bank',
    category: 'Powerbanks',
    price: 'DM for Price',
    condition: 'Brand New (Azadi Sale Special)',
    image: '/Romos.jpg',
    description: 'Heavy-duty 27000mAh power bank with 65W fast charging, C-to-C support, and laptop charging capability.',
    fullDescription: 'Azadi Sale Special! The ultimate solution for load shedding, travel, and remote work[cite: 14]. This powerful 27000mAh Romoss power bank features high-speed 65W output capable of charging laptops, smartphones, and mobile devices smoothly[cite: 14]. Features multiple output ports and C-to-C fast charging support[cite: 14]. Built solid and reliable for long journeys and work-from-home power backups[cite: 14]!',
    specs: [
      '27,000mAh Ultra High Capacity',
      '65W Powerful Fast Output (Laptop Charging Compatible)',
      'Multiple Output Charging Ports',
      'Type-C to Type-C Fast Charging',
      'Heavy Duty & Solid Reliable Build'
    ]
  },
  {
    id: 'romoss-20000mah-22.5w-powerbank',
    name: 'ROMOSS 20000mAh 22.5W Power Bank',
    category: 'Powerbanks',
    price: 'DM for Price',
    condition: '100% Original ROMOSS Quality',
    image: '/Romoss.jpg',
    description: 'Ultra-fast 22.5W 20000mAh power bank with 3 output ports, Type-C dual input/output, and airline-approved pocket-friendly design.',
    fullDescription: 'Jummah Special deal on original ROMOSS 20000mAh high-capacity power bank[cite: 13]! Features 22.5W Super Fast Charging capability[cite: 13] that powers up smartphones, earbuds, and devices rapidly in just 30 minutes[cite: 13]. Equipped with 3 output ports (USB & Type-C) to charge multiple devices simultaneously[cite: 13]. Built with multi-protection safety features, slim lightweight airline-approved design, and includes a complimentary charging cable inside[cite: 13].',
    specs: [
      '20,000mAh Real High-Capacity Battery',
      '22.5W Super Fast Charging Support',
      '3 Output Ports (Charge Multiple Devices Together)',
      'USB & Type-C Input/Output Compatibility',
      'Multi-Protection Safety System & Airline Approved',
      'Slim, Lightweight & Pocket-Friendly Design',
      'Free Charging Cable Included in Box'
    ]
  },
  {
    id: 'lenovo-thinkpad-i7-4th-gen',
    name: 'Lenovo ThinkPad Core i7 (4th Gen)',
    category: 'Mobiles',
    price: 'DM for Price',
    condition: 'Durable & Reliable Build (Free Delivery)',
    image: '/Lenovo.jfif',
    description: 'Durable and fast-performance business laptop powered by Intel Core i7 4th Gen with SSD storage and Free Delivery across Pakistan.',
    fullDescription: 'Looking for a reliable, fast, and durable budget laptop? The Lenovo ThinkPad Core i7 (4th Gen) is an unbeatable choice engineered for tough daily use. Ideal for office work, online tasks, freelancing, study, and general daily productivity. Features high-speed SSD storage and 8GB RAM, available in both 128GB SSD and 256GB SSD storage variants with Free Delivery across Pakistan!',
    specs: [
      'Intel Core i7 4th Generation Processor',
      '8GB RAM | High-Speed SSD Storage',
      'Available Storage Variants: 128GB SSD / 256GB SSD',
      'Ideal for Freelancing, Office, Study & Daily Use',
      'Free Delivery Across Pakistan'
    ]
  },
  {
    id: 'simple-airpods-pro-2-green',
    name: 'Simple Airpods Pro 2 (Shining Green)',
    category: 'Speakers',
    price: 'Rs. 1,500',
    originalPrice: 'Rs. 2,500',
    condition: 'Brand New (Jummah Special Offer)',
    image: '/Green.jpg',
    description: 'Stylish wireless earbuds featuring digital battery display, touch controls, and a unique Shining Green & Golden Top Black case.',
    fullDescription: 'Special Jummah offer deal from Digital Bazaar! High-style Simple Airpods Pro 2 in an eye-catching Shining Green finish with a premium Golden Top Black charging case. Features integrated touch controls, a digital battery level display, and clear sound audio performance for daily calls and music listening.',
    specs: [
      'Smart Touch Sensor Controls',
      'Digital Battery Percentage Display',
      'Shining Green Finish with Golden Top Black Case',
      'Instant Auto-Pairing Wireless Bluetooth',
      'Jummah Special Limited Time Price'
    ]
  },
  {
    id: 'boocce-10000mah-powerbank',
    name: 'Boocce 10000mAh Power Bank',
    category: 'Powerbanks',
    price: 'DM for Price',
    condition: 'Brand New (Free Delivery)',
    image: '/boocce.jpg',
    description: 'Compact 10,000mAh original power bank with built-in Android and iPhone charging cables.',
    fullDescription: 'High-value Jummah Special deal! The Boocce 10000mAh original power bank is a travel-friendly charger designed to keep your mobile devices powered on the go[cite: 12]. Comes equipped with two built-in charging cables for both Android (Type-C/Micro) and iPhone devices[cite: 12]. Includes Free Delivery with limited stock available[cite: 12]!',
    specs: [
      '10,000mAh Original Real Capacity',
      '2 Built-in Cables (Android & iPhone Support)',
      'Compact & Portable Travel-Friendly Design',
      'Free Delivery Included',
      'Limited Stock Available'
    ]
  },
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
    image: 'Airpod.jfif',
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
    image: 'Infinix.webp',
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