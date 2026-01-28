export default function AxisPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* タイトル */}
      <h1 className="mb-12 text-2xl font-bold text-gray-900">
        企業選びの軸
      </h1>

      {/* 上段 */}
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <AxisOval>
          自分の強みが
          <br />
          活かせる業種
        </AxisOval>

        <AxisOval>
          自分の趣味を
          <br />
          楽しめる環境
        </AxisOval>
      </div>

      {/* 下段（中央） */}
      <div className="flex justify-center">
        <AxisOval large>
          価値の高いものを
          <br />
          提供できる環境
        </AxisOval>
      </div>
    </main>
  )
}

/* 楕円コンポーネント */
function AxisOval({
  children,
  large = false,
}: {
  children: React.ReactNode
  large?: boolean
}) {
  return (
    <div
      className={`
        flex items-center justify-center
        rounded-full
        bg-[#155e75]
        text-center
        text-white
        font-semibold
        shadow-md
        ${
          large
            ? "h-40 w-96 text-lg"
            : "h-32 w-80 text-base"
        }
      `}
    >
      {children}
    </div>
  )
}
