import PageHeader from '../components/PageHeader.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { FARM, PRODUCTS } from '../data.js'

export default function Products() {
  return (
    <>
      <PageHeader
        emoji="🥛"
        title="Our Products & Prices"
        subtitle="Fresh from the farm every day. Simple, honest pricing."
      />

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-grass-100 bg-white shadow-sm">
          <div className="bg-grass-600 px-6 py-4 text-lg font-bold text-white">Price List</div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-left">
              <thead className="bg-grass-50 text-sm uppercase tracking-wide text-grass-700">
                <tr>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Unit</th>
                  <th className="px-6 py-3 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p) => (
                  <tr key={p.id} className="border-t border-grass-100">
                    <td className="px-6 py-4 font-bold">{p.name}</td>
                    <td className="px-6 py-4 text-grass-700">per {p.unit}</td>
                    <td className="px-6 py-4 text-right font-display text-xl font-extrabold text-barn">₹{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-grass-700">
          Prices may change. Please call{' '}
          {FARM.phones.map((p, i) => (
            <span key={p.raw}>
              {i > 0 && ' or '}
              <a href={`tel:${p.raw}`} className="font-bold text-grass-600 underline">
                {p.display}
              </a>
            </span>
          ))}{' '}
          to confirm and place your order.
        </p>
      </section>
    </>
  )
}
