import React from 'react';
import { CENTER_INFO } from '../data/centerData';
import { Language } from '../types';
import { MapPin, Phone, MessageSquare, Globe, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isAr = language === 'ar';

  const navLinks = [
    { href: '#services', labelAr: 'الخدمات', labelEn: 'Services' },
    { href: '#packages', labelAr: 'الباقات', labelEn: 'Packages' },
    { href: '#estimator', labelAr: 'حاسبة التجهيز', labelEn: 'Estimator' },
    { href: '#gallery', labelAr: 'المعرض', labelEn: 'Gallery' },
    { href: '#location', labelAr: 'الموقع والتواصل', labelEn: 'Location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#090a0f]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adhering to the Top Bar Contract: 3 Zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element, whitespace-nowrap shrink-0) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {isAr ? CENTER_INFO.shortNameAr : CENTER_INFO.shortNameEn}
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                {isAr ? 'صوتيات وزينة السيارات' : 'Car Audio & Styling'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-amber-400/50"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'EN' : 'عربي'}</span>
            </button>

            <button
              onClick={onOpenBooking}
              type="button"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg shadow-md shadow-amber-500/20 transition-all whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>{isAr ? 'احجز موعدك الآن' : 'Book Appointment'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e17] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-850 hover:text-amber-400 rounded-lg transition-colors"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="w-full py-2.5 text-center text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              {isAr ? 'احجز موعدك الآن' : 'Book Appointment'}
            </button>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 px-1">
              <a
                href={CENTER_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-amber-400"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{isAr ? 'موقع طبربور' : 'Tabarbour Location'}</span>
              </a>
              <a
                href={`tel:${CENTER_INFO.rawPhone}`}
                className="flex items-center gap-1 hover:text-amber-400"
              >
                <Phone className="w-3.5 h-3.5" />
                <span dir="ltr">{CENTER_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
