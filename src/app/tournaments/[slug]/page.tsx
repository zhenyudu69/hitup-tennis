import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getTournament } from "@/lib/tournaments"

type TournamentPageProps = {
  params: { slug: string }
}

export default function TournamentPage({ params }: TournamentPageProps) {
  const tournament = getTournament(params.slug)

  if (!tournament) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-sm text-emerald-200 transition hover:text-white hover:underline hover:underline-offset-4"
        >
          ← 返回赛事列表
        </Link>

        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-emerald-900/50 p-8 shadow-2xl shadow-black/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(52,211,153,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(125,249,255,0.16),transparent_40%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <Image
                src="/hitup-logo.svg"
                alt="HitUp Tennis Logo"
                width={64}
                height={64}
                className="drop-shadow-xl"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">HitUp Tournament</p>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">{tournament.name}</h1>
                <p className="mt-2 text-base text-slate-200">{tournament.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-sm">
              <InfoRow label="比赛时间" value={tournament.dateRange} />
              <InfoRow label="地点" value={tournament.location} />
              <InfoRow label="场地" value={tournament.surface} />
              <InfoRow label="报名截止" value={tournament.registrationDeadline} />
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <div className="flex flex-wrap gap-2">
              <Badge>{tournament.level}</Badge>
              <Badge>奖品：{tournament.prizes}</Badge>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {tournament.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-gradient-to-r from-white/10 to-transparent px-4 py-3 text-sm text-slate-100"
                >
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href={`/tournaments/${tournament.slug}/rules`}
                className="flex items-center justify-between rounded-2xl border border-emerald-200/50 bg-emerald-400/20 px-5 py-4 text-sm font-semibold text-emerald-50 shadow-inner shadow-emerald-400/20 transition hover:-translate-y-0.5 hover:border-emerald-200"
              >
                查看规则细则
                <span className="text-xs text-emerald-100">查看赛制、用球、赛风</span>
              </Link>
              <Link
                href={`/tournaments/${tournament.slug}/payment`}
                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-semibold text-white shadow-inner shadow-white/10 transition hover:-translate-y-0.5 hover:border-white/40"
              >
                缴费办法
                <span className="text-xs text-slate-200">支付通道与备注方式</span>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <h2 className="text-lg font-semibold text-white">报名与联系</h2>
            <p className="mt-1 text-sm text-slate-200">扫码加入群聊，确认分组、时间与缴费状态。</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <QrCard label="WeChat 群" image={tournament.wechatQr} />
              <QrCard label="WhatsApp 群" image={tournament.whatsappQr} />
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/20 to-cyan-400/10 px-4 py-3 text-xs text-emerald-50">
              <p className="font-semibold">报名提示</p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-emerald-50/90">
                <li>扫码后备注姓名 + 项目 (单打/双打)。</li>
                <li>在群内发送报名表/付款截图，工作人员将确认名额。</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-emerald-50">
      {children}
    </span>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-slate-300">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  )
}

function QrCard({ label, image }: { label: string; image: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white">
      <div className="relative h-32 w-32 overflow-hidden rounded-xl border border-white/20 bg-slate-900">
        <Image src={image} alt={`${label} 二维码`} fill className="object-contain p-3" />
      </div>
      <span className="text-xs text-slate-200">{label}</span>
    </div>
  )
}
