// Original SVG illustrations for the dairy farm theme (no external image files needed).

export function Cow({ className = '', flip = false, spots = true }) {
  return (
    <svg
      viewBox="0 0 220 160"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      role="img"
      aria-label="Illustration of a dairy cow"
    >
      {/* tail */}
      <path d="M22 62 C8 70 8 96 14 112" stroke="#3b2a24" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="14" cy="114" rx="6" ry="9" fill="#3b2a24" />
      {/* legs */}
      <rect x="44" y="104" width="14" height="42" rx="6" fill="#fff" stroke="#3b2a24" strokeWidth="3" />
      <rect x="66" y="108" width="14" height="38" rx="6" fill="#f1ece4" stroke="#3b2a24" strokeWidth="3" />
      <rect x="128" y="108" width="14" height="38" rx="6" fill="#f1ece4" stroke="#3b2a24" strokeWidth="3" />
      <rect x="150" y="104" width="14" height="42" rx="6" fill="#fff" stroke="#3b2a24" strokeWidth="3" />
      <rect x="44" y="138" width="14" height="8" rx="3" fill="#3b2a24" />
      <rect x="66" y="138" width="14" height="8" rx="3" fill="#3b2a24" />
      <rect x="128" y="138" width="14" height="8" rx="3" fill="#3b2a24" />
      <rect x="150" y="138" width="14" height="8" rx="3" fill="#3b2a24" />
      {/* udder */}
      <ellipse cx="100" cy="116" rx="16" ry="11" fill="#f6b5b5" stroke="#3b2a24" strokeWidth="3" />
      {/* body */}
      <ellipse cx="100" cy="82" rx="76" ry="40" fill="#fff" stroke="#3b2a24" strokeWidth="3.5" />
      {spots && (
        <>
          <path d="M60 58 C50 48 74 40 86 50 C96 60 80 76 66 72 C58 70 58 64 60 58Z" fill="#3b2a24" />
          <path d="M120 84 C112 74 138 66 150 76 C158 86 142 100 128 96 C120 94 118 90 120 84Z" fill="#3b2a24" />
          <circle cx="40" cy="86" r="10" fill="#3b2a24" />
        </>
      )}
      {/* head */}
      <rect x="150" y="34" width="56" height="52" rx="24" fill="#fff" stroke="#3b2a24" strokeWidth="3.5" />
      <path d="M156 38 C148 24 158 18 164 28" fill="#fff" stroke="#3b2a24" strokeWidth="3" strokeLinecap="round" />
      <path d="M200 38 C210 24 200 18 194 28" fill="#fff" stroke="#3b2a24" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="146" cy="48" rx="12" ry="6" fill="#3b2a24" transform="rotate(-25 146 48)" />
      <ellipse cx="210" cy="48" rx="12" ry="6" fill="#3b2a24" transform="rotate(25 210 48)" />
      <rect x="156" y="62" width="44" height="26" rx="13" fill="#f6b5b5" stroke="#3b2a24" strokeWidth="3" />
      <circle cx="168" cy="75" r="3" fill="#3b2a24" />
      <circle cx="188" cy="75" r="3" fill="#3b2a24" />
      <circle cx="166" cy="52" r="4" fill="#3b2a24" />
      <circle cx="190" cy="52" r="4" fill="#3b2a24" />
      {/* bell */}
      <rect x="166" y="90" width="24" height="6" rx="3" fill="#9B2C2C" />
      <circle cx="178" cy="102" r="6" fill="#F6B93B" stroke="#3b2a24" strokeWidth="2" />
    </svg>
  )
}

