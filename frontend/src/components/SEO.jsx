import React, { useEffect } from 'react';

const PAGE_SEO_MAP = {
  home: {
    title: 'Shahana Kitchen Equipment | Commercial Kitchen Machinery Manufacturer Tamil Nadu',
    description: 'Leading manufacturer & supplier of commercial wet grinders, instant wet grinders, dough kneaders, pulverizers, vegetable cutters & hotel kitchen equipment in Tirunelveli, Tamil Nadu.',
    keywords: 'Shahana Kitchen Equipment, commercial kitchen equipment manufacturer, commercial wet grinder, instant wet grinder Tirunelveli, atta kneader machine Tamil Nadu, commercial vegetable cutter, pulverizer machine, hotel kitchen equipment supplier'
  },
  about: {
    title: 'About Us | Shahana Kitchen Equipment Tirunelveli',
    description: 'Learn about Shahana Kitchen Equipment - 15+ years of excellence in manufacturing premium commercial kitchen machinery, heavy duty wet grinders & custom hotel kitchen setups.',
    keywords: 'About Shahana Kitchen Equipment, kitchen machinery manufacturer history, commercial wet grinder factory Tirunelveli, heavy duty food processing machines Tamil Nadu'
  },
  products: {
    title: 'Commercial Kitchen Machines & Wet Grinders | Shahana Kitchen Equipment',
    description: 'Explore our wide range of commercial wet grinders, instant batter grinders, dough kneaders, vegetable cutters, pulverizers, coconut scrapers & hotel kitchen equipment.',
    keywords: 'commercial wet grinder price, instant wet grinder 2hp 3hp, commercial dough kneader, vegetable cutting machine price, pulverizer machine Tamil Nadu, hotel kitchen equipment catalog'
  },
  services: {
    title: 'Equipment Maintenance, AMC & Repair Services | Shahana Kitchen Equipment',
    description: 'Professional installation, repair, copper motor rewinding, stone re-dressing, and annual maintenance contracts (AMC) for commercial kitchen machinery across Tamil Nadu.',
    keywords: 'commercial wet grinder repair, hotel kitchen equipment maintenance, wet grinder stone dressing, copper motor replacement, kitchen machine service Tirunelveli'
  },
  'spare-parts': {
    title: 'Genuine Commercial Kitchen Machine Spare Parts | Shahana Kitchen Equipment',
    description: 'Buy genuine V-belts, ball bearings, cutter blades, granite grinding stones, SS drums, copper motors, and switches for commercial wet grinders & kitchen machines.',
    keywords: 'wet grinder granite stones, commercial kitchen spare parts, copper motor, cutter blades, V-belt drive, kitchen machinery spare parts supplier'
  },
  gallery: {
    title: 'Factory & Product Photo Gallery | Shahana Kitchen Equipment',
    description: 'View photos & video demos of our heavy duty commercial wet grinders, instant grinders, dough kneaders, pulverizers, and hotel installation projects.',
    keywords: 'commercial kitchen equipment photos, wet grinder demo video, factory pictures, hotel kitchen setup images Tirunelveli'
  },
  industries: {
    title: 'Industries We Serve - Hotels, Caterers, Cloud Kitchens | Shahana Kitchen Equipment',
    description: 'Commercial kitchen machinery solutions tailored for hotels, multi-chain restaurants, marriage caterers, cloud kitchens, hostel mess, batter units & sweet factories.',
    keywords: 'hotel kitchen machinery, catering kitchen equipment, cloud kitchen equipment, restaurant wet grinders, batter manufacturing unit setup'
  },
  reviews: {
    title: 'Customer Reviews & Testimonials | Shahana Kitchen Equipment',
    description: 'Read genuine reviews and ratings from 500+ satisfied hotel owners, caterers, and food businesses across Tirunelveli, Madurai, Chennai & Coimbatore.',
    keywords: 'Shahana Kitchen Equipment reviews, wet grinder customer feedback, best commercial kitchen equipment manufacturer Tamil Nadu'
  },
  contact: {
    title: 'Contact Us | Shahana Kitchen Equipment Tirunelveli',
    description: 'Get in touch with Shahana Kitchen Equipment for quotes, custom machinery specifications, spare parts inquiries & site visits. Call +91 99949 44123.',
    keywords: 'Shahana Kitchen Equipment contact number, Tirunelveli kitchen equipment manufacturer address, wet grinder quote phone number'
  },
  faq: {
    title: 'Frequently Asked Questions (FAQ) | Shahana Kitchen Equipment',
    description: 'Answers to frequently asked questions about commercial wet grinders, capacity recommendations, warranty, shipping, installation, and spare parts.',
    keywords: 'commercial wet grinder FAQ, instant wet grinder capacity guide, kitchen machinery warranty, delivery options Tamil Nadu'
  }
};

export default function SEO({ currentPage, selectedProduct }) {
  useEffect(() => {
    let seoData = PAGE_SEO_MAP[currentPage] || PAGE_SEO_MAP['home'];

    // Dynamic SEO for Product Detail page
    if (currentPage === 'product-detail' && selectedProduct) {
      seoData = {
        title: `${selectedProduct.name} | Shahana Kitchen Equipment`,
        description: selectedProduct.description || `${selectedProduct.name} - Commercial grade kitchen machinery manufactured with 304 food-grade stainless steel & heavy duty copper motor.`,
        keywords: `${selectedProduct.name}, ${selectedProduct.category}, commercial ${selectedProduct.name} price, ${selectedProduct.name} Tirunelveli Tamil Nadu`
      };
    }

    // Update document title
    document.title = seoData.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seoData.title);

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seoData.description);

    // Update Twitter Title & Description
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seoData.title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seoData.description);

  }, [currentPage, selectedProduct]);

  return null;
}
