import { notFound } from "next/navigation"
import Image from "next/image"

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
        <div className="relative h-64 w-full sm:h-80">
            <Image
                src="/works/remote-desktop.png"
                alt="remote desktop"
                fill
                priority
                className="object-cover"
                />
        </div>
        
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="font-semibond text-gray-900">開発の動機</p>
      <p className="text-gray-700">
大学3年の春ごろにMeta Quest2を購入し、VRの技術を体験。<br />仮想空間が現実空間の制限を無視出来るという特徴に気づき、リモートデスクトップアプリに興味を持った。<br />既存のリモートデスクトップアプリを試したが、自分の環境下では処理負荷があまりにも大きすぎてフリーズすることが頻発。そこで自分の環境下でもしっかりと動くようなアプリケーションを作ることを決めた。<br />
        </p>
      <p className="font-semibond text-gray-900">開発</p>
      <p className="text-gray-700">
利便性とP2P通信の強みを踏まえ、WebアプリケーションとしてWebRTCを用いる方針を要件定義として決めたが、授業内容を超える知識が求められる開発であったため、自主的に技術習得に取り組んだ。<br />その一環として、リモートプレイ技術を学べるSIEのインターンに参加し、システム構成やリアルタイム性向上の工夫を学び、それらの知見をリモートデスクトップアプリの開発に還元した。<br />
        </p>
      <p className="font-semibond text-gray-900">開発後の問題と対処</p>
      <p className="text-gray-700">
冬ごろにリモートデスクトップアプリが完成したが、MetaQuest側のブラウザがアップデートした後、WebRTCで通信ができなくなった。<br />そこからしばらくはデバック作業に取り組み、MetaQuestの機体ログからIpアドレスの名前解決ができていないことを発見。MetaQuest側のブラウザがマルチキャストDNSに対応していないことが原因であることを突き止め、問題を解決できた。<br />問題を発見し、通信が繋がった時の感動は今でも忘れられない。
      </p>
    </section>
  )
}
