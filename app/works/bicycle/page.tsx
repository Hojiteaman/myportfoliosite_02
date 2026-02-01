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
    src="/works/bicycle.jpeg"
    alt="Bicycle"
    fill
    priority
    className="object-cover"
    />
        </div>
        
      <h1 className="text-3xl text-gray-700 font-bold">自転車旅</h1>
      <div className="relative h-64 w-full sm:h-80">
            <Image
                            src="/works/bicycleroad.png"
                            alt="image bicycle road"
                            fill
                            priority
                            className="object-contain"
                            />
                    </div>
                    <p className="text-center text-gray-400">京都までの旅路</p>
      <p className="text-gray-700">
        大学２年の夏に長野から京都までの300km以上の道のりを中山道を通って自転車で移動。<br/>夏真っ只中のお盆の時期でありましたが、5日間は天候に恵まれました。
      </p>
      <p className="text-gray-700">
        低コストかつスムーズに移動できるように、事前に1日の行動計画を立てて実行に移しました。<br />予想外のトラブルが生じたとしても計画のおかげで迅速に対処することができ、計画の重要性を感じた旅となりました。
      </p>

      <div className="relative h-64 w-full sm:h-80">
            <Image
                            src="/works/tent.jpeg"
                            alt="image tent"
                            fill
                            priority
                            className="object-contain"
                            />
                    </div>
                    <p className="text-center text-gray-400">野宿の様子</p>
      <p className="text-gray-700">道中は公園にテントを立てて、野宿しました。近くに入浴施設やお店があるような場所を事前に選んだため、快適に過ごすことができました。<br/>一日大体70kmは走って体がクタクタだったので、寝床を用意したらすぐに寝れました。</p>
      <div className="relative h-64 w-full sm:h-80">
            <Image
                            src="/works/view.jpeg"
                            alt="image view"
                            fill
                            priority
                            className="object-contain"
                            />
                    </div>
                    <p className="text-center text-gray-400">早朝の寝覚めの床</p>
      <p className="text-gray-700">木曽路の景勝地の一つ「寝覚めの床」の早朝の様子。<br />熱中症対策として早朝から移動していましたが、そのおかげで美しい景色を独り占めできました。</p>
    </section>
  )
}
