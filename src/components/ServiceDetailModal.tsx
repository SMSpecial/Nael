import React from 'react';
import { ServiceItem, Language } from '../types';
import { CENTER_INFO } from '../data/centerData';
import { X, ShieldCheck, Clock, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  language: Language;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  language,
  onBookService,
}) => {
  if (!service) return null;
  const isAr = language === 'ar';

  const handleBook = () => {
    onClose();
    onBookService(isAr ? service.titleAr : service.titleEn);
  };

  const getWhatsAppServiceInquiry = () => {
    const text = isAr
      ? `مرحباً مركز نائل عديلة، أود الاستفسار عن تفاصيل وتركيب خدمة: ${service.titleAr}`
      : `Hello Nael Adelah Center, I would like to inquire about: ${service.titleEn}`;
    return `${CENTER_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 bg-slate-950 shrink-0">
          <img
            src={service.image}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/audio.jpg';
            }}
            alt={isAr ? service.titleAr : service.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 end-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 start-6 end-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              {isAr ? service.subtitleAr : service.subtitleEn}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isAr ? service.titleAr : service.titleEn}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            {isAr ? service.descriptionAr : service.descriptionEn}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/70 border border-white/10 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block">{isAr ? 'المدة التقديرية للعمل' : 'Estimated Time'}</span>
                <span className="text-white font-semibold">{isAr ? service.estimatedTimeAr : service.estimatedTimeEn}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block">{isAr ? 'الضمان والكفالة' : 'Warranty'}</span>
                <span className="text-white font-semibold">{isAr ? service.warrantyAr : service.warrantyEn}</span>
              </div>
            </div>
          </div>

          {/* Feature checklist */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {isAr ? 'أهم مميزات الخدمة في مركز نائل عديلة:' : 'Key Service Highlights:'}
            </div>
            <div className="space-y-2">
              {(isAr ? service.featuresAr : service.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brands list */}
          <div className="pt-2 border-t border-white/10">
            <div className="text-xs text-slate-400 mb-2">
              {isAr ? 'أبرز الماركات العالمية المتوفرة لدينا:' : 'Featured Brands:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {service.brands.map((brand) => (
                <span
                  key={brand}
                  className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-xs font-mono border border-white/5"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <a
            href={getWhatsAppServiceInquiry()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 rounded-xl flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? 'استفسار واتساب' : 'Inquire on WhatsApp'}</span>
          </a>

          <button
            onClick={handleBook}
            className="px-6 py-2.5 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{isAr ? 'احجز موعد لهذه الخدمة' : 'Book This Service'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
