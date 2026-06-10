import Image from "next/image";
import { navItems } from "@/data/home";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center" aria-label="司南云图首页">
          <Image
            src="/brand/sinan-cloudmap-logo-horizontal.svg"
            alt="司南云图"
            width={195}
            height={65}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-blue">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-brand-ink px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue sm:h-11 sm:px-5"
        >
          预约沟通
        </a>
      </div>
    </header>
  );
}
