import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "司南云图（杭州）科技有限公司",
  description:
    "司南云图专注外贸 AI 产品与服务，帮助外贸团队把市场信号、商品信息、运营动作和增长数据连接成可执行的业务云图。",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
