import { SectionHeading } from "@/components/SectionHeading";
import { scenarios } from "@/data/home";

export function ServiceScenarios() {
  return (
    <section id="scenarios" className="bg-[#f7fbff] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trade Scenarios"
          title="把 AI 能力放进真实外贸场景"
          description="官网首版用业务语言说明价值，让客户先理解司南云图能帮他们解决什么问题。"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
