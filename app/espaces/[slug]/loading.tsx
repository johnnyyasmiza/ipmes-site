export default function LoadingSpaceDetail() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto h-[620px] w-full max-w-6xl animate-pulse rounded-[2rem] bg-white shadow-xl shadow-[#00A6A6]/10">
        <div className="h-[280px] rounded-t-[2rem] bg-[#073B3A]/90 md:h-[460px]" />
        <div className="grid gap-6 p-6 md:grid-cols-[1.45fr_1fr]">
          <div className="space-y-4">
            <div className="h-5 w-40 rounded-full bg-[#E7F8F7]" />
            <div className="h-8 w-3/4 rounded-full bg-[#E7F8F7]" />
            <div className="h-24 rounded-3xl bg-[#F4FAF9]" />
          </div>
          <div className="h-40 rounded-[1.5rem] bg-[#F4FAF9]" />
        </div>
      </div>
    </div>
  );
}
