import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact, products } from "@/data/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  return {
    title: product ? `${product.title} - 司南云图` : "产品服务 - 司南云图",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/products" className="text-sm font-semibold text-brand-blue">
            产品服务
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase text-brand-cyan">
            {product.marker}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-brand-ink md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-600">
            {product.headline}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-semibold text-brand-ink">产品定位</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{product.summary}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-brand-ink">核心能力</h3>
            <div className="mt-5 grid gap-3">
              {product.capabilities.map((item) => (
                <div key={item} className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-brand-ink">适用场景</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {product.scenarios.map((item) => (
              <article key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-base font-semibold text-brand-ink">{item}</p>
              </article>
            ))}
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-6 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-brand-ink"
          >
            预约产品沟通
          </a>
          {product.officialUrl ? (
            <a
              href={product.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-0 mt-4 inline-flex h-12 items-center justify-center rounded-full border border-brand-blue/30 bg-white px-6 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue hover:text-white sm:ml-3"
            >
              访问产品官网
            </a>
          ) : null}
        </div>
      </section>
      <Footer />
    </main>
  );
}
