import { FARM } from '../data.js'
import { ProductArt } from './Illustrations.jsx'

export default function ProductCard({ product }) {
  const msg = encodeURIComponent(`Hello Sharma Dairy Farm, I want to order ${product.name}.`)
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-grass-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-48 items-center justify-center bg-gradient-to-b from-grass-50 to-grass-100">
        <ProductArt kind={product.kind} className="h-36 drop-shadow-md" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-sun/20 px-3 py-1 text-xs font-bold text-amber-800">
          {product.tag}
        </span>
        <h3 className="mt-3 text-2xl font-bold">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-grass-700">{product.desc}</p>
        <div className="mt-5 flex items-end justify-between">
          <p>
            <span className="font-display text-3xl font-extrabold text-barn">₹{product.price}</span>
            <span className="ml-1 text-sm font-semibold text-grass-700">/ {product.unit}</span>
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <a href={`tel:${FARM.phones[0].raw}`} className="btn-secondary !px-3 !py-2 text-sm">
            📞 Call
          </a>
          <a
            href={`https://wa.me/91${FARM.phones[0].raw}?text=${msg}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-3 !py-2 text-sm"
          >
            Order
          </a>
        </div>
      </div>
    </article>
  )
}
