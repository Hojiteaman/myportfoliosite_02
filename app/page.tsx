export default function HomePage() {
  return (
    <section className="grid gap-10">
      {/* Hero Section */}
      <div className="rounded-2xl bg-white p-8 shadow">
        <h2 className="mb-4 text-3xl font-bold">Welcome to My Portfolio</h2>
        <p className="mb-6 text-gray-700">
          フロントエンド開発・UIデザイン・XR/IoT などに取り組んでいます。
          これまでの制作物や研究内容をまとめています。
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/works"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            制作物を見る
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            お問い合わせ
          </a>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold">About Me</h3>
          <p className="text-gray-700">
            大学でヒューマンインタフェースやXR、IoTをテーマに研究を行っています。
            React / Next.js / Unity / Arduino などを用いた開発が得意です。
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold">Skills</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>React / Next.js / TypeScript</li>
            <li>Unity / C# / WebRTC</li>
            <li>IoT (Arduino, センサ, 通信設計)</li>
            <li>UI/UX デザイン</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
