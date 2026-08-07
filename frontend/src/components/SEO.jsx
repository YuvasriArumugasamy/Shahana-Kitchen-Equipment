import React, { useEffect } from 'react';

const PAGE_SEO_MAP = {
  home: {
    title: 'Shahana Kitchen Equipment | Commercial Kitchen Equipment & Wet Grinder Manufacturer Tamil Nadu',
    description: 'Shahana Kitchen Equipment is Tamil Nadu\'s #1 commercial kitchen machinery manufacturer & direct supplier of instant wet grinders, commercial wet grinders, dough kneaders, pulverizers & vegetable cutters in Tirunelveli, Madurai, Chennai, Coimbatore.',
    keywords: 'Shahana Kitchen Equipment, commercial kitchen equipment manufacturer, commercial wet grinder price, instant wet grinder Tirunelveli, commercial wet grinder manufacturer Tamil Nadu, atta kneader machine 10kg 25kg, commercial vegetable cutter 0.5 hp, pulverizer machine for hotel, hotel kitchen equipment supplier near me, catering kitchen machinery Madurai Coimbatore Chennai'
  },
  about: {
    title: 'About Shahana Kitchen Equipment | Leading Machinery Manufacturer Tirunelveli',
    description: '15+ years of trusted engineering in commercial wet grinders, stainless steel hotel equipment, food processing machinery & custom catering equipment in Tirunelveli, Tamil Nadu.',
    keywords: 'Shahana Kitchen Equipment factory Tirunelveli, commercial wet grinder manufacturer profile, stainless steel 304 food machinery factory Tamil Nadu, heavy duty kitchen equipment manufacturer'
  },
  products: {
    title: 'Commercial Kitchen Machines & Wet Grinders Catalog | Shahana Kitchen Equipment',
    description: 'Browse our heavy duty 304 food-grade stainless steel commercial wet grinders, instant batter grinders, tilting wet grinders, atta kneaders, pulverizers, coconut scrapers & potato peelers.',
    keywords: 'commercial wet grinder catalog, instant wet grinder 2hp 3hp price, commercial dough kneader 10kg to 50kg, vegetable cutting machine price Tamil Nadu, heavy duty flour mill pulverizer, commercial coconut scraper machine, popcorn machine commercial'
  },
  services: {
    title: 'Commercial Kitchen Equipment Repair, Motor Rewinding & AMC | Shahana Kitchen Equipment',
    description: 'Fast doorstep repair, Lakshmi copper motor rewinding, granite stone dressing, spare parts replacement and annual maintenance contracts (AMC) for commercial kitchens across Tamil Nadu.',
    keywords: 'commercial wet grinder repair near me, hotel kitchen machinery service Tirunelveli, wet grinder stone dressing, copper motor replacement, catering equipment maintenance contract AMC Tamil Nadu'
  },
  'spare-parts': {
    title: 'Genuine Commercial Kitchen Machine Spare Parts | Shahana Kitchen Equipment',
    description: 'Order genuine heavy duty V-belts, SKF ball bearings, hardened SS cutter blades, granite grinding stones, 304 SS drums, copper electric motors & switches with door delivery.',
    keywords: 'wet grinder granite stones, commercial kitchen spare parts supplier, 1.5hp 2hp 3hp copper motor, commercial cutter blades, V-belt drive, kitchen machinery spare parts Tirunelveli Tamil Nadu'
  },
  gallery: {
    title: 'Factory Video & Photo Gallery | Shahana Kitchen Equipment',
    description: 'Watch video demos and view real factory photos of our instant wet grinders, tilting wet grinders, dough kneaders, pulverizers & client hotel kitchen installations.',
    keywords: 'commercial wet grinder demo video, instant wet grinder working video, commercial kitchen machinery photos, hotel kitchen setup pictures Tamil Nadu'
  },
  industries: {
    title: 'Commercial Kitchen Setup for Hotels, Caterers & Cloud Kitchens | Shahana Kitchen Equipment',
    description: 'Turnkey commercial kitchen equipment setup for hotels, vegetarian & non-veg restaurants, marriage caterers, cloud kitchens, hostel mess, batter units & sweet shops.',
    keywords: 'hotel kitchen machinery setup, marriage catering kitchen equipment, cloud kitchen setup Tamil Nadu, batter manufacturing unit machinery, commercial restaurant kitchen equipment'
  },
  reviews: {
    title: 'Customer Reviews & Ratings | Shahana Kitchen Equipment Tirunelveli',
    description: 'Read 500+ genuine customer reviews from top hotel owners, marriage caterers & cloud kitchens across Tirunelveli, Madurai, Chennai, Coimbatore & Kerala.',
    keywords: 'Shahana Kitchen Equipment customer reviews, best commercial wet grinder brand Tamil Nadu, top rated hotel kitchen machinery manufacturer'
  },
  contact: {
    title: 'Contact Shahana Kitchen Equipment | Phone, Address & Google Location Tirunelveli',
    description: 'Contact Shahana Kitchen Equipment at +91 99949 44123. Location: 5/120 G, Shop No.7, M.S.K. Building, Sankaran Kovil Road, Ramayanpatti, Tirunelveli - 627358.',
    keywords: 'Shahana Kitchen Equipment contact number +91 99949 44123, kitchen equipment manufacturer address Tirunelveli, wet grinder price quote request'
  },
  faq: {
    title: 'Commercial Wet Grinder & Kitchen Machinery FAQ | Shahana Kitchen Equipment',
    description: 'Frequently asked questions on commercial wet grinder capacity selection, 304 SS grade benefits, warranty terms, shipping across India & maintenance tips.',
    keywords: 'commercial wet grinder buying guide, instant wet grinder vs traditional wet grinder, kitchen equipment warranty, commercial kitchen machinery FAQ'
  }
};

export default function SEO({ currentPage, selectedProduct }) {
  useEffect(() => {
    let seoData = PAGE_SEO_MAP[currentPage] || PAGE_SEO_MAP['home'];

    // Dynamic SEO for Product Detail page with super high keyword density
    if (currentPage === 'product-detail' && selectedProduct) {
      seoData = {
        title: `${selectedProduct.name} - Commercial Kitchen Equipment | Shahana Kitchen Equipment`,
        description: selectedProduct.description || `${selectedProduct.name} with ${selectedProduct.motor || 'Lakshmi Copper Motor'} and 304 Food Grade Stainless Steel build for commercial hotels, caterers & food processing units in Tamil Nadu.`,
        keywords: `${selectedProduct.name}, commercial ${selectedProduct.name}, ${selectedProduct.name} price, ${selectedProduct.category}, ${selectedProduct.name} manufacturer Tirunelveli Madurai Chennai Coimbatore Tamil Nadu`
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
