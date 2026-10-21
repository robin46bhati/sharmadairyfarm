export const FARM = {
  name: 'Sharma Dairy Farm',
  phones: [
    { display: '98993 91811', raw: '9899391811' },
    { display: '98990 04806', raw: '9899004806' },
  ],
  address: 'FCA 601, Gali No. 7, Block C, SGM Nagar, Faridabad, Haryana - 121001',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('SGM Nagar, Faridabad, Haryana 121001'),
}

export const PRODUCTS = [
  {
    id: 'buffalo-milk',
    name: 'Buffalo Milk',
    price: 90,
    unit: 'litre',
    kind: 'milk',
    tag: 'Thick & creamy',
    desc: 'Rich, thick and high in fat, straight from our healthy buffaloes. Perfect for tea, curd, kheer and paneer.',
  },
  {
    id: 'cow-milk',
    name: 'Cow Milk',
    price: 75,
    unit: 'litre',
    kind: 'milk',
    tag: 'Light & easy to digest',
    desc: 'Pure, light and naturally nutritious cow milk. Great for kids, elders and everyday drinking.',
  },
  {
    id: 'desi-ghee',
    name: 'Desi Ghee',
    price: 1850,
    unit: 'kg',
    kind: 'ghee',
    tag: 'Traditional method',
    desc: 'Golden, aromatic desi ghee prepared the traditional way. Rich in taste and made without any additives.',
  },
]

export const WHY = [
  { icon: '🥛', title: '100% Pure', text: 'No water, no powder, no preservatives. Just honest farm milk.' },
  { icon: '🌿', title: 'Natural Feed', text: 'Our animals eat fresh green fodder, grains and clean water every day.' },
  { icon: '🚚', title: 'Fresh Delivery', text: 'Milked and delivered the same morning, right to your door.' },
  { icon: '❤️', title: 'Caring Farmers', text: 'A family-run farm where every animal is treated like family.' },
]
