import { notFound } from "next/navigation"
import Image from "next/image"

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
        <Image
        src="/works/research.png"
        alt="Research"
        fill
        priority
        className="object-contain bg-black pt-safe"
        />
      <h1 className="text-3xl font-bold">{params.slug}</h1>
      <p className="text-gray-700">
        研究内容
      </p>
    </section>
  )
}
