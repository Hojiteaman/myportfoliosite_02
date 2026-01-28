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
    src="/works/pbl.jpg"
    alt="PBL"
    fill
    priority
    className="object-cover"
  />
        </div>
        
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="font-semibold text-gray-900">PBLとは</p>
      <p className="text-gray-700">
フランス人留学生とグループを組み、特定のテーマに沿ったVRプロジェクトを製作し、発表するイベント。<br />私を含む日本人2人、フランス人2人でチームを組み、学部3年の5月から8月まで取り組んだ。<br />
</p>
      <p className="font-semibond text-gray-900">取り組んだ内容</p>
      <p className="text-gray-700">
「仮想食」というテーマに沿って新しい食体験を提供するようなアプリケーションの制作に取り組んだ。VRの没入感を活かし、匂いや体験で味を変えることを目指した。<br />グループの中で役割分担を行い、留学生はデザインを担当し、私たちは仮想空間や機能を製作した。<br />イベント中は特にコミュニケーションに力を入れていた。週に1回メンバーが集まり、ミーティングを行い、コンセプトや開発状況について共有することで、問題が発生しても素早く対処でき、限られた時間内でも効率的に進めることができた。
      </p>
    </section>
  )
}
