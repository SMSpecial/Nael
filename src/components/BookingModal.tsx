import React, { useState, useEffect } from 'react';
import { CENTER_INFO, CAR_BRANDS } from '../data/centerData';
import { Language } from '../types';
import { X, Calendar, Clock, Car, Phone, User, CheckCircle2, MessageCircle, Navigation, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  language,
  initialService = '',
}) => {
  const isAr = language === 'ar';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carBrand, setCarBrand] = useState(CAR_BRANDS[0]);
  const [carModel, setCarModel] = useState('');
  const [service, setService] = useState(initialService || (isAr ? 'شاشات وكاميرات' : 'Screens & Cameras'));
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  // Cyber Security: Input Sanitization to prevent XSS and injection
  const sanitize = (text: string, maxLen: number) => {
    return text
      .replace(/[<>{}[\]\\\/^~`$]/g, '')
      .trim()
      .slice(0, maxLen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitize(name, 60);
    const cleanPhone = phone.replace(/[^0-9+\s-]/g, '').trim();

    if (!cleanName || cleanName.length < 2) {
      setError(isAr ? 'يرجى إدخال اسمك الكريم بشكل صحيح' : 'Please enter a valid name');
      return;
    }
    if (!cleanPhone || cleanPhone.length < 8 || cleanPhone.length > 18) {
      setError(isAr ? 'يرجى إدخال رقم هاتف صحيح للتواصل (8-15 رقماً)' : 'Please provide a valid phone number (8-15 digits)');
      return;
    }

    setName(cleanName);
    setPhone(cleanPhone);
    setCarModel(sanitize(carModel, 50));
    setNotes(sanitize(notes, 300));
    setError('');
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const cleanName = sanitize(name, 60);
    const cleanPhone = phone.replace(/[^0-9+\s-]/g, '').trim();
    const cleanModel = sanitize(carModel, 50);
    const cleanNotes = sanitize(notes, 300);

    const text = isAr
      ? `مرحباً مركز نائل عديلة، أود تأكيد موعد تجهيز سيارتي:\n\nالاسم: ${cleanName}\nرقم الهاتف: ${cleanPhone}\nالسيارة: ${carBrand} - ${cleanModel || 'عام'}\nالخدمة المطلوبة: ${service}\nالتاريخ المفضل: ${date || 'أقرب وقت'}\nالوقت: ${time}\nملاحظات: ${cleanNotes || 'لا يوجد'}\n\nيرجى تأكيد الموعد في فرعكم بطبربور.`
      : `Hello Nael Adelah Center, I would like to book a service appointment:\n\nName: ${cleanName}\nPhone: ${cleanPhone}\nVehicle: ${carBrand} - ${cleanModel || 'N/A'}\nRequested Service: ${service}\nPreferred Date: ${date || 'Earliest'}\nTime: ${time}\nNotes: ${cleanNotes || 'None'}\n\nPlease confirm my slot at Tabarbour branch.`;

    return `${CENTER_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              {isAr ? 'مركز نائل عديلة - طبربور' : 'Nael Adelah Center - Amman'}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {isAr ? 'حجز موعد كشف وتجهيز سيارة' : 'Book a Vehicle Upgrade Appointment'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'الاسم الكريم *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      type="text"
                      required
                      maxLength={60}
                      autoComplete="name"
                      placeholder={isAr ? 'مثال: محمد أحمد' : 'e.g. John Doe'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-white/15 rounded-xl ps-9 pe-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'رقم الهاتف (الواتساب) *' : 'Phone / WhatsApp *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute start-3 top-3" />
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      maxLength={18}
                      autoComplete="tel"
                      placeholder="079XXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-white/15 rounded-xl ps-9 pe-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Car Brand & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'نوع وماركة السيارة' : 'Vehicle Make'}
                  </label>
                  <select
                    value={carBrand}
                    onChange={(e) => setCarBrand(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {CAR_BRANDS.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'موديل وسنة الصنع' : 'Model & Year'}
                  </label>
                  <input
                    type="text"
                    maxLength={50}
                    placeholder={isAr ? 'مثال: كامري 2021 أو سوناتا' : 'e.g. Camry 2021'}
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Service Requested */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {isAr ? 'الخدمة أو الباقة المطلوبة' : 'Requested Upgrade'}
                </label>
                <input
                  type="text"
                  maxLength={80}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder={isAr ? 'مثال: شاشة أندرويد + سستم صوت + تظليل' : 'e.g. Android Screen & Sound System'}
                  className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'التاريخ المفضل للزيارة' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isAr ? 'الوقت المناسب' : 'Preferred Time'}
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {['10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM', '08:30 PM'].map((t) => (
                      <option key={t} value={t} className="bg-slate-900 text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {isAr ? 'ملاحظات أو استفسار إضافي (اختياري)' : 'Additional Notes (Optional)'}
                </label>
                <textarea
                  rows={2}
                  maxLength={300}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isAr ? 'أي مواصفات خاصة أو استفسار عن نوع السماعات أو الشاشة...' : 'Any specific preference...'}
                  className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  {isAr ? 'تأكيد طلب الموعد' : 'Confirm Appointment Request'}
                </button>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold text-white">
                {isAr ? 'تم استلام طلب موعدك بنجاح!' : 'Appointment Request Received!'}
              </h4>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {isAr
                  ? `أهلاً بك يا ${name}، سيقوم فريق مركز نائل عديلة بالتواصل معك لتأكيد الموعد واستقبال سيارتك في طبربور.`
                  : `Thank you ${name}, our technical team at Nael Adelah Center will reach out to confirm your visit.`}
              </p>

              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isAr ? 'فتح المحادثة عبر واتساب للتأكيد الفوري' : 'Open WhatsApp for Instant Confirmation'}</span>
                </a>

                <a
                  href={CENTER_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'الاتجاهات إلى المركز عبر خرائط Google' : 'Directions in Google Maps'}</span>
                </a>

                <button
                  onClick={handleReset}
                  className="mt-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
