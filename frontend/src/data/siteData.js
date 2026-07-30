import { productAssets } from '../assets/clientAssets';

export const PRODUCTS = [
  {
    id: "wet-grinder-instant",
    name: "Commercial Instant Wet Grinder",
    category: "Wet Grinders",
    capacity: "10L | 20L | 30L",
    motor: "2 HP - 3 HP Heavy Duty",
    material: "304 Food Grade Stainless Steel",
    voltage: "230V / 415V (50Hz)",
    price: "₹38,500",
    rating: 4.9,
    reviewsCount: 48,
    badge: "Best Seller",
    image: productAssets.instantWetGrinder,
    description: "Heavy-duty commercial instant wet grinder designed for continuous batter grinding in commercial kitchens, hotels, and marriage halls with zero heat transfer.",
    features: [
      "304 Grade Stainless Steel Body & Drum",
      "High Torque Heavy Duty Copper Motor",
      "Noise-Free Smooth Vibration Control",
      "Easy Drain Outlet Valve",
      "Low Power Consumption"
    ],
    applications: ["Hotels", "Restaurants", "Cloud Kitchens", "Marriage Halls", "Caterers"]
  },
  {
    id: "tilting-wet-grinder",
    name: "Tilting Commercial Wet Grinder",
    category: "Tilting Wet Grinders",
    capacity: "15L | 25L | 35L",
    motor: "3 HP Heavy Duty Motor",
    material: "Food Grade 304 SS & Granite Stones",
    voltage: "415V 3-Phase",
    price: "₹46,000",
    rating: 4.9,
    reviewsCount: 62,
    badge: "Popular",
    image: productAssets.tiltingWetGrinder,
    description: "Hydraulic and manual tilting wet grinder for effortlessly tilting and discharging heavy batter directly into containers without manual lifting.",
    features: [
      "Effortless Tilting Mechanism",
      "Natural Black Granite Grinding Stones",
      "Removable Drum for Easy Wash",
      "Heavy Mild Steel Frame with SS Cladding",
      "Overload Protection Circuit"
    ],
    applications: ["Industrial Canteens", "Hotels", "Hospitals", "Marriage Halls"]
  },
  {
    id: "pulverizer-machine",
    name: "Heavy Duty Commercial Pulverizer",
    category: "Pulverizers",
    capacity: "25kg/hr - 100kg/hr",
    motor: "3 HP - 7.5 HP 3-Phase",
    material: "Stainless Steel Contact Parts",
    voltage: "415V (50Hz)",
    price: "₹52,000",
    rating: 4.8,
    reviewsCount: 35,
    badge: "Industrial Grade",
    image: productAssets.pulverizerMachine,
    description: "High-speed multi-purpose spice and grain pulverizer machine for dry grinding masala, turmeric, chilli, coriander, rice, and wheat flour.",
    features: [
      "Multi-mesh interchangeable sieves",
      "Double Chamber Fine Pulverizing System",
      "Vibration Free Operation",
      "Dust-Free Cyclone Collection Option",
      "Compact Space-Saving Design"
    ],
    applications: ["Spice Units", "Bakeries", "Sweet Shops", "Industrial Kitchens"]
  },
  {
    id: "dough-kneader",
    name: "Commercial Spiral Dough Kneader",
    category: "Dough Kneaders",
    capacity: "5kg | 10kg | 25kg",
    motor: "2 HP Dual Motor System",
    material: "Stainless Steel Bowl & Spiral Arm",
    voltage: "230V / 415V",
    price: "₹34,000",
    rating: 4.9,
    reviewsCount: 54,
    badge: "Top Rated",
    image: productAssets.doughKneader,
    description: "Precision spiral dough kneader for bakeries, pizza outlets, and parotta masters ensuring perfectly kneaded smooth dough in under 8 minutes.",
    features: [
      "Dual Speed Spiral Revolution Control",
      "Safety Guard Grid with Auto Cut-off",
      "Heavy Stainless Steel Bowl",
      "Low Heat Generation During Kneading",
      "Sturdy Anti-Vibration Base"
    ],
    applications: ["Bakeries", "Restaurants", "Pizza Outlets", "Sweet Shops"]
  },
  {
    id: "vegetable-cutter",
    name: "Multi-Functional Vegetable Cutter",
    category: "Vegetable Cutters",
    capacity: "150kg/hr",
    motor: "1 HP Heavy Duty",
    material: "Full Stainless Steel 304",
    voltage: "220V Single Phase",
    price: "₹28,500",
    rating: 4.8,
    reviewsCount: 41,
    badge: "Efficiency Leader",
    image: productAssets.vegetableCutter,
    description: "Versatile vegetable slicing, dicing, shredding, and julienne cutting machine with interchangeable hardened SS blade discs.",
    features: [
      "Includes 5 Different Cutting Blade Discs",
      "Dual Feed Hoppers for Large & Small Vegetables",
      "Safety Interlock Emergency Stop Switch",
      "Easy Dismantling for Thorough Sanitization",
      "High Cut Precision with Zero Waste"
    ],
    applications: ["Cloud Kitchens", "Hostel Mess", "Hotels", "Hospitals", "Corporate Cafeterias"]
  },
  {
    id: "coconut-scraper",
    name: "Commercial Coconut Scraper Machine",
    category: "Coconut Scrapers",
    capacity: "60 Coconuts / hr",
    motor: "0.5 HP Heavy Duty",
    material: "Food Grade SS Blade & Base",
    voltage: "230V Single Phase",
    price: "₹14,500",
    rating: 4.9,
    reviewsCount: 38,
    badge: "Essential",
    image: productAssets.coconutScraper,
    description: "Compact high-efficiency double head coconut scraper machine for quick scraping without muscle strain.",
    features: [
      "Dual Hardened SS Serrated Blades",
      "Protective Safety Shields",
      "Compact Countertop Footprint",
      "Silent Gear Box Transmission",
      "Easy Cleaning Stainless Steel Tray"
    ],
    applications: ["South Indian Restaurants", "Hotels", "Sweet Shops", "Caterers"]
  },
  {
    id: "mixer-machine",
    name: "Commercial Mixer Machine",
    category: "Mixer Machines",
    capacity: "10L | 20L | 30L",
    motor: "2 HP Heavy Duty",
    material: "Food Grade Stainless Steel",
    voltage: "230V Single Phase",
    price: "₹22,000",
    rating: 4.8,
    reviewsCount: 27,
    badge: "Heavy Duty",
    image: productAssets.mixerMachine,
    description: "Commercial heavy duty mixer machine designed for heavy spice grinding, chutneys, and food processing.",
    features: [
      "Heavy Stainless Steel Jars",
      "High Speed Motor with Thermal Overload",
      "Low Vibration Footing"
    ],
    applications: ["Hotels", "Restaurants", "Caterers"]
  },
  {
    id: "coconut-milk-extractor",
    name: "Coconut Milk Extractor Machine",
    category: "Extractors",
    capacity: "5L | 10L | 15L",
    motor: "1.5 HP Heavy Duty",
    material: "304 Grade Stainless Steel",
    voltage: "230V Single Phase",
    price: "₹32,000",
    rating: 4.9,
    reviewsCount: 19,
    badge: "Specialized",
    image: productAssets.coconutMilkExtractor,
    description: "Precision coconut milk extraction machine for high volume sweet shops, hotels, and coconut processing units.",
    features: [
      "Maximum Juice & Milk Yield",
      "Easy Filter Screen Cleaning",
      "Food Grade SS Construction"
    ],
    applications: ["Sweet Shops", "Hotels", "Food Processing"]
  }
];

