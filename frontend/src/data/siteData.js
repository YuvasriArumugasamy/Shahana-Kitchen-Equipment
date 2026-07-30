import { productAssets } from '../assets/clientAssets';

export const PRODUCTS = [
  {
    id: "vegetable-cutting-machine",
    name: "Vegetable Cutting Machine",
    category: "Vegetable Cutters",
    capacity: "150kg/hr",
    motor: "0.5 HP Lakshmi Copper Motor",
    material: "304 Food Grade SS & Red Coating",
    voltage: "220V Single Phase",
    price: "₹24,500",
    rating: 4.9,
    reviewsCount: 42,
    badge: "Best Seller",
    image: productAssets.vegetableCutter,
    description: "Vegetable cutting machine with 0.5 HP Lakshmi copper motor for commercial kitchen slicing, dicing, and chopping.",
    features: [
      "0.5 HP Lakshmi Heavy Duty Copper Motor",
      "Food Grade Stainless Steel & Coated Body",
      "Interchangeable Blade Discs Included",
      "Easy Dismantling for Sanitization",
      "Low Power Consumption"
    ],
    applications: ["Hotels", "Restaurants", "Cloud Kitchens", "Caterers", "Hostel Mess"]
  },
  {
    id: "wet-grinder-commercial",
    name: "Commercial Wet Grinder",
    category: "Wet Grinders",
    capacity: "3 Litres to 25 Litres Available",
    motor: "1.5 HP - 3 HP Heavy Duty Motor",
    material: "Food Grade 304 SS & Granite Stones",
    voltage: "230V / 415V (50Hz)",
    price: "₹38,500",
    rating: 4.9,
    reviewsCount: 68,
    badge: "Popular",
    image: productAssets.wetGrinder,
    description: "Commercial wet grinders available from 3 Litres to 25 Litres capacity with natural granite grinding stones.",
    features: [
      "Available from 3L to 25L Capacity",
      "Natural Black Granite Grinding Stones",
      "Heavy Duty Stainless Steel Drum & Frame",
      "Smooth Noise-Free Transmission",
      "Overload Protection Circuit"
    ],
    applications: ["Hotels", "Restaurants", "Marriage Halls", "Industrial Canteens"]
  },
  {
    id: "coconut-crab-machine",
    name: "Coconut Crab Scraper Machine",
    category: "Coconut Scrapers",
    capacity: "60 Coconuts / hr",
    motor: "0.5 HP Lakshmi Copper Motor",
    material: "Full Stainless Steel 304",
    voltage: "230V Single Phase",
    price: "₹14,500",
    rating: 4.8,
    reviewsCount: 35,
    badge: "Essential",
    image: productAssets.coconutCrab,
    description: "Coconut crab scraper machine powered by 0.5 HP Lakshmi copper motor for effortless high-volume scraping.",
    features: [
      "0.5 HP Lakshmi Copper Motor Drive",
      "Heavy Duty Stainless Steel Body & Blades",
      "Dual Head Scraping System",
      "Silent Gear Box Transmission",
      "Compact Countertop Footprint"
    ],
    applications: ["South Indian Restaurants", "Hotels", "Sweet Shops", "Caterers"]
  },
  {
    id: "u-drum-mixer",
    name: "U-Drum SS Mixer Machine",
    category: "Mixer Machines",
    capacity: "50 Litres to 150 Litres",
    motor: "2 HP - 3 HP Heavy Duty Motor",
    material: "Stainless Steel Mat Finishing",
    voltage: "230V / 415V",
    price: "₹42,000",
    rating: 4.9,
    reviewsCount: 29,
    badge: "Heavy Duty",
    image: productAssets.uDrumMixer,
    description: "U-Drum SS mixer starting from 50 Litres in premium stainless steel mat finishing for commercial batter & masala mixing.",
    features: [
      "Starting from 50 Litres Capacity",
      "Premium Stainless Steel Mat Finishing",
      "Heavy Duty Mixing Paddle Assembly",
      "Easy Tilting & Discharge Mechanism",
      "Hygienic Food Grade Construction"
    ],
    applications: ["Batter Units", "Sweet Shops", "Central Kitchens", "Food Processing"]
  },
  {
    id: "atta-kneader-machine",
    name: "Atta Kneader Machine",
    category: "Dough Kneaders",
    capacity: "10 kg to 50 kg",
    motor: "Lakshmi Copper Motor",
    material: "Heavy Stainless Steel Bowl & Arms",
    voltage: "230V / 415V",
    price: "₹32,000",
    rating: 4.9,
    reviewsCount: 54,
    badge: "Top Rated",
    image: productAssets.attaKneader,
    description: "Commercial Atta kneader machine available from 10 kg to 50 kg with high-torque Lakshmi copper motor.",
    features: [
      "10 kg to 50 kg Kneading Capacity",
      "High Torque Lakshmi Copper Motor",
      "Heavy Duty Stainless Steel Bowl",
      "Low Heat Dough Kneading Action",
      "Sturdy Anti-Vibration Base Frame"
    ],
    applications: ["Bakeries", "Restaurants", "Parotta Masters", "Marriage Halls"]
  },
  {
    id: "table-top-grinder",
    name: "Table Top Wet Grinder",
    category: "Wet Grinders",
    capacity: "2L - 5L Compact",
    motor: "High Torque Copper Motor",
    material: "ABS Body & SS Drum",
    voltage: "230V Single Phase",
    price: "₹7,500",
    rating: 4.8,
    reviewsCount: 31,
    badge: "Compact",
    image: productAssets.tableTopWetGrinder,
    description: "Compact table top wet grinder with heavy duty grinding stones for smooth batter.",
    features: [
      "Compact Countertop Space-Saving Design",
      "Durable ABS Body with Stainless Steel Drum",
      "High Efficiency Grinding Stones",
      "Easy Removable Drum for Wash"
    ],
    applications: ["Small Eateries", "Cloud Kitchens", "Commercial & Home Use"]
  },
  {
    id: "chicken-feather-remover",
    name: "Chicken Feather Removing Machine",
    category: "Processing Machines",
    capacity: "10 - 15 Birds / Min",
    motor: "1.5 HP Heavy Duty",
    material: "Full Stainless Steel 304",
    voltage: "230V / 415V",
    price: "₹26,000",
    rating: 4.8,
    reviewsCount: 22,
    badge: "Specialized",
    image: productAssets.chickenFeatherRemover,
    description: "Commercial stainless steel chicken feather plucking and removing machine with soft rubber fingers.",
    features: [
      "High Speed Feather Removal in Seconds",
      "Food Grade Rubber Plucking Fingers",
      "Full Stainless Steel Body Construction",
      "Water Spray Ring Attachment Included"
    ],
    applications: ["Poultry Processing", "Meat Stalls", "Hotels", "Catering Units"]
  },
  {
    id: "oil-dryer-machine",
    name: "Commercial Oil Dryer Machine",
    capacity: "15 kg / Batch",
    category: "Processing Machines",
    motor: "1 HP High Speed Motor",
    material: "Stainless Steel Contact Parts",
    voltage: "230V Single Phase",
    price: "₹29,500",
    rating: 4.9,
    reviewsCount: 18,
    badge: "High Output",
    image: productAssets.oilDryer,
    description: "Centrifugal oil dryer machine for removing excess oil from fried snacks, namkeen, chips, and vada.",
    features: [
      "High Speed Centrifugal Oil Extraction",
      "Removable Stainless Steel Basket",
      "Reduces Oil Content for Healthier Snacks",
      "Vibration Controlled Base"
    ],
    applications: ["Snack Manufacturers", "Sweet Shops", "Hotels", "Bakeries"]
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
    comment: "We purchased 3 Tilting Wet Grinders and an Atta Kneader 5 years ago for our hotel. High-quality build, smooth operation, and excellent after-sales service from Shahana team!"
  },
  {
    id: "rev-2",
    name: "New Anandha Bhavan",
    city: "Madurai",
    type: "Sweet & Vegetarian Restaurant Chain",
    rating: 5,
    verified: true,
    comment: "The U-Drum Mixer and Commercial Wet Grinders are working continuously in our central kitchen. Shahana Kitchen Equipment delivers genuine commercial grade quality with reliable AMC support."
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
