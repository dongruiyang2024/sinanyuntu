import Image from "next/image";
import Link from "next/link";
import {
  complianceRecords,
  contact,
  footerTagline,
  navItems,
  socialChannels,
  solutionLinks,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fbff]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.15fr_1.25fr] lg:px-8">
        <div className="min-w-0">
          <Image
            src="/brand/sinan-cloudmap-logo-horizontal.svg"
            alt="司南云图"
            width={260}
            height={87}
            className="h-auto w-[260px]"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">{footerTagline}</p>
          <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
            {socialChannels.map((channel) => (
              <div key={channel.label} className="min-w-0">
                <div
                  aria-label={`${channel.label} 二维码占位`}
                  className="flex h-24 w-24 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid h-16 w-16 grid-cols-4 gap-1">
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
                <p className="mt-3 text-sm font-semibold text-brand-ink">{channel.label}</p>
                <p className="mt-1 text-xs text-slate-500">{channel.placeholder}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-7 sm:grid-cols-3">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs leading-6 text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>备案信息</p>
          <div className="flex flex-col gap-1 lg:flex-row lg:gap-6">
            {complianceRecords.map((record) => (
              <span key={record}>{record}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
