import React, { useEffect } from 'react';

const BASE_URL = 'https://www.shahanakitchenequipment.shop';

const PAGE_SEO_MAP = {
  home: {
    title: 'Shahana Kitchen Equipment | Wet Grinder Manufacturer Tirunelveli & Commercial Kitchen Machines',
    description: 'Shahana Kitchen Equipment is the premier wet grinder manufacturer Tirunelveli. Get idli dosa batter grinder price, wet grinder near me, batter machine for hotel price, tilting wet grinder 25L price, wet grinder repair near me, and granite stone replacement wet grinder.',
    keywords: 'wet grinder manufacturer Tirunelveli, idli dosa batter grinder price, wet grinder near me, batter machine for hotel price, tilting wet grinder 25L price, wet grinder repair near me, granite stone replacement wet grinder, commercial wet grinder price, instant wet grinder Tirunelveli, commercial wet grinder manufacturer Tamil Nadu, hotel kitchen equipment near me, Shahana Kitchen Equipment',
    canonical: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/images/home bg.webp`
  },
  about: {
    title: 'About Shahana Kitchen Equipment | Wet Grinder Manufacturer Tirunelveli Tamil Nadu',
    description: 'Shahana Kitchen Equipment – trusted wet grinder manufacturer Tirunelveli. Specializing in 304 food-grade SS idli dosa batter grinders, tilting wet grinders 25L, batter machine for hotel price, wet grinder repair near me, and granite stone replacement wet grinder.',
    keywords: 'wet grinder manufacturer Tirunelveli, Shahana Kitchen Equipment Tirunelveli, idli dosa batter grinder price, wet grinder near me, batter machine for hotel price, tilting wet grinder 25L price, wet grinder repair near me, granite stone replacement wet grinder',
    canonical: `${BASE_URL}/about`,
    ogImage: `${BASE_URL}/images/about bg.webp`
  },
  products: {
    title: 'Commercial Wet Grinder Price List | Idli Dosa Batter Machine, Tilting Wet Grinder 25L',
    description: 'Direct factory pricing for commercial wet grinders. Get idli dosa batter grinder price, tilting wet grinder 25L price, batter machine for hotel price, instant wet grinders, pulverizers & dough kneaders from wet grinder manufacturer Tirunelveli.',
    keywords: 'idli dosa batter grinder price, tilting wet grinder 25L price, batter machine for hotel price, wet grinder manufacturer Tirunelveli, wet grinder near me, commercial wet grinder price list, instant wet grinder price Tirunelveli, granite stone replacement wet grinder',
    canonical: `${BASE_URL}/products`,
    ogImage: `${BASE_URL}/images/product bg.webp`
  },
  services: {
    title: 'Wet Grinder Repair Near Me & Maintenance Service | Tirunelveli Tamil Nadu',
    description: 'Fast doorstep wet grinder repair near me, Lakshmi copper motor rewinding, granite stone replacement wet grinder & AMC service across Tirunelveli, Madurai, Tenkasi, Nagercoil. Call +91 99949 44123.',
    keywords: 'wet grinder repair near me, granite stone replacement wet grinder, wet grinder manufacturer Tirunelveli, commercial kitchen equipment service Tamil Nadu, wet grinder motor rewinding near me, batter machine repair near me, hotel kitchen machinery service',
    canonical: `${BASE_URL}/services`,
    ogImage: `${BASE_URL}/images/machine repair.webp`
  },
  'spare-parts': {
    title: 'Granite Stone Replacement Wet Grinder & Machine Spare Parts | Tirunelveli',
    description: 'Buy genuine granite stone replacement wet grinder, natural black granite grinding stones, V-belts, SKF ball bearings, copper motors & SS drums direct from manufacturer in Tirunelveli.',
    keywords: 'granite stone replacement wet grinder, wet grinder spare parts Tirunelveli, granite grinding stone price, wet grinder stone replacement, wet grinder repair near me, wet grinder manufacturer Tirunelveli, V belt wet grinder, wet grinder motor price',
    canonical: `${BASE_URL}/spare-parts`,
    ogImage: `${BASE_URL}/images/spare parts stock.webp`
  },
  gallery: {
    title: 'Commercial Kitchen Equipment Photos & Hotel Installation Gallery | Shahana Kitchen Equipment',
    description: 'See our wet grinder manufacturer Tirunelveli factory photos, idli dosa batter grinders, tilting wet grinder 25L demos, and hotel kitchen installations across Tamil Nadu.',
    keywords: 'wet grinder manufacturer Tirunelveli, idli dosa batter grinder price, tilting wet grinder 25L price, wet grinder near me, batter machine for hotel price, commercial kitchen setup photos Tamil Nadu',
    canonical: `${BASE_URL}/gallery`,
    ogImage: `${BASE_URL}/images/gallery.webp`
  },
  industries: {
    title: 'Batter Machine for Hotel Price & Commercial Kitchen Setup | Tamil Nadu',
    description: 'Get batter machine for hotel price, tilting wet grinder 25L price, idli dosa batter grinder for hotels, restaurants, marriage halls, cloud kitchens & commercial canteens from wet grinder manufacturer Tirunelveli.',
    keywords: 'batter machine for hotel price, idli dosa batter grinder price, tilting wet grinder 25L price, wet grinder manufacturer Tirunelveli, wet grinder near me, hotel kitchen equipment Tirunelveli',
    canonical: `${BASE_URL}/industries`,
    ogImage: `${BASE_URL}/images/industries bg.webp`
  },
  reviews: {
    title: 'Customer Reviews | Wet Grinder Manufacturer Tirunelveli | Shahana Kitchen Equipment',
    description: 'Read 500+ verified customer reviews for wet grinder manufacturer Tirunelveli. Highly rated for idli dosa batter grinder price, tilting wet grinder 25L, and wet grinder repair near me.',
    keywords: 'wet grinder manufacturer Tirunelveli, idli dosa batter grinder price, wet grinder near me, wet grinder repair near me, granite stone replacement wet grinder, Shahana Kitchen Equipment reviews',
    canonical: `${BASE_URL}/reviews`,
    ogImage: `${BASE_URL}/images/our team.webp`
  },
  contact: {
    title: 'Contact Wet Grinder Manufacturer Tirunelveli | Shahana Kitchen Equipment',
    description: 'Contact wet grinder manufacturer Tirunelveli for idli dosa batter grinder price, tilting wet grinder 25L price, batter machine for hotel price & wet grinder repair near me. Call +91 99949 44123.',
    keywords: 'wet grinder manufacturer Tirunelveli, wet grinder near me, idli dosa batter grinder price, batter machine for hotel price, tilting wet grinder 25L price, wet grinder repair near me, granite stone replacement wet grinder',
    canonical: `${BASE_URL}/contact`,
    ogImage: `${BASE_URL}/images/contact bg.webp`
  },
  faq: {
    title: 'Commercial Wet Grinder FAQ | Idli Dosa Batter Machine & Repair Tirunelveli',
    description: 'Frequently asked questions about wet grinder manufacturer Tirunelveli, idli dosa batter grinder price, tilting wet grinder 25L price, wet grinder repair near me & granite stone replacement wet grinder.',
    keywords: 'wet grinder manufacturer Tirunelveli, idli dosa batter grinder price, wet grinder near me, batter machine for hotel price, tilting wet grinder 25L price, wet grinder repair near me, granite stone replacement wet grinder',
    canonical: `${BASE_URL}/faq`,
    ogImage: `${BASE_URL}/images/faq bg.webp`
  }
};

export default function SEO({ currentPage, selectedProduct }) {
  useEffect(() => {
    let seoData = PAGE_SEO_MAP[currentPage] || PAGE_SEO_MAP['home'];

    // Dynamic SEO for Product Detail page with target long-tail keywords
    if (currentPage === 'product-detail' && selectedProduct) {
      seoData = {
        title: `${selectedProduct.name} Price - Wet Grinder Manufacturer Tirunelveli | Shahana`,
        description: selectedProduct.description || `${selectedProduct.name} - Commercial grade kitchen machinery from wet grinder manufacturer Tirunelveli. 304 SS & heavy duty copper motor.`,
        keywords: `${selectedProduct.name}, wet grinder manufacturer Tirunelveli, idli dosa batter grinder price, wet grinder near me, batter machine for hotel price, tilting wet grinder 25L price, ${selectedProduct.category}`
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
