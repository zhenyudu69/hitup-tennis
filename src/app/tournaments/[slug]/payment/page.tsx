import Link from "next/link"
import { notFound } from "next/navigation"

import { getTournament } from "@/lib/tournaments"

type PageProps = { params: { slug: string } }

export default function PaymentPage({ params }: PageProps) {
  const tournament = getTournament(params.slug)

  if (!tournament) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-14 sm:px-8 lg:px-10">
        <Link
          href={`/tournaments/${tournament.slug}`}
          className="text-sm text-emerald-200 transition hover:text-white hover:underline hover:underline-offset-4"
        >
          ← 返回赛事主页
        </Link>

        <header className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 shadow-lg shadow-black/30">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">Payment</p>
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">{tournament.name} · 缴费办法</h1>
          <p className="mt-1 text-sm text-slate-200">选择方便的支付通道，并在备注里清晰写明姓名与参赛项目。</p>
        </header>

        <div className="space-y-4">
          {tournament.payment.map((item) => (
            <div
              key={item.method}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-inner shadow-black/20"
            >
              <p className="text-sm font-semibold text-white">{item.method}</p>
              <p className="mt-1 text-sm text-slate-200">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 to-cyan-400/10 px-5 py-4 text-xs text-emerald-50">
          <p className="font-semibold">缴费小贴士</p>
          <ul className="mt-1 list-disc space-y-1 pl-4 text-emerald-50/90">
            <li>完成支付后截图发送至报名群，工作人员会在24小时内确认。</li>
            <li>如需开发票，请在群里提供抬头、税号与收件邮箱。</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
