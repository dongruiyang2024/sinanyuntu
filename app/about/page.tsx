import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <Image
            src="/brand/sinan-cloudmap-mark.svg"
            alt=""
            width={180}
            height={180}
            className="h-32 w-32 lg:h-44 lg:w-44"
          />
          <div>
            <p className="text-sm font-semibold uppercase text-brand-blue">About</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-brand-ink md:text-5xl">
              关于司南云图
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
              司南云图（杭州）科技有限公司面向外贸团队构建 AI
              增长系统，将市场机会、商品内容、客户触达和运营反馈连接成一张可导航、可复盘、可持续优化的业务云图。
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["理念", "让外贸团队从经验判断走向数据化、产品化、可复盘的增长工作方式。"],
            ["方向", "以 AI 产品能力连接市场、商品、客户和运营反馈，形成连续增长链路。"],
            ["合作", "从客户品类、目标市场和运营阶段出发，共同配置第一张增长云图。"],
          ].map(([title, description]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-ink">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
