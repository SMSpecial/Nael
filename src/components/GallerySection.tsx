import React, { useState } from 'react';
import { GALLERY_PROJECTS } from '../data/centerData';
import { GalleryProject, Language } from '../types';
import { Sparkles, Eye, CheckCircle2, X } from 'lucide-react';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [filter, setFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(null);

  const categories = [
    { id: 'all', labelAr: 'جميع الأعمال', labelEn: 'All Projects' },
    { id: 'audio', labelAr: 'سستم وصوتيات', labelEn: 'Sound Systems' },
    { id: 'screens', labelAr: 'شاشات وكاميرات', labelEn: 'Screens & Tech' },
    { id: 'lighting', labelAr: 'إضاءة محيطية وليد', labelEn: 'Ambient Lighting' },
    { id: 'tinting', labelAr: 'تظليل نانو سيراميك', labelEn: 'Thermal Tinting' },
  ];

  const filteredProjects = filter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#08090f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              {isAr ? '04. معرض الأعمال والتجهيزات' : '04. Project Portfolio'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {isAr ? 'معاينة حية من ورشتنا في طبربور عمان' : 'Live Showcase from Our Workshop in Amman'}
            </h2>
          </div>

          {/* Filter Bar (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-amber-400 text-black font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden group hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div
                className="relative h-60 overflow-hidden cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/audio.jpg';
                  }}
                  alt={isAr ? project.titleAr : project.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge unboxed category info */}
                <div className="absolute top-3 start-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-white/10">
                  {isAr ? project.categoryLabelAr : project.categoryLabelEn}
                </div>

                <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white">
                  <span className="text-xs text-slate-300 font-mono">
                    {isAr ? project.carAr : project.carEn}
                  </span>
                  <span className="p-1.5 rounded-lg bg-amber-400 text-black opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {isAr ? project.titleAr : project.titleEn}
                  </h3>

                  <div className="space-y-1.5 mt-3">
                    {(isAr ? project.highlightsAr : project.highlightsEn).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {isAr ? 'شغل مركز نائل عديلة' : 'Crafted by Nael Adelah'}
                  </span>
                  <button
                    onClick={() => setActiveProject(project)}
                    type="button"
                    className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                  >
                    {isAr ? 'معاينة التفاصيل' : 'View Details'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-2xl w-full bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 end-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeProject.image}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/audio.jpg';
              }}
              alt={isAr ? activeProject.titleAr : activeProject.titleEn}
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-80 object-cover"
            />

            <div className="p-6">
              <div className="text-xs font-semibold text-amber-400 mb-1">
                {isAr ? activeProject.categoryLabelAr : activeProject.categoryLabelEn} · {isAr ? activeProject.carAr : activeProject.carEn}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isAr ? activeProject.titleAr : activeProject.titleEn}
              </h3>

              <div className="space-y-2 mt-4 pt-3 border-t border-white/10">
                <div className="text-xs font-semibold text-slate-300">
                  {isAr ? 'المواصفات الفنية المنجزة في المركز:' : 'Technical Work Completed:'}
                </div>
                {(isAr ? activeProject.highlightsAr : activeProject.highlightsEn).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  {isAr ? 'إغلاق المعاينة' : 'Close Preview'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
