import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Barn, Cow, Buffalo } from '../components/Illustrations.jsx'
import { WHY } from '../data.js'

const steps = [
  { n: '1', title: 'Care & Feed', text: 'Green fodder, balanced feed and clean water for every animal.' },
  { n: '2', title: 'Hygienic Milking', text: 'Clean sheds, clean hands and clean utensils at every milking.' },
  { n: '3', title: 'Careful Handling', text: 'Milk is kept fresh and filtered with no mixing or adulteration.' },
  { n: '4', title: 'Fresh Delivery', text: 'Delivered to your home the same day, as fresh as it gets.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        emoji="🏡"
        title="About Sharma Dairy Farm"
        subtitle="A family-run dairy in Faridabad, committed to pure and honest milk."
      />

      <section className="section">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-b from-sky-100 to-grass-100 p-8">
            <Barn className="mx-auto w-3/4" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">Our Story</h2>
            <p className="mt-4 leading-relaxed text-grass-700">
              Sharma Dairy Farm started with a simple belief: families deserve milk they can trust. Based in SGM Nagar,
              Faridabad, we raise our own cows and buffaloes and look after them with love, so that what reaches your
              glass is exactly what comes from the farm.
            </p>
            <p className="mt-4 leading-relaxed text-grass-700">
              Whether it is thick buffalo milk for your morning chai, light cow milk for the kids, or golden desi
              ghee made the traditional way, we put quality and purity first, every single day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">From Our Farm to Your Table</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-3xl border border-grass-100 bg-cream p-6 pt-10">
                <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-grass-600 font-display text-lg font-extrabold text-white shadow">
                  {s.n}
                </span>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grass-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-grass-100 p-6">
            <Cow className="mx-auto w-2/3" />
            <h3 className="mt-3 text-center text-xl font-bold">Cow Milk</h3>
            <p className="mt-1 text-center text-sm text-grass-700">Light, easy to digest and great for the whole family.</p>
          </div>
          <div className="rounded-3xl bg-amber-100 p-6">
            <Buffalo className="mx-auto w-2/3" />
            <h3 className="mt-3 text-center text-xl font-bold">Buffalo Milk</h3>
            <p className="mt-1 text-center text-sm text-grass-700">Thick, creamy and rich, ideal for tea, curd and ghee.</p>
          </div>
        </div>
      </section>

      <section className="bg-grass-50">
        <div className="section">
          <h2 className="text-center text-3xl font-extrabold">Our Promise</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <div className="text-3xl">{w.icon}</div>
                <h3 className="mt-2 font-bold">{w.title}</h3>
                <p className="mt-1 text-sm text-grass-700">{w.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
