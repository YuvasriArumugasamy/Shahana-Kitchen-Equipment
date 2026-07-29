import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import SpareParts from './pages/SpareParts';
import Gallery from './pages/Gallery';
import Industries from './pages/Industries';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

const getInitialPage = () => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/admin')) {
    return 'admin';
  }
  const validPages = [
    'home', 'about', 'products', 'product-detail', 'services',
    'spare-parts', 'gallery', 'industries', 'reviews', 'contact', 'faq'
  ];
  const route = path.replace(/^\//, '').split('/')[0];
  return validPages.includes(route) ? route : 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleOpenQuoteModal = (product = null) => {
    setSelectedProduct(product);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // If in Admin mode
  if (currentPage === 'admin') {
    if (!isAdminLoggedIn) {
      return <AdminLogin onLoginSuccess={() => setIsAdminLoggedIn(true)} />;
    }
    return <AdminDashboard onLogout={() => { setIsAdminLoggedIn(false); setCurrentPage('home'); }} setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col justify-between selection:bg-[#6A1B9A] selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Dynamic Header Navbar */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenQuoteModal={() => handleOpenQuoteModal()} 
      />

      {/* Main Dynamic View Switching */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home 
            setCurrentPage={setCurrentPage} 
            onOpenQuoteModal={handleOpenQuoteModal} 
            onSelectProduct={handleSelectProduct}
          />
        )}
        {currentPage === 'about' && (
          <About 
            setCurrentPage={setCurrentPage} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'products' && (
          <Products 
            setCurrentPage={setCurrentPage} 
            onOpenQuoteModal={handleOpenQuoteModal} 
            onSelectProduct={handleSelectProduct}
          />
        )}
        {currentPage === 'product-detail' && (
          <ProductDetail 
            product={selectedProduct} 
            setCurrentPage={setCurrentPage} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'services' && (
          <Services 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'spare-parts' && (
          <SpareParts 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'gallery' && (
          <Gallery />
        )}
        {currentPage === 'industries' && (
          <Industries 
            setCurrentPage={setCurrentPage} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'reviews' && (
          <Reviews 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'contact' && (
          <Contact 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'faq' && (
          <FAQ 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onOpenQuoteModal={() => handleOpenQuoteModal()} 
      />

      {/* Quick Floating WhatsApp & Call Buttons */}
      <FloatingActions />

      {/* Interactive Quotation Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={handleCloseQuoteModal} 
        selectedProduct={selectedProduct}
      />

    </div>
  );
}
