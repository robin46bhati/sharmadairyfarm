import PageHeader from '../components/PageHeader.jsx'
import { Cow, Buffalo, MilkBottle, GheeJar, MilkCan, Barn, HeroScene } from '../components/Illustrations.jsx'

const items = [
  { label: 'Our Farm', bg: 'from-sky-100 to-grass-100', span: 'sm:col-span-2 sm:row-span-2', art: <HeroScene className="w-full" /> },
  { label: 'Happy Cows', bg: 'from-grass-50 to-grass-100', art: <Cow className="w-4/5" /> },
  { label: 'Fresh Milk', bg: 'from-sky-50 to-sky-100', art: <MilkBottle className="h-40" /> },
  { label: 'Our Buffaloes', bg: 'from-amber-50 to-amber-100', art: <Buffalo className="w-4/5" /> },
  { label: 'Desi Ghee', bg: 'from-yellow-50 to-yellow-100', art: <GheeJar className="h-36" /> },
  { label: 'Milk Cans', bg: 'from-slate-50 to-slate-100', art: <MilkCan className="h-40" /> },
  { label: 'The Red Barn', bg: 'from-rose-50 to-rose-100', art: <Barn className="w-4/5" /> },
]

export default function Gallery() {
  return (
    <>
      <PageHeader
        emoji="📸"
        title="Farm Gallery"
        subtitle="A peek into life at Sharma Dairy Farm."
      />
      <section className="section">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure
              key={it.label}
              className={`group relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b p-4 shadow-sm transition hover:shadow-xl ${it.bg} ${it.span || ''}`}
            >
              <div className="flex h-full w-full items-center justify-center transition duration-300 group-hover:scale-105 [&>svg]:max-h-full">
                {it.art}
              </div>
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-4 py-1 text-sm font-bold text-grass-900 shadow">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-grass-700">
          Want real photos here? Drop your farm pictures into <code className="rounded bg-grass-100 px-1">src/assets</code>{' '}
          and swap them in this page.
        </p>
      </section>
    </>
  )
}