export function Buffalo({ className = '' }) {
  return (
    <svg viewBox="0 0 220 160" className={className} role="img" aria-label="Illustration of a buffalo">
      <path d="M22 66 C8 74 8 98 14 114" stroke="#1f1a17" strokeWidth="5" fill="none" strokeLinecap="round" />
      <rect x="46" y="104" width="15" height="42" rx="6" fill="#4a4039" stroke="#1f1a17" strokeWidth="3" />
      <rect x="68" y="108" width="15" height="38" rx="6" fill="#3d342e" stroke="#1f1a17" strokeWidth="3" />
      <rect x="130" y="108" width="15" height="38" rx="6" fill="#3d342e" stroke="#1f1a17" strokeWidth="3" />
      <rect x="152" y="104" width="15" height="42" rx="6" fill="#4a4039" stroke="#1f1a17" strokeWidth="3" />
      <ellipse cx="100" cy="84" rx="78" ry="42" fill="#4a4039" stroke="#1f1a17" strokeWidth="3.5" />
      <path d="M150 40 C140 20 170 8 182 24" fill="none" stroke="#d8cdb8" strokeWidth="7" strokeLinecap="round" />
      <path d="M206 44 C216 24 196 10 184 26" fill="none" stroke="#d8cdb8" strokeWidth="7" strokeLinecap="round" />
      <rect x="150" y="36" width="58" height="54" rx="26" fill="#4a4039" stroke="#1f1a17" strokeWidth="3.5" />
      <rect x="156" y="64" width="46" height="26" rx="13" fill="#6b5d52" stroke="#1f1a17" strokeWidth="3" />
      <circle cx="168" cy="77" r="3" fill="#1f1a17" />
      <circle cx="190" cy="77" r="3" fill="#1f1a17" />
      <circle cx="166" cy="54" r="4" fill="#fff" />
      <circle cx="192" cy="54" r="4" fill="#fff" />
    </svg>
  )
}

