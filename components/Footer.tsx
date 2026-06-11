import Image from "next/image";
import Link from "next/link";
import {
  complianceRecords,
  contact,
  copyrightText,
  footerTagline,
  legalLinks,
  navItems,
  socialChannels,
  solutionLinks,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fbff]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-7 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Image
              src="/brand/sinan-cloudmap-logo-horizontal.svg"
              alt="司南云图"
              width={320}
              height={107}
              className="h-auto w-[320px]"
            />
            <p className="max-w-sm text-sm leading-7 text-slate-600">{footerTagline}</p>
          </div>
          <div className="mt-4 grid max-w-sm grid-cols-3 gap-4">
            {socialChannels.map((channel) => (
              <div key={channel.label} className="min-w-0">
                <div
                  aria-label={`${channel.label} 二维码占位`}
                  className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid h-11 w-11 grid-cols-4 gap-0.5">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <span
                        key={`${channel.label}-${index}`}
                        className={
                          index % 3 === 0 || index === 5 || index === 14
                            ? "rounded-sm bg-brand-blue"
                            : "rounded-sm bg-slate-200"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-xs font-semibold text-brand-ink">{channel.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-brand-ink">站点导航</h3>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-brand-blue">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-ink">合作链接</h3>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              {solutionLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-blue"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-ink">联系</h3>
            <a
              className="mt-3 block break-words text-sm text-slate-600 hover:text-brand-blue"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-sm leading-6 text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 md:justify-start">
            <span>{copyrightText}</span>
            {complianceRecords.map((record) => (
              <span key={record}>{record}</span>
            ))}
          </div>
          <nav aria-label="底部法律链接" className="flex flex-wrap justify-center gap-x-6 gap-y-1 md:justify-end">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-brand-blue">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
