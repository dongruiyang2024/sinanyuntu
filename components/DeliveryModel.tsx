import { SectionHeading } from "@/components/SectionHeading";
import { deliverySteps } from "@/data/home";

export function DeliveryModel() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product + Service"
          title="产品底座 + 业务配置 + 增长迭代"
          description="不是一次性交付工具，也不是停留在咨询建议；司南云图把 AI 产品能力嵌入外贸团队的增长链路。"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {deliverySteps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-brand-gold">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-brand-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
