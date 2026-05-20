export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F4FAF9]">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(244,250,249,0.96),rgba(204,245,242,0.72)_38%,rgba(244,250,249,0.92)_72%)]" />
      <div className="aurora-band absolute -left-1/4 top-[-18%] h-[42rem] w-[72rem] rotate-[-10deg] rounded-[45%] bg-[linear-gradient(90deg,rgba(0,166,166,0.22),rgba(28,199,199,0.12),rgba(7,59,58,0.14))] blur-3xl" />
      <div className="aurora-band-delayed absolute -right-1/4 top-[26%] h-[36rem] w-[68rem] rotate-[12deg] rounded-[42%] bg-[linear-gradient(90deg,rgba(214,181,109,0.12),rgba(28,199,199,0.16),rgba(7,59,58,0.12))] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,59,58,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(7,59,58,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,42,42,0.07)_1px,transparent_1px)] bg-[size:18px_18px] opacity-20" />
    </div>
  );
}
