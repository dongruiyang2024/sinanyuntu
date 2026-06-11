import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { products } from "@/data/site";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-brand-blue">Products</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-brand-ink md:text-5xl">
            产品服务
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
            四个产品模块构成外贸增长云图，从机会识别到复盘迭代，覆盖团队日常增长链路。
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-blue hover:shadow-lg hover:shadow-slate-200/80"
              >
                <p className="text-sm font-semibold uppercase text-brand-cyan">
                  {product.marker}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-brand-ink">
                  {product.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{product.summary}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-brand-blue">
                  进入产品页
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
