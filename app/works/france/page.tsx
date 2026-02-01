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
    src="/works/france.jpg"
    alt="France"
    fill
    priority
    className="object-cover"
  /></div>
        
      <h1 className="text-3xl text-gray-700 font-bold">フランス短期留学</h1>
      <p className="font-semibold text-gray-900">短期留学の内容</p>
      <p className="text-gray-700">
        3週間にわたりアンジェ大学との共同プロジェクトとして、仮想空間でファッションショーを体験できるアプリケーションを山口武彦研究室のメンバーと制作しました。<br />
        役割分担のもと、私は服の3Dモデルを担当し,時にはプロジェクト主導者のフィードバックをもらい、グループに還元するなど、コミュニケーションも大切にしました。<br />
        また滞在中はアンジェ大学の学生に日本の文化を紹介したり、フランス人家庭にホームステイし、料理を共にしたり地元の観光スポットを案内してもらうなど、現地での交流も深めました。<br />
        残りの1週間はレンヌとパリを観光し、宿の手配や交通手段の確保、観光地チケットの購入などもメンバーで役割分担して行いました。
        私はパリの宿泊先探しを担当し、治安が良く学生でも利用しやすい価格帯の宿を探しました。<br />また、荷物預かりが無料と記載されているにもかかわらず現地で有料請求されるケースがあることを想定し、事前にメールでオプションの確認を実施しました。実際に同様の事例に遭遇しましたが、事前のメールが証拠となり問題なく対応することができました。
      </p>
      <div></div>
      <div className="relative h-64 w-full sm:h-80">
      <Image
                      src="/works/homestay.png"
                      alt="image homestay"
                      fill
                      priority
                      className="object-contain"
                      />
              </div>
              <p className="text-center text-gray-400">ホームファミリーとの写真</p>
              <p className="text-gray-700">留学中に誕生日を迎えた私に、ホームファミリーがサプライズでケーキを用意してくれました。<br />あまりの驚きに、泣きそうになっています。</p>
    </section>
  )
}
