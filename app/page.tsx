import Image from 'next/image'

const skills = [
  { name: 'VR', level: 75, icon: '/icons/vr.png' },
  { name: 'JavaScript', level: 75, icon: '/icons/js.png' },
  { name: 'C#', level: 75, icon: '/icons/csharp.png' },
  { name: 'Unity', level: 75, icon: '/icons/unity.png' },
  { name: 'Java', level: 50, icon: '/icons/java.png' },
  { name: 'Python', level: 50, icon: '/icons/python.png' },
  { name: 'Matlab', level: 50, icon: '/icons/matlab.png' },
  { name: 'C', level: 50, icon: '/icons/c.png' },
  { name: 'C++', level: 50, icon: '/icons/cpp.png' },
  { name: 'HTML5', level: 75, icon: '/icons/html.png' },
  { name: 'TypeScript', level: 50, icon: '/icons/ts.png' },
  { name: 'CSS', level: 25, icon: '/icons/css.png' },
]


const experience = [
  {
    period: '2021 - 2025',
    title: '公立諏訪東京理科大学 工学部 情報応用工学科',
    description: '情報工学・ヒューマンインタフェース・XR を中心に学習。',
  },
  {
    period: '2022 -',
    title: '自転車旅',
    description:
      '長野から京都まで約300kmを5日間で走破。事前に計画を立て、節約しつつ安全に旅を完遂。',
  },
  {
    period: '2023 -',
    title: 'フランス短期留学',
    description:
      'SIEインターン終了後すぐに渡仏し1か月滞在。現地教授主導プロジェクトに参加し、国際協働を経験。',
  },
  {
    period: '2023 -',
    title: 'SIE インターン参加',
    description:
      'ソニー・インタラクティブエンタテインメントの職場密着インターンに参加。リモートプレイ技術や実務レベルのコーディングを学習。',
  },
  {
    period: '2023 -',
    title: 'Project Based Learning',
    description:
      'フランス人留学生とチームを組み、「仮想食」をテーマに開発。',
  },
  {
    period: '2024 - 2025',
    title: '卒業研究',
    description:
      '情報機器使用時に高まるドライアイリスクをテーマに研究。VR・Unity・Arduino・電子回路を用いた実験装置を製作。',
  },
  {
    period: '2025 -',
    title: 'HCI International 2025 参加',
    description:
      'HCI分野の国際学会に参加。卒業研究の成果を英語で発表し質疑応答を経験。',
  },
  {
    period: '2025 -',
    title: '公立諏訪東京理科大学 大学院進学',
    description: 'ヒューマンインタフェース分野で研究を継続予定。',
  },
]


function CircleProgress({ value }: { value: number }) {
  const radius = 42
  const stroke = 8
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e5edf3"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#5bb3ff"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.6s ease' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

export default function HomePage() {
  return (
    <section className="grid gap-14">
      {/* Hero Section */}
      <div className="rounded-2xl bg-white p-8 shadow">
        <h2 className="mt-4 text-center text-sm font-medium text-gray-900">Welcome to My Portfolio</h2>
        <p className="mb-6 text-gray-700">
          公立諏訪東京理科大学 工学・マネジメント研究科　工学・マネジメント専攻　修士課程 山口武彦研究室所属
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

      {/* Skills Section */}
      <div className="grid gap-6">
        <h3 className="text-2xl font-bold">Skills</h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl bg-white p-5 shadow hover:shadow-md transition"
            >
              <div className="relative mx-auto flex h-[96px] w-[96px] items-center justify-center">
                <CircleProgress value={skill.level} />
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-gray-900">
                {skill.name}
              </p>
            </div>
            
          ))}
        </div>
      </div>
      {/* Experience Section */}
      <div className="grid gap-8">
        <h3 className="text-2xl font-bold text-center">Experience</h3>
        <div className="relative mx-auto w-full max-w-4xl">
          {/* vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-blue-200" />

          <div className="grid gap-10">
            {experience.map((item, idx) => (
              <div
                key={item.title}
                className="relative grid gap-6 md:grid-cols-2 items-start"
              >
                {/* dot */}
                <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-400 border-4 border-blue-100" />

                {/* card */}
                <div
                  className={`rounded-2xl bg-white p-6 shadow ${
                    idx % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
                  }`}
                >
                  <p className="mb-1 text-sm font-semibold text-blue-500">{item.period}</p>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
