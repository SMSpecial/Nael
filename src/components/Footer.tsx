import React from 'react';
import { CENTER_INFO } from '../data/centerData';
import { Language } from '../types';
import { MapPin, Phone, MessageCircle, Facebook, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <footer className="bg-[#05060a] border-t border-white/10 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-black font-black text-lg flex items-center justify-center">
                N
              </div>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                {isAr ? CENTER_INFO.nameAr : CENTER_INFO.nameEn}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isAr
                ? 'مركز نائل عديلة، الاختيار الأول في عمان لصوتيات وزينة وإلكترونيات السيارات، شاشات أندرويد، الإضاءة المحيطية، والتظليل الحراري النانو سيراميك بأعلى مقاييس الجودة والضمان.'
                : 'Amman’s trusted destination for car audio, Android infotainment, ambient lighting, and nano-ceramic thermal window protection.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CENTER_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={CENTER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={CENTER_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-amber-500 hover:text-black transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'روابط الوصول السريع' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'الخدمات والتجهيزات' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'باقات التعديل الشاملة' : 'Upgrade Packages'}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'حاسبة التكلفة والوقت' : 'Car Estimator'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'معرض الأعمال السابقة' : 'Project Showcase'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'الموقع على خرائط Google' : 'Location on Google Maps'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'معلومات التواصل والزيارة' : 'Direct Contact'}
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {isAr ? CENTER_INFO.addressAr : CENTER_INFO.addressEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${CENTER_INFO.rawPhone}`} className="hover:text-amber-400 font-mono" dir="ltr">
                  {CENTER_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {isAr ? CENTER_INFO.hoursAr : CENTER_INFO.hoursEn}
                </span>
              </div>

              <div className="pt-2 text-slate-500 text-[11px] leading-relaxed">
                {isAr
                  ? 'جميع الأجهزة تخضع للفحص المسبق والتركيب بدون أي تجريح في أسلاك الوكالة للحفاظ على كفالة سيارتك.'
                  : 'All installations are factory-safe with direct plug-and-play harnesses to protect vehicle warranty.'}
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Copyright Row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {isAr ? CENTER_INFO.nameAr : CENTER_INFO.nameEn}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            <span className="block mt-1 text-[11px] text-slate-400">
              {isAr
                ? 'تطوير وهندسة برمجية: مؤسسة العلامة المميزة للمطور كريم خليل (Special Mark Co. Karim Khaleel) · جميع الحقوق محفوظة'
                : 'Engineered & Developed by Special Mark Co. Karim Khaleel · All Rights Reserved'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CENTER_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              {isAr ? 'خرائط Google' : 'Google Maps Profile'}
            </a>
            <span>·</span>
            <a
              href={CENTER_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              {isAr ? 'فيسبوك' : 'Facebook Page'}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
