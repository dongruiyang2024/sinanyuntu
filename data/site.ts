export const products = [
  {
    slug: "sinanpilot",
    href: "/products/sinanpilot",
    title: "SinanPilot",
    navDescription: "买家信号到销售执行的 AI 增长工作台",
    marker: "AI Pilot",
    headline: "从买家信号到销售执行，驱动外贸客户增长",
    summary:
      "SinanPilot 为外贸团队提供从买家信号、智能判断到销售执行的一体化 AI 增长能力，帮助团队把市场机会、客户优先级和跟进动作沉淀为可复盘的增长流程。",
    capabilities: ["买家信号捕捉", "商机智能判断", "客户优先级排序", "销售动作协同"],
    scenarios: ["外贸客户开发", "销售线索判断", "团队跟进提效"],
    officialUrl: "https://pilot.sinan.yun",
  },
  {
    slug: "domestic-trade-growth",
    href: "/products/domestic-trade-growth",
    title: "内贸客户增长软件",
    navDescription: "面向内贸团队的客户增长系统",
    marker: "Domestic",
    headline: "把国内贸易客户开发纳入可跟进的增长系统",
    summary:
      "面向国内贸易团队，将客户信号、销售判断、跟进节奏和成交反馈集中管理，帮助团队提升客户触达、商机推进和复购运营效率。",
    capabilities: ["客户线索沉淀", "商机分层判断", "跟进节奏管理", "成交反馈复盘"],
    scenarios: ["内贸客户开发", "销售团队协作", "老客户复购运营"],
    officialUrl: "",
  },
  {
    slug: "independent-site-growth",
    href: "/products/independent-site-growth",
    title: "独立站增长软件",
    navDescription: "独立站获客、内容与转化运营",
    marker: "DTC",
    headline: "围绕独立站访客、内容和转化建立增长闭环",
    summary:
      "面向独立站经营场景，连接站点内容、访客行为、询盘线索和转化反馈，帮助团队优化流量承接、内容表达与客户转化路径。",
    capabilities: ["访客行为识别", "内容承接优化", "询盘线索管理", "转化路径复盘"],
    scenarios: ["独立站线索运营", "站点内容优化", "询盘转化提升"],
    officialUrl: "",
  },
  {
    slug: "geo-growth-service",
    href: "/products/geo-growth-service",
    title: "GEO 增长服务",
    navDescription: "面向生成式搜索的品牌内容优化",
    marker: "GEO",
    headline: "让品牌内容更容易被 AI 搜索理解和引用",
    summary:
      "围绕生成式搜索与 AI 答案场景，规划品牌知识、内容结构和外部信号，帮助企业提升在 AI 搜索、问答与推荐场景中的可见度。",
    capabilities: ["AI 搜索语义规划", "品牌知识结构化", "内容引用路径优化", "可见度监测"],
    scenarios: ["AI 搜索曝光提升", "品牌知识库建设", "内容结构优化"],
    officialUrl: "",
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
    title: "SinanPilot 外贸销售增长",
    description: "围绕买家信号、商机判断和销售执行节奏，搭建外贸客户开发的 AI 增长工作流。",
    result: "客户优先级更清晰，销售动作更连续",
  },
  {
    industry: "制造企业",
    title: "内贸客户增长运营",
    description: "把国内客户线索、跟进节奏和成交反馈纳入同一套客户增长软件，提升团队协作效率。",
    result: "客户跟进更稳定，复购运营更可控",
  },
  {
    industry: "跨境品牌",
    title: "独立站线索转化提升",
    description: "连接独立站访客行为、内容承接和询盘线索，优化从流量进入到客户转化的运营路径。",
    result: "线索承接更顺畅，转化复盘更明确",
  },
  {
    industry: "贸易团队",
    title: "GEO 内容可见度优化",
    description: "围绕生成式搜索场景重构品牌知识、内容结构和引用路径，提升 AI 搜索可见度。",
    result: "品牌表达更结构化，AI 场景更易被理解",
  },
];

export const solutionLinks = [
  { label: "软件增长方案", href: "https://www.salesforce.com/" },
  { label: "制造出海方案", href: "https://www.alibaba.com/" },
  { label: "跨境内容方案", href: "https://www.shopify.com/" },
];

export const footerTagline = "外贸 AI 增长系统，连接市场、商品与客户。";

export const socialChannels = [
  { label: "公众号" },
  { label: "企业微信" },
  { label: "飞书" },
];

export const complianceRecords = [
  "浙ICP备00000000号-1",
  "浙公网安备 33010000000000号",
];

export const copyrightText =
  "Copyright © 2026 司南云图. 保留所有权利。";

export const legalLinks = [
  { label: "隐私政策", href: "#" },
  { label: "服务条款", href: "#" },
  { label: "安全与合规", href: "#" },
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
