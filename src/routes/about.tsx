import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { AGENCIES, CLIENTS, TESTIMONIALS } from "@/components/site/data";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Spire Proposals" },
      { name: "description", content: "Spire Proposals specializes in helping small businesses win federal and municipal contracts. Meet the team and see who we serve." },
      { property: "og:title", content: "About — Spire Proposals" },
      { property: "og:description", content: "Specialized expertise in federal and municipal proposal development for small businesses." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span> <span className="text-white/90">About</span>
          </nav>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white">About Spire Proposals</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Proposal expertise built for small businesses competing for federal and municipal contracts.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-4xl font-bold">Details decide the win.</h2>
            <div className="mt-6 prose-lg text-text-primary space-y-5 max-w-[65ch]">
              <p className="text-lg leading-relaxed">
                In the world of proposals, where details can mean the difference between scoring that key win
                and huge disappointment, Spire Proposals has the expertise you need.
              </p>
              <p className="text-lg leading-relaxed font-semibold text-navy">
                We specialize in helping small businesses win federal and municipal contracts.
              </p>
              <p className="text-text-secondary leading-relaxed">
                From early capture strategy to color-team reviews and final production, we plug into your
                team with proven systems and processes — so you can compete with larger primes without
                stretching your staff to the breaking point.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <aside className="bg-muted border-l-4 border-gold p-8">
              <h3 className="text-xl font-bold text-navy">Who we serve</h3>
              <ul className="mt-4 space-y-3 text-text-primary">
                {["Small business federal contractors", "Municipal contract seekers", "Subcontractors supporting prime contractors"].map((x) => (
                  <li key={x} className="flex gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2DA89C" strokeWidth="3" strokeLinecap="round" className="mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Client portfolio */}
      <section className="py-20 bg-muted">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Client portfolio</span>
              <h2 className="mt-4 text-4xl font-bold">Proposals delivered to the agencies that matter.</h2>
              <p className="mt-5 text-text-secondary text-lg">
                Spire Proposals has led or supported proposals submitted to the following federal agencies
                and their prime contractors.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AGENCIES.map((a, i) => (
              <Reveal key={a.abbr} delay={i * 60}>
                <article className="bg-white border border-border p-6 hover:border-gold transition-colors">
                  <div className="text-navy font-bold text-xl tracking-tight">{a.abbr}</div>
                  <div className="mt-1 text-sm text-text-secondary">{a.name}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-x grid gap-12 md:grid-cols-2 items-center">
          <Reveal>
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 text-4xl font-bold">A founder-led practice.</h2>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed">
              Led by founder Meredith, Spire Proposals brings decades of combined experience in proposal
              development, presentation coaching, and contract strategy. Every engagement is led by a
              senior practitioner — not handed off to a junior team.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center btn-outline">Schedule a conversation</Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-navy text-white p-10 relative overflow-hidden">
              <div aria-hidden className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(45,168,156,0.25), transparent 60%)" }} />
              <p className="text-3xl font-bold text-white relative leading-tight">"Strategy beats volume. Every pursuit gets a tailored plan."</p>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-gold relative">Meredith — Founder</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recent Clients */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Recent clients</span>
              <h2 className="mt-4 text-4xl font-bold">Trusted by small businesses and prime contractors.</h2>
              <p className="mt-5 text-text-secondary text-lg">
                A selection of organizations that have engaged Spire Proposals for proposal management,
                presentations, branding, and capture support.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {CLIENTS.map((c, i) => (
              <Reveal key={c.name} delay={(i % 10) * 40}>
                <article className="group bg-white border border-border p-5 flex flex-col items-center text-center transition-all hover:border-gold hover:shadow-md aspect-square justify-center">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    width={160}
                    height={160}
                    className="h-20 w-20 object-contain mb-3 transition-transform group-hover:scale-105"
                  />
                  <div className="text-navy text-sm font-semibold leading-tight">{c.name}</div>
                  <div className="mt-1 text-[11px] text-text-secondary leading-snug line-clamp-2">{c.work}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Testimonials</span>
              <h2 className="mt-4 text-4xl font-bold">In their own words.</h2>
              <p className="mt-5 text-text-secondary text-lg">
                Feedback from program managers, business development leaders, and small business owners who
                have partnered with Spire Proposals.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 6) * 60}>
                <figure className="bg-white border border-border p-7 h-full flex flex-col">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#2DA89C" aria-hidden className="mb-4 opacity-80">
                    <path d="M7 7h4v4H7c0 2 1 4 4 4v3c-4 0-7-3-7-7V7zm9 0h4v4h-4c0 2 1 4 4 4v3c-4 0-7-3-7-7V7z" />
                  </svg>
                  <blockquote className="text-text-primary leading-relaxed text-[15px] flex-1">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                    {t.photo ? (
                      <img src={t.photo} alt="" loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                    ) : (
                      <div aria-hidden className="h-12 w-12 rounded-full bg-navy text-white flex items-center justify-center text-sm font-semibold">
                        {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                    <div>
                      <div className="text-navy font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-text-secondary">{t.title}</div>
                    </div>
                  </figcaption>

                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
