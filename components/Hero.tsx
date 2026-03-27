export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #2BA8A0 0%, #7DC4A0 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-white/10" />
      <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[150px] rounded-full bg-white/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          AI E-News — 每日 AI 新知平台
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          掌握最新 AI 技術與應用趨勢，與團隊一起成長
        </p>
      </div>
    </section>
  );
}
