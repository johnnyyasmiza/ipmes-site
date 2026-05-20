import WhatsAppButton from "./WhatsAppButton";

const slots = [
  { day: "Lun", time: "09:00", status: "Disponible" },
  { day: "Mar", time: "14:00", status: "Yoga" },
  { day: "Mer", time: "10:30", status: "Formation" },
  { day: "Jeu", time: "16:00", status: "Bureau" },
  { day: "Ven", time: "11:00", status: "Cuisine" },
  { day: "Sam", time: "15:30", status: "Événement" },
];

export default function AvailabilityPreview() {
  return (
    <section className="bg-white/70 py-20 backdrop-blur">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 2xl:max-w-[1500px]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            Planning
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            Aperçu des disponibilités.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#102A2A]/68">
            Cette vue est une prévisualisation visuelle. La réservation reste confirmée par WhatsApp pour le moment.
          </p>
          <div className="mt-7">
            <WhatsAppButton label="Demander disponibilité" />
          </div>
        </div>
        <div className="glass-card rounded-[24px] p-4 sm:rounded-[28px] sm:p-6 md:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((slot) => (
              <div key={`${slot.day}-${slot.time}`} className="rounded-[24px] bg-white/82 p-5 shadow-sm ring-1 ring-[#00A6A6]/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00A6A6]/10">
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
