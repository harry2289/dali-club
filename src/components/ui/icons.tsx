import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function GloveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M22 26c0-9 6.5-16 14-16s14 7 14 16v12c0 9-6.5 18-14 18s-14-9-14-18V26z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M22 26c0-9 6.5-16 14-16s14 7 14 16v12c0 9-6.5 18-14 18s-14-9-14-18V26z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M15 31c0-4.5 3.3-8 8-8h1v20h-1c-4.7 0-8-3.5-8-8v-4z" fill="currentColor" opacity="0.2" />
      <path d="M15 31c0-4.5 3.3-8 8-8h1v20h-1c-4.7 0-8-3.5-8-8v-4z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 22v18M36 22v18" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

export function PunchBagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M32 4v10" stroke="currentColor" strokeWidth="2.5" />
      <rect x="24" y="14" width="16" height="6" rx="2" fill="currentColor" opacity="0.4" />
      <path
        d="M22 22h20c1.5 0 2.5 1.3 2.3 2.8l-3.4 26c-.3 2.4-2.3 4.2-4.7 4.2H27.8c-2.4 0-4.4-1.8-4.7-4.2l-3.4-26C19.5 23.3 20.5 22 22 22z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M22 30h20M20.5 38h23" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

export function RingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect x="8" y="8" width="48" height="48" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M8 8l10 10M56 8L46 18M8 56l10-10M56 56L46 46" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <circle cx="56" cy="8" r="3" fill="currentColor" />
      <circle cx="8" cy="56" r="3" fill="currentColor" />
      <circle cx="56" cy="56" r="3" fill="currentColor" />
    </svg>
  );
}
