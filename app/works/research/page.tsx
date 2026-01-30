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
        className="object-contain bg-gray-300 pt-safe"
        />
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="font-semibold text-gray-700">
        研究内容
      </p>
    </section>

    <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-semibold text-gray-900">
          ゴーグル型冷覚提示による瞬目誘発システム
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          情報機器作業時に生じる瞬目回数の減少による
          ドライアイリスクを軽減することを目的とした研究です。<br/>
          先行研究では刺激によって反射的に起きる瞬目、反射性瞬目を用いて瞬目回数を増やしていました。しかし、刺激による侵襲的な不快感が生じるという課題がありました。<br />
          そこで私は冷覚刺激によるTRPM8の活性化に着目し、
          被験者に不快感を与えず自然な瞬きを誘発することを目指しました。
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          本研究では、リサーチクエスチョンを調べるために、実験装置を製作しました。
          指定温度に管理された空気を微弱な風として眼周囲に送風するようになっています。<br />
          構成としてはVRHMDで目の状態をリアルタイムに測定し、特定のタイミングで起動信号を発信。その信号はArudinoUnoに送られ、噴射放置を起動するようになっています。<br />
          実験装置の製作にあたって、指定温度に管理した空気を保温するために装置の小型化やアルミホイルの使用などの工夫を行いました。<br />
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          実験によって本装置によって瞬目数を増やすとともに、温度要素によって侵襲的不快感を軽減できることを確認しました。一方で装置の重量が重すぎたり、噴射ノズルを被験者ごとに調節する必要があるなどの課題も明らかになりました。<br />
          今後は装置の軽量化やノズル調節の修正などの装置の改良に取り組むとともに、オフィス環境での効果検証を行っていく予定です。
          </p>
    </section>
    </main>
  )
}
