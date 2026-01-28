import { notFound } from "next/navigation"

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="text-gray-700">
        ここに実績の詳細説明を書きます。
      </p>
    </section>
  )
}
