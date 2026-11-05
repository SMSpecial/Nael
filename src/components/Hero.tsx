import React from 'react';
import { CENTER_INFO } from '../data/centerData';
import { APP_IMAGES } from '../assets/images';
import { Language } from '../types';
import { ShieldCheck, Star, MapPin, Phone, MessageCircle, Navigation, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
  onScrollToEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenBooking,
  onScrollToEstimator,
}) => {
  const isAr = language === 'ar';

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Background radial gradient highlights */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Split: Text Content + High-Fidelity Focal Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Trust Kicker & Regional Indicator */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
              <span className="text-amber-400 font-semibold">{isAr ? 'عَمّان - طبربور' : 'Amman - Tabarbour'}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>{isAr ? 'شارع طارق بالقرب من دوار المشاغل' : 'Tariq St, near Mashaghel R/A'}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isAr ? 'مفتوح لاستقبالكم' : 'Open Daily'}</span>
              </span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.18] [text-wrap:balance]">
              {isAr ? (
                <>
                  القمة في <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">صوتيات وزينة السيارات</span> وأنظمة الشاشات الذكية
                </>
              ) : (
                <>
                  Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Car Audio & Custom Styling</span> in Amman
                </>
              )}
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {isAr ? (
                <>
                  مركز نائل عديلة، الوجهة المتخصصة الأولى في الأردن لتجهيز أنظمة الصوت الاحترافية، شاشات أندرويد و Apple CarPlay، الإضاءة المحيطية، والتظليل النانو سيراميك الحراري مع كفالات رسمية موثقة ودقة تركيب فائقة بدون تجريح أسلاك الوكالة.
                </>
              ) : (
                <>
                  Nael Adelah Center is Amman’s premier automotive hub for audiophile sound systems, Apple CarPlay & Android touchscreens, 64-color ambient lighting, and nano-ceramic thermal tinting with certified warranties.
                </>
              )}
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="px-6 py-3.5 text-sm md:text-base font-bold text-black bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-lg shadow-amber-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <span>{isAr ? 'احجز موعد كشف مجاني' : 'Book Free Consultation'}</span>
              </button>

              <button
                onClick={onScrollToEstimator}
                type="button"
                className="px-5 py-3.5 text-sm md:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'حاسبة تجهيز سيارتك' : 'Car Cost Calculator'}</span>
              </button>

              <a
                href={CENTER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm md:text-base font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/60 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'محادثة واتساب سريعة' : 'WhatsApp'}</span>
              </a>
            </div>

            {/* Quick Proof Metrics Row */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
              <div>
                <div className="text-xl md:text-2xl font-bold font-mono text-white tabular-nums">
                  +{CENTER_INFO.experienceYears} {isAr ? 'عاماً' : 'Years'}
                </div>
                <div className="text-xs text-slate-400">
                  {isAr ? 'خبرة في سوق الأردن' : 'Specialized Experience'}
                </div>
              </div>

              <div>
                <div className="text-xl md:text-2xl font-bold font-mono text-white tabular-nums">
                  {CENTER_INFO.completedCars}
                </div>
                <div className="text-xs text-slate-400">
                  {isAr ? 'سيارة تم تعديلها' : 'Upgraded Vehicles'}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xl md:text-2xl font-bold font-mono text-amber-400 tabular-nums">
                  <span>{CENTER_INFO.googleRating}</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                </div>
                <div className="text-xs text-slate-400">
                  {isAr ? 'تقييم خرائط Google (380+)' : 'Google Maps Rating'}
                </div>
              </div>

              <div>
                <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                  {CENTER_INFO.satisfactionRate}
                </div>
                <div className="text-xs text-slate-400">
                  {isAr ? 'نسبة رضا الزبائن' : 'Customer Satisfaction'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Marquee High-Fidelity Workshop Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl group">
              <img
                src={APP_IMAGES.hero}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/hero.jpg';
                }}
                alt="مركز نائل عديلة لصوتيات وزينة السيارات في عمان"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Verified Trust Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {isAr ? 'مركز نائل عديلة - طبربور' : 'Nael Adelah Center - Amman'}
                    </div>
                    <div className="text-xs text-slate-300">
                      {isAr ? 'كفالة خطية رسمية وضمان بدون تجريح أسلاك' : 'Official Written Warranty & OEM Plug-in'}
                    </div>
                  </div>
                </div>

                <a
                  href={CENTER_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-black rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{isAr ? 'خرائط Google' : 'Google Maps'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
