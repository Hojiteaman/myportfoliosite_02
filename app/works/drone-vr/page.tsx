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
        
      <h1 className="text-3xl text-gray-700 font-bold">ドローン操作アプリ開発</h1>
      <p className="font-semibold text-gray-900">開発の動機</p>
      <p className="text-gray-700">
        修士1年の春頃にTelloを購入。カメラ搭載であるため、VRと組み合わせることで実際に飛んでいるような体験ができるのではと考え、開発を開始しました。
      </p>
      <p className="font-semibold text-gray-900">開発過程</p>
      <p className="text-gray-700">
        Telloは特定のポートにコマンドを送ればその通りに動く仕組みのため、コントローラによる操作はすぐにできましたが、カメラ映像をVRHMDに表示する処理に大変苦しみました。<br />
        Tello公式が提供するサンプルスクリプトはPythonで作られたもので、描画処理にはOpenCVを使用していますが、Unityにはそのようなリアルタイムにデコードし描画するアセットが存在しませんでした。<br />
        そのため、デコードおよび描画の処理を自作することが求められ、AndroidAPIのMedia Codecに目をつけ、プラグインを製作しました。<br />
        しかし、制作したプラグインを試したら、仮想空間に表示された映像は崩れていたり色ずれが起きていました。この問題の原因はデータの分割数の誤りや不必要なペイロードの削除した上でデコード処理していたことでありました。<br />
        Wire Sharkを使用してTelloから送られてくるデータを解析することで原因が判明し、対処することができました。<br />
      </p>
      <div className="relative h-64 w-full sm:h-80">
      <Image
                      src="/works/decodefaild.png"
                      alt="image decode faild"
                      fill
                      priority
                      className="object-contain"
                      />
              </div>
              <p className="text-center text-gray-400">デコード失敗時の表示</p>
      <p className="text-gray-700">失敗したプラグインを使用した際の映像。色ずれやノイズが発生していました。</p>

      <div className="relative h-64 w-full sm:h-80">
      <Image
                      src="/works/droneimage.png"
                      alt="image drone"
                      fill
                      priority
                      className="object-contain"
                      />
              </div>
              <p className="text-center text-gray-400">仮想空間での様子</p>
              <p className="text-gray-700">正常に動作した際の映像。しっかりとドローンのカメラ映像が表示されました。<br/>
              完成したアプリを試したところ、空を飛んでいるような体験ができ、大変満足のいくものになりましたが、人によってはVR酔いを生じさせたり、ドローン側の制御やカメラ位置に課題があることがわかりました。<br/>
              今後はこうした課題を解決し、オープンキャンパスなどで公開できるようにしていきたいと考えています。
              </p>
    </section>
  )
}
