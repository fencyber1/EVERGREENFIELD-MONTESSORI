import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";

import { seoPage } from "@/lib/seo";

export const Route=createFileRoute("/campus")({head:()=>seoPage({title:"Campus & Facilities — Evergreenfield Montessori School, Accra",description:"Tour Evergreenfield Montessori School's classrooms, nursery rooms, play areas and outdoor spaces — 24-hour CCTV, cots, activity mats and homely, well-ventilated rooms at Ablekuma Fan-Milk, Accra.",path:"/campus"}),component:Campus});

// TODO: add Evergreenfield campus photos to public/ and reference them here.
const spaces=[["Classroom learning","Welcoming spaces for guided learning, creativity, and collaborative discovery."],["Reading & learning","Colourful resources and shared reading help young learners build confidence together."],["Sport & outdoor learning","A dedicated outdoor area designed for movement, coordination, and active play."]] as const;

function Campus(){
return <main>
<PageHero eyebrow="Facilities & campus" title="See where your child will spend their day." intro="Bright learning spaces and active outdoor areas designed around children."/>
<Section eyebrow="Campus tour" title="Spaces that make possibility visible.">
<div className="space-y-12">{spaces.map(([title,text],i)=>
<article key={title} className="grid items-center gap-7 lg:grid-cols-2">
<div className={`grid aspect-[16/10] w-full place-items-center rounded-lg bg-surface text-center ${i%2?"lg:order-2":""}`} role="img" aria-label={`${title} — photo coming soon`}>
<p className="max-w-xs px-6 text-sm text-ink-soft">{title} — photo coming soon</p>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-[0.18em] text-action">0{i+1}</p>
<h2 className="mt-2 text-3xl font-black">{title}</h2>
<p className="mt-3 max-w-lg leading-relaxed text-ink-soft">{text}</p>
</div>
</article>)}</div>
</Section>
<Section dark eyebrow="Care & safety" title="Designed so children can focus on learning.">
<div className="grid gap-4 md:grid-cols-3">{["Secure visitor entry and supervised arrival","24-hour CCTV monitoring across the facility","Cots, activity mats, and age-appropriate toys","Clean, well-ventilated rooms that feel like home","Age-appropriate wellbeing and medical support","Clearly zoned learning and recreation spaces"].map(x=>
<div key={x} className="rounded-lg border border-paper/15 bg-paper/10 p-6 font-bold">✓ {x}</div>)}</div>
</Section>
</main>}
