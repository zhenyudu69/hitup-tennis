"use client";

// ——————————— Mantine Rich‑Text Editor (兼容 React 19) ———————————
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import { MantineProvider } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trash2, PlusCircle } from "lucide-react";

export default function QiuAppEditor() {
  /* --------------------- 基本信息 --------------------- */
  const [heroTitle, setHeroTitle] = useState("连接球友，畅享运动");
  const [heroDesc, setHeroDesc] = useState(
    "<p>通过HITUP TENNIS App，您可以快速创建或加入比赛，与志同道合的朋友一起挥洒汗水。</p>"
  );
  const [progress, setProgress] = useState(65);
  const [userAgreement, setUserAgreement] = useState(
    "<p>1. 用户需年满18周岁方可注册并使用本应用。</p>"
  );
  const [privacyPolicy, setPrivacyPolicy] = useState(
    "<p>1. 我们仅收集为提供服务所必需的信息。</p>"
  );

  /* --------------------- 品牌板块 --------------------- */
  const [sections, setSections] = useState([
    { title: "品牌理念", desc: "我们致力于让每一次比赛约球都更简单、更有趣。" },
  ]);

  const addSection = () =>
    setSections([...sections, { title: "新标题", desc: "请填写描述…" }]);

  const removeSection = (idx: number) =>
    setSections(sections.filter((_, i) => i !== idx));

  /* --------------------- 导出 JSON --------------------- */
  const exportConfig = () => {
    const config = {
      heroTitle,
      heroDesc,
      progress,
      userAgreement,
      privacyPolicy,
      sections,
    };
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    alert("配置已复制到剪贴板！");
  };

  /* --------------------- UI --------------------- */
  return (
    <MantineProvider defaultColorScheme="light">

    <div className="min-h-screen bg-slate-100 p-6 grid md:grid-cols-2 gap-6">
      {/* —— 左侧：编辑区 —— */}
      <div className="space-y-8 overflow-y-auto pr-2">
        {/* 首页标题 */}
        <div className="space-y-2">
          <Label className="font-bold text-lg">首页标题</Label>
          <Input value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
        </div>

        {/* 首页描述 */}
        <div className="space-y-2">
          <Label className="font-bold text-lg">首页描述</Label>
          <RichTextEditor value={heroDesc} onChange={setHeroDesc} />
        </div>

        {/* 开发进度 */}
        <div className="space-y-2">
          <Label className="font-bold text-lg">开发进度 (%)</Label>
          <Input
            type="number"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
          />
        </div>

        {/* 品牌板块 */}
        <div className="space-y-2">
          <Label className="font-bold text-lg flex items-center justify-between">
            品牌板块
            <Button size="icon" variant="secondary" onClick={addSection}>
              <PlusCircle className="w-4 h-4" />
            </Button>
          </Label>

          {sections.map((s, idx) => (
            <Card key={idx} className="p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="标题"
                  value={s.title}
                  onChange={(e) => {
                    const copy = [...sections];
                    copy[idx].title = e.target.value;
                    setSections(copy);
                  }}
                />
                <Button size="icon" variant="ghost" onClick={() => removeSection(idx)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <RichTextEditor
                value={s.desc}
                onChange={(val) => {
                  const copy = [...sections];
                  copy[idx].desc = val;
                  setSections(copy);
                }}
              />
            </Card>
          ))}
        </div>

        {/* 用户协议 */}
        <div className="space-y-2">
          <Label className="font-bold text-lg">用户协议</Label>
          <RichTextEditor value={userAgreement} onChange={setUserAgreement} />
        </div>

        {/* 隐私政策 */}
        <div className="space-y-2">
          <Label className="font-bold text-lg">隐私政策</Label>
          <RichTextEditor value={privacyPolicy} onChange={setPrivacyPolicy} />
        </div>

        <Button className="mt-4" onClick={exportConfig}>
          导出配置 JSON
        </Button>
      </div>

      {/* —— 右侧：实时预览 —— */}
      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-y-auto">
        {/* Hero 预览 */}
        <section>
          <h2 className="text-3xl font-extrabold mb-2">{heroTitle}</h2>
          <div
            className="prose mb-6"
            dangerouslySetInnerHTML={{ __html: heroDesc }}
          />
        </section>

        {/* 进度条 */}
        <section className="my-8">
          <Progress value={progress} className="h-3 rounded-xl" />
          <p className="text-sm text-gray-600 mt-1">当前完成度：{progress}%</p>
        </section>

        {/* 品牌板块预览 */}
        <section className="grid md:grid-cols-2 gap-4 my-8">
          {sections.map((s, idx) => (
            <Card key={idx} className="p-4">
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </CardContent>
            </Card>
          ))}
        </section>

        {/* 协议预览 */}
        <section className="space-y-4">
          <h4 className="font-semibold">用户协议（节选）</h4>
          <div
            className="prose max-h-40 overflow-y-auto border p-3 rounded-md"
            dangerouslySetInnerHTML={{ __html: userAgreement }}
          />

          <h4 className="font-semibold">隐私政策（节选）</h4>
          <div
            className="prose max-h-40 overflow-y-auto border p-3 rounded-md"
            dangerouslySetInnerHTML={{ __html: privacyPolicy }}
          />
        </section>
      </div>
    </div>
    </MantineProvider>
  );
}
