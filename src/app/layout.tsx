import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "HitUp Tennis | 赛事报名平台",
  description: "查看HitUp Tennis正在筹备的网球比赛，了解赛程、规则、群聊二维码与缴费方式。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
