/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ServiceItem } from './types';
import { CENTER_INFO } from './data/centerData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickActionStrip } from './components/QuickActionStrip';
import { ServicesBento } from './components/ServicesBento';
import { CarEstimator } from './components/CarEstimator';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState('');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const isAr = language === 'ar';

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenBooking = (serviceTitle: string = '') => {
    setBookingInitialService(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceModal(service);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black font-sans antialiased`}
      style={{ fontFamily: isAr ? 'Cairo, sans-serif' : 'Plus Jakarta Sans, sans-serif' }}
    >
      {/* 1. Header / Navbar following Top Bar Contract */}
      <Navbar
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          language={language}
          onOpenBooking={() => handleOpenBooking()}
          onScrollToEstimator={handleScrollToEstimator}
        />

        {/* 3. Quick Action & Contact Strip */}
        <QuickActionStrip language={language} />

        {/* 4. Core Services Bento Grid */}
        <ServicesBento
          language={language}
          onSelectService={handleSelectService}
          onBookService={(srv) => handleOpenBooking(srv)}
        />

        {/* 5. Interactive Car Customization & Estimate Builder */}
        <CarEstimator
          language={language}
          onBookEstimate={(summary) => handleOpenBooking(summary)}
        />

        {/* 6. Curated Upgrade Bundles */}
        <PackagesSection
          language={language}
          onBookPackage={(pkg) => handleOpenBooking(pkg)}
        />

        {/* 7. Gallery & Completed Projects */}
        <GallerySection language={language} />

        {/* 8. Verified Reviews & Ratings */}
        <ReviewsSection language={language} />

        {/* 9. Live Location & Google Maps */}
        <LocationSection language={language} />
      </main>

      {/* 10. Quiet Footer */}
      <Footer language={language} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        language={language}
        initialService={bookingInitialService}
      />

      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        language={language}
        onBookService={(srv) => handleOpenBooking(srv)}
      />

      {/* Persistent Floating Quick WhatsApp Button */}
      <aside aria-label="Quick Contact" className="fixed bottom-5 end-5 z-40 flex flex-col items-end gap-2">
        <a
          href={CENTER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all flex items-center justify-center cursor-pointer group"
          title={isAr ? 'محادثة فورية مع مركز نائل عديلة' : 'Instant WhatsApp Chat'}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 font-bold text-xs text-black">
            {isAr ? 'تواصل معنا واتساب' : 'Chat on WhatsApp'}
          </span>
        </a>
      </aside>
    </div>
  );
}
