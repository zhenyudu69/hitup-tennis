import Link from "next/link"
import { notFound } from "next/navigation"

import { getTournament } from "@/lib/tournaments"

type PageProps = { params: { slug: string } }

export default function RulesPage({ params }: PageProps) {
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
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">Rules</p>
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">{tournament.name} · 规则细则</h1>
          <p className="mt-1 text-sm text-slate-200">赛制、用球与赛风要求，请务必赛前阅读。</p>
        </header>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
          <ul className="space-y-3 text-sm text-slate-100">
            {tournament.rules.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-gradient-to-r from-white/5 to-transparent px-4 py-3"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/20 to-cyan-400/10 px-4 py-3 text-xs text-emerald-50">
            <p className="font-semibold">赛风提醒</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-emerald-50/90">
              <li>请提前15分钟到场热身，避免影响编排节奏。</li>
              <li>尊重裁判与对手，出现争议先重打，保持友好交流。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
