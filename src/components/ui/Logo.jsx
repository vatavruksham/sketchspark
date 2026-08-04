import { useId } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  const gradientId = useId();
  const glowId = useId();

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* SketchSpark mark: rounded spark diamond + sketch stroke */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="18" fill={`url(#${gradientId})`} />
        <circle cx="32" cy="32" r="22" fill={`url(#${glowId})`} opacity="0.35" />
        {/* Sketch stroke / S-curve */}
        <path
          d="M18 42 C22 28, 28 24, 34 28 C40 32, 42 40, 48 22"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Pencil tip accent */}
        <path d="M46 20 L52 14 L54 20 L48 22 Z" fill="#fff7ed" />
        {/* Spark bursts */}
        <path
          d="M22 16 L23.2 19.2 L26.5 20.5 L23.2 21.8 L22 25 L20.8 21.8 L17.5 20.5 L20.8 19.2 Z"
          fill="#ffffff"
          opacity="0.95"
        />
        <circle cx="40" cy="44" r="2.2" fill="#ffffff" opacity="0.85" />
        <circle cx="14" cy="30" r="1.5" fill="#ffffff" opacity="0.7" />
        <defs>
          <linearGradient
            id={gradientId}
            x1="6"
            y1="4"
            x2="58"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f97316" />
            <stop offset="0.55" stopColor="#fb7185" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient
            id={glowId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(32 32) rotate(90) scale(24)"
          >
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-display font-bold gradient-text tracking-tight">
          SketchSpark
        </span>
      )}
    </Link>
  );
}
