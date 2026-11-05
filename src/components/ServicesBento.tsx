import React from 'react';
import { SERVICES_DATA } from '../data/centerData';
import { ServiceItem, Language } from '../types';
import { Shield, Clock, ArrowRight, ArrowLeft, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServicesBentoProps {
  language: Language;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({
  language,
  onSelectService,
  onBookService,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-16 md:py-24 bg-[#0a0c13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              {isAr ? '01. خدماتنا التخصصية' : '01. Specialized Services'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {isAr ? (
                <>تجهيزات احترافية تليق بسيارتك بأعلى معايير الجودة العالمية</>
              ) : (
                <>Professional Customizations Built to World-Class Standards</>
              )}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
            {isAr
              ? 'نستخدم أحدث الأجهزة والتقنيات مع الحفاظ الكامل على ضفيرة وكهرباء الوكالة بدون أي تجريح أو تعديل عشوائي.'
              : 'Factory-harness safe installation using precision tools, certified parts, and guaranteed craftsmanship.'}
          </p>
        </div>

        {/* Bento Grid: 2 Marquee Cards (span-2) + 4 Structured Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {SERVICES_DATA.map((service, index) => {
            // Give prominence to Audio Systems and Smart Screens as Marquee col-span-6/7
            const isMarquee = index === 0 || index === 1;
            const colSpan = isMarquee ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={service.id}
                className={`${colSpan} flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-white/10 hover:border-amber-400/40 transition-all duration-300 overflow-hidden group shadow-lg`}
              >
                {/* Media Header Slot */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/audio.jpg';
                    }}
                    alt={isAr ? service.titleAr : service.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent pointer-events-none" />

                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="absolute top-4 start-4 end-4 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="font-semibold text-amber-400">
                      {isAr ? `تبدأ من ${service.startingPriceJod} د.أ` : `From ${service.startingPriceJod} JOD`}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{isAr ? service.estimatedTimeAr : service.estimatedTimeEn}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {isAr ? service.titleAr : service.titleEn}
                    </h3>
                    
                    <p className="text-xs text-amber-400/90 font-medium mt-1">
                      {isAr ? service.subtitleAr : service.subtitleEn}
                    </p>

                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {isAr ? service.descriptionAr : service.descriptionEn}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 space-y-2">
                      {(isAr ? service.featuresAr : service.featuresEn).slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Brand endorsements (unboxed, clean typographic format) */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="text-slate-500 font-semibold">{isAr ? 'الماركات:' : 'Brands:'}</span>
                      {service.brands.map((brand, bIndex) => (
                        <React.Fragment key={brand}>
                          <span className="text-slate-300 font-mono">{brand}</span>
                          {bIndex < service.brands.length - 1 && <span className="text-slate-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      type="button"
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 py-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isAr ? 'عرض المواصفات والضمان' : 'View Specifications'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onBookService(isAr ? service.titleAr : service.titleEn)}
                      type="button"
                      className="px-3.5 py-1.5 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
                    >
                      {isAr ? 'طلب الخدمة' : 'Request Service'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
