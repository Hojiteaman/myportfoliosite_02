import { notFound } from "next/navigation"
import Image from "next/image"

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="bg-white">
    <section className="relative w-full h-[60vh]">
        <Image
        src="/works/research.png"
        alt="Research"
        fill
        priority
        className="object-contain bg-black pt-safe"
        />
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="text-gray-700">
        研究内容
      </p>
    </section>

    <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">
          ゴーグル型冷覚提示による瞬目誘発システム
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          情報機器作業時に生じる瞬目回数の減少による
          ドライアイリスクを軽減することを目的とした研究です。
          冷覚刺激によるTRPM8の活性化に着目し、
          被験者に不快感を与えず自然な瞬きを誘発します。
        </p>
    </section>
    </main>
  )
}
