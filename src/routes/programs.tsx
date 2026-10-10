import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";

import { seoPage } from "@/lib/seo";

export const Route=createFileRoute("/programs")({head:()=>seoPage({title:"Programs & Curriculum — Creche to JHS | Evergreenfield Montessori School",description:"Explore Evergreenfield Montessori School's Ghana curriculum with the Montessori method — Creche, Nursery, Kindergarten, Primary and JHS at Ablekuma Fan-Milk, Accra, Ghana.",path:"/programs"}),component:Programs});

const stages=[["Creche","Gentle first steps · 18 months – 2 years",["Warm, attentive care","Sensory play and discovery","Music, rhymes, and movement","Outdoor air and gentle routines"]],["Nursery","Confident little explorers · Ages 3 – 4",["Phonics and early language","Numbers through play","Art, colour, and creativity","Sharing, manners, and independence"]],["Kindergarten","Ready for primary school · Ages 4 – 5",["Reading and writing readiness","Early mathematics","Nature and the world around us","Confidence, focus, and school habits"]],["Lower Primary","Strong foundations · Primary 1 – 3",["English and Mathematics foundations","Science and ICT discovery","French and creative arts","Reading fluency and good study habits"]],["Upper Primary","Growing independence · Primary 4 – 6",["Sound literacy and numeracy","Science, ICT and French","History, creative arts and RME","Leadership, service and good character"]],["JHS","Ready for secondary school · JHS 1 – 3",["Full BECE subject coverage","English, Maths, Science and ICT mastery","French, RME and career technology","Guidance, counselling and BECE preparation"]]];

function Programs(){return <main>
<PageHero eyebrow="Programs & curriculum" title="Learning that grows with your child." intro="Evergreenfield Montessori School teaches the Ghana curriculum enriched with the Montessori method — hands-on, self-directed learning in the early years, growing into strong academics and BECE success from Creche to JHS."/>
<Section eyebrow="Learning pathways" title="A gentle journey from first steps to graduation.">
<div className="grid gap-5 md:grid-cols-2">{stages.map(([name,ages,items])=>
<article key={name as string} className="rounded-lg border border-ink/10 bg-surface p-6">
<p className="text-xs font-bold uppercase tracking-[0.18em] text-action">{name as string}</p>
<h2 className="mt-2 text-2xl font-black">{ages as string}</h2>
<ul className="mt-5 grid gap-2 text-sm text-ink-soft">{(items as string[]).map(i=>
<li key={i}>→ {i}</li>)}</ul>
</article>)}</div>
</Section>
<Section eyebrow="Our curriculum" title="Ghana curriculum, Montessori way.">
<p className="max-w-3xl leading-relaxed text-ink-soft">In Creche, Nursery and Kindergarten, children learn through Montessori practical life, sensorial work, language and mathematics — every step through play and discovery. From Primary upward, the Ghana standards-based curriculum takes centre stage, taught with the same hands-on spirit.</p>
<h3 className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-action">Early years focus</h3>
<div className="mt-4 grid gap-4 md:grid-cols-3">{[["Practical life","Care of self and environment, grace and courtesy."],["Sensorial & culture","Exploring the senses, nature and the world."],["Language & number","Phonics, reading readiness and early mathematics."]].map(([name,text],i)=>
<article key={name} className="rounded-lg border border-ink/10 bg-surface p-6">
<p className="text-3xl font-black text-trust">{i+1}</p>
<h4 className="mt-3 text-lg font-extrabold">{name}</h4>
<p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
</article>)}</div>
<h3 className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-action">Primary & JHS subjects</h3>
<div className="mt-4 grid gap-4 md:grid-cols-2">{[["Literacy & languages","English Language and French — reading, writing and expression."],["Mathematics & science","Number work, thinking skills and practical science."],["Digital & creative","ICT, Creative Arts and Career Technology."],["Character & society","History, Religious & Moral Education, and Physical Education."]].map(([name,text],i)=>
<article key={name} className="rounded-lg border border-ink/10 bg-surface p-6">
<p className="text-3xl font-black text-trust">{i+4}</p>
<h4 className="mt-3 text-lg font-extrabold">{name}</h4>
<p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
</article>)}</div>
</Section>
<Section dark eyebrow="Beyond lessons" title="Every child needs more than one way to shine.">
<div className="grid gap-4 md:grid-cols-3">{[["Create","Art, music, dance, storytelling, and creative play."],["Play","Sports, clubs, movement, and joyful exercise."],["Grow","Manners, leadership, service, and kind habits."].map(([h,p])=>
<article key={h} className="rounded-lg border border-paper/15 bg-paper/10 p-6">
<h3 className="text-xl font-black">{h}</h3>
<p className="mt-2 text-sm leading-relaxed text-paper/65">{p}</p>
</article>)}</div>
</Section>
</main>}
