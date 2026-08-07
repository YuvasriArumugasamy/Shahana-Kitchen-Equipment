import React, { useEffect } from 'react';

const BASE_URL = 'https://www.shahanakitchenequipment.shop';

const PAGE_SEO_MAP = {
  home: {
    title: 'Shahana Kitchen Equipment | Commercial Wet Grinder & Kitchen Machinery Manufacturer Tamil Nadu',
    description: 'Buy commercial wet grinders, instant wet grinders, atta kneaders, pulverizers & vegetable cutters direct from manufacturer. 304 food-grade SS. Doorstep delivery across Tamil Nadu. Call +91 99949 44123.',
    keywords: 'commercial wet grinder manufacturer Tamil Nadu, instant wet grinder Tirunelveli, commercial kitchen equipment manufacturer, atta kneader machine price, hotel kitchen machinery supplier, commercial vegetable cutter, tilting wet grinder 25L, Shahana Kitchen Equipment',
    canonical: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/images/home bg.webp`
  },
  about: {
    title: 'About Shahana Kitchen Equipment | Commercial Kitchen Machinery Manufacturer Tirunelveli Tamil Nadu',
    description: 'Shahana Kitchen Equipment – trusted commercial kitchen machinery manufacturer in Tirunelveli, Tamil Nadu. 304 food-grade stainless steel machines, expert technicians, doorstep installation & AMC support.',
    keywords: 'Shahana Kitchen Equipment manufacturer profile, commercial kitchen equipment factory Tirunelveli, 304 SS kitchen machinery manufacturer Tamil Nadu, wet grinder manufacturer about us',
    canonical: `${BASE_URL}/about`,
    ogImage: `${BASE_URL}/images/about bg.webp`
  },
  products: {
    title: 'Commercial Kitchen Equipment Price List & Catalog | Shahana Kitchen Equipment Tamil Nadu',
    description: 'Browse complete catalog of commercial wet grinders (₹24,000+), instant grinders (₹36,000+), tilting wet grinders, atta kneaders, pulverizers, coconut scrapers, vegetable cutters & more. Factory direct pricing.',
    keywords: 'commercial wet grinder price Tamil Nadu, instant wet grinder price list, atta kneader machine price, commercial vegetable cutting machine price, tilting wet grinder 15L 25L price, pulverizer machine price, commercial kitchen equipment catalog',
    canonical: `${BASE_URL}/products`,
    ogImage: `${BASE_URL}/images/product bg.webp`
  },
  services: {
    title: 'Commercial Kitchen Equipment Repair, Motor Rewinding & AMC Service | Shahana Kitchen Equipment',
    description: 'Expert repair, motor rewinding, granite stone dressing, spare parts replacement & Annual Maintenance Contracts (AMC) for commercial kitchen machines across Tamil Nadu. Call +91 99949 44123.',
    keywords: 'commercial wet grinder repair Tamil Nadu, kitchen equipment service Tirunelveli, wet grinder motor rewinding, granite stone dressing, kitchen equipment AMC Tamil Nadu, catering equipment maintenance',
    canonical: `${BASE_URL}/services`,
    ogImage: `${BASE_URL}/images/machine repair.webp`
  },
  'spare-parts': {
    title: 'Genuine Commercial Kitchen Machine Spare Parts | V-Belt, Bearings, Motors | Shahana Kitchen Equipment',
    description: 'Buy genuine V-belts, SKF ball bearings, SS cutter blades, granite grinding stones, 304 SS drums, copper electric motors, gear sets & kitchen machine spare parts. Fast delivery Tamil Nadu.',
    keywords: 'wet grinder spare parts Tamil Nadu, commercial kitchen machine parts, V-belt drive replacement, SKF ball bearing kitchen equipment, copper motor 1HP 2HP 3HP price, granite grinding stone wet grinder, cutter blade replacement',
    canonical: `${BASE_URL}/spare-parts`,
    ogImage: `${BASE_URL}/images/spare parts stock.webp`
  },
  gallery: {
    title: 'Commercial Kitchen Equipment Photos & Installation Gallery | Shahana Kitchen Equipment',
    description: 'View real factory photos, video demos and client hotel kitchen installation images of our commercial wet grinders, dough kneaders, tilting grinders, pulverizers and catering kitchen setups.',
    keywords: 'commercial wet grinder photos, kitchen equipment factory gallery, hotel kitchen setup photos, commercial machinery installation images Tamil Nadu, Shahana Kitchen Equipment gallery',
    canonical: `${BASE_URL}/gallery`,
    ogImage: `${BASE_URL}/images/gallery.webp`
  },
  industries: {
    title: 'Commercial Kitchen Setup for Hotels, Restaurants, Caterers & Cloud Kitchens | Shahana Kitchen Equipment',
    description: 'Complete commercial kitchen equipment solutions for hotels, restaurants, marriage caterers, cloud kitchens, hostels, batter units, bakeries & sweet shops. Turnkey installation across Tamil Nadu.',
    keywords: 'hotel kitchen equipment Tamil Nadu, catering kitchen setup, commercial kitchen machinery for restaurants, cloud kitchen equipment supplier, hostel kitchen machinery, bakery equipment manufacturer Tamil Nadu',
    canonical: `${BASE_URL}/industries`,
    ogImage: `${BASE_URL}/images/industries bg.webp`
  },
  reviews: {
    title: 'Customer Reviews & Testimonials | Shahana Kitchen Equipment Tirunelveli',
    description: 'Read 500+ verified reviews from hotels, marriage caterers, cloud kitchens and restaurants across Tamil Nadu. Top-rated commercial kitchen equipment manufacturer with 4.9★ rating.',
    keywords: 'Shahana Kitchen Equipment reviews, best commercial wet grinder Tamil Nadu reviews, kitchen equipment manufacturer customer testimonials, hotel kitchen machinery ratings',
    canonical: `${BASE_URL}/reviews`,
    ogImage: `${BASE_URL}/images/our team.webp`
  },
  contact: {
    title: 'Contact Shahana Kitchen Equipment | +91 99949 44123 | Tirunelveli Tamil Nadu',
    description: 'Contact Shahana Kitchen Equipment for price quotes, installation, AMC service. Phone: +91 99949 44123. Address: 5/120 G, Sankaran Kovil Road, Ramayanpatti, Tirunelveli – 627358.',
    keywords: 'Shahana Kitchen Equipment contact number, kitchen equipment manufacturer Tirunelveli address, commercial wet grinder price quote, +91 99949 44123',
    canonical: `${BASE_URL}/contact`,
    ogImage: `${BASE_URL}/images/our workshop.webp`
  },
  faq: {
    title: 'Commercial Kitchen Equipment FAQ – Wet Grinder, Atta Kneader, Pulverizer | Shahana Kitchen Equipment',
    description: 'Answers to common questions about commercial wet grinder pricing, capacity selection, 304 SS grade, warranty, delivery across India, installation & AMC maintenance.',
    keywords: 'commercial wet grinder buying guide FAQ, kitchen equipment capacity selection, 304 SS food grade benefits, wet grinder warranty Tamil Nadu, commercial kitchen machinery FAQ',
    canonical: `${BASE_URL}/faq`,
    ogImage: `${BASE_URL}/images/product bg.webp`
  }
};

const setMeta = (selector, attribute, value) => {
  let el = document.querySelector(selector);
  if (el) el.setAttribute(attribute, value);
};

const setOrCreateMeta = (name, content, isProperty = false) => {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

export default function SEO({ currentPage, selectedProduct }) {
  useEffect(() => {
    let seo = PAGE_SEO_MAP[currentPage] || PAGE_SEO_MAP['home'];

    // Dynamic product detail page SEO
    if (currentPage === 'product-detail' && selectedProduct) {
      const productSlug = selectedProduct.id || selectedProduct.name?.toLowerCase().replace(/\s+/g, '-');
      seo = {
        title: `${selectedProduct.name} – Price, Specs & Quote | Shahana Kitchen Equipment Tamil Nadu`,
        description: `Buy ${selectedProduct.name} at factory price. ${selectedProduct.specs || ''} ${selectedProduct.motor || 'Lakshmi Copper Motor'}. 304 Food Grade SS. Doorstep delivery Tamil Nadu. Get free quote now.`,
        keywords: `${selectedProduct.name} price Tamil Nadu, buy ${selectedProduct.name}, ${selectedProduct.category} manufacturer, ${selectedProduct.name} commercial, kitchen equipment Tirunelveli`,
        canonical: `${BASE_URL}/products/${productSlug}`,
        ogImage: selectedProduct.image || `${BASE_URL}/images/product bg.webp`
      };
    }

    // Title
    document.title = seo.title;

    // Standard meta
    setOrCreateMeta('title', seo.title);
    setOrCreateMeta('description', seo.description);
    setOrCreateMeta('keywords', seo.keywords);

    // Canonical
    setCanonical(seo.canonical || `${BASE_URL}/`);

    // Open Graph
    setOrCreateMeta('og:title', seo.title, true);
    setOrCreateMeta('og:description', seo.description, true);
    setOrCreateMeta('og:url', seo.canonical || `${BASE_URL}/`, true);
    if (seo.ogImage) {
      setOrCreateMeta('og:image', seo.ogImage, true);
      setOrCreateMeta('og:image:alt', seo.title, true);
    }

    // Twitter
    setOrCreateMeta('twitter:title', seo.title);
    setOrCreateMeta('twitter:description', seo.description);
    setOrCreateMeta('twitter:url', seo.canonical || `${BASE_URL}/`);
    if (seo.ogImage) setOrCreateMeta('twitter:image', seo.ogImage);

  }, [currentPage, selectedProduct]);

  return null;
}
