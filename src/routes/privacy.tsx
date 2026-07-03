import { createFileRoute, Link } from "@tanstack/react-router";

const UPDATED = "January 1, 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Spire Proposals" },
      { name: "description", content: "How Spire Proposals collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — Spire Proposals" },
      { property: "og:description", content: "How Spire Proposals collects, uses, and protects your information." },
      { property: "og:url", content: "https://spireproposals.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://spireproposals.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="pt-32 pb-20">
      <div className="container-x max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-text-secondary">
          <Link to="/" className="hover:text-navy">Home</Link> / <span>Privacy Policy</span>
        </nav>
        <h1 className="mt-4 text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-text-secondary">Last updated: {UPDATED}</p>

        <div className="mt-10 space-y-8 text-text-primary leading-relaxed">
          <Section title="Information We Collect">
            We collect information you provide directly to us — such as your name, company, email address,
            phone number, and message — when you complete our contact form or correspond with us by email.
          </Section>
          <Section title="How We Use Information">
            We use the information you provide to respond to your inquiries, deliver our services, and
            improve our communications. We do not sell your personal information.
          </Section>
          <Section title="Cookies and Tracking">
            Our website uses minimal cookies necessary for site functionality and basic analytics. You can
            control cookies through your browser settings.
          </Section>
          <Section title="Data Sharing">
            We do not share your personal information with third parties except as required to deliver our
            services (for example, email or hosting providers) or as required by law.
          </Section>
          <Section title="Your Rights">
            You may request access to, correction of, or deletion of the personal information we hold about
            you by contacting us at the email below.
          </Section>
          <Section title="Data Security">
            We use industry-standard safeguards to protect your information. No method of transmission over
            the Internet is fully secure, however, and we cannot guarantee absolute security.
          </Section>
          <Section title="Contact">
            Questions about this policy? Email{" "}
            <a className="text-navy font-semibold underline" href="mailto:info@spireproposals.com">info@spireproposals.com</a>.
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-text-primary/90">{children}</p>
    </section>
  );
}
