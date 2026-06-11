type CloudMapVisualProps = {
  compact?: boolean;
};

const nodes = [
  { label: "买家信号", position: "left-[12%] top-[56%]", dot: "bg-brand-blue" },
  { label: "智能判断", position: "left-[43%] top-[18%]", dot: "bg-brand-gold" },
  { label: "销售执行", position: "right-[13%] top-[58%]", dot: "bg-brand-cyan" },
  { label: "增长复盘", position: "left-[36%] bottom-[13%]", dot: "bg-brand-harbor" },
];

export function CloudMapVisual({ compact = false }: CloudMapVisualProps) {
  const gradientId = compact ? "signalGradientCompact" : "signalGradientHero";

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/80 ${
        compact ? "min-h-[280px]" : "min-h-[420px]"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(68,87,232,0.10),rgba(24,197,177,0.13)_55%,rgba(242,165,26,0.12))]" />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-brand-blue/20" />
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full border border-brand-cyan/20" />
      <svg
        viewBox="0 0 520 360"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="外贸 AI 云图视觉"
      >
        <path
          d="M80 210 C155 95 260 90 330 165 S430 255 475 145"
          fill="none"
          stroke="#4457E8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 12"
        />
        <path
          d="M118 236 C196 286 287 292 378 236"
          fill="none"
          stroke="#264E68"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M164 256 L260 82 L356 256"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="164" y1="82" x2="356" y2="256">
            <stop stopColor="#4457E8" />
            <stop offset="1" stopColor="#18C5B1" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-brand-ink shadow-sm ring-1 ring-slate-200 ${node.position}`}
        >
          <span className={`h-2.5 w-2.5 rounded-full ${node.dot}`} />
          {node.label}
        </div>
      ))}
      <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
        <p className="text-sm font-semibold text-brand-ink">Signal · Judge · Action · Loop</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          从买家信号到销售执行，把外贸客户增长沉淀为连续进化的数据链路。
        </p>
      </div>
    </div>
  );
}
