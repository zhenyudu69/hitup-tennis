import Image from "next/image"
import Link from "next/link"

import { tournaments } from "@/lib/tournaments"

const heroBadges = [
  { label: "覆盖3座城市", value: "上海 · 湾区 · 杭州" },
  { label: "组委会服务", value: "训练、摄影、补给全配套" },
  { label: "报名沟通", value: "WeChat / WhatsApp 双群" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-10 rounded-3xl bg-white/5 p-8 shadow-2xl shadow-slate-900/40 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/hitup-logo.svg"
                alt="HitUp Tennis Logo"
                width={72}
                height={72}
                className="drop-shadow-xl"
                priority
              />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-200">HitUp Tennis</p>
                <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">热爱网球的赛事集合地</h1>
                <p className="mt-2 text-base text-slate-200">
                  集合我们正在筹备的比赛，轻松查看赛程、规则与缴费方式，一键进入 WeChat / WhatsApp 群报名。
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
              <Link
                href="#tournaments"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                查看赛事列表
              </Link>
              <Link
                href="mailto:info@hitup.tennis"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200/50 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-200 hover:text-white"
              >
                合作洽谈
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroBadges.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-inner shadow-white/5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">{item.label}</p>
                <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </header>

        <section id="tournaments" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Tournaments</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">正在报名的网球赛事</h2>
            <p className="text-slate-200">
              选择你感兴趣的赛事卡片即可查看详细介绍、规则细则与缴费办法，加入群聊获取最新信息。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tournaments.map((tournament) => (
              <div
                key={tournament.slug}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-emerald-900/40 p-6 shadow-xl shadow-black/30"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(125,249,255,0.12),transparent_35%)]" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{tournament.name}</h3>
                      <p className="text-sm text-emerald-100">{tournament.location}</p>
                    </div>
                    <span className="rounded-full border border-emerald-300/50 bg-emerald-300/20 px-3 py-1 text-xs font-semibold text-emerald-50">
                      {tournament.surface}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200">{tournament.description}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-100">
                    <InfoBlock label="比赛时间" value={tournament.dateRange} />
                    <InfoBlock label="报名截止" value={tournament.registrationDeadline} />
                    <InfoBlock label="适合水平" value={tournament.level} />
                    <InfoBlock label="奖品" value={tournament.prizes} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tournament.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href={`/tournaments/${tournament.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                    >
                      查看赛事详情
                    </Link>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
                      支持 WeChat & WhatsApp 报名
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/5 bg-white/5 px-3 py-2">
      <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-200">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  )
}
