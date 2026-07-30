/**
 * GALLERY DATA CONFIGURATION & CLIENT ASSETS MAPPING
 * 
 * You can put your client photos in:
 * 1. src/assets/clientAssets.js  (Recommended!)
 *    OR
 * 2. Directly change the 'img' path below to your asset file path!
 */

import { productAssets } from '../assets/clientAssets';

export const productsGallery = [
  {
    id: 1,
    title: "Instant Wet Grinder",
    category: "Wet Grinders",
    img: productAssets.instantWetGrinder,
    description: "Heavy duty commercial instant wet grinder"
  },
  {
    id: 2,
    title: "Tilting Wet Grinder",
    category: "Wet Grinders",
    img: productAssets.tiltingWetGrinder,
    description: "Hydraulic tilting commercial wet grinder"
  },
  {
    id: 3,
    title: "Dough Kneader",
    category: "Kneaders",
    img: productAssets.doughKneader,
    description: "Spiral dough kneader for bakeries & hotels"
  },
  {
    id: 4,
    title: "Vegetable Cutter",
    category: "Cutters",
    img: productAssets.vegetableCutter,
    description: "Multi-functional vegetable slicing machine"
  },
  {
    id: 5,
    title: "Coconut Scraper",
    category: "Scrapers",
    img: productAssets.coconutScraper,
    description: "Commercial double head coconut scraper"
  },
  {
    id: 6,
    title: "Mixer Machine",
    category: "Mixers",
    img: productAssets.mixerMachine,
    description: "Commercial heavy duty spice mixer"
  },
  {
    id: 7,
    title: "Pulverizer Machine",
    category: "Pulverizers",
    img: productAssets.pulverizerMachine,
    description: "High speed spice & grain pulverizer"
  },
  {
    id: 8,
    title: "Coconut Milk Extractor",
    category: "Extractors",
    img: productAssets.coconutMilkExtractor,
    description: "Stainless steel coconut milk extractor"
  },
  {
    id: 9,
    title: "Idli / Dosa Batter Mixer",
    category: "Mixers",
    img: productAssets.batterMixer,
    description: "Large volume batter mixing machine"
  },
  {
    id: 10,
    title: "Masala Grinder",
    category: "Grinders",
    img: productAssets.masalaGrinder,
    description: "Heavy duty masala grinding unit"
  },
  {
    id: 11,
    title: "Juice Machine",
    category: "Extractors",
    img: productAssets.juiceMachine,
    description: "Commercial fruit juice extraction machine"
  }
];

export const installationsGallery = [
  {
    id: 1,
    title: "Hotel Installation",
    location: "Madurai",
    img: clientAssetImages.hotelInstallation || "/images/gallery.png",
    description: "Complete commercial hotel kitchen setup"
  },
  {
    id: 2,
    title: "Restaurant Installation",
    location: "Coimbatore",
    img: clientAssetImages.restaurantInstallation || "/images/gallery1.png",
    description: "Modern restaurant stainless steel layout"
  },
  {
    id: 3,
    title: "Catering Unit Installation",
    location: "Tirunelveli",
    img: clientAssetImages.cateringInstallation || "/images/caterin unit installation.png",
    description: "Heavy-duty bulk catering equipment installation"
  },
  {
    id: 4,
    title: "Bakery Installation",
    location: "Chennai",
    img: clientAssetImages.bakeryInstallation || "/images/bakery installation.png",
    description: "Commercial bakery dough kneader & ovens"
  },
  {
    id: 5,
    title: "Institution Installation",
    location: "Trichy",
    img: clientAssetImages.institutionInstallation || "/images/institution installation.png",
    description: "College canteen & hospital kitchen equipment"
  },
  {
    id: 6,
    title: "Cloud Kitchen Setup",
    location: "Salem",
    img: clientAssetImages.cloudKitchenInstallation || "/images/hostel installation.png",
    description: "Compact multi-brand cloud kitchen installation"
  }
];

export const workshopGallery = [
  {
    id: 1,
    title: "Our Factory Workshop",
    img: clientAssetImages.workshop || "/images/our workshop.png",
    description: "Manufacturing & SS fabrication facility"
  },
  {
    id: 2,
    title: "Spare Parts Stock",
    img: clientAssetImages.spareParts || "/images/spare parts stock.png",
    description: "Genuine copper motors, bearings & gear sets"
  },
  {
    id: 3,
    title: "Machine Repair & Service",
    img: clientAssetImages.machineRepair || "/images/machine repair.png",
    description: "Expert technician maintenance & servicing"
  },
  {
    id: 4,
    title: "Testing & Quality Check",
    img: clientAssetImages.testing || "/images/testing .png",
    description: "Rigorous quality check before dispatch"
  },
  {
    id: 5,
    title: "Our Engineering Team",
    img: clientAssetImages.ourTeam || "/images/our team.png",
    description: "Experienced engineers and fabricators"
  },
  {
    id: 6,
    title: "Safe Delivery & Packing",
    img: clientAssetImages.delivery || "/images/delivery .png",
    description: "Heavy wooden box packing for safe transit"
  }
];

export const happyCustomersGallery = [
  {
    id: 1,
    title: "Hotel Sri Balaji",
    location: "Tirunelveli",
    img: clientAssetImages.hotelInstallation || "/images/gallery.png",
    testimonial: "Excellent wet grinder performance!"
  },
  {
    id: 2,
    title: "Anandha Bhavan",
    location: "Madurai",
    img: clientAssetImages.restaurantInstallation || "/images/gallery1.png",
    testimonial: "Reliable commercial kitchen setup."
  },
  {
    id: 3,
    title: "Sree Catering",
    location: "Kovilpatti",
    img: clientAssetImages.cateringInstallation || "/images/caterin unit installation.png",
    testimonial: "Prompt delivery and great service."
  }
];
