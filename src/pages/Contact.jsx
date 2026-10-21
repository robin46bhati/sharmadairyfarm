import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { FARM, PRODUCTS } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', product: PRODUCTS[0].name, message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const text =
      `Hello Sharma Dairy Farm,\nName: ${form.name}\nPhone: ${form.phone}\n` +
      `Product: ${form.product}\nMessage: ${form.message}`
    window.open(`https://wa.me/91${FARM.phones[0].raw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  const field =
    'w-full rounded-xl border border-grass-100 bg-white px-4 py-3 outline-none transition focus:border-grass-500 focus:ring-2 focus:ring-grass-100'

  return (
    <>
      <PageHeader
        emoji="📞"
        title="Contact Us"
        subtitle="Call us or send an order request. We are happy to help."
      />

      <section className="section">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-3xl bg-grass-600 p-6 text-white">
              <h2 className="text-2xl font-extrabold">Call Us</h2>
              <div className="mt-4 space-y-3">
                {FARM.phones.map((p) => (
                  <a
                    key={p.raw}
                    href={`tel:${p.raw}`}
                    className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 text-lg font-bold transition hover:bg-white/25"
                  >
                    📞 {p.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-grass-100 bg-white p-6">
              <h2 className="text-2xl font-extrabold">Visit the Farm</h2>
              <p className="mt-3 leading-relaxed text-grass-700">📍 {FARM.address}</p>
              <a href={FARM.mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary mt-4">
                Open in Google Maps
              </a>
            </div>

            <div className="rounded-3xl bg-sun/20 p-6">
              <h2 className="text-xl font-extrabold">Delivery Timing</h2>
              <p className="mt-2 text-sm text-grass-700">
                Fresh milk delivery every morning and evening in and around Faridabad. Call to confirm your area.
              </p>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-grass-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-extrabold">Send an Order Request</h2>
            <p className="mt-1 text-sm text-grass-700">This opens WhatsApp with your details filled in.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-bold">Your Name</span>
                <input required name="name" value={form.name} onChange={update} className={field} placeholder="Full name" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-bold">Phone Number</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  pattern="[0-9]{10}"
                  title="Enter a 10 digit number"
                  value={form.phone}
                  onChange={update}
                  className={field}
                  placeholder="10 digit mobile"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1 block text-sm font-bold">Product</span>
              <select name="product" value={form.product} onChange={update} className={field}>
                {PRODUCTS.map((p) => (
                  <option key={p.id}>{p.name}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block">
              <span className="mb-1 block text-sm font-bold">Message</span>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={update}
                className={field}
                placeholder="Quantity, delivery address, timing..."
              />
            </label>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Send on WhatsApp
            </button>
          </form>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-grass-100 shadow-sm">
          <iframe
            title="Sharma Dairy Farm location"
            src={`https://www.google.com/maps?q=${encodeURIComponent('SGM Nagar, Faridabad, Haryana 121001')}&output=embed`}
            className="h-72 w-full sm:h-96"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
