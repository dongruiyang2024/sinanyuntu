import { contact } from "@/data/home";

export function ContactSection() {
  return (
    <section id="contact" className="bg-brand-ink px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase text-brand-cyan">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            让我们一起梳理你的外贸增长云图
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            如果你正在探索 AI
            如何进入外贸运营，司南云图可以从业务链路、工具能力和落地节奏开始一起拆解。
          </p>
        </div>
        <div className="min-w-0 rounded-lg border border-white/15 bg-white/10 p-6">
          <p className="text-sm text-slate-300">联系邮箱</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2 block break-words text-2xl font-semibold text-white hover:text-brand-cyan"
          >
            {contact.email}
          </a>
          <p className="mt-5 text-sm leading-7 text-slate-300">{contact.prompt}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-ink transition hover:bg-brand-cyan"
          >
            发送邮件
          </a>
        </div>
      </div>
    </section>
  );
}
