import ContactActions from "./ContactActions";
import ProjectShowcase from "./ProjectShowcase";
import ProfileLinks from "./ProfileLinks";

const skills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "Hibernate / JPA",
  "Node.js",
  "Express.js",
  "React",
  "TypeScript",
  "SQL Server",
  "MySQL",
  "HL7 FHIR R4",
  "SMART on FHIR",
  "OAuth 2.0 / JWT",
  "Docker",
  "AWS",
  "GitHub Actions",
  "JUnit 5",
  "Testcontainers",
];

const principles = [
  {
    title: "Fix the class, not the instance",
    text: "When one report endpoint hung, I audited all of them. Twenty-eight endpoints got the same fail-fast fix, not just the one named in the ticket.",
  },
  {
    title: "Prove it before fixing it",
    text: "Device bugs were settled with byte captures and arithmetic first. Parity, sample interval and record order were all confirmed on real hardware before a fix shipped.",
  },
  {
    title: "Use AI tools honestly",
    text: "I work with Claude Code and GitHub Copilot under written standards and review prompts, review every change myself, and re-plan estimates without shrinking hardware QA time.",
  },
];

const metrics = [
  { value: "98%", label: "Line coverage with JUnit 5 and Testcontainers" },
  { value: "28", label: "Report and PDF endpoints made to fail fast" },
  { value: "4", label: "SQL-injection vulnerabilities closed" },
  { value: "3", label: "Oximeter vendors decoded over Web Serial" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Virbhadra Haibatpure portfolio home">
          <span className="brand-mark">V</span>
          <span>VIRBHADRA HAIBATPURE<span className="brand-subtitle">SOFTWARE ENGINEER</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="#contact">
          <span aria-hidden="true" />
          Open to opportunities
        </a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-kicker">
          <span>Software Engineer</span>
          <span>Pune, India · 2026</span>
        </div>
        <div className="hero-layout"><div className="hero-copy">
        <p className="hero-intro">Hi, I’m Virbhadra <span aria-hidden="true">↗</span></p>
        <h1>
          Secure APIs.
          <br />
          <em>Connected care.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I build Java and Node.js backends for healthcare: FHIR
            integrations, secure APIs and data pipelines that keep working
            when the network doesn’t.
          </p>
          <a className="circle-link" href="#work" aria-label="View selected work">
            <span>View selected work</span>
            <b aria-hidden="true">↗</b>
          </a>
          <ProfileLinks />
        </div>
        </div><div className="system-visual" aria-label="System architecture: caregiver and staff apps call a secure Spring Boot API, which syncs records from Epic FHIR into the database">
          <div className="visual-caption"><span>THE BIGGER PICTURE</span><span>↗</span></div>
          <div className="system-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="system-node node-client"><span>01 / EXPERIENCE</span><strong>Caregiver &amp; staff apps</strong><small>React · Mobile clients</small></div>
          <div className="system-node node-api"><span>02 / CONNECTION</span><strong>Secure API <b>↗</b></strong><small>JWT · RBAC · Audit logging</small></div>
          <div className="system-node node-data"><span>03 / FOUNDATION</span><strong>Clinical data</strong><small>Epic FHIR R4 · MySQL · SQL Server</small></div>
          <div className="visual-footer"><span className="signal-dot" /> SECURE BY DEFAULT</div>
        </div></div>
        <div className="hero-index"><span>SCROLL TO EXPLORE ↓</span><span>BACKEND THINKING. HEALTHCARE FOCUS.</span><span>01 — 06</span></div>
      </header>

      <section className="statement shell" aria-label="Professional summary">
        <p className="eyebrow">What I bring</p>
        <p className="statement-copy">
          Nearly two years building backend and full-stack software for US
          healthcare, where correctness, security and uptime are not optional.
        </p>
        <div className="statement-meta">
          <span>Java · Spring Boot · Node.js</span>
          <span>HL7 FHIR · SMART on FHIR · Epic</span>
          <span>Production support</span>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Built to solve,<br />not just to ship.</h2>
          </div>
          <p>
            Two healthcare systems and one personal research tool, each built
            around data you can trust, failures you can see, and tests that
            prove it.
          </p>
        </div>

        <ProjectShowcase />
      </section>

      <section className="experience shell" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Real patients.<br />Real production.</h2>
          </div>
          <p>
            Backend and full-stack work on a clinical diagnostics portal and a
            new EHR-connected care platform, from the database to the browser.
          </p>
        </div>

        <ol className="timeline">
          <li className="timeline-item">
            <div className="timeline-meta">
              <span>Jan 2025 — Nov 2026</span>
              <span>Remote, India</span>
            </div>
            <div className="timeline-body">
              <h3>Software Developer</h3>
              <p className="timeline-org">Nebel Infotech LLP</p>
              <p>
                Built the Family Caregiver App backend from scratch in Java 21
                and Spring Boot, including the Epic FHIR sync engine and its
                security model. Developed and supported the DMT diagnostics
                portal in React, Node.js and SQL Server, from device capture
                to PDF reports and production incidents.
              </p>
              <ul className="metric-grid">
                {metrics.map((metric) => (
                  <li key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-meta">
              <span>2025</span>
              <span>Pune, India</span>
            </div>
            <div className="timeline-body">
              <h3>Master of Science in Computer Science</h3>
              <p className="timeline-org">Sir Parshuram Bhau College</p>
              <p>CGPA 7.86 / 10</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-meta">
              <span>Oct 2024</span>
              <span>Certification</span>
            </div>
            <div className="timeline-body">
              <h3>Microsoft Certified: Azure Fundamentals</h3>
              <p className="timeline-org">AZ-900</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <div className="about-intro">
            <p className="eyebrow light">How I work</p>
            <h2>Curious by default.<br />Rigorous by habit.</h2>
          </div>
          <div className="principles">
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills shell" aria-labelledby="skills-title">
        <div className="skills-copy">
          <p className="eyebrow">Knowledge base</p>
          <h2 id="skills-title">Tools I use to turn clinical data into reliable products.</h2>
          <p>
            I care more about choosing the right tool than chasing every new
            one. These are the technologies I use every week to ship secure,
            well-tested systems.
          </p>
        </div>
        <ul className="skill-cloud">
          {skills.map((skill, index) => (
            <li key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow light">Next chapter</p>
        <div className="contact-row">
          <h2>Have a role in mind?</h2>
          <ContactActions />
        </div>
        <div className="contact-foot">
          <p>
            I&apos;m open to backend and full-stack engineering roles,
            especially in healthcare, where I can solve meaningful problems
            with a strong team.
          </p>
          <span>veerabhdrahaibatpure@gmail.com</span>
        </div>
      </section>

      <footer className="shell">
        <span>© 2026 Virbhadra Haibatpure</span>
        <span>Designed with intent. Built with care.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
