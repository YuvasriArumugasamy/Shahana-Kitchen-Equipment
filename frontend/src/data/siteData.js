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
    id: "instant-wet-grinder",
    name: "Instant Wet Grinder",
    category: "Wet Grinders",
    capacity: "25kg - 100kg / Hour",
    motor: "2 HP - 3 HP Heavy Duty Copper Motor",
    material: "304 Food Grade Stainless Steel",
    voltage: "230V Single Phase / 415V Three Phase",
    price: "₹36,000",
    rating: 5.0,
    reviewsCount: 52,
    badge: "Studio HD",
    image: productAssets.instantWetGrinder,
    description: "High speed commercial instant wet grinder for continuous batter grinding of rice and urad dal with minimal water.",
    features: [
      "2 HP Heavy Duty Copper Motor Drive",
      "Food Grade 304 Stainless Steel Body & Chamber",
      "Instant Continuous Batter Discharge",
      "Easy Dismantling & Washing",
      "Low Power Consumption"
    ],
    applications: ["Hotels", "Batter Units", "Restaurants", "Marriage Caterers"]
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
    name: "Coconut Crab",
    category: "Coconut Scrapers",
    capacity: "80 Coconuts / hr",
    motor: "0.5 HP Lakshmi Copper Motor",
    material: "Full Stainless Steel 304 & Red Safety Caps",
    voltage: "230V Single Phase",
    price: "₹14,500",
    rating: 4.9,
    reviewsCount: 45,
    badge: "Best Seller",
    image: productAssets.coconutScraper,
    description: "Commercial countertop coconut scraper with stainless steel bowl and spiked blade powered by 0.5 HP Lakshmi motor.",
    features: [
      "0.5 HP Lakshmi Heavy Duty Copper Motor",
      "Stainless Steel Collection Bowl & Hardened Blade",
      "Red Protective Corner Bumpers",
      "Compact Countertop Footprint",
      "Fast & Hygienic Coconut Scraping"
    ],
    applications: ["South Indian Restaurants", "Hotels", "Sweet Shops", "Caterers"]
  },
  {
    id: "double-head-coconut-scraper",
    name: "Double Head Heavy Duty Coconut Scraper",
    category: "Coconut Scrapers",
    capacity: "150 Coconuts / hr",
    motor: "1 HP Lakshmi Copper Motor",
    material: "Full Stainless Steel 304 Enclosure",
    voltage: "230V Single Phase",
    price: "₹19,500",
    rating: 5.0,
    reviewsCount: 38,
    badge: "Heavy Duty",
    image: productAssets.doubleCoconutScraper,
    description: "Heavy duty commercial double-head coconut scraper machine with dual funnels and heavy stainless steel enclosure for high speed restaurant scraping.",
    features: [
      "1 HP High Torque Copper Motor",
      "Dual Side Funnel Guards for Simultaneous Scraping",
      "Full Stainless Steel Body Enclosure",
      "Waterproof Power Switch & Safety Wire Plug",
      "Designed for Continuous Heavy Commercial Use"
    ],
    applications: ["Bulk Caterers", "Large Restaurants", "Temples & Marriage Halls", "Sweet Factories"]
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
    id: "tilting-wet-grinder-heavy",
    name: "Tilting Wet Grinder",
    category: "Wet Grinders",
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
  },
  {
    id: "gravy-machine",
    name: "Gravy Machine",
    category: "Pulverizers",
    capacity: "25kg/hr to 100kg/hr",
    motor: "2 HP - 5 HP Lakshmi Copper Motor",
    material: "304 Food Grade Stainless Steel",
    voltage: "230V Single Phase / 415V Three Phase",
    price: "₹35,000",
    rating: 4.9,
    reviewsCount: 38,
    badge: "Best Seller",
    image: productAssets.gravyMachine,
    description: "Commercial 304 food-grade stainless steel Gravy Machine and Pulverizer for smooth grinding of onion, tomato, ginger, garlic, coconut milk, and wet curry gravy pastes.",
    features: [
      "2 HP to 5 HP Heavy Duty Copper Motor",
      "Food Grade 304 Stainless Steel Body",
      "Multipurpose Fine Grinding Sieves Included",
      "Hygienic Easy Dismantling & Cleaning",
      "High Output Gravy Extraction"
    ],
    applications: ["Hotels", "Restaurants", "Catering Units", "Sweet Shops", "Cloud Kitchens"]
  },
  {
    id: "popcorn-machine",
    name: "Commercial Popcorn Machine",
    category: "Snack Machines",
    capacity: "8 oz Kettle / Batch",
    motor: "Built-in Electric Stirrer & Heater",
    material: "Tempered Glass & Red Coated Stainless Frame",
    voltage: "230V Single Phase",
    price: "₹18,500",
    rating: 4.8,
    reviewsCount: 25,
    badge: "Popular",
    image: productAssets.popcornMachine,
    description: "Commercial tabletop popcorn machine with heated warming deck, stainless steel kettle, and internal lighting for theaters, snack stalls, and food courts.",
    features: [
      "Heavy Duty Stainless Steel Non-Stick Kettle",
      "Built-in Deck Warmer Keeps Popcorn Fresh & Crisp",
      "Tempered Safety Glass Side Panels",
      "Simple 3-Switch Operation (Turn, Heat, Warm)",
      "Removable Crumb Tray for Easy Cleaning"
    ],
    applications: ["Theaters", "Snack Counters", "Shopping Malls", "Events & Catering", "Parks"]
  },
  {
    id: "potato-peeler-machine",
    name: "Commercial Potato Peeler Machine",
    category: "Vegetable Cutters",
    capacity: "5kg - 15kg / Batch",
    motor: "0.5 HP - 1 HP Lakshmi Copper Motor",
    material: "Full Stainless Steel & Abrasive Peeling Drum",
    voltage: "230V Single Phase",
    price: "₹22,000",
    rating: 4.9,
    reviewsCount: 30,
    badge: "Heavy Duty",
    image: productAssets.potatoPeeler,
    description: "Commercial potato peeling machine with high-friction carborundum abrasive disc for rapid peeling of potatoes, carrots, and root vegetables in minutes.",
    features: [
      "Rapid Peeling in under 2 minutes per batch",
      "Water Inlet Attachment for Flushing Skins Clean",
      "Heavy Duty Abrasive Disc with Long Lifespan",
      "Hygienic SS Discharge Chute and Locking Lid",
      "Minimal Potato Waste & Uniform Peeling"
    ],
    applications: ["Hotels", "Restaurants", "Hostel Mess", "Canteen Units", "Chips Manufacturers"]
  },
  {
    id: "rice-grain-washer",
    name: "Commercial Rice & Grain Washing Machine",
    category: "Processing Machines",
    capacity: "50kg - 200kg / Hour",
    motor: "High Flow Water Circulation System",
    material: "Full 304 Food Grade Stainless Steel",
    voltage: "230V Single Phase",
    price: "₹32,500",
    rating: 4.9,
    reviewsCount: 16,
    badge: "New",
    image: productAssets.riceWasher,
    description: "Commercial stainless steel rice and dal washing tank with bottom cone drainer and goose-neck water faucet for rapid grain cleaning in bulk catering.",
    features: [
      "304 Food Grade Stainless Steel Construction",
      "Gooseneck Faucet & Perforated Strainer Basket",
      "Cone Bottom Design for Rapid Dirt & Impurity Drainage",
      "Saves up to 70% Manual Labor and Water Consumption",
      "Sturdy Tubular Support Leg Base"
    ],
    applications: ["Marriage Halls", "Bulk Caterers", "Temples & Community Kitchens", "Hotels"]
  },
  {
    id: "banana-chips-slicer",
    name: "Banana Chips Slicer Machine",
    category: "Vegetable Cutters",
    capacity: "100kg - 250kg / Hour",
    motor: "0.5 HP Heavy Duty Copper Motor",
    material: "Stainless Steel Contact Parts & Hardened Blades",
    voltage: "230V Single Phase",
    price: "₹28,000",
    rating: 4.9,
    reviewsCount: 41,
    badge: "Specialized",
    image: productAssets.bananaSlicer,
    description: "High speed motorized banana slicer for uniform wafer thin slicing of raw bananas, plantains, potatoes, and tapioca directly into frying pans.",
    features: [
      "Precision Hardened SS Slicing Blades",
      "Adjustable Slice Thickness Control",
      "High Output Slicing for Snack Units",
      "Safe Hand Guard Feed Hopper",
      "Low Noise Gear Box Transmission"
    ],
    applications: ["Chips Manufacturers", "Kerala Snack Shops", "Sweet & Savory Outlets", "Hotels"]
  },
  {
    id: "commercial-meat-mincer",
    name: "Commercial Meat Mincer & Meat Grinder",
    category: "Processing Machines",
    capacity: "120kg - 300kg / Hour",
    motor: "1.5 HP High Torque Motor",
    material: "Heavy Stainless Steel Feed Tray & Housing",
    voltage: "230V / 415V",
    price: "₹38,000",
    rating: 4.8,
    reviewsCount: 20,
    badge: "Commercial",
    image: productAssets.meatMincer,
    description: "Heavy duty commercial stainless steel meat mincer for grinding mutton, chicken, fish, and meat paste in commercial kitchens and butchery shops.",
    features: [
      "Heavy Stainless Steel Worm Gear & Cutting Blades",
      "Large Top Loading Stainless Steel Hopper Tray",
      "Dual Hole Size Extruder Plates Included",
      "Reversing Switch to Clear Jammed Meat",
      "Easy Dismantling for Thorough Sanitization"
    ],
    applications: ["Butchery Shops", "Non-Veg Hotels", "Cloud Kitchens", "Sausage & Patty Units"]
  },
  {
    id: "heavy-duty-flour-mill",
    name: "Heavy Duty Commercial Flour Mill & Pulverizer",
    category: "Pulverizers",
    capacity: "50kg - 150kg / Hour",
    motor: "3 HP - 7.5 HP Blower Motor",
    material: "Full Stainless Steel Enclosure & Dust Bag",
    voltage: "415V Three Phase",
    price: "₹48,000",
    rating: 4.9,
    reviewsCount: 33,
    badge: "High Capacity",
    image: productAssets.flourMill,
    description: "Commercial heavy duty pulverizer and flour mill with cyclonic dust collector bag for fine grinding of wheat, rice, spices, turmeric, and grains.",
    features: [
      "High Speed Heavy Duty Grinding Rotor",
      "Built-in Cyclone Blower & Cotton Dust Collection Bag",
      "Multiple Sieve Screen Mesh Sizes",
      "Vibration Free Heavy Base Frame",
      "Dust-Free Clean Operation Environment"
    ],
    applications: ["Commercial Flour Mills", "Spice Processing Units", "Bakeries", "Hotels"]
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
