"use client"

import Image from "next/image"
import { useState } from "react"

const works = [
  {
    title: "フランス短期留学",
    image: "/works/france.jpg",
    description: "フランスで1ヶ月間の短期留学。現地学生と共同プロジェクトに参加。",
  },
  {
    title: "ドローンをVRHMDで操作するアプリの開発",
    image: "/works/drone-vr.png",
    description: "UnityとVR HMDを用いて、ドローンを直感的に操作するシステムを開発。",
  },
  {
    title: "PBL(Project Base Learning)",
    image: "/works/pbl.jpg",
    description: "フランス人留学生とチームを組み、仮想食をテーマに開発。",
  },
  {
    title: "リモートデスクトップアプリの開発",
    image: "/works/remote-desktop.png",
    description: "WebRTCを用いた低遅延リモート操作アプリを実装。",
  },
  {
    title: "自転車旅",
    image: "/works/bicycle.jpeg",
    description: "長野から京都まで約300kmを5日間で走破。計画力と継続力を培った。",
  },
  {
    title: "研究内容",
    image: "/works/research.png",
    description: "VR機器使用時のドライアイリスク低減を目的とした卒業研究。",
  },
]

export default function WorksPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold text-gray-900">Works</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, idx) => {
          const isActive = activeIndex === idx

          return (
            <div
              key={work.title}
              className="relative overflow-hidden rounded-2xl bg-white shadow"
              onClick={() =>
                setActiveIndex(isActive ? null : idx)
              }
            >
              <div className="relative h-48 w-full">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay (PC hover + Mobile tap) */}
              <div
                className={`absolute inset-0 flex flex-col justify-end bg-black/60 p-4 text-white transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-0 hover:opacity-100"}`}
              >
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
