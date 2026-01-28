export default function WorksPage() {
  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold">Works</h2>
      <p className="text-gray-700">
        これまでに制作したアプリ・研究・プロジェクトの一覧です。
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Example work card */}
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold">VR 瞬目誘発システム</h3>
          <p className="mb-3 text-sm text-gray-700">
            冷覚刺激によって瞬きを誘発し、ドライアイリスクを低減する研究プロジェクト。
          </p>
          <span className="inline-block rounded bg-blue-100 px-3 py-1 text-xs text-blue-700">Unity / VR / Arduino</span>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold">リモートデスクトップ Web アプリ</h3>
          <p className="mb-3 text-sm text-gray-700">
            WebRTC を用いた低遅延リモート操作システムの試作。
          </p>
          <span className="inline-block rounded bg-blue-100 px-3 py-1 text-xs text-blue-700">WebRTC / React</span>
        </div>
      </div>
    </section>
  )
}
