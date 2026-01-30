import { ArrowUpRight, Mail, FileText, Linkedin } from "lucide-react";

const SITE = {
  name: "Klodjan Tahiri",
  role: "Operations & Systems Leader",
  headline:
    "I design scalable operational systems that eliminate inefficiency and drive measurable performance.",
  subhead:
    "Ops + technology at the same table: ERP/WMS workflows, automation, clean data, and execution routines that teams actually follow.",
  accent: "emerald",
  links: {
    email: "yourname@email.com",
    linkedin: "https://www.linkedin.com/",
    resume: "/resume.pdf", // put resume.pdf in /public
    github: "https://github.com/", // optional
  },
  proof: [
    {
      kpi: "40%+",
      label: "reduction in manual processing",
      note: "via workflow + automation improvements",
    },
    {
      kpi: "50+",
      label: "operational improvements shipped",
      note: "SOPs, KPIs, and system-backed execution",
    },
    {
      kpi: "ERP/WMS",
      label: "workflow + integration experience",
      note: "process mapping, adoption, reporting",
    },
  ],
  caseStudies: [
    {
      title: "Operational Automation",
      what: "Manual steps slowed orders, increased errors, and made outcomes dependent on tribal knowledge.",
      built: [
        "Standardized workflows across receiving, inventory, shipping, and order management",
        "Converted repeat tasks into system-backed routines (templates, validations, dashboards)",
        "Documented SOPs and built accountability checkpoints",
      ],
      impact: [
        "Less rework, fewer handoffs, and faster throughput",
        "Higher consistency across teams and shifts",
        "Clear ownership and measurable performance",
      ],
      tags: ["Process", "Automation", "Execution"],
    },
    {
      title: "ERP / WMS Integration & Reporting",
      what: "Systems didn’t talk cleanly, reporting was delayed, and decisions were made on partial data.",
      built: [
        "Tightened data flow between tools (ERP, QA systems, sheets/logs)",
        "Built reporting views for operational KPIs and exception management",
        "Created repeatable intake + audit patterns to reduce noise",
      ],
      impact: [
        "Cleaner data, faster issue detection, better decision-making",
        "Reduced time spent chasing status updates",
        "Operational visibility became consistent, not “when someone has time”",
      ],
      tags: ["ERP", "WMS", "Analytics"],
    },
    {
      title: "Warehouse Workflow Optimization",
      what: "Inventory accuracy and bin discipline are fragile when processes aren’t enforced by design.",
      built: [
        "Cycle count structure with audit logging and exception workflows",
        "Focused on preventing errors at the source (not just fixing after)",
        "Defined responsibilities by step so handoffs weren’t ambiguous",
      ],
      impact: [
        "Improved inventory integrity and reduced “phantom inventory” issues",
        "More predictable fulfillment and fewer escalations",
        "Stronger operational control without adding bureaucracy",
      ],
      tags: ["Inventory", "Warehouse", "Quality"],
    },
  ],
  experience: [
    {
      title: "ConnectUS Corp",
      role: "Operations Analyst / Manager",
      timeframe: "Recent",
      bullets: [
        "Oversaw cross-functional workflows across warehouse, purchasing, and order management.",
        "Improved throughput and consistency through SOPs, KPIs, and execution routines.",
        "Supported ERP/WMS process improvements, automation, and performance reporting.",
      ],
    },
    {
      title: "American Reading Company (ARC)",
      role: "Warehouse Team Leader / Ops Support",
      timeframe: "Past",
      bullets: [
        "Led workflow execution in a high-volume environment with strict SLAs.",
        "Supported systems adoption and operational process discipline.",
        "Contributed to process + reporting improvements that reduced friction for teams.",
      ],
    },
    {
      title: "AI 2030 (Nonprofit Program)",
      role: "Program Participant",
      timeframe: "3-month program",
      bullets: [
        "Completed a structured 3-month program centered on real-world projects and applied learning.",
      ],
    },
  ],
  skills: {
    Systems: ["ERP/WMS workflows", "Process mapping", "Systems adoption", "SOPs"],
    Data: ["Operational reporting", "KPI design", "Root cause analysis", "Data hygiene"],
    Execution: ["Cross-functional leadership", "Continuous improvement", "Accountability design", "Scaling routines"],
    Tools: ["OrderTime (ERP)", "WMS tools", "SQL/Sheets", "Dashboards (varies)"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <TopNav />

      <Hero />

      <Section id="about" title="About">
        <div className="max-w-3xl space-y-4 text-slate-700 leading-relaxed">
          <p>
            I operate at the intersection of operations, data, and systems. I’m the person teams call
            when work is stuck in spreadsheets, rules live in people’s heads, and execution changes
            depending on who is on shift.
          </p>
          <p>
            My approach is simple: <span className="font-medium text-slate-900">design the workflow</span>,{" "}
            <span className="font-medium text-slate-900">enforce it through systems</span>,{" "}
            <span className="font-medium text-slate-900">measure it</span>, and{" "}
            <span className="font-medium text-slate-900">make it repeatable</span>.
          </p>
        </div>
      </Section>

      <Section id="work" title="Case Studies">
        <div className="grid gap-4 md:grid-cols-2">
          {SITE.caseStudies.map((cs) => (
            <CaseStudy key={cs.title} {...cs} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {SITE.experience.map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{job.title}</h3>
                <p className="text-sm text-slate-500">{job.timeframe}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-700">{job.role}</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                {job.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(SITE.skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold tracking-tight text-slate-900">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="max-w-2xl space-y-4 text-slate-700">
          <p>
            If you’re hiring for operations leadership, systems operations, ERP/WMS workflow, or
            process automation — I’m open to conversations.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              href={`mailto:${SITE.links.email}`}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
              href={SITE.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
              href={SITE.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              <FileText className="h-4 w-4" />
              Resume
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          {SITE.name}
        </a>
        <nav className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="#about">
            About
          </a>
          <a className="hover:text-slate-900" href="#work">
            Case Studies
          </a>
          <a className="hover:text-slate-900" href="#experience">
            Experience
          </a>
          <a className="hover:text-slate-900" href="#skills">
            Skills
          </a>
          <a className="hover:text-slate-900" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            href={SITE.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-14">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="text-sm text-slate-600">{SITE.role}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            {SITE.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {SITE.subhead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              href="#work"
            >
              View Case Studies
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
              href={SITE.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
              href={`mailto:${SITE.links.email}`}
            >
              Contact
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              Proof (fast scan)
            </p>
            <div className="mt-4 space-y-4">
              {SITE.proof.map((p) => (
                <div key={p.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-2xl font-semibold tracking-tight text-slate-900">
                    {p.kpi}
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-800">{p.label}</div>
                  <div className="mt-1 text-sm text-slate-600">{p.note}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Tip: replace these with exact metrics you can defend in interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      {children}
    </section>
  );
}

function CaseStudy({
  title,
  what,
  built,
  impact,
  tags,
}: {
  title: string;
  what: string;
  built: string[];
  impact: string[];
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-5 text-slate-700">
        <div>
          <p className="text-sm font-semibold text-slate-900">Problem</p>
          <p className="mt-1 leading-relaxed">{what}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">What I did</p>
          <ul className="mt-2 space-y-2">
            {built.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Impact</p>
          <ul className="mt-2 space-y-2">
            {impact.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-slate-700" href="#top">
              Back to top
            </a>
            <a
              className="hover:text-slate-700"
              href={SITE.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="hover:text-slate-700" href={`mailto:${SITE.links.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
