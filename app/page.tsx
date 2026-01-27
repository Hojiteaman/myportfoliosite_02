import Image from 'next/image'

const skills = [
  { name: 'VR', level: 85, icon: '/icons/vr.png' },
  { name: 'JavaScript', level: 75, icon: '/icons/js.png' },
  { name: 'C#', level: 80, icon: '/icons/csharp.png' },
  { name: 'Unity', level: 80, icon: '/icons/unity.png' },
  { name: 'Java', level: 65, icon: '/icons/java.png' },
  { name: 'Python', level: 70, icon: '/icons/python.png' },
  { name: 'Matlab', level: 60, icon: '/icons/matlab.png' },
  { name: 'C', level: 60, icon: '/icons/c.png' },
  { name: 'C++', level: 65, icon: '/icons/cpp.png' },
  { name: 'HTML5', level: 75, icon: '/icons/html.png' },
  { name: 'TypeScript', level: 70, icon: '/icons/ts.png' },
  { name: 'CSS', level: 65, icon: '/icons/css.png' },
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
              <p className="mt-4 text-center text-sm font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
