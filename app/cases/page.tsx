import { CustomerCases } from "@/components/CustomerCases";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-brand-blue">Cases</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-brand-ink md:text-5xl">
            企业案例
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
            以外贸团队的真实增长场景为中心，展示司南云图在市场、商品、线索和复盘环节的产品化落地方式。
          </p>
        </div>
      </section>
      <CustomerCases />
      <Footer />
    </main>
  );
}
