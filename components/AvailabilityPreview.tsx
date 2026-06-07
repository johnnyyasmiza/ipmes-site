"use client";

import type { LanguageCode } from "./i18n";
import { useLanguage } from "./i18n";
import WhatsAppButton from "./WhatsAppButton";

const text: Record<
  LanguageCode,
  {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
    slots: { day: string; time: string; status: string }[];
  }
> = {
  fr: {
    eyebrow: "Planning",
    title: "Aperçu des disponibilités.",
    description:
      "Cette vue est une prévisualisation visuelle. La réservation reste confirmée par WhatsApp pour le moment.",
    button: "Demander disponibilité",
    slots: [
      { day: "Lun", time: "09:00", status: "Disponible" },
      { day: "Mar", time: "14:00", status: "Yoga" },
      { day: "Mer", time: "10:30", status: "Formation" },
      { day: "Jeu", time: "16:00", status: "Bureau" },
      { day: "Ven", time: "11:00", status: "Cuisine" },
      { day: "Sam", time: "15:30", status: "Événement" },
    ],
  },
  ar: {
    eyebrow: "البرنامج",
    title: "لمحة عن الأوقات المتاحة.",
    description: "هذه معاينة بصرية فقط. يتم تأكيد الحجز حاليا عبر واتساب.",
    button: "طلب التوفر",
    slots: [
      { day: "الإثنين", time: "09:00", status: "متاح" },
      { day: "الثلاثاء", time: "14:00", status: "يوغا" },
      { day: "الأربعاء", time: "10:30", status: "تكوين" },
      { day: "الخميس", time: "16:00", status: "مكتب" },
      { day: "الجمعة", time: "11:00", status: "مطبخ" },
      { day: "السبت", time: "15:30", status: "فعالية" },
    ],
  },
  en: {
    eyebrow: "Schedule",
    title: "Availability preview.",
    description: "This is a visual preview. Bookings are currently confirmed by WhatsApp.",
    button: "Request availability",
    slots: [
      { day: "Mon", time: "09:00", status: "Available" },
      { day: "Tue", time: "14:00", status: "Yoga" },
      { day: "Wed", time: "10:30", status: "Training" },
      { day: "Thu", time: "16:00", status: "Office" },
      { day: "Fri", time: "11:00", status: "Kitchen" },
      { day: "Sat", time: "15:30", status: "Event" },
    ],
  },
  es: {
    eyebrow: "Agenda",
    title: "Vista previa de disponibilidad.",
    description: "Esta vista es una previsualización. La reserva se confirma por WhatsApp por ahora.",
    button: "Solicitar disponibilidad",
    slots: [
      { day: "Lun", time: "09:00", status: "Disponible" },
      { day: "Mar", time: "14:00", status: "Yoga" },
      { day: "Mié", time: "10:30", status: "Formación" },
      { day: "Jue", time: "16:00", status: "Oficina" },
      { day: "Vie", time: "11:00", status: "Cocina" },
      { day: "Sáb", time: "15:30", status: "Evento" },
    ],
  },
  de: {
    eyebrow: "Planung",
    title: "Verfügbarkeitsvorschau.",
    description: "Diese Ansicht ist eine Vorschau. Buchungen werden derzeit per WhatsApp bestätigt.",
    button: "Verfügbarkeit anfragen",
    slots: [
      { day: "Mo", time: "09:00", status: "Verfügbar" },
      { day: "Di", time: "14:00", status: "Yoga" },
      { day: "Mi", time: "10:30", status: "Kurs" },
      { day: "Do", time: "16:00", status: "Büro" },
      { day: "Fr", time: "11:00", status: "Küche" },
      { day: "Sa", time: "15:30", status: "Event" },
    ],
  },
  tr: {
    eyebrow: "Takvim",
    title: "Uygunluk önizlemesi.",
    description: "Bu görünüm görsel bir önizlemedir. Rezervasyon şimdilik WhatsApp ile onaylanır.",
    button: "Uygunluk iste",
    slots: [
      { day: "Pzt", time: "09:00", status: "Uygun" },
      { day: "Sal", time: "14:00", status: "Yoga" },
      { day: "Çar", time: "10:30", status: "Eğitim" },
      { day: "Per", time: "16:00", status: "Ofis" },
      { day: "Cum", time: "11:00", status: "Mutfak" },
      { day: "Cmt", time: "15:30", status: "Etkinlik" },
    ],
  },
};

export default function AvailabilityPreview() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const current = text[language];

  return (
    <section className="bg-white/70 py-20 backdrop-blur" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 2xl:max-w-[1500px]">
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            {current.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            {current.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#102A2A]/68">
            {current.description}
          </p>
          <div className="mt-7">
            <WhatsAppButton label={current.button} />
          </div>
        </div>
        <div className="glass-card rounded-[24px] p-4 sm:rounded-[28px] sm:p-6 md:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {current.slots.map((slot) => (
              <div
                key={`${slot.day}-${slot.time}`}
                className="rounded-[24px] bg-white/82 p-5 shadow-sm ring-1 ring-[#00A6A6]/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00A6A6]/10"
              >
                <p className="text-sm font-black text-[#00A6A6]">{slot.day}</p>
                <p className="mt-2 text-2xl font-black text-[#073B3A]">{slot.time}</p>
                <p className="mt-2 rounded-full bg-[#F4FAF9] px-3 py-1 text-xs font-bold text-[#102A2A]/68">
                  {slot.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
