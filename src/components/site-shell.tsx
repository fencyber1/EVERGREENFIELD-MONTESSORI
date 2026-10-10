import { Link, useLocation } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, Youtube } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { JsonLd, breadcrumbSchema, schoolSchema } from "@/lib/seo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus", to: "/campus" },
  { label: "Team", to: "/team" },
  { label: "Gallery", to: "/gallery" },
  { label: "School Tour", to: "/tour" },
] as const;

function SchoolMonogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`grid size-12 shrink-0 place-items-center rounded-full bg-action text-xl font-black text-action-foreground shadow-sm ring-1 ring-ink/10 ${className}`}
    >
      E
    </span>
  );
}

// Shows public/logo.jpg (school crest) in its natural aspect; falls back to the monogram until then.
function SchoolCrest({ className = "" }: { className?: string }) {
  const [missing, setMissing] = useState(false);
  if (missing) return <SchoolMonogram className={className} />;
  return (
    <img
      src="/logo.jpg"
      alt="Evergreenfield Montessori School crest"
      width={96}
      height={96}
      onError={() => setMissing(true)}
      className={`h-12 w-auto shrink-0 rounded-md bg-white object-contain px-1 shadow-sm ring-1 ring-ink/10 ${className}`}
    />
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const crumbs = breadcrumbSchema(pathname);
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-display text-ink">
      <JsonLd data={schoolSchema} />
      {crumbs && <JsonLd data={crumbs} />}
      <div className="bg-amber-400 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.14em] text-ink">
        Demo website — photos, names and addresses on this site are fictional and for demonstration only
      </div>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Evergreenfield Montessori School home">
            <SchoolCrest />
            <span className="leading-none">
              <span className="block text-[15px] font-extrabold">EVERGREENFIELD MONTESSORI SCHOOL</span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
                Knowledge · Scholarship · Illumination
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
                activeProps={{ className: "text-ink" }}
                {...(item.to === "/" ? { activeOptions: { exact: true } } : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Button asChild variant="ghost" size="icon" aria-label="Call admissions">
              <a href="tel:+233553355377"><Phone /></a>
            </Button>
            <Button asChild className="rounded-none bg-action text-action-foreground hover:bg-action/90">
              <Link to="/contact"><span className="size-2 rounded-full bg-action-foreground" />Contact Admissions</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="bg-action text-action-foreground hover:bg-action/90 lg:hidden" aria-label="Open navigation"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-[88%] bg-paper">
              <SheetHeader className="text-left">
                <SheetTitle className="font-extrabold text-ink">Evergreenfield Montessori School</SheetTitle>
                <SheetDescription>Explore our school and speak with admissions.</SheetDescription>
              </SheetHeader>
              <nav className="mt-8 grid gap-1" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <SheetClose key={item.to} asChild>
                    <Link to={item.to} className="border-b border-ink/10 py-3 text-base font-bold text-ink">{item.label}</Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/contact" className="mt-5 bg-action px-4 py-3 text-center font-bold text-action-foreground">Contact Admissions</Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {children}

      <footer className="bg-ink pb-20 text-paper/70 lg:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><SchoolCrest /><span className="font-extrabold text-paper">Evergreenfield Montessori School</span></div>
            <p className="mt-4 font-serif text-lg italic leading-snug text-paper">“Knowledge, Scholarship, Illumination.”</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-paper/50">Our motto</p>
            <div className="mt-4 flex items-center gap-2">
              <Button asChild variant="outline" size="icon" className="size-9 rounded-full border-paper/20 bg-transparent text-paper/70 hover:bg-paper/10 hover:text-paper" aria-label="Evergreenfield Montessori School on Facebook"><a href="https://web.facebook.com/evergreenfieldmontsch" target="_blank" rel="noreferrer"><Facebook className="size-4" /></a></Button>
              <Button asChild variant="outline" size="icon" className="size-9 rounded-full border-paper/20 bg-transparent text-paper/70 hover:bg-paper/10 hover:text-paper" aria-label="Evergreenfield Montessori School on Instagram"><a href="https://www.instagram.com/evergreenfieldmontsch/" target="_blank" rel="noreferrer"><Instagram className="size-4" /></a></Button>
              <Button asChild variant="outline" size="icon" className="size-9 rounded-full border-paper/20 bg-transparent text-paper/70 hover:bg-paper/10 hover:text-paper" aria-label="Evergreenfield Montessori School on TikTok"><a href="https://www.tiktok.com/@evergreenfieldmontsch" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg></a></Button>
              <Button asChild variant="outline" size="icon" className="size-9 rounded-full border-paper/20 bg-transparent text-paper/70 hover:bg-paper/10 hover:text-paper" aria-label="Evergreenfield Montessori School on X"><a href="https://twitter.com/evergreenfield1" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a></Button>
              <Button asChild variant="outline" size="icon" className="size-9 rounded-full border-paper/20 bg-transparent text-paper/70 hover:bg-paper/10 hover:text-paper" aria-label="Evergreenfield Montessori School on YouTube"><a href="https://www.youtube.com/@evergreenfieldmontsch" target="_blank" rel="noreferrer"><Youtube className="size-4" /></a></Button>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-action">Explore</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navigation.slice(0, 8).map((item) => <Link key={item.to} to={item.to} className="hover:text-paper">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-action">Admissions</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="tel:+233553355377" className="flex items-center gap-2 hover:text-paper"><Phone className="size-4" /> 055 335 5377</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Mango+Avenue+Ablekuma+Fan-Milk+Accra" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-paper"><MapPin className="size-4" /> Plot 12, Mango Avenue, Ablekuma Fan-Milk</a>
              <a href="mailto:info@evergreenfieldmontessori.edu.gh" className="flex items-center gap-2 hover:text-paper"><Mail className="size-4" /> info@evergreenfieldmontessori.edu.gh</a>
              <Link to="/contact" className="flex items-center gap-2 hover:text-paper"><MessageCircle className="size-4" /> Ask a question</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-paper/10 px-5 py-5 text-center text-xs text-paper/50">© 2026 Evergreenfield Montessori School · Demo website · Ablekuma Fan-Milk, Accra, Ghana</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <Button asChild variant="outline" size="icon" className="size-11 shrink-0 rounded-full"><a href="tel:+233553355377" aria-label="Call admissions"><Phone /></a></Button>
          <Button asChild className="h-11 flex-1 rounded-none bg-action text-action-foreground hover:bg-action/90"><Link to="/contact">Contact Admissions</Link></Button>
          <Button asChild variant="outline" size="icon" className="size-11 shrink-0 rounded-full border-growth/40 text-growth hover:border-growth hover:bg-growth/10"><a href="https://wa.me/233553355377?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20admissions." target="_blank" rel="noreferrer" aria-label="Chat with admissions on WhatsApp"><MessageCircle /></a></Button>
        </div>
      </div>
    </div>
  );
}
