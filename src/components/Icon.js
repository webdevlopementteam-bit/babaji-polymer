// Inline stroke icons (24x24 grid) so the site needs no icon dependency.
const paths = {
  shield: <><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /><path d="M13 7l-3 5h4l-3 5" /></>,
  diamond: <><path d="M6 3h12l4 6-10 12L2 9l4-6z" /><path d="M2 9h20M12 21L8 9l4-6 4 6-4 12" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /><path d="M3 17.5l9 5 9-5" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" /></>,
  tray: <><path d="M3 9h18l-2 10H5L3 9z" /><path d="M7 9V5h10v4M8 13h8" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  call: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="1" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  pcb: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8" cy="8" r="1.5" /><circle cx="16" cy="16" r="1.5" /><path d="M9.5 8H14l2 2v4.5M8 9.5V16h6.5" /></>,
  wafer: <><circle cx="12" cy="12" r="9" /><path d="M7 7h10v10H7zM12 7v10M7 12h10" /></>,
  car: <><path d="M5 17H3v-5l2-5h14l2 5v5h-2" /><circle cx="7.5" cy="17" r="2" /><circle cx="16.5" cy="17" r="2" /><path d="M9.5 17h5M3 12h18" /></>,
  bulb: <><path d="M9 18h6M10 22h4" /><path d="M12 2a7 7 0 00-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0012 2z" /></>,
  robot: <><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4M8 4h8" /><circle cx="9" cy="14" r="1.5" /><circle cx="15" cy="14" r="1.5" /></>,
  medical: <><rect x="3" y="6" width="18" height="15" rx="2" /><path d="M9 6V3h6v3M12 10v7M8.5 13.5h7" /></>,
  disk: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="11" r="5" /><circle cx="12" cy="11" r="1" /><path d="M7 18l3-4" /></>,
  food: <><path d="M3 11h18v2a8 8 0 01-8 8h-2a8 8 0 01-8-8v-2z" /><path d="M8 7c0-2 2-2 2-4M12 7c0-2 2-2 2-4M16 7c0-2 2-2 2-4" /></>,
  cable: <><path d="M4 9a5 5 0 0110 0v6a5 5 0 0010 0" /><rect x="2" y="3" width="4" height="4" rx="1" /><path d="M4 7v2" /></>,
  box: <><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" /></>,
  flame: <path d="M12 22a7 7 0 007-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8a7 7 0 007 7z" />,
  link: <><path d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" /><path d="M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" /></>,
  leaf: <><path d="M11 20A7 7 0 014 13C4 7 9 3 20 3c0 11-4 17-9 17z" /><path d="M4 21c3-6 7-9 12-12" /></>,
  truck: <><path d="M1 4h14v12H1zM15 9h4l3 3v4h-7" /><circle cx="5.5" cy="18" r="2" /><circle cx="18.5" cy="18" r="2" /></>,
  chart: <><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 6-7" /></>,
  flask: <><path d="M9 3h6M10 3v6L4 19a2 2 0 001.7 3h12.6a2 2 0 001.7-3L14 9V3" /><path d="M7 15h10" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></>,
  factory: <><path d="M2 21V10l6 4V10l6 4V6h4l2 15H2z" /><path d="M6 17h2M11 17h2M16 17h2" /></>,
  recycle: <><path d="M7 19H4.8a2 2 0 01-1.7-3l1.6-2.7M11 19h8.2a2 2 0 001.7-3l-1.5-2.6M14 16l-3 3 3 3M8.3 9.5l2-3.4a2 2 0 013.4 0l1.6 2.7M8 5l2.3 1.1L9 9M19 12l-1 3-3-1" /></>,
  users: <><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2M16 3.1a4 4 0 010 7.8M22 21v-2a4 4 0 00-3-3.9" /></>,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></>,
  dumbbell: <path d="M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12" />,
  pellets: <><circle cx="7" cy="8" r="3" /><circle cx="16" cy="7" r="3" /><circle cx="11" cy="16" r="3" /><circle cx="19" cy="16" r="2.5" /></>,
  sheet: <><path d="M4 7l8-4 8 4-8 4-8-4z" /><path d="M4 7v10l8 4 8-4V7" /></>,
  handshake: <><path d="M11 17l2 2a1.4 1.4 0 002-2M14 14l2.5 2.5a1.4 1.4 0 002-2L15 11l-3 3-1.5-1.5L14 9l-2-2-5 5" /><path d="M2 12l4-4 3 1M22 12l-4-4-3 1" /></>,
  wheat: <><path d="M12 22V8" /><path d="M12 8c-2-1-3-3-3-5 2 1 3 3 3 5zM12 8c2-1 3-3 3-5-2 1-3 3-3 5z" /><path d="M12 13c-2.5-.5-4-2.5-4-4.5 2.5.5 4 2.5 4 4.5zM12 13c2.5-.5 4-2.5 4-4.5-2.5.5-4 2.5-4 4.5z" /><path d="M12 18c-2.5-.5-4-2.5-4-4.5 2.5.5 4 2.5 4 4.5zM12 18c2.5-.5 4-2.5 4-4.5-2.5.5-4 2.5-4 4.5z" /></>,
  whatsapp: <><path d="M3 21l1.7-5A9 9 0 1112 21a9 9 0 01-4.4-1.1L3 21z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.8a4 4 0 01-2-2l.8-.8-1-2L9 9.5z" /></>,
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.box}
    </svg>
  );
}
