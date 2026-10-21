# Sharma Dairy Farm Website

Multi-page website built with **React (Vite)**, **React Router** and **Tailwind CSS**. Fully responsive.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- `/` Home
- `/about` About
- `/products` Products & prices
- `/gallery` Gallery
- `/contact` Contact (call, WhatsApp order form, map)

## Editing details

All phone numbers, address, products and prices are in `src/data.js`.

Images are built-in SVG illustrations (`src/components/Illustrations.jsx`). To use real photos, put them in
`src/assets/` and replace the illustrations in `src/pages/Gallery.jsx` and `src/pages/Home.jsx` with `<img>` tags.

When deploying (Netlify/Vercel), set all routes to fall back to `index.html` so page refreshes work.
