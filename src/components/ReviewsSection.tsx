import React from 'react';
import { REVIEWS_DATA, CENTER_INFO } from '../data/centerData';
import { Language } from '../types';
import { Star, MessageSquare, ThumbsUp, ExternalLink, CheckCircle } from 'lucide-react';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <section className="py-16 md:py-24 bg-[#0a0c13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              {isAr ? '05. آراء وتجارب الزبائن' : '05. Customer Testimonials'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {isAr ? 'ثقة زبائننا في الأردن هي أكبر فخر لمركز نائل عديلة' : 'Real Reviews from Drivers Across Jordan'}
            </h2>
          </div>

          {/* Social Proof Aggregate Card */}
          <div className="p-4 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-4 shrink-0">
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
              {CENTER_INFO.googleRating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {isAr ? 'بناءً على 380+ تقييم على Google و Facebook' : 'Based on 380+ Google & Facebook Reviews'}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-400/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Clean unboxed platform metadata */}
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    {rev.source === 'google' ? (
                      <span className="text-blue-400 font-semibold">{isAr ? 'خرائط Google' : 'Google Maps'}</span>
                    ) : (
                      <span className="text-indigo-400 font-semibold">{isAr ? 'فيسبوك' : 'Facebook'}</span>
                    )}
                    <span className="text-slate-600">·</span>
                    <span>{isAr ? rev.dateAr : rev.dateEn}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  "{isAr ? rev.commentAr : rev.commentEn}"
                </p>
              </div>

              {/* Author & Vehicle */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {isAr ? rev.authorAr : rev.authorEn}
                  </div>
                  <div className="text-xs text-amber-400/90 font-mono">
                    {isAr ? rev.carAr : rev.carEn}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isAr ? 'زبون مؤكد' : 'Verified'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Actions Link */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
          <a
            href={CENTER_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-white/10 flex items-center gap-2 transition-colors"
          >
            <span>{isAr ? 'اقرأ جميع التقييمات على خرائط Google' : 'Read all reviews on Google Maps'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={CENTER_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-950/40 hover:bg-blue-900/40 text-blue-300 hover:text-blue-200 border border-blue-800/40 flex items-center gap-2 transition-colors"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{isAr ? 'تابع تجارب الزبائن على صفحتنا في فيسبوك' : 'Follow customer experiences on Facebook'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
