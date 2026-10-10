import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";
import { Button } from "@/components/ui/button";
import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/tour")({
  head: () =>
    seoPage({
      title: "School Tour — Buildings & Facilities | Evergreenfield Montessori School",
      description:
        "Take a school tour of Evergreenfield Montessori School at Ablekuma Fan-Milk, Accra, Ghana — our gate and entrance, playground, outdoor play areas, and classrooms.",
      path: "/tour",
    }),
  component: Tour,
});

// TODO: add Evergreenfield tour photos to public/tour/ then list them here:
//   const photos = [
//     { src: "/tour/gate.jpg", name: "School Gate & Entrance" },
//     ...
//   ];
const photos: Array<{ src: string; name: string }> = [];

const PLACEHOLDER_VIEWS = [
  "School Gate & Entrance",
  "Playground",
  "Outdoor Play Equipment",
  "Classroom Block",
  "School Compound",
];

function Tour() {
  return (
    <main>
      <PageHero
        eyebrow="School tour"
        title="Take a look around our school."
        intro="Our gate and entrance, playground, outdoor play areas, and classrooms — Evergreenfield Montessori School, Ablekuma Fan-Milk, Accra."
      />
      <Section eyebrow="Buildings & facilities" title="Views of Evergreenfield.">
        {photos.length === 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDER_VIEWS.map((name) => (
              <div
                key={name}
                className="grid aspect-square w-full place-items-center rounded-lg border border-ink/10 bg-surface text-center"
                role="img"
                aria-label={`${name} — photo coming soon`}
              >
                <p className="max-w-[12rem] px-4 text-sm font-bold text-ink-soft">
                  {name} — photo coming soon
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="block aspect-square w-full overflow-hidden rounded-lg border border-ink/10 bg-surface"
              >
                <img
                  src={photo.src}
                  alt={photo.name}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </figure>
            ))}
          </div>
        )}
      </Section>
      <Section dark eyebrow="Like what you see?" title="Come and see it in person.">
        <div className="flex flex-col items-start gap-5">
          <p className="max-w-xl leading-relaxed text-paper/70">
            Photos are a start — the real Evergreenfield is even better. Book a visit and walk
            our buildings, meet our teachers, and picture your child here.
          </p>
          <Button
            asChild
            className="h-11 rounded-none bg-action text-action-foreground hover:bg-action/90"
          >
            <Link to="/contact">Book a school tour</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
