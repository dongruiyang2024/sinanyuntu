import Link from "next/link";
import { CloudMapVisual } from "@/components/CloudMapVisual";
import { trustKeywords } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-blue">
            AI Growth Cloudmap for Global Trade
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
            外贸增长云图工作台
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            以 AI 机会雷达、商品内容引擎、客户触达协同和增长复盘中枢，
            将市场信号、商品表达、客户线索和运营反馈沉淀为一条可执行增长链路。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:contact@sinancloudmap.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-6 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-ink"
            >
              预约沟通
            </a>
            <Link
              href="/products/opportunity-radar"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-brand-harbor transition hover:border-brand-blue hover:text-brand-blue"
            >
              查看产品服务
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustKeywords.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <CloudMapVisual />
      </div>
    </section>
  );
}
