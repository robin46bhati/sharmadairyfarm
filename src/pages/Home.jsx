import { Link } from 'react-router-dom'
import { FARM, PRODUCTS, WHY } from '../data.js'
import { HeroScene, Cow, Buffalo, MilkCan } from '../components/Illustrations.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-grass-100 via-cream to-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="text-center md:text-left">
            <span className="inline-block rounded-full bg-sun/25 px-4 py-1 text-sm font-bold text-amber-800">
              🌾 Farm fresh • Pure • Natural
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Pure Milk, Straight from <span className="text-grass-600">Our Farm</span> to Your Home
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-grass-700">
              Welcome to Sharma Dairy Farm, Faridabad. Enjoy fresh buffalo milk, cow milk and traditional desi ghee
              with no water, no powder and no preservatives.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link to="/products" className="btn-primary">
                View Products & Prices
              </Link>
              <a href={`tel:${FARM.phones[0].raw}`} className="btn-secondary">
                📞 {FARM.phones[0].display}
              </a>
            </div>
          </div>
          <div className="floaty">
            <HeroScene className="w-full drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Price strip */}
      <section className="bg-grass-600 text-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 text-center sm:grid-cols-3 sm:px-6">
          {PRODUCTS.map((p) => (
            <div key={p.id}>
              <p className="text-sm font-semibold uppercase tracking-wider text-grass-100">{p.name}</p>
              <p className="font-display text-2xl font-extrabold">
                ₹{p.price} <span className="text-base font-semibold text-grass-100">/ {p.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Our Dairy Products</h2>
          <p className="mx-auto mt-3 max-w-xl text-grass-700">
            Honest products made fresh every day. Order by call or WhatsApp.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white">
        <div className="section">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Why Families Choose Us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-3xl bg-grass-50 p-6 text-center transition hover:shadow-lg">
                <div className="text-4xl">{w.icon}</div>
                <h3 className="mt-3 text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grass-700">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animals */}
      <section className="section">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-grass-100 p-4">
              <Cow className="w-full" />
              <p className="mt-2 text-center font-bold">Our Cows</p>
            </div>
            <div className="rounded-3xl bg-amber-100 p-4">
              <Buffalo className="w-full" />
              <p className="mt-2 text-center font-bold">Our Buffaloes</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Happy Animals, Better Milk</h2>
            <p className="mt-4 leading-relaxed text-grass-700">
              Great milk begins with healthy, well-fed and well-cared-for animals. Our cows and buffaloes get green
              fodder, balanced feed, clean water and a clean, airy shed, so the milk you get is naturally rich and
              wholesome.
            </p>
            <Link to="/about" className="btn-primary mt-6">
              Know Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-grass-700 px-6 py-12 text-center text-white sm:px-12">
          <MilkCan className="absolute -left-4 bottom-0 hidden h-40 opacity-30 sm:block" />
          <MilkCan className="absolute -right-4 bottom-0 hidden h-40 opacity-30 sm:block" />
          <h2 className="relative text-3xl font-extrabold sm:text-4xl">Start Your Daily Fresh Milk Today</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-grass-100">
            Call us to set up daily home delivery in Faridabad.
          </p>
          <div className="relative mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {FARM.phones.map((p) => (
              <a
                key={p.raw}
                href={`tel:${p.raw}`}
                className="inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 font-extrabold text-grass-900 transition hover:brightness-110"
              >
                📞 {p.display}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
