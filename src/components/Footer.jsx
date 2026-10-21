import { Link } from 'react-router-dom'
import { FARM } from '../data.js'
import { Grass } from './Illustrations.jsx'

export default function Footer() {
  return (
    <footer className="mt-10 text-grass-50">
      <Grass className="block h-10 w-full sm:h-14" />
      <div className="bg-grass-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 pt-4 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-white">Sharma Dairy Farm</h3>
          <p className="mt-3 text-sm leading-relaxed text-grass-100/80">
            Fresh, pure and farm-to-home dairy. Buffalo milk, cow milk and traditional desi ghee from our family
            farm to your kitchen.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider text-sun">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/products', 'Products & Prices'],
              ['/gallery', 'Gallery'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-grass-100/80 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider text-sun">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-grass-100/80">
            {FARM.phones.map((p) => (
              <li key={p.raw}>
                📞{' '}
                <a href={`tel:${p.raw}`} className="hover:text-white">
                  {p.display}
                </a>
              </li>
            ))}
            <li>📍 {FARM.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-grass-100/60">
        © {new Date().getFullYear()} Sharma Dairy Farm. All rights reserved.
      </div>
      </div>
    </footer>
  )
}
