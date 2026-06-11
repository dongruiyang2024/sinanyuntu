import { SectionHeading } from "@/components/SectionHeading";
import { scenarios } from "@/data/home";

export function ServiceScenarios() {
  return (
    <section id="scenarios" className="bg-[#f7fbff] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trade Scenarios"
          title="面向外贸团队的高频增长场景"
          description="围绕市场进入、商品表达、线索运营和增长复盘，沉淀可复用的 AI 工作流与数据资产。"
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
