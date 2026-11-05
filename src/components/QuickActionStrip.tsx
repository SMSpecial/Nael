import React from 'react';
import { CENTER_INFO } from '../data/centerData';
import { Language } from '../types';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ThumbsUp } from 'lucide-react';

interface QuickActionStripProps {
  language: Language;
}

export const QuickActionStrip: React.FC<QuickActionStripProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <div className="bg-slate-900/90 border-y border-white/10 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
        
        {/* Location & Navigation Link */}
        <a
          href={CENTER_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
        >
          <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-colors">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">
              {isAr ? 'موقع المركز على خرائط Google' : 'Google Maps Location'}
            </span>
            <span className="text-slate-400 text-xs">
              {isAr ? 'عمان - طبربور (شارع طارق)' : 'Amman - Tabarbour (Tariq St)'}
            </span>
          </div>
        </a>

        {/* Direct Call Phone */}
        <a
          href={`tel:${CENTER_INFO.rawPhone}`}
          className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
        >
          <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">
              {isAr ? 'اتصال مباشر بالمركز' : 'Direct Call'}
            </span>
            <span className="text-slate-400 text-xs font-mono" dir="ltr">
              {CENTER_INFO.phone}
            </span>
          </div>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={CENTER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors group"
        >
          <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">
              {isAr ? 'واتساب الاستفسارات والحجوزات' : 'WhatsApp Chat'}
            </span>
            <span className="text-slate-400 text-xs">
              {isAr ? 'رد فوري على الرسائل' : 'Instant Reply'}
            </span>
          </div>
        </a>

        {/* Facebook Page link */}
        <a
          href={CENTER_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group"
        >
          <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ThumbsUp className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">
              {isAr ? 'صفحتنا الرسمية على فيسبوك' : 'Official Facebook Page'}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1">
              <span>nael.adelah.center</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </a>

        {/* Opening Hours */}
        <div className="hidden xl:flex items-center gap-2 text-slate-400 border-s border-white/10 ps-4">
          <Clock className="w-4 h-4 text-amber-400" />
          <div>
            <span className="text-white text-xs font-medium block">
              {isAr ? 'أوقات الدوام الرسمية' : 'Operating Hours'}
            </span>
            <span className="text-slate-400 text-[11px]">
              {isAr ? CENTER_INFO.hoursAr : CENTER_INFO.hoursEn}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