export function MilkBottle({ className = '' }) {
  return (
    <svg viewBox="0 0 100 160" className={className} role="img" aria-label="Bottle of fresh milk">
      <rect x="36" y="6" width="28" height="14" rx="4" fill="#3D7F21" />
      <path d="M38 20 H62 V38 C62 46 80 54 80 74 V138 C80 148 74 154 64 154 H36 C26 154 20 148 20 138 V74 C20 54 38 46 38 38Z" fill="#fff" stroke="#9fb89a" strokeWidth="3" />
      <rect x="28" y="84" width="44" height="46" rx="8" fill="#DDEFCF" />
      <text x="50" y="104" textAnchor="middle" fontSize="10" fontWeight="800" fill="#2F6319" fontFamily="Nunito, sans-serif">FRESH</text>
      <text x="50" y="119" textAnchor="middle" fontSize="10" fontWeight="800" fill="#2F6319" fontFamily="Nunito, sans-serif">MILK</text>
      <path d="M30 64 C30 56 36 52 40 48" stroke="#e6efe3" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function GheeJar({ className = '' }) {
  return (
    <svg viewBox="0 0 120 140" className={className} role="img" aria-label="Jar of desi ghee">
      <rect x="22" y="8" width="76" height="20" rx="8" fill="#9B2C2C" />
      <path d="M26 28 H94 V40 C108 48 110 62 110 78 V116 C110 128 102 134 92 134 H28 C18 134 10 128 10 116 V78 C10 62 12 48 26 40Z" fill="#F9D56E" stroke="#c9961f" strokeWidth="3" />
      <rect x="24" y="66" width="72" height="44" rx="8" fill="#FFF9EE" />
      <text x="60" y="86" textAnchor="middle" fontSize="12" fontWeight="800" fill="#9B2C2C" fontFamily="Nunito, sans-serif">DESI</text>
      <text x="60" y="102" textAnchor="middle" fontSize="12" fontWeight="800" fill="#9B2C2C" fontFamily="Nunito, sans-serif">GHEE</text>
      <path d="M22 54 C22 48 26 46 30 44" stroke="#fff3bf" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function MilkCan({ className = '' }) {
  return (
    <svg viewBox="0 0 110 150" className={className} role="img" aria-label="Milk can">
      <path d="M32 8 H78 C84 8 84 20 78 20 H32 C26 20 26 8 32 8Z" fill="#9aa5ad" stroke="#5b666e" strokeWidth="3" />
      <path d="M36 20 H74 L82 40 H28Z" fill="#c9d1d6" stroke="#5b666e" strokeWidth="3" />
      <path d="M26 40 H84 C90 56 92 70 92 90 V132 C92 142 86 146 78 146 H32 C24 146 18 142 18 132 V90 C18 70 20 56 26 40Z" fill="#dfe5e8" stroke="#5b666e" strokeWidth="3" />
      <rect x="18" y="64" width="74" height="8" fill="#9B2C2C" />
      <rect x="18" y="108" width="74" height="8" fill="#9B2C2C" />
      <path d="M30 50 C28 70 28 100 30 128" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".7" fill="none" />
    </svg>
  )
}

export function Barn({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" className={className} role="img" aria-label="Red barn">
      <path d="M10 70 L100 14 L190 70 V148 H10Z" fill="#B5362E" stroke="#6e1c18" strokeWidth="4" strokeLinejoin="round" />
      <path d="M10 70 L100 14 L190 70" fill="none" stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
      <rect x="58" y="80" width="84" height="68" fill="#8f2620" stroke="#fff" strokeWidth="5" />
      <path d="M58 80 L142 148 M142 80 L58 148 M100 80 V148" stroke="#fff" strokeWidth="4" />
      <circle cx="100" cy="46" r="10" fill="#FFF9EE" stroke="#fff" strokeWidth="3" />
      <rect x="96" y="40" width="8" height="12" fill="#6e1c18" />
    </svg>
  )
}

export function Grass({ className = '' }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 60 C200 10 400 110 600 60 C800 10 1000 110 1200 60 V120 H0Z" fill="#4C9A2A" />
      <path d="M0 90 C250 50 450 120 700 84 C900 56 1050 110 1200 86 V120 H0Z" fill="#3D7F21" />
    </svg>
  )
}

export function HeroScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 640 460"
      className={className}
      role="img"
      aria-label="A dairy farm scene with a red barn, cows and green fields under a bright sun"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#BFE6FB" />
          <stop offset="1" stopColor="#FFF4D6" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" rx="36" fill="url(#sky)" />
      {/* sun */}
      <g>
        <circle cx="520" cy="86" r="46" fill="#F6B93B" />
        <circle cx="520" cy="86" r="62" fill="#F6B93B" opacity=".25" />
      </g>
      {/* clouds */}
      <g fill="#fff" opacity=".95">
        <ellipse cx="120" cy="80" rx="46" ry="18" />
        <ellipse cx="156" cy="70" rx="34" ry="18" />
        <ellipse cx="90" cy="72" rx="26" ry="14" />
        <ellipse cx="330" cy="130" rx="40" ry="14" />
        <ellipse cx="360" cy="122" rx="28" ry="14" />
      </g>
      {/* hills */}
      <path d="M0 270 C120 200 220 230 320 262 C430 296 520 210 640 250 V460 H0Z" fill="#8CC96B" />
      <path d="M0 330 C140 280 260 330 380 306 C500 282 570 310 640 296 V460 H0Z" fill="#4C9A2A" />
      <path d="M0 392 C160 360 300 410 460 384 C540 372 600 380 640 388 V460 H0Z" fill="#3D7F21" />
      {/* fence */}
      <g stroke="#a8764a" strokeWidth="6" strokeLinecap="round">
        <path d="M30 372 H250" />
        <path d="M30 392 H250" />
        {[40, 90, 140, 190, 240].map((x) => (
          <path key={x} d={`M${x} 360 V404`} />
        ))}
      </g>
      {/* barn */}
      <g transform="translate(40 150) scale(.95)">
        <Barn />
      </g>
      {/* silo */}
      <g>
        <rect x="230" y="150" width="34" height="110" fill="#d7dde1" stroke="#8c979e" strokeWidth="3" />
        <path d="M230 150 C230 126 264 126 264 150Z" fill="#9B2C2C" />
      </g>
      {/* cows */}
      <g transform="translate(330 270) scale(.9)">
        <Cow />
      </g>
      <g transform="translate(250 330) scale(.6)">
        <Cow flip spots={false} />
      </g>
      {/* flowers */}
      <g>
        {[
          [60, 430], [150, 440], [330, 438], [420, 432], [590, 436],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="5" fill={i % 2 ? '#fff' : '#F6B93B'} />
            <circle r="2" fill="#9B2C2C" />
          </g>
        ))}
      </g>
    </svg>
  )
}

export function ProductArt({ kind, className = '' }) {
  if (kind === 'ghee') return <GheeJar className={className} />
  return <MilkBottle className={className} />
}
