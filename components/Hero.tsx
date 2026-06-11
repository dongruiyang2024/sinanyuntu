import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { contact } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-24 lg:pt-20 xl:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-blue">
            AI Growth Products for Trade Teams
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl lg:whitespace-nowrap xl:text-[56px]">
            AI 时代的贸易增长专家
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            司南云图围绕外贸、内贸、独立站与 GEO 场景构建 AI 增长产品矩阵，把客户信号、销售执行和内容可见度连接成可落地的增长系统。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-6 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-ink"
            >
              预约沟通
            </a>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-brand-harbor transition hover:border-brand-blue hover:text-brand-blue"
            >
              查看产品服务
            </Link>
          </div>
        </div>
        <HeroVideo />
      </div>
    </section>
  );
}
