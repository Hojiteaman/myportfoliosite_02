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
    src="/works/drone-vr.png"
    alt="Drone VR"
    fill
    priority
    className="object-contain"
  />
        </div>
        
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="text-gray-700">
        修士1年の春頃にTelloを購入。カメラ搭載であるため、VRと組み合わせることで実際に飛んでいるような体験ができるのではと考え、開発を開始した。
      </p>
      <p className="text-gray-700">
        Telloは特定のポートにコマンドを送ればその通りに動く仕組みのため、コントローラによる操作はすぐにできたが、カメラ映像をVRHMDに表示する処理に大変苦しんだ。<br />
        Tello公式が提供するサンプルスクリプトはPythonで作られたもので、描画処理にはOpenCVを使用していたが、Unityにはリアルタイムにデコードし描画するアセットが存在しなかった。<br />
        そのため、デコードおよび描画の処理を自作する必要が生じた。そこでAndroidAPIのMedia Codecに目をつけ、プラグインを製作した。<br />
        しかし、仮想空間に表示された映像は崩れていたり色ずれが起きていた。この問題の原因は7分割して送られてくる映像データを誤った分割数でデコード処理していたことであった。<br />
        Wire Sharkを使用してTelloから送られてくるデータを解析することで判明した。<br />
      </p>
    </section>
  )
}
