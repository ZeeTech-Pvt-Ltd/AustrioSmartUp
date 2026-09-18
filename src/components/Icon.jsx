/**
 * Minimal inline icon set (24x24 viewBox, currentColor stroke) so the
 * site ships no icon font or image dependency.
 */
const paths = {
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  algorithm: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.2 7.2l5.6 8.6M15.8 7.2l-5.6 8.6" />
    </>
  ),
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  patterns: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <path d="M15 13h5M15 20h5M17.5 15.5v4.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  apple: (
    <path d="M16.7 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.6.9-.7 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.1 1.2 9.5.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.6-3.9zM14.3 5.7c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.5z" />
  ),
  'atom-mark': (
    <>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-35 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(35 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(90 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </>
  ),
  star: <path d="M12 3l2.7 5.6 6.3.9-4.5 4.4 1 6.2-5.5-3-5.5 3 1-6.2L3 9.5l6.3-.9L12 3z" />,
  'star-filled': (
    <path d="M12 3l2.7 5.6 6.3.9-4.5 4.4 1 6.2-5.5-3-5.5 3 1-6.2L3 9.5l6.3-.9L12 3z" fill="currentColor" stroke="none" />
  ),
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  bank: (
    <>
      <path d="M3 9.5L12 4l9 5.5V11H3V9.5z" />
      <path d="M5.5 11v6M9.5 11v6M14.5 11v6M18.5 11v6" />
      <path d="M3 20h18" />
    </>
  ),
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 0 0-14 0" />,
  wallet: <path d="M3 9.5 12 4l9 5.5M5 11v6.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V11m-11 4h4v4.5" />,
  chart: <path d="M3 17 8 11l4 4 6-8m0 0h-4m4 0v4" />,
}

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}
