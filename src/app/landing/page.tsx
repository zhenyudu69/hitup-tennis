"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Rocket, ShieldCheck, CalendarCheck } from "lucide-react";

export default function HitUpLanding() {
  // 进度百分比可从后端 API 获取；这里先用静态示例
  const [progress] = useState(65);

  const sections = [
    {
      icon: <Rocket className="w-6 h-6 text-lime-600" />,
      title: "品牌理念",
      desc: "我们致力于让每一次约球都更简单、更有趣，连接同城球友，分享运动快乐。",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "隐私安全",
      desc: "严格遵守数据安全与隐私保护法规，保障用户信息安全。",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-yellow-600" />,
      title: "赛事日历",
      desc: "内置丰富赛事与活动日历，让你不错过任何一场精彩对决。",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-lime-50 to-white text-gray-800">
      {/* ——— 顶部导航 ——— */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/80 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            {/* Logo 占位，替换 /images/logo.svg 为你的 LOGO 路径 */}
            <img src="/images/logo.svg" alt="HitUp Logo" className="w-8 h-8 mr-2" />
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-lime-700">
              HITUP TENNIS APP
            </h1>
          </div>
          <nav className="space-x-4 hidden sm:block text-sm font-medium">
            <Link href="#home" className="hover:text-lime-700 transition">
              首页
            </Link>
            <Link href="#brand" className="hover:text-lime-700 transition">
              品牌
            </Link>
            <Link href="#progress" className="hover:text-lime-700 transition">
              进度
            </Link>
            {/* 改为链接跳转到独立页面或文件 */}
            <Link href="/user-agreement" className="hover:text-lime-700 transition">
              用户协议
            </Link>
            <Link href="/privacy-policy" className="hover:text-lime-700 transition">
              隐私政策
            </Link>
          </nav>
        </div>
      </header>

      {/* ——— Hero ——— */}
      <section id="home" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold leading-tight mb-4 text-lime-700">
            连接球友，畅享运动
          </h2>
          <p className="text-lg mb-6">
            通过 <span className="font-semibold">HITUP TENNIS APP</span>，轻松创建或加入比赛，与志同道合的朋友一起挥洒汗水。
          </p>
          <Button size="lg" className="rounded-2xl shadow-lg bg-lime-600 hover:bg-lime-700">
            即将上线，敬请期待
          </Button>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/images/hero-tennis.svg" // 自行替换为品牌插图
          alt="App illustration"
          className="w-full rounded-2xl shadow-xl"
        />
      </section>

      {/* ——— Brand Section ——— */}
      <section id="brand" className="bg-lime-50/60 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {sections.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="space-y-4 flex flex-col items-start">
                  {s.icon}
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p>{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——— Development Progress ——— */}
      <section id="progress" className="py-16 bg-gradient-to-r from-lime-50 to-emerald-100">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-lime-700">开发进度</h3>
          <Progress value={progress} className="h-4 rounded-2xl bg-emerald-200" />
          <p className="mt-2 text-sm text-gray-600">当前完成度：{progress}%</p>
        </div>
      </section>

      {/* ——— Footer ——— */}
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
          <p>© {new Date().getFullYear()} HitUp Tennis Technology Co., Ltd.</p>
          <div className="space-x-4 text-sm">
            <Link href="mailto:contact@example.com" className="hover:text-white transition">
              联系我们
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/legal" className="hover:text-white transition">
              法律信息
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
