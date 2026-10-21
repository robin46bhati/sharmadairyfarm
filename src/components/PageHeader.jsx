export default function PageHeader({ title, subtitle, emoji }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-grass-100 to-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 md:py-16">
        {emoji && <div className="mb-2 text-4xl">{emoji}</div>}
        <h1 className="text-4xl font-extrabold text-grass-900 sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-lg text-grass-700">{subtitle}</p>}
      </div>
    </section>
  )
}
