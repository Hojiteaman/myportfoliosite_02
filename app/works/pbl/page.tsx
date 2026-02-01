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
    className="object-contain"
  />
        </div>
        
      <h1 className="text-3xl text-gray-700 font-bold">PBL</h1>
      <p className="font-semibold text-gray-900">PBLの内容</p>
      <p className="text-gray-700">
　フランス人留学生とグループを組み、特定のテーマに沿ったVRプロジェクトを製作し、発表するイベント。<br />私を含む日本人2人、フランス人2人でチームを組み、学部3年の5月から8月まで取り組みました。<br />
</p>
      <p className="font-semibold text-gray-900">取り組んだ内容</p>
      <p className="text-gray-700">
　「仮想食」というテーマに沿って新しい食体験を提供するようなアプリケーションの制作に取り組みました。VRの没入感を活かし、匂いや体験で味を変えることを目指しました。<br />　グループの中で役割分担を行い、留学生はデザインを担当し、私たちは仮想空間や機能を制作しました。<br />
イベント中は特にコミュニケーションに力を入れ、週に1回メンバーが集まってミーティングを行い、コンセプトや開発状況について共有しました。時には実現したいものと実際に実装できるものの範囲とで意見の食い違いが起きましたが、互いの背景情報の理解に注力することで、円滑に解決することができました。<br />
      </p>
    </section>
  )
}
