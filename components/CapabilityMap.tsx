import Link from "next/link";
import { CloudMapVisual } from "@/components/CloudMapVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities } from "@/data/site";

export function CapabilityMap() {
  return (
    <section id="capabilities" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product Matrix"
          title="产品矩阵，覆盖多类贸易增长场景"
          description="SinanPilot 是司南云图的外贸 AI 产品之一；同时我们也提供内贸客户增长、独立站增长和 GEO 软件服务，形成面向不同客户群体的产品组合。"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <CloudMapVisual compact />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="min-w-[260px] snap-start rounded-lg border border-slate-200 bg-slate-50/80 p-5 sm:min-w-[300px]"
              >
                <p className="text-xs font-semibold uppercase text-brand-cyan">
                  {item.marker}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-semibold text-brand-blue hover:text-brand-ink"
                >
                  查看产品详情
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
