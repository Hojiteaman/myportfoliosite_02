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
    src="/works/bicycle.png"
    alt="Bicycle"
    fill
    priority
    className="object-cover"
    />
        </div>
        
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="text-gray-700">
        大学２年の夏に長野から京都までの約310kmを中山道を通って自転車で移動。
        低コストかつスムーズに移動できるように、事前に1日の行動計画を立てて実行した。予想外のトラブルが生じたとしても計画のおかげで迅速に対処することができ、計画の重要性を感じた。
      </p>
    </section>
  )
}
