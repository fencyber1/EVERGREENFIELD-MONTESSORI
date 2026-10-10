import { createFileRoute } from "@tanstack/react-router"; import { PageHero, Section } from "@/components/school-shared"; import { seoPage } from "@/lib/seo";
export const Route=createFileRoute("/team")({head:()=>seoPage({title:"Meet the Team — Evergreenfield Montessori School, Accra",description:"Meet Evergreenfield Montessori School's leadership and teaching team — dedicated early-years educators at Ablekuma Fan-Milk, Accra, Ghana.",path:"/team"}),component:Team});
function Team(){return <main>
<PageHero eyebrow="Meet the team" title="Trust begins with the people who show up every day." intro="Evergreenfield is led by an experienced early-years educator, supported by caring teachers in every class."/>
<Section eyebrow="Leadership" title="Led with experience.">
<div className="grid gap-5 md:grid-cols-3">
<article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
<div className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper" role="img" aria-label="Principal of Evergreenfield Montessori School — photo coming soon">E</div>
<div className="p-5">
{/* TODO: add the principal's name, role and photo */}
<h2 className="text-xl font-black">The Principal</h2>
<p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">School leadership</p>
<p className="mt-3 text-sm leading-relaxed text-ink-soft">Our principal leads Evergreenfield with a passion for early childhood education — guiding safe, loving, play-based learning across Creche, Nursery, and Preschool.</p>
</div>
</article>
<article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
<div className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper" role="img" aria-label="Evergreenfield teaching team — photo coming soon">E</div>
<div className="p-5">
{/* TODO: add teaching team names and photos */}
<h2 className="text-xl font-black">Teaching Team</h2>
<p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">Early-years educators</p>
<p className="mt-3 text-sm leading-relaxed text-ink-soft">Caring teachers in every class who notice the whole child — bringing learning alive through play, creativity, and patient guidance.</p>
</div>
</article>
</div>
</Section>
<Section dark eyebrow="Our standard" title="Great teaching is personal.">
<div className="grid gap-4 md:grid-cols-3">{["Subject expertise that brings learning alive","Pastoral attention that notices the whole child","Ongoing development, reflection, and collaboration"].map(x=>
<div key={x} className="rounded-lg border border-paper/15 bg-paper/10 p-6 font-bold">{x}</div>)}</div>
</Section>
</main>}
