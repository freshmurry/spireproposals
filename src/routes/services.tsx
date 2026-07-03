import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Spire Proposals" },
      { name: "description", content: "Proposals, presentations, and business development solutions for federal and municipal contractors — tailored to your team, your pursuit, and your pipeline." },
      { property: "og:title", content: "Services — Spire Proposals" },
      { property: "og:description", content: "Start-to-finish proposal management, presentation coaching, and capture planning for small businesses competing for federal and municipal work." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span> <span className="text-white/90">Services</span>
          </nav>
          <p className="mt-8 eyebrow text-gold">Proposals · Presentations · Solutions</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-[1.05]">
            Expert proposal and presentation services
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 font-medium italic">When excellence matters.</p>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            With a wide range of services available, we tailor a package to meet your specific needs —
            from identifying opportunities before an RFP drops to coaching your team through the
            short-list interview.
          </p>
        </div>
      </section>

      {/* Intro / positioning */}
      <section className="py-20 bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">How we help</span>
            <h2 className="mt-4 text-4xl font-bold">A custom solution for the work you're chasing.</h2>
            <div className="mt-6 space-y-5 text-lg text-text-primary leading-relaxed max-w-[65ch]">
              <p>
                We help you identify forthcoming opportunities and use inbound marketing strategies to
                get noticed. Once a solicitation is released, we offer start-to-finish service — from
                RFP analysis and planning through proposal delivery and submission.
              </p>
              <p>
                Once you're short-listed, we prepare you for interview presentations, including
                leave-behind materials and coaching through rehearsals.
              </p>
              <p>
                A small business with a lean office? Let our experts augment your proposal team. Less
                experienced staff? We provide review and feedback on past proposals and customize
                training to expand your in-house skills, systems, and processes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <aside className="bg-muted border-l-4 border-gold p-8">
              <p className="text-2xl font-bold text-navy leading-snug">
                Aspiring to the highest excellence — and inspiring brilliance in others.
              </p>
              <p className="mt-5 text-text-secondary">
                Every engagement is scoped to your team, your pursuit, and your pipeline. Start where
                you need us; scale up when it counts.
              </p>
              <Link to="/contact" className="btn-primary mt-8">Scope your engagement</Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <ServiceBlock
        index="01"
        title="Proposals"
        lead="The ultimate goal of submitting proposals is winning work. We get there through a compelling value proposition that showcases your expertise and differentiators."
        listTitle="What we deliver"
        items={[
          "Proven proposal processes — from strategy through post-award debrief, at your desired level of involvement",
          "Planning: solicitation analysis, schedule, responsibility matrix, deliverable checklist, custom template, win themes, and budget",
          "Management: complete oversight and direction of all facets of the proposal, with ultimate responsibility for production, delivery, and submission",
          "Development: writing, custom graphics, content editing, and subject-matter expert sourcing",
          "Support: subconsultant liaison, section writer, editor, or independent reviewer alongside your in-house team",
          "Color Team reviews and independent content evaluations prior to submission",
          "Debrief participation and actionable lessons-learned for your next pursuit",
        ]}
      />

      <ServiceBlock
        index="02"
        title="Presentations"
        invert
        lead="Outstanding presentations require well-organized content, memorable visuals, and confident delivery. We coach all three."
        listTitle="What we deliver"
        items={[
          "Audience analysis and message crafting that resonates",
          "Delivery method selection matched to the situation",
          "Content development and narrative structure",
          "Storytelling that engages — not just informs",
          "Visuals and handouts designed for maximum impact",
          "Coaching for credibility, confidence, and likeability",
          "Emotional and intellectual connection with the audience — within the clock",
        ]}
        secondaryTitle="Occasions we prepare teams for"
        secondaryItems={[
          "Short-list and oral interviews",
          "Stakeholder meetings and charrettes",
          "Lunch-and-Learn sessions, lectures, and seminars",
          "Conferences and tradeshows",
          "Webinars",
          "Marketing videos",
        ]}
      />

      <ServiceBlock
        index="03"
        title="Solutions"
        lead="Create the ideal world where you know your client well — and can pre-market and position in anticipation of the RFP release."
        listTitle="Business development"
        items={[
          "Identify key customers and gather intelligence on upcoming opportunities and current-project challenges",
          "Develop materials and messaging for specific audiences (including tradeshows) while strengthening your brand",
          "Design strategic inbound marketing programs",
        ]}
        secondaryTitle="Capture planning"
        secondaryItems={[
          "Assess current proposal materials, processes, and procedures — and implement a custom improvement plan",
          "Research and identify upcoming opportunities",
          "Monitor select opportunities and provide notification",
          "Strategize your must-win pursuits for competitive positioning",
          "Facilitate go/no-go decisions, identify teaming partners, and perform competitive analyses",
          "Train, coach, and mentor your proposal staff",
        ]}
      />

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container-x">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Not sure which service fits?</h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">
              Tell us about your pursuit. We'll point you to the right starting place — no obligation.
            </p>
            <Link to="/contact" className="btn-primary mt-10">Talk to Spire</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({
  index,
  title,
  lead,
  listTitle,
  items,
  secondaryTitle,
  secondaryItems,
  invert = false,
}: {
  index: string;
  title: string;
  lead: string;
  listTitle: string;
  items: string[];
  secondaryTitle?: string;
  secondaryItems?: string[];
  invert?: boolean;
}) {
  return (
    <section className="py-20 md:py-28 border-b border-border last:border-0 odd:bg-white even:bg-muted">
      <div className="container-x grid gap-12 lg:grid-cols-12 items-start">
        <Reveal className={`lg:col-span-5 ${invert ? "lg:order-2" : ""}`}>
          <div className="flex items-baseline gap-4">
            <span className="text-gold font-extrabold text-2xl">{index}</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold">{title}</h2>
          <p className="mt-6 text-lg text-text-primary leading-relaxed max-w-[52ch]">{lead}</p>
        </Reveal>

        <Reveal delay={150} className={`lg:col-span-7 ${invert ? "lg:order-1" : ""} space-y-6`}>
          <div className="bg-navy text-white p-8 md:p-10 relative">
            <div aria-hidden className="absolute top-0 left-0 h-1 w-16 bg-gold" />
            <h3 className="text-sm uppercase tracking-[0.18em] text-gold font-semibold">{listTitle}</h3>
            <ul className="mt-6 space-y-4">
              {items.map((it, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-gold font-bold w-8 flex-shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-white/90 leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {secondaryTitle && secondaryItems ? (
            <div className="bg-white border border-border p-8 md:p-10">
              <h3 className="text-sm uppercase tracking-[0.18em] text-navy font-semibold">{secondaryTitle}</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {secondaryItems.map((it, i) => (
                  <li key={i} className="flex gap-3 text-text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2DA89C" strokeWidth="3" strokeLinecap="round" className="mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="leading-snug">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
