import { CloudMapVisual } from "@/components/CloudMapVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities } from "@/data/home";

export function CapabilityMap() {
  return (
    <section id="capabilities" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Capability Map"
          title="围绕外贸增长的 AI 能力图谱"
          description="从市场信号到复盘反馈，司南云图把关键运营环节连接成清晰的数据链。"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <CloudMapVisual compact />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50/80 p-5"
              >
                <p className="text-xs font-semibold uppercase text-brand-cyan">
                  {item.marker}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