export const SPARE_PARTS = [
  { id: "sp-1", name: "Heavy Duty V-Belt Drive", category: "Belts", price: "₹650", compatibility: "Universal Fit for All Machines", image: "/images/v belt.png" },
  { id: "sp-2", name: "High Speed Ball Bearings", category: "Bearings", price: "₹850", compatibility: "SKF Heavy Duty Grade", image: "/images/ball bearing.png" },
  { id: "sp-3", name: "Hardened SS Cutter Blade Set", category: "Blades", price: "₹1,200", compatibility: "Vegetable Cutters & Pulverizers", image: "/images/cutter blade.png" },
  { id: "sp-4", name: "Grinding Stone Set", category: "Stones", price: "₹3,500", compatibility: "Wet Grinders (10L - 30L)", image: "/images/spare part.png" },
  { id: "sp-5", name: "Stainless Steel Drum Unit", category: "Drum Parts", price: "₹5,800", compatibility: "15L & 25L Wet Grinders", image: "/images/ss drum.png" },
  { id: "sp-6", name: "Heavy Duty Copper Electric Motor", category: "Motors", price: "₹8,500", compatibility: "1 HP to 5 HP 3-Phase / Single Phase", image: "/images/electric motor.png" },
  { id: "sp-7", name: "Heavy Duty ON/OFF Switch", category: "Switches", price: "₹450", compatibility: "Waterproof IP65 Grade", image: "/images/on off switch.png" },
  { id: "sp-8", name: "Precision Gear Set", category: "Gear Parts", price: "₹2,400", compatibility: "Tilting Wet Grinders & Kneaders", image: "/images/gear set.png" },
  { id: "sp-9", name: "Drive Shaft Coupling", category: "Couplings", price: "₹950", compatibility: "Commercial Mixers & Cutters", image: "/images/coupling.png" },
  { id: "sp-10", name: "Machine Pulley Wheel", category: "Pulleys", price: "₹750", compatibility: "Motor & Drum Transmission", image: "/images/pulley.png" },
  { id: "sp-11", name: "Motor Carbon Brush Set", category: "Brushes", price: "₹350", compatibility: "Commercial Mixers & Peelers", image: "/images/carbon brush.png" },
  { id: "sp-12", name: "Industrial Oil Seal Ring", category: "Seals", price: "₹280", compatibility: "Waterproof Bearing Housing", image: "/images/oil seai.png" }
];

export const REVIEWS = [
  {
    id: "rev-1",
    name: "Hotel Sri Balaji",
    city: "Tirunelveli",
    type: "Hotel & Restaurant",
    rating: 5,
    verified: true,
    comment: "We purchased 3 Tilting Wet Grinders and a Dough Kneader 5 years ago for our hotel. High-quality build, smooth operation, and excellent after-sales service from Shahana team!"
  },
  {
    id: "rev-2",
    name: "New Anandha Bhavan",
    city: "Madurai",
    type: "Sweet & Vegetarian Restaurant Chain",
    rating: 5,
    verified: true,
    comment: "The Pulverizer and Instant Wet Grinders are working continuously in our central kitchen. Shahana Kitchen Equipment delivers genuine commercial grade quality with reliable AMC support."
  },
  {
    id: "rev-3",
    name: "Sree Catering Service",
    city: "Kovilpatti",
    type: "Marriage & Bulk Catering",
    rating: 5,
    verified: true,
    comment: "Timely service and genuine spare parts availability. Their team installed our complete catering setup within 2 days. Highly recommended manufacturer in Tamil Nadu."
  },
  {
    id: "rev-4",
    name: "Royal Cloud Kitchen",
    city: "Chennai",
    type: "Multi-Brand Cloud Kitchen",
    rating: 5,
    verified: true,
    comment: "Their vegetable cutters and SS prep tables helped us scale our cloud kitchen operations effortlessly. Zero maintenance issues in 3 years."
  }
];
