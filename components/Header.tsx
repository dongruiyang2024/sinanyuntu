import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center" aria-label="司南云图首页">
          <Image
            src="/brand/sinan-cloudmap-logo-horizontal.svg"
            alt="司南云图"
            width={195}
            height={65}
            priority
            className="h-12 w-auto sm:h-16"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative py-8">
                <button className="flex items-center gap-1 transition hover:text-brand-blue">
                  {item.label}
                  <span className="text-xs text-slate-400">⌄</span>
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
          href="mailto:contact@sinancloudmap.com"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-brand-ink px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue sm:h-11 sm:px-5"
        >
          预约沟通
        </a>
      </div>
    </header>
  );
}
