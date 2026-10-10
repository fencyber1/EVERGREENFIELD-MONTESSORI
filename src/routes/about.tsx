import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";

import { seoPage } from "@/lib/seo";


export const Route = createFileRoute("/about")({ head: () => seoPage({ title: "About Evergreenfield Montessori School in Accra, Ghana", description: "Meet the mission and values behind Evergreenfield Montessori School — a preschool and creche at Ablekuma Fan-Milk, Accra, Ghana where children learn through safe, loving, play-based education.", path: "/about" }), component: About });

function About(){return <main>
<PageHero eyebrow="About us" title="A school should know your child — not just their name." intro="Evergreenfield is a warm, ambitious community where strong relationships give children the courage to stretch themselves."/>
<Section eyebrow="Our motto" title="Love and Education That Enrich for a Life Time.">
<div className="grid gap-8 lg:grid-cols-2">
<p className="font-serif text-2xl leading-relaxed">We believe children do their best learning when they feel secure enough to ask difficult questions, supported enough to try again, and inspired enough to care about the world beyond themselves.</p>
<div className="grid gap-3 sm:grid-cols-2">{["Belonging before achievement","Curiosity with discipline","Character through service","Opportunity for every learner"].map(x=>
<div key={x} className="border-l-4 border-action bg-surface p-5 font-bold">{x}</div>)}</div>
</div>
</Section>
<Section dark eyebrow="Our story" title="Rooted in community. Ready for the future.">
<div className="grid gap-8 lg:grid-cols-2">
<div>
<p className="leading-relaxed text-paper/70">Evergreenfield Montessori School began as a small neighborhood school at Ablekuma Fan-Milk, Accra, and has grown into a diverse learning community without losing its personal character.</p>
</div>
<div className="rounded-lg border border-paper/15 bg-paper/10 p-7">
<p className="font-serif text-2xl">“Our promise is simple: high expectations, human warmth, and a place where every child can make meaningful progress.”</p>
<div className="mt-6 flex items-center gap-4">
<div className="grid size-16 shrink-0 place-items-center rounded-full bg-action text-xl font-black text-action-foreground" role="img" aria-label="Principal of Evergreenfield Montessori School">E</div>
<div>
{/* TODO: add the principal's name, role and photo */}
<p className="font-bold">The Principal</p>
<p className="text-sm text-paper/60">Evergreenfield Montessori School</p>
</div>
</div>
</div>
</div>
</Section>
</main>}
