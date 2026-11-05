import React from 'react';
import { UPGRADE_PACKAGES } from '../data/centerData';
import { UpgradePackage, Language } from '../types';
import { Check, Clock, Sparkles, Shield, ArrowRight, ArrowLeft } from 'lucide-react';

interface PackagesSectionProps {
  language: Language;
  onBookPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  language,
  onBookPackage,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#0a0c13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              {isAr ? '03. باقات التجهيز المتكاملة' : '03. Curated Upgrade Bundles'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {isAr ? 'عروض وباقات مدروسة لتوفير أقصى قيمة وأداء' : 'Engineered Bundles for Maximum Performance & Value'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
            {isAr
              ? 'وفر حتى 25% مع باقاتنا المتكاملة التي تجمع أفضل الأجهزة مع ضمان كامل وتركيب احترافي في نفس اليوم.'
              : 'Save up to 25% with bundled configurations combining premium hardware, seamless integration, and full warranties.'}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPGRADE_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-400 shadow-xl shadow-amber-500/10'
                    : 'bg-slate-900/70 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popularity badge */}
                {isPopular && (
                  <div className="absolute -top-3 start-6 px-3 py-0.5 rounded-full bg-amber-400 text-black font-extrabold text-[11px] uppercase tracking-wider shadow-sm">
                    {isAr ? pkg.tagAr : pkg.tagEn}
                  </div>
                )}

                <div>
                  <div className="text-xs font-medium text-slate-400 mb-1">
                    {isAr ? pkg.tagAr : pkg.tagEn}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {isAr ? pkg.nameAr : pkg.nameEn}
                  </h3>

                  {/* Price Block */}
                  <div className="mb-5 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                        {pkg.priceJod}
                      </span>
                      <span className="text-xs text-slate-300 font-semibold">
                        {isAr ? 'دينار أردني' : 'JOD'}
                      </span>
                      {pkg.originalPriceJod && (
                        <span className="text-xs text-slate-500 line-through font-mono tabular-nums ms-auto">
                          {pkg.originalPriceJod} {isAr ? 'د.أ' : 'JOD'}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isAr ? `مدة العمل: ${pkg.timeEstimateAr}` : `Duration: ${pkg.timeEstimateEn}`}</span>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {(isAr ? pkg.featuresAr : pkg.featuresEn).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onBookPackage(isAr ? pkg.nameAr : pkg.nameEn)}
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>{isAr ? 'احجز هذه الباقة' : 'Book This Bundle'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
