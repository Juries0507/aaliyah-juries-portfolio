import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Download,
  FileSpreadsheet,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import profileAsset from "@/assets/profile.jpg.asset.json";
import cvAsset from "@/assets/cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaliyah Juries — Operations & Administration Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Aaliyah Janique Juries, General Administrator and Operations Specialist in Cape Town — records management, process optimisation and stakeholder coordination.",
      },
      { property: "og:title", content: "Aaliyah Juries — Operations & Administration Specialist" },
      {
        property: "og:description",
        content:
          "Streamlining operations and empowering teams: administration, registry and office support expertise.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const COMPETENCIES = [
  {
    icon: Settings2,
    title: "Operations Management",
    body: "Keeping registry, office support and daily workflows running without a dropped document or missed deadline.",
  },
  {
    icon: ClipboardList,
    title: "Process Optimisation",
    body: "Restructuring filing, tracking and handover routines so information is found in seconds, not hours.",
  },
  {
    icon: CalendarClock,
    title: "Calendar & Travel Coordination",
    body: "Scheduling meetings, transport and logistics across busy teams with clear, conflict-free diaries.",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Communication",
    body: "Professional correspondence and follow-through that keeps managers, staff and the public informed.",
  },
];

const TIMELINE = [
  {
    period: "Sep 2025 — Mar 2026",
    role: "Office Support Services & Registry Intern",
    org: "Department of Mobility — Government Motor Transport",
    points: [
      "Processed and indexed high volumes of official records, maintaining full traceability across the registry system.",
      "Reorganised filing and retrieval routines, noticeably cutting the time colleagues spent locating documents.",
      "Handled internal correspondence, scheduling and front-line queries for a multi-team office environment.",
      "Applied POPIA, clean-desk and data-protection practice to every record handled.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Professional Certification Track",
    org: "Microsoft 365 & ICT Programmes",
    points: [
      "Completed certificates in MS Word, Excel, PowerPoint, Teams, OneDrive and Facilitation Fundamentals.",
      "Earned AI Fluency and Basic ICT certification, applying digital tooling to everyday admin tasks.",
      "Completed phishing, vishing and data-protection awareness training.",
    ],
  },
  {
    period: "2023",
    role: "National Senior Certificate (Grade 12)",
    org: "Tuscany Glen High School",
    points: [
      "Graduated with a diploma in Afrikaans and a full academic subject load.",
      "Built the written and verbal communication foundation used daily in administrative work.",
    ],
  },
];

const TOOLKIT = [
  {
    group: "Productivity Suites",
    items: ["Microsoft 365", "MS Word", "MS Excel", "MS PowerPoint", "Google Workspace"],
  },
  {
    group: "Collaboration & Cloud",
    items: ["MS Teams", "OneDrive", "Slack", "Notion", "Zoom"],
  },
  {
    group: "Records & Compliance",
    items: ["Registry Systems", "POPIA Practice", "Clean Desk Policy", "Document Control"],
  },
  {
    group: "Support Tools",
    items: ["CRM Platforms", "QuickBooks", "AI Assistants", "Basic ICT Support"],
  },
];

const STATS = [
  { value: "7 mo", label: "Government registry experience" },
  { value: "12+", label: "Professional certificates" },
  { value: "100%", label: "POPIA-compliant handling" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#overview" className="font-display text-base font-semibold tracking-tight">
            Aaliyah <span className="gradient-accent-text">Juries</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Let's Connect <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="overview" className="gradient-hero relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground/90">
                <Sparkles className="h-3.5 w-3.5" /> General Administrator · Operations Specialist
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
                Streamlining Operations &{" "}
                <span className="gradient-accent-text">Empowering Teams</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                I bring order to busy offices — records that stay traceable, diaries that stay
                clear, and processes that quietly get faster. Cape Town based, detail obsessed,
                and driven by measurable efficiency.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Explore Experience <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Get in Touch
                </a>
                <a
                  href={cvAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground/80 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="justify-self-center">
              <div className="relative">
                <div className="absolute inset-0 -m-4 rounded-[2rem] bg-accent/25 blur-2xl" />
                <img
                  src={profileAsset.url}
                  alt="Portrait of Aaliyah Janique Juries"
                  width={320}
                  height={320}
                  className="relative h-56 w-56 rounded-[1.75rem] border border-primary-foreground/25 object-cover shadow-2xl sm:h-72 sm:w-72"
                />
                <div className="relative mt-6 grid grid-cols-3 gap-3">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-3 text-center"
                    >
                      <p className="font-display text-lg font-bold text-primary-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] leading-tight text-primary-foreground/65">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Core Competencies
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              The operational backbone behind a well-run office
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPETENCIES.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="surface-card group h-full rounded-2xl p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground transition-colors group-hover:bg-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-secondary/60 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Impact Timeline
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Professional experience & achievements
              </h2>
            </Reveal>

            <div className="relative mt-12 border-l border-border pl-8">
              {TIMELINE.map((entry, i) => (
                <Reveal key={entry.role} delay={i * 100}>
                  <div className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {entry.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{entry.role}</h3>
                    <p className="text-sm font-medium text-accent-foreground/80">{entry.org}</p>
                    <ul className="mt-4 space-y-2.5">
                      {entry.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Toolkit */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Toolkit</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Software proficiency</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TOOLKIT.map((group, i) => (
              <Reveal key={group.group} delay={i * 80}>
                <div className="surface-card h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="h-5 w-5 text-accent" />
                    <h3 className="text-base font-semibold">{group.group}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-accent/30 bg-accent-soft/60 p-6">
              <ShieldCheck className="h-6 w-6 text-accent-foreground" />
              <p className="text-sm font-medium text-accent-foreground">
                Certified in POPIA compliance, phishing & vishing awareness, clean-desk policy and
                data protection practice.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="gradient-hero relative overflow-hidden">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
            <Reveal>
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                Let's keep your operations running smoothly
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
                Available for administrative, registry and operations support roles in Cape Town
                and remotely.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <a
                  href="mailto:janiguepielersen3@gmail.com"
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 text-left transition-colors hover:bg-primary-foreground/15"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/60">
                    Email
                  </p>
                  <p className="mt-1 break-all text-sm font-medium text-primary-foreground">
                    janiguepielersen3@gmail.com
                  </p>
                </a>
                <a
                  href="tel:+27793992542"
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 text-left transition-colors hover:bg-primary-foreground/15"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/60">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary-foreground">079 399 2542</p>
                </a>
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 text-left">
                  <MapPin className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/60">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary-foreground">
                    Blue Downs, Cape Town
                  </p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={cvAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a
                  href="mailto:janiguepielersen3@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <Users className="h-4 w-4" /> Request References
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <p className="text-sm font-semibold">Aaliyah Janique Juries</p>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:janiguepielersen3@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aaliyah Juries. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
