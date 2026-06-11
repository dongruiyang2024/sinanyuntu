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
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-7 sm:px-6 lg:grid-cols-[minmax(0,1fr)_500px] lg:px-8">
        <div className="min-w-0">
          <div className="h-[72px] w-[202px] shrink-0 overflow-hidden sm:h-[76px] sm:w-[238px]">
            <Image
              src="/brand/sinan-cloudmap-logo-horizontal.svg"
              alt="司南云图"
              width={340}
              height={113}
              className="h-[96px] w-[288px] max-w-none -translate-x-[15px] -translate-y-[18px] sm:h-[113px] sm:w-[340px] sm:-translate-x-[17px] sm:-translate-y-[21px]"
            />
          </div>
          <p className="mt-2 max-w-[360px] text-sm leading-7 text-slate-600">{footerTagline}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-[0.75fr_0.95fr_1.35fr]">
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
            <div className="mt-3 grid max-w-[156px] grid-cols-3 gap-2">
              {socialChannels.map((channel) => (
                <div key={channel.label} className="grid justify-items-center gap-1">
                  <div
                    aria-label={`${channel.label} 二维码占位`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm shadow-slate-200/70"
                  >
                    <div className="grid h-7 w-7 grid-cols-4 gap-0.5">
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
                  <p className="text-[10px] font-medium leading-4 text-slate-600">
                    {channel.label}
                  </p>
                </div>
              ))}
            </div>
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
