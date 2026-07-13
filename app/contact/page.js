import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { SectionHead } from "@/components/SectionHead";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Talk to us",
  description:
    "Let's see if SupplyDesk fits your operation. Request a demo — we'll reply within 1 business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Nav />

      <header className="po-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <SectionHead idx="Contact / Request a demo" note="Reply within 1 business day" />
          <h1 className="display-1" style={{ maxWidth: "20ch" }}>
            Let&rsquo;s see if SupplyDesk fits your operation.
          </h1>
        </div>
      </header>

      <section className="po-section">
        <div className="container split split-lg">
          <div>
            <p className="mono-label" style={{ marginBottom: 20 }}>What to expect</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
              <li style={{ display: "flex", gap: 14 }}>
                <span className="mono-data" style={{ color: "var(--weld)" }}>01</span>
                <p>We&rsquo;ll set up a 30-minute call at a time that works for you.</p>
              </li>
              <li style={{ display: "flex", gap: 14 }}>
                <span className="mono-data" style={{ color: "var(--weld)" }}>02</span>
                <p>You&rsquo;ll see a live demo with a real catalog — not slides.</p>
              </li>
              <li style={{ display: "flex", gap: 14 }}>
                <span className="mono-data" style={{ color: "var(--weld)" }}>03</span>
                <p>We&rsquo;ll answer questions about your specific buyers and setup.</p>
              </li>
              <li style={{ display: "flex", gap: 14 }}>
                <span className="mono-data" style={{ color: "var(--weld)" }}>04</span>
                <p>No pressure, no auto-enroll. If it doesn&rsquo;t fit, we&rsquo;ll say so.</p>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
