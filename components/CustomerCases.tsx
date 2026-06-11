import { SectionHeading } from "@/components/SectionHeading";
import { customerCases } from "@/data/site";

export function CustomerCases() {
  return (
    <section id="cases" className="bg-[#f7fbff] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer Cases"
          title="合作企业场景案例"
          description="围绕软件、制造、跨境品牌和贸易团队等不同业务场景，沉淀可复用的外贸 AI 增长链路。"
        />
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4">
          {customerCases.map((item) => (
            <article
              key={item.title}
              className="min-w-[280px] snap-start rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:min-w-[360px]"
            >
              <p className="text-sm font-semibold text-brand-blue">{item.industry}</p>
              <h3 className="mt-3 text-xl font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-6 rounded-lg bg-brand-blue/10 px-4 py-3 text-sm font-semibold text-brand-harbor">
                {item.result}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
