export default function AxisPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* タイトル */}
      <h1 className="mb-12 text-2xl font-bold text-gray-900">
        企業選びの軸
      </h1>

      {/* ===== グラフィカルエリア ===== */}
      <section className="relative mb-24 flex h-[420px] items-center justify-center md:h-[480px]">
        {/* 円① 強み */}
        <AxisCircle className="md:absolute md:left-1/2 md:top-24 md:-translate-x-64">
          自分の強みが
          <br />
          活かせる業種
        </AxisCircle>

        {/* 円② 趣味 */}
        <AxisCircle className="md:absolute md:right-1/2 md:top-24 md:translate-x-64">
          自分の趣味を
          <br />
          楽しめる環境
        </AxisCircle>

        {/* 円③ 価値 */}
        <AxisCircle className="md:absolute md:bottom-12">
          価値の高いものを
          <br />
          提供できる環境
        </AxisCircle>

        {/* 中央メッセージ（PCのみ） */}
        <div className="pointer-events-none absolute hidden h-40 w-40 items-center justify-center rounded-full bg-white text-center text-sm font-semibold text-gray-800 shadow md:flex">
          自分が
          <br />
          働きたい企業
        </div>
      </section>

      {/* ===== テキスト説明エリア ===== */}
      <section className="space-y-10 text-gray-700 leading-relaxed">
        <AxisText
          title="自分の強みが活かせる業種"
          text="これまでの研究や開発経験を通して、自分の得意分野や強みを活かせる環境でこそ、最大限の成果を発揮できると考えています。"
        />

        <AxisText
          title="自分の趣味を楽しめる環境"
          text="技術やものづくりを楽しめることは、継続的な成長につながります。興味を持って主体的に取り組める環境を重視しています。"
        />

        <AxisText
          title="価値の高いものを提供できる環境"
          text="社会やユーザーにとって意味のある価値を生み出せることが、仕事へのやりがいにつながると考えています。"
        />
      </section>
    </main>
  )
}

/* ===== 円コンポーネント ===== */
function AxisCircle({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        flex h-44 w-44 items-center justify-center
        rounded-full
        bg-[#155e75]
        text-center
        text-sm
        font-semibold
        text-white
        shadow-lg
        md:h-56 md:w-56 md:text-base
        ${className}
      `}
    >
      {children}
    </div>
  )
}

/* ===== 下部テキスト ===== */
function AxisText({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  )
}
