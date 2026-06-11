export const products = [
  {
    slug: "opportunity-radar",
    href: "/products/opportunity-radar",
    title: "机会雷达",
    navDescription: "市场进入与机会品类识别",
    marker: "Signal",
    headline: "把目标市场和机会品类变成可追踪线索",
    summary:
      "机会雷达持续扫描目标市场、关键词变化、采购趋势与竞争态势，帮助外贸团队从模糊判断进入可比较、可复盘的市场进入流程。",
    capabilities: ["目标市场扫描", "机会品类识别", "关键词趋势追踪", "竞争态势对比"],
    scenarios: ["新品出海前评估", "区域市场优先级排序", "机会品类持续追踪"],
  },
  {
    slug: "content-engine",
    href: "/products/content-engine",
    title: "商品内容引擎",
    navDescription: "商品表达、卖点结构与内容资产",
    marker: "Content",
    headline: "让商品内容贴合买家搜索和采购决策",
    summary:
      "商品内容引擎将关键词、卖点、场景表达和采购语境结构化，沉淀可复用的商品内容资产，支撑多市场、多渠道的持续优化。",
    capabilities: ["卖点结构化", "关键词内容映射", "多语种表达框架", "内容资产沉淀"],
    scenarios: ["商品详情页升级", "询盘前内容准备", "多市场内容本地化"],
  },
  {
    slug: "customer-touch",
    href: "/products/customer-touch",
    title: "客户触达协同",
    navDescription: "询盘、线索与跟进节奏协同",
    marker: "Action",
    headline: "把客户线索纳入同一张运营视图",
    summary:
      "客户触达协同围绕询盘、线索、跟进节奏和沟通内容编排运营动作，让团队减少跨环节损耗，提升线索响应与转化效率。",
    capabilities: ["线索分层", "跟进节奏编排", "沟通内容辅助", "触达状态追踪"],
    scenarios: ["询盘响应提效", "重点客户跟进", "销售运营协同"],
  },
  {
    slug: "growth-loop",
    href: "/products/growth-loop",
    title: "增长复盘中枢",
    navDescription: "运营反馈、数据沉淀与策略迭代",
    marker: "Loop",
    headline: "让每一次运营动作沉淀为增长资产",
    summary:
      "增长复盘中枢连接曝光、内容、线索、沟通与转化反馈，形成可追踪的数据链路，反向驱动下一轮市场、商品和触达策略。",
    capabilities: ["运营数据归因", "增长链路复盘", "策略迭代建议", "数据资产沉淀"],
    scenarios: ["月度运营复盘", "市场策略调整", "商品与内容迭代"],
  },
];

export const navItems = [
  { label: "首页", href: "/" },
  { label: "产品服务", href: "/products", children: products },
  { label: "企业案例", href: "/cases" },
  { label: "关于我们", href: "/about" },
];

export const trustKeywords = products.map((product) => product.title);

export const capabilities = products.map((product) => ({
  title: product.title,
  description: product.summary,
  marker: product.marker,
  href: product.href,
}));

export const customerCases = [
  {
    industry: "软件行业",
    title: "销售增长解决方案",
    description: "围绕海外线索获取、内容表达和销售跟进节奏，搭建从机会识别到复盘迭代的增长工作流。",
    result: "线索运营更清晰，销售动作更连续",
  },
  {
    industry: "制造企业",
    title: "新品出海机会评估",
    description: "通过目标市场扫描和机会品类对比，为新品出海节奏和商品表达提供数据依据。",
    result: "市场优先级和商品卖点更聚焦",
  },
  {
    industry: "跨境品牌",
    title: "商品内容资产升级",
    description: "将关键词、卖点和采购场景结构化，沉淀可复用的多市场商品内容资产。",
    result: "内容生产更稳定，表达更贴合买家语境",
  },
  {
    industry: "贸易团队",
    title: "询盘与客户触达协同",
    description: "把询盘响应、重点客户跟进和运营反馈纳入同一张视图，减少跨角色协作损耗。",
    result: "跟进节奏更清楚，复盘路径更完整",
  },
];

export const solutionLinks = [
  { label: "软件增长方案", href: "https://www.salesforce.com/" },
  { label: "制造出海方案", href: "https://www.alibaba.com/" },
  { label: "跨境内容方案", href: "https://www.shopify.com/" },
];

export const footerTagline = "外贸 AI 增长系统，让市场、商品与客户运营持续成图。";

export const socialChannels = [
  { label: "企业公众号" },
  { label: "企业微信" },
  { label: "飞书" },
];

export const complianceRecords = [
  "浙ICP备00000000号-1",
  "浙公网安备 33010000000000号",
];

export const recruitingRoles = [
  {
    title: "AI 运营",
    description:
      "把客户业务场景、产品配置和运营反馈连接起来，推动 AI 工具在真实增长流程中持续产生结果。",
  },
  {
    title: "AI 工程师",
    description:
      "参与 AI 增长产品的工程化落地，围绕数据链路、智能工作流和产品体验构建稳定能力。",
  },
  {
    title: "AI 销售",
    description:
      "面向外贸与跨境企业识别增长需求，建立可信的产品沟通和客户成功协同路径。",
  },
];

export const contact = {
  email: "contact@sinanyuntu.com",
  prompt: "通过邮箱预约产品沟通，我们会基于你的品类、市场和运营阶段梳理第一张增长云图。",
};
