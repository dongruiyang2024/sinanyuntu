import Image from "next/image";
import Link from "next/link";
import { contact, navItems } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center" aria-label="司南云图首页">
          <Image
            src="/brand/sinan-cloudmap-logo-horizontal.svg"
            alt="司南云图"
            width={384}
            height={128}
            priority
            className="h-auto w-[224px] sm:w-96"
          />
        </Link>
        <nav className="hidden items-center gap-12 text-sm font-medium text-slate-600 lg:flex xl:gap-16">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative py-8">
                <button className="flex items-center gap-2 transition hover:text-brand-blue">
                  {item.label}
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 stroke-current text-slate-400 transition group-hover:rotate-180 group-hover:text-brand-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl shadow-slate-200/80 transition group-hover:visible group-hover:opacity-100">
                  <div className="grid gap-1">
                    {item.children.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="rounded-lg px-4 py-3 transition hover:bg-slate-50"
                      >
                        <span className="block font-semibold text-brand-ink">
                          {product.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {product.navDescription}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="transition hover:text-brand-blue">
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-brand-blue/30 bg-white px-4 text-sm font-semibold text-brand-blue shadow-sm shadow-brand-blue/10 transition hover:border-brand-blue hover:bg-brand-blue hover:text-white sm:h-11 sm:px-5"
        >
          预约沟通
        </a>
      </div>
    </header>
  );
}
