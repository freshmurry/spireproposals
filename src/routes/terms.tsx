import { createFileRoute, Link } from "@tanstack/react-router";

const UPDATED = "January 1, 2026";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Spire Proposals" },
      { name: "description", content: "The terms governing your use of the Spire Proposals website and services." },
      { property: "og:title", content: "Terms of Service — Spire Proposals" },
      { property: "og:description", content: "The terms governing your use of the Spire Proposals website and services." },
      { property: "og:url", content: "https://spireproposals.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://spireproposals.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="pt-32 pb-20">
      <div className="container-x max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-text-secondary">
          <Link to="/" className="hover:text-navy">Home</Link> / <span>Terms of Service</span>
        </nav>
        <h1 className="mt-4 text-5xl font-bold">Terms of Service</h1>
        <p className="mt-3 text-sm text-text-secondary">Last updated: {UPDATED}</p>

        <div className="mt-10 space-y-8 text-text-primary leading-relaxed">
          <Section title="Acceptance of Terms">
            By accessing or using the Spire Proposals website, you agree to be bound by these Terms. If you
            do not agree, please do not use the site.
          </Section>
          <Section title="Services Description">
            Spire Proposals provides proposal development, presentation coaching, and consulting services.
            Service deliverables and scope are defined in individual engagement agreements.
          </Section>
          <Section title="Intellectual Property">
            All content on this site — including text, graphics, logos, and marks — is the property of
            Spire Proposals or its licensors and is protected by applicable intellectual property laws.
          </Section>
          <Section title="Limitation of Liability">
            Spire Proposals provides this website on an "as is" basis. To the maximum extent permitted by
            law, we disclaim all warranties and are not liable for any indirect, incidental, or
            consequential damages arising from your use of the site.
          </Section>
          <Section title="Governing Law">
            These Terms are governed by the laws of the United States and the state in which Spire Proposals
            is organized, without regard to its conflict-of-laws provisions.
          </Section>
          <Section title="Changes to These Terms">
            We may update these Terms from time to time. Continued use of the site after changes constitutes
            acceptance of the updated Terms.
          </Section>
          <Section title="Contact">
            Questions? Email{" "}
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
