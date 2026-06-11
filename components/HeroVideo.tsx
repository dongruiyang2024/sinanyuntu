const heroVideoSrc = "";

export function HeroVideo() {
  return (
    <div className="relative">
      <video
        className="aspect-video w-full rounded-lg border border-slate-200 bg-slate-950 object-cover shadow-xl shadow-slate-200/80"
        poster="/brand/sinan-cloudmap-video-poster.svg"
        preload="metadata"
        muted
        playsInline
        aria-label="司南云图产品演示视频"
      >
        {heroVideoSrc ? <source src={heroVideoSrc} type="video/mp4" /> : null}
      </video>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/85 shadow-lg shadow-brand-blue/15 backdrop-blur">
          <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-brand-blue" />
        </span>
      </div>
    </div>
  );
}
