export type Tournament = {
  slug: string
  name: string
  location: string
  dateRange: string
  surface: string
  registrationDeadline: string
  description: string
  highlights: string[]
  wechatQr: string
  whatsappQr: string
  level: string
  prizes: string
  rules: string[]
  payment: {
    method: string
    details: string
  }[]
}

export const tournaments: Tournament[] = [
  {
    slug: "spring-clay-open",
    name: "HitUp 春季红土公开赛",
    location: "上海浦东国际网球中心",
    dateRange: "2025年4月18日 - 4月20日",
    surface: "红土",
    registrationDeadline: "4月8日 (名额先到先得)",
    description:
      "春季的第一场大型红土赛事，面向热爱拉锯与战术对抗的球友，提供单打与双打两个组别。",
    highlights: [
      "双败淘汰制，保证至少两场比赛",
      "提供赛前红土适应训练时间",
      "赛场内提供补给和专业摄影",
    ],
    wechatQr: "/qr-wechat-spring.svg",
    whatsappQr: "/qr-whatsapp-spring.svg",
    level: "NTRP 3.0 - 4.0",
    prizes: "冠军奖杯 + Wilson 比赛用球礼盒",
    rules: [
      "每场三盘两胜，前两盘抢七；决胜盘抢十",
      "比赛用球：Wilson US Open 红土版",
      "晚到超过10分钟视为弃权",
      "双打黄金分制度 (No-Ad)",
    ],
    payment: [
      { method: "银行转账", details: "招商银行 6222 **** 1888，备注“春季+姓名”。" },
      { method: "现场支付", details: "比赛签到处支持微信/支付宝扫码。" },
    ],
  },
  {
    slug: "bay-area-doubles",
    name: "湾区好友双打赛",
    location: "San Francisco Presidio Courts",
    dateRange: "2025年5月3日",
    surface: "硬地",
    registrationDeadline: "4月26日",
    description:
      "专为湾区球友设计的周末双打聚会，强调团队合作与社交体验，赛后安排烧烤联谊。",
    highlights: [
      "循环赛+淘汰赛混合赛制，保证至少三场",
      "提供免费串拍与现场拉线优惠",
      "现场DJ与户外餐车，家庭友好",
    ],
    wechatQr: "/qr-wechat-bay.svg",
    whatsappQr: "/qr-whatsapp-bay.svg",
    level: "UTR 4 - 7",
    prizes: "冠军队获 Babolat 训练礼包 + 定制奖牌",
    rules: [
      "一盘定胜，4-4 进入七分抢七",
      "抢七采用七分制，需领先两分",
      "默认No-Ad，接发球方选择接发位",
      "允许一次医疗暂停 (3分钟)",
    ],
    payment: [
      { method: "Venmo", details: "@HitUpTennis，备注“BayDoubles+队名”。" },
      { method: "Zelle", details: "payments@hitup.tennis，附队长手机号。" },
    ],
  },
  {
    slug: "hangzhou-night-hard",
    name: "杭州夜光硬地锦标赛",
    location: "杭州奥体中心夜光球场",
    dateRange: "2025年6月6日 - 6月7日 (夜场)",
    surface: "夜光硬地",
    registrationDeadline: "5月28日",
    description:
      "夜间灯光主题赛事，配合荧光装备与DJ现场，让比赛与派对融为一体。",
    highlights: [
      "夜光网球与LED记分牌，视觉拉满",
      "组委会提供荧光拍套与球帽",
      "设立“最佳夜光造型”特别奖",
    ],
    wechatQr: "/qr-wechat-hz.svg",
    whatsappQr: "/qr-whatsapp-hz.svg",
    level: "开放组，按实力分级编排",
    prizes: "冠军获夜光主题奖杯 + 训练营体验券",
    rules: [
      "每场Fast4赛制，抢七改抢五",
      "平分后直接抢一分 (Power Point)",
      "比赛用球：夜光特制球 (ITF 认证)",
      "比赛需佩戴夜光腕带/服饰，现场可领取",
    ],
    payment: [
      { method: "微信支付", details: "扫码群内二维码，上传付款截图。" },
      { method: "支付宝", details: "账号 hitup-tennis@pay.cn，备注“夜光赛+姓名”。" },
    ],
  },
]

export function getTournament(slug: string) {
  return tournaments.find((item) => item.slug === slug)
}
