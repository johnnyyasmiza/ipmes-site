export default function GuidedTourVideo() {
  return (
    <section className="flex w-full justify-center px-4 py-10">
      <div className="w-full max-w-[420px] aspect-[9/16] overflow-hidden rounded-3xl bg-black shadow-xl">
        <video
          src="/videos/visite1.mp4"
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
