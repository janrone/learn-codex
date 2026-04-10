import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,15,28,0.82)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_top,#f8b55f,#ff6b2c_65%,#7c2d12)] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,107,44,0.35)]">
            LC
          </span>
          <span className="text-base font-semibold tracking-[0.18em] text-white uppercase">
            Learn Codex
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-slate-300">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
