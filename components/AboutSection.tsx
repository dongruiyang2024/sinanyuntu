import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f7fbff] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Image
            src="/brand/sinan-cloudmap-mark.svg"
            alt=""
            width={112}
            height={112}
            className="h-24 w-24"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-brand-blue">
            About Sinan Cloudmap
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-brand-ink">
            构建外贸 AI 增长系统的科技公司
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            司南云图（杭州）科技有限公司面向外贸团队构建 AI
            增长系统，将市场机会、商品内容、客户触达和运营反馈连接为一张可导航、可复盘、可持续优化的业务云图。
          </p>
        </div>
      </div>
    </section>
  );
}
