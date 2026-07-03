import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Spire Proposals" },
      { name: "description", content: "Ready for a fresh approach? Contact Spire Proposals — we typically respond within one business day." },
      { property: "og:title", content: "Contact — Spire Proposals" },
      { property: "og:description", content: "Get in touch with Spire Proposals about your next federal or municipal pursuit." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "company" | "service" | "message", string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!company) next.company = "Please enter your company or organization.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!service) next.service = "Choose a service interest.";
    if (message.length < 20) next.message = "Tell us a bit more — minimum 20 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // No backend wired yet — open the user's mail client addressed to BOTH inboxes.
    const subject = `New inquiry from ${name} (${company})`;
    const body =
`Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone || "—"}
Service interest: ${service}

${message}`;
    const href = `mailto:info@spireproposals.com?cc=meredith@spireproposals.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span> <span className="text-white/90">Contact</span>
          </nav>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white">Contact Us</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">Ready for a fresh approach?</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="bg-white border border-border p-8 md:p-10 shadow-sm">
              {submitted && (
                <div role="status" className="mb-6 border-l-4 border-success bg-success/5 text-success px-4 py-3 text-sm font-medium">
                  Thanks — your message is ready to send. We'll reply within one business day.
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" required error={errors.name}>
                  <input id="name" name="name" type="text" autoComplete="name" className={inputCls(errors.name)} maxLength={120} />
                </Field>
                <Field id="company" label="Company / Organization" required error={errors.company}>
                  <input id="company" name="company" type="text" autoComplete="organization" className={inputCls(errors.company)} maxLength={160} />
                </Field>
                <Field id="email" label="Email address" required error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" className={inputCls(errors.email)} maxLength={200} />
                </Field>
                <Field id="phone" label="Phone (optional)">
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls()} maxLength={40} />
                </Field>
              </div>

              <div className="mt-5">
                <Field id="service" label="Service interest" required error={errors.service}>
                  <select id="service" name="service" className={inputCls(errors.service)} defaultValue="">
                    <option value="" disabled>Select one…</option>
                    <option>Proposals</option>
                    <option>Presentations</option>
                    <option>Solutions</option>
                    <option>Other / Not sure</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field id="message" label="Tell us about your pursuit" required error={errors.message}>
                  <textarea id="message" name="message" rows={6} className={inputCls(errors.message)} maxLength={4000} />
                </Field>
              </div>

              <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">Send message</button>
              <p className="mt-4 text-xs text-text-secondary">
                By submitting, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.
              </p>
            </form>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="bg-muted p-8 md:p-10 border-l-4 border-gold">
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-3 text-3xl font-bold">Contact us today</h2>
              <p className="mt-4 text-text-secondary">
                Please send us an email and we'll get back to you straight away.
              </p>

              <dl className="mt-8 space-y-6 text-sm">
                <div>
                  <dt className="uppercase tracking-[0.18em] text-text-secondary text-xs font-semibold">Email</dt>
                  <dd className="mt-2"><a href="mailto:info@spireproposals.com" className="text-navy font-semibold text-base hover:text-gold">info@spireproposals.com</a></dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.18em] text-text-secondary text-xs font-semibold">Response time</dt>
                  <dd className="mt-2 text-text-primary">We typically respond within one business day.</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.18em] text-text-secondary text-xs font-semibold">Location</dt>
                  <dd className="mt-2 text-text-primary">Serving federal and municipal clients nationwide.</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode; }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy">
        {label}{required && <span className="text-gold ml-1" aria-hidden>*</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
}

function inputCls(error?: string) {
  return `w-full bg-white border ${error ? "border-red-500" : "border-border"} px-4 py-3 text-base text-text-primary focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition`;
}
