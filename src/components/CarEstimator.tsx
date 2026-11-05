import React, { useState } from 'react';
import { ESTIMATOR_ITEMS, CAR_BRANDS, CENTER_INFO } from '../data/centerData';
import { Language } from '../types';
import { Calculator, Check, Clock, ShieldCheck, Sparkles, Send, Gift, RotateCcw } from 'lucide-react';

interface CarEstimatorProps {
  language: Language;
  onBookEstimate: (summaryText: string) => void;
}

export const CarEstimator: React.FC<CarEstimatorProps> = ({
  language,
  onBookEstimate,
}) => {
  const isAr = language === 'ar';

  const [selectedBrand, setSelectedBrand] = useState(CAR_BRANDS[0]);
  const [carType, setCarType] = useState<'sedan' | 'suv' | 'electric' | 'pickup'>('sedan');
  const [carModelYear, setCarModelYear] = useState('2022');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'screen-standard',
    'ambient-interior',
    'tinting-ceramic-full'
  ]);

  const carTypes = [
    { id: 'sedan', labelAr: 'سيدان / صالون', labelEn: 'Sedan' },
    { id: 'suv', labelAr: 'جيب / SUV عائلية', labelEn: 'SUV / Crossover' },
    { id: 'electric', labelAr: 'كهربائية / هايبرد', labelEn: 'EV / Hybrid' },
    { id: 'pickup', labelAr: 'بيك آب / دفع رباعي', labelEn: 'Truck / 4x4' },
  ];

  const toggleItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const resetSelection = () => {
    setSelectedItems(['screen-standard', 'tinting-ceramic-full']);
  };

  // Calculations
  const totalPrice = selectedItems.reduce((sum, id) => {
    const item = ESTIMATOR_ITEMS.find((it) => it.id === id);
    return sum + (item ? item.basePriceJod : 0);
  }, 0);

  const totalMinutes = selectedItems.reduce((sum, id) => {
    const item = ESTIMATOR_ITEMS.find((it) => it.id === id);
    return sum + (item ? item.durationMinutes : 0);
  }, 0);

  const totalHours = (totalMinutes / 60).toFixed(1);

  // Free bonuses based on order value
  const hasBonusDiagnostics = totalPrice > 0;
  const hasBonusPhoneHolder = totalPrice >= 80;
  const hasBonusSoundInsulation = totalPrice >= 150;

  // Format WhatsApp Message
  const getWhatsAppEstimateUrl = () => {
    const selectedItemNames = selectedItems
      .map((id) => {
        const item = ESTIMATOR_ITEMS.find((it) => it.id === id);
        return item ? `• ${isAr ? item.nameAr : item.nameEn} (~${item.basePriceJod} د.أ)` : '';
      })
      .filter(Boolean)
      .join('\n');

    const msg = isAr
      ? `مرحباً مركز نائل عديلة، أود الاستفسار وحجز موعد لتجهيز سيارتي:\n\nالسيارة: ${selectedBrand} (${carModelYear})\nالفئة: ${carTypes.find(t => t.id === carType)?.labelAr}\n\nالإضافات المختارة:\n${selectedItemNames}\n\nالتكلفة التقديرية: حوالي ${totalPrice} دينار أردني\nالوقت المقدر: حوالي ${totalHours} ساعة عمل.\n\nيرجى تأكيد التوفر والموعد المناسب في طبربور.`
      : `Hello Nael Adelah Center, I would like an estimate and booking for my car:\n\nVehicle: ${selectedBrand} (${carModelYear})\nCategory: ${carTypes.find(t => t.id === carType)?.labelEn}\n\nSelected Options:\n${selectedItemNames}\n\nEstimated Cost: ~${totalPrice} JOD\nEstimated Duration: ~${totalHours} hours.\n\nPlease confirm availability at your Tabarbour center.`;

    return `${CENTER_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  const handleBookingHandover = () => {
    const selectedItemNames = selectedItems
      .map((id) => {
        const item = ESTIMATOR_ITEMS.find((it) => it.id === id);
        return item ? (isAr ? item.nameAr : item.nameEn) : '';
      })
      .filter(Boolean)
      .join(', ');

    const summary = `${selectedBrand} (${carModelYear}) - [${selectedItemNames}] - التكلفة المقدرة: ${totalPrice} د.أ`;
    onBookEstimate(summary);
  };

  return (
    <section id="estimator" className="py-16 md:py-24 bg-[#08090f] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
            {isAr ? '02. أداة تفاعلية حصرية' : '02. Interactive Builder'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {isAr ? 'حاسبة تخصيص وتجهيز سيارتك في مركز نائل عديلة' : 'Interactive Car Customization & Cost Estimator'}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            {isAr
              ? 'اختر نوع سيارتك والمواصفات المطلوبة لتحصل على تقدير فوري للتكلفة والوقت مع إمكانية الإرسال المباشر للواتساب.'
              : 'Configure your upgrades, calculate instant price and turnaround estimates, and send the spec sheet straight to WhatsApp.'}
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vehicle & Options Selection (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Car Category & Brand */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isAr ? 'الخطوة 1: حدد مواصفات سيارتك' : 'Step 1: Vehicle Details'}
                </span>
                <span className="text-xs text-slate-400">
                  {isAr ? 'متوافق مع سيارات البنزين والهايبرد والكهرباء' : 'All Gas, Hybrid & EV Models'}
                </span>
              </div>

              {/* Vehicle Type Tabs (Functional button controls) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {carTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setCarType(type.id as any)}
                    type="button"
                    className={`px-3 py-2.5 text-xs font-semibold rounded-xl border transition-all text-center whitespace-nowrap shrink-0 cursor-pointer ${
                      carType === type.id
                        ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-md shadow-amber-500/20'
                        : 'bg-slate-950 text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {isAr ? type.labelAr : type.labelEn}
                  </button>
                ))}
              </div>

              {/* Brand and Year Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'الشركة المصنعة للسيارة:' : 'Manufacturer Brand:'}
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {CAR_BRANDS.map((brand) => (
                      <option key={brand} value={brand} className="bg-slate-900 text-white">
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'سنة الصنع (الموديل):' : 'Model Year:'}
                  </label>
                  <select
                    value={carModelYear}
                    onChange={(e) => setCarModelYear(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {['2025 - 2026', '2023 - 2024', '2021 - 2022', '2018 - 2020', '2014 - 2017', '2010 - 2013', 'قبل 2010'].map((yr) => (
                      <option key={yr} value={yr} className="bg-slate-900 text-white">
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Customization Items Checklist */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    {isAr ? 'الخطوة 2: اختر الإضافات والتجهيزات' : 'Step 2: Select Desired Upgrades'}
                  </span>
                  <span className="text-xs text-slate-400">
                    {isAr ? 'يمكنك اختيار أكثر من خيار للحصول على باقة متكاملة' : 'Choose one or multiple items'}
                  </span>
                </div>
                
                <button
                  onClick={resetSelection}
                  type="button"
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
                </button>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ESTIMATOR_ITEMS.map((item) => {
                  const isSelected = selectedItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-400/80 shadow-md shadow-amber-500/10'
                          : 'bg-slate-950/70 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'bg-amber-400 text-black font-bold' : 'border border-white/30'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-semibold text-white leading-tight">
                          {isAr ? item.nameAr : item.nameEn}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                          <span className="font-mono text-amber-400 font-semibold tabular-nums">
                            ~{item.basePriceJod} {isAr ? 'د.أ' : 'JOD'}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-500" />
                            <span>{Math.round(item.durationMinutes / 60)} {isAr ? 'ساعة' : 'hrs'}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary & WhatsApp Direct Handover (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl relative">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Calculator className="w-4 h-4" />
                <span>{isAr ? 'ملخص التجهيز الفوري' : 'Live Estimate Summary'}</span>
              </div>
              
              <div className="text-sm font-semibold text-white pt-1">
                {selectedBrand} ({carModelYear})
              </div>

              {/* Price Display */}
              <div className="my-6 p-4 rounded-xl bg-black/60 border border-white/10 text-center">
                <div className="text-xs text-slate-400 mb-1">
                  {isAr ? 'التكلفة التقديرية الإجمالية' : 'Estimated Total Investment'}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums">
                  ~{totalPrice} <span className="text-lg font-sans text-white">{isAr ? 'دينار أردني' : 'JOD'}</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isAr ? `الوقت المقدر للتركيب: ~${totalHours} ساعة` : `Estimated Time: ~${totalHours} Hours`}</span>
                </div>
              </div>

              {/* Free Bonuses Included */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-semibold text-slate-300">
                  {isAr ? 'مزايا وهدايا مجانية مشمولة:' : 'Complimentary Inclusions:'}
                </div>
                
                <div className="text-xs text-emerald-400 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{isAr ? 'فحص وبرمجة كمبيوتر للسيارة مجاناً' : 'Free Computer Diagnostics'}</span>
                </div>

                {hasBonusPhoneHolder && (
                  <div className="text-xs text-emerald-400 flex items-center gap-2">
                    <Gift className="w-3.5 h-3.5 shrink-0" />
                    <span>{isAr ? 'قاعدة تثبيت مغناطيسية سريعة هدية' : 'Free Magnetic Phone Mount'}</span>
                  </div>
                )}

                {hasBonusSoundInsulation && (
                  <div className="text-xs text-emerald-400 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{isAr ? 'عزل صوتي مجاني للأبواب لزيادة النقاء' : 'Free Acoustic Door Damping'}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={getWhatsAppEstimateUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال المواصفات إلى واتساب المركز' : 'Send Spec to Center WhatsApp'}</span>
                </a>

                <button
                  onClick={handleBookingHandover}
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isAr ? 'تأكيد وحجز موعد بالمركز' : 'Book Appointment for this Spec'}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-3 leading-relaxed">
                {isAr
                  ? '* التكلفة تقديرية وتعتمد على موديل الشاشة والقطع المحددة بدقة عند المعاينة في المركز.'
                  : '* Estimates vary depending on exact specs and trim inspected at our Tabarbour workshop.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
