import React from 'react';
import { CENTER_INFO } from '../data/centerData';
import { Language } from '../types';
import { MapPin, Navigation, Phone, MessageCircle, Clock, Facebook, ExternalLink, Car, Shield, Wifi } from 'lucide-react';

interface LocationSectionProps {
  language: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <section id="location" className="py-16 md:py-24 bg-[#08090f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
            {isAr ? '06. الموقع وساعات العمل' : '06. Location & Contact'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {isAr ? 'تفضل بزيارة مركز نائل عديلة في عمّان - طبربور' : 'Visit Nael Adelah Center in Tabarbour, Amman'}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            {isAr
              ? 'موقع حيوي وسهل الوصول إليه مع مواقف مريحة وصالة استقبال مكيفة أثناء تجهيز سيارتك.'
              : 'Conveniently located with dedicated customer parking and an air-conditioned waiting lounge.'}
          </p>
        </div>

        {/* 2-Column Grid: Map + Contact & Facilities info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl">
            <div className="relative h-80 sm:h-96 w-full bg-slate-950">
              <iframe
                title="موقع مركز نائل عديلة على خرائط جوجل"
                src="https://maps.google.com/maps?q=31.9925166,35.9454142&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Maps Overlay Button */}
              <div className="absolute bottom-4 start-4 end-4 sm:end-auto flex flex-wrap gap-2">
                <a
                  href={CENTER_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{isAr ? 'الاتجاهات عبر تطبيق خرائط Google' : 'Directions in Google Maps'}</span>
                </a>
              </div>
            </div>

            {/* Address Banner */}
            <div className="p-5 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">
                    {isAr ? CENTER_INFO.addressAr : CENTER_INFO.addressEn}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {isAr ? 'عمان - بالقرب من دوار المشاغل وإشارات طبربور' : 'Near Mashaghel Roundabout & Tabarbour lights'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${CENTER_INFO.rawPhone}`}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span dir="ltr">{CENTER_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>{isAr ? 'أوقات العمل واستقبال السيارات' : 'Opening Hours'}</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-300">{isAr ? 'السبت - الخميس' : 'Saturday - Thursday'}</span>
                  <span className="font-mono text-white font-semibold">9:30 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-300">{isAr ? 'يوم الجمعة' : 'Friday'}</span>
                  <span className="font-mono text-white font-semibold">1:30 PM – 9:00 PM</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{isAr ? 'الورشة جاهزة لاستقبال سيارتك يومياً' : 'Workshop ready to receive your vehicle'}</span>
              </div>
            </div>

            {/* Workshop Amenities Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {isAr ? 'مرافق وخدمات الزبائن بالمركز' : 'Customer Amenities'}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'مواقف سيارات واسعة' : 'Dedicated Parking'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'واي فاي مجاني سريع' : 'Fast Free Wi-Fi'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'صالة استراحة مكيفة' : 'AC Waiting Lounge'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'فواتير وضمان رسمي' : 'Official Invoicing'}</span>
                </div>
              </div>
            </div>

            {/* Official Facebook Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-800/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-600 text-white">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {isAr ? 'صفحتنا الرسمية على فيسبوك' : 'Official Facebook Page'}
                  </div>
                  <div className="text-xs text-slate-400">
                    nael.adelah.center · {isAr ? 'أحدث الفيديوهات والعروض' : 'Latest posts & offers'}
                  </div>
                </div>
              </div>

              <a
                href={CENTER_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
              >
                <span>{isAr ? 'زيارة الصفحة' : 'Visit Page'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
