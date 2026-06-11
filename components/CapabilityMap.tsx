import Link from "next/link";
import { CloudMapVisual } from "@/components/CloudMapVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities } from "@/data/site";

export function CapabilityMap() {
  return (
    <section id="capabilities" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI Capability Map"
          title="四个产品模块，组成外贸增长云图"
          description="从机会识别、商品表达、客户触达到增长复盘，司南云图把外贸运营拆成可配置、可追踪、可迭代的产品能力。"
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
