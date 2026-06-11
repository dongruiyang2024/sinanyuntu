import Image from "next/image";
import Link from "next/link";
import { contact, navItems, solutionLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <Image
            src="/brand/sinan-cloudmap-logo-horizontal.svg"
            alt="司南云图"
            width={180}
            height={60}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            司南云图（杭州）科技有限公司构建外贸 AI 增长系统，把机会识别、商品表达、客户触达与增长复盘连接成可执行的业务云图。
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
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
    </footer>
  );
}
