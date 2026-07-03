import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { AGENCIES } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spire Proposals — Win more work with better proposals" },
      { name: "description", content: "Spire Proposals helps small businesses win federal and municipal contracts with expert proposal strategy and persuasive presentations." },
      { property: "og:title", content: "Spire Proposals — Win more work with better proposals" },
      { property: "og:description", content: "Expert proposal, presentation, and capture strategy for small businesses pursuing federal and municipal contracts." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-navy text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,168,156,0.22) 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(74,111,165,0.25) 0%, transparent 65%)" }}
        />

        <div className="container-x relative z-10 py-32 md:py-40">
          <Reveal>
            <span className="eyebrow">Federal &amp; Municipal Proposal Experts</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl font-extrabold text-white max-w-5xl">
              Win more work with <span className="text-gold">better proposals.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Get the results you need with compelling presentations. Spire Proposals partners with small
              businesses to plan, write, and deliver winning bids.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">View Our Services</Link>
              <Link to="/contact" className="btn-outline-light">Contact Us</Link>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex items-center gap-3 text-sm text-white/70">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" /></svg>
              Trusted by federal and municipal contractors.
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase">Scroll</div>
      </section>

      {/* CREDIBILITY MARQUEE */}
      <section className="bg-muted py-14 border-y border-border overflow-hidden">
        <div className="container-x">
          <p className="text-center text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold">
            Spire Proposals has led or supported proposals for:
          </p>
        </div>
        <div className="mt-8 relative overflow-hidden">
          <div className="flex gap-12 marquee-track w-max">
            {[...AGENCIES, ...AGENCIES].map((a, i) => (
              <div key={i} className="flex flex-col items-center justify-center min-w-[180px] px-6">
                <div className="text-navy font-bold text-xl tracking-tight">{a.abbr}</div>
                <div className="text-xs text-text-secondary mt-1 text-center max-w-[180px]">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">Three disciplines. One mission: your win.</h2>
              <p className="mt-5 text-text-secondary text-lg">
                From strategy to delivery, we bring proven systems to every phase of your pursuit.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <article className="group h-full bg-white border border-border p-8 transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-navy text-gold mb-6 transition-colors group-hover:bg-gold group-hover:text-navy">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">{s.excerpt}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-navy font-semibold text-sm">
                    Explore our {s.title.toLowerCase()} services
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-x grid gap-12 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Our standard</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">Details decide the win.</h2>
              <p className="mt-5 text-text-secondary text-lg leading-relaxed">
                In the world of proposals, where details can mean the difference between scoring that key win
                and huge disappointment, Spire Proposals has the expertise you need. We specialize in helping
                small businesses win federal and municipal contracts.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1">
                Learn about our approach <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <figure className="relative bg-white border-l-4 border-gold p-10 md:p-12 shadow-sm">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#2DA89C" strokeWidth="1.8" className="mb-4">
                <path d="M7 7h4v6H7zM13 7h4v6h-4zM7 13c0 3 1 4 4 4M13 13c0 3 1 4 4 4" />
              </svg>
              <blockquote className="text-2xl md:text-3xl font-bold text-navy leading-tight">
                If it's worth doing, it's worth doing right.
              </blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-[0.18em] text-text-secondary">
                — The Spire standard
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #2DA89C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #4A8A86 0%, transparent 50%)" }} />
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to win your next contract?</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">
              Let's talk about your next pursuit — and how we can help you compete and win.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link to="/contact" className="btn-primary mt-10">Start the Conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const SERVICES = [
  {
    title: "Proposals",
    excerpt:
      "Pre-solicitation strategy, clear value propositions, and proven systems from planning through delivery.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: "Presentations",
    excerpt:
      "Memorable stories and visuals — coaching for short-list interviews, stakeholder sessions, and Lunch & Learns.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Solutions",
    excerpt:
      "Diagnose what's blocking your wins — process, branding, and competitive positioning evaluations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    ),
  },
];
