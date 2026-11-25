"use client";

import { useState } from "react";

type Project = {
  id: "caregiver" | "oximetry" | "btc";
  title: string;
  type: string;
  description: string;
  stack: string[];
  outcome: string;
  status: string;
  previewLabel: string;
  challenge: string;
  approach: string;
  features: string[];
  architecture: string;
  details: { title: string; text: string }[];
};

const projects: Project[] = [
  {
    id: "caregiver",
    title: "Family Caregiver App",
    type: "Backend · EHR-connected care platform",
    description:
      "The backend for a care platform that gives family caregivers a hospital-grade view of a patient at home. It imports Epic records over SMART on FHIR, tracks medications and doses, and serves separate APIs for the mobile app and the hospital staff portal.",
    stack: [
      "Java 21",
      "Spring Boot",
      "MySQL",
      "HL7 FHIR R4",
      "SMART on FHIR",
      "JUnit 5",
      "Testcontainers",
    ],
    outcome: "98% line coverage",
    status: "MVP 1 in progress · Epic-in-app demo reached",
    previewLabel:
      "Illustrative Epic sync panel showing FHIR resources importing for a test patient",
    challenge:
      "Pull clinical data from Epic reliably for many patients through rate limits, expiring tokens and server crashes, without ever letting one patient's records reach another patient.",
    approach:
      "A job-based sync engine. Workers claim jobs with SKIP LOCKED leases, checkpoint every page and resume after a crash. Idempotent upserts skip unchanged records and block cross-patient writes, and every Epic call passes through a token-bucket rate limiter, a circuit breaker and exponential backoff.",
    features: [
      "SMART on FHIR (OAuth 2.0 + PKCE) patient linking against the Epic sandbox",
      "HL7 FHIR R4 import of medications, allergies, conditions, labs and vitals (RxNorm, SNOMED CT, LOINC)",
      "Medication schedules, daily doses and adherence events for caregivers",
      "JWT authentication, role-based access control, per-hospital tenant isolation and audit logging",
      "AES-256-GCM field-level encryption of OAuth tokens and clinical text",
      "OAuth token rotation, daily re-sync, on-demand refresh and an audited history of every sync run",
    ],
    architecture:
      "Mobile app & staff portal → Spring Boot REST APIs (JWT · RBAC · audit) → sync engine (leases · checkpoints) → Epic FHIR R4 → MySQL (encrypted fields)",
    details: [
      {
        title: "AI agents, human review",
        text: "Over half of a 12-sprint backlog landed in about four weeks with Claude Code and GitHub Copilot, steered by coding standards and review prompts I wrote. I reviewed every change before it merged.",
      },
      {
        title: "Gates before merge",
        text: "Automated build gates check test coverage, dependency vulnerabilities and committed secrets. Integration tests run against a real MySQL instance through Testcontainers, not an in-memory stand-in.",
      },
    ],
  },
  {
    id: "oximetry",
    title: "DMT Oximetry Portal",
    type: "Full-stack · Sleep & respiratory diagnostics",
    description:
      "A production portal used by US clinics for sleep and respiratory testing. I pulled recorded studies straight off pulse oximeters in the browser, made the reporting layer fail fast, and closed security gaps in how patient data was handled.",
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Sequelize",
      "SQL Server",
      "Web Serial API",
    ],
    outcome: "Device data, in the browser",
    status: "Production system · client work",
    previewLabel:
      "Illustrative overnight SpO2 trace decoded from a pulse oximeter over Web Serial",
    challenge:
      "Recorded studies were stuck on oximeters from three vendors with missing or conflicting protocol documents. Meanwhile, 28 report and PDF endpoints hung for 60 seconds whenever anything went wrong.",
    approach:
      "I decoded each vendor's binary protocol from real captures and reference implementations, then wrote independent JavaScript parsers on top of the Web Serial API. On the server, every report endpoint got explicit 400, 404 and 500 paths so failures return at once instead of timing out.",
    features: [
      "Browser capture for Nonin, Contec and Viatom pulse oximeters over Web Serial, with no native agent",
      "Traced “no session data” to an 8N1 vs 8-O-1 parity mismatch and fixed the decoder",
      "Transactional, chunked bulk upload so an 8-hour, ~28,800-sample study never half-saves",
      "28 report and PDF endpoints now fail in milliseconds instead of hanging to a 60-second timeout",
      "4 SQL-injection sites converted to bound queries; patient data removed from application logs",
      "Production fixes on a Windows VM (Node.js crashes, PM2 crash loop), with tagged releases and rollback runbooks",
    ],
    architecture:
      "Pulse oximeter → Web Serial (browser) → protocol decoder → React upload flow → Express API (chunked transaction) → SQL Server → PDF reports",
    details: [
      {
        title: "Proved with bytes, not guesses",
        text: "Nonin memory playback runs at 9600 baud, 8-O-1, with a 4-second sample interval in last-in-first-out order. The first hardware capture after the fix decoded to 2 sessions and 592 samples, and 909 s ÷ 227 samples = 4.004 s confirmed the interval.",
      },
      {
        title: "Shipped with the cloud around it",
        text: "Optimized T-SQL schemas, indexes and queries, and supported deployments on AWS and Azure through GitHub Actions and Jenkins, monitored in CloudWatch.",
      },
    ],
  },
  {
    id: "btc",
    title: "BTC Market Intelligence",
    type: "Full-stack · Personal project · Market research",
    description:
      "A decision-support dashboard for Bitcoin markets that puts structure, liquidity, support and resistance, futures and order flow on one screen. It shows evidence, never trade signals, and every panel says how fresh and complete its data is.",
    stack: [
      "TypeScript",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Fastify",
      "Drizzle",
      "PostgreSQL",
      "Redis",
    ],
    outcome: "423 automated tests",
    status: "Personal project · V1 plus phases 2–4",
    previewLabel:
      "Illustrative order-flow panel showing buy and sell pressure per bar",
    challenge:
      "Combine noisy feeds from several exchanges into views a trader can trust, without hiding stale data, partial coverage or an exchange outage behind a confident-looking number.",
    approach:
      "Fastify workers ingest Binance, Bybit and Hyperliquid feeds into PostgreSQL through Drizzle. Every card carries an AVAILABLE, PARTIAL or UNAVAILABLE state and a coverage label, and the analysis rules are pure functions covered by unit and integration tests.",
    features: [
      "Market structure, liquidity sweeps and clustered support and resistance zones",
      "Liquidation fuel: leveraged position value within 1%, 3% and 5% of price, from ~47,000 Hyperliquid wallets",
      "Order flow from Binance perpetuals: buy/sell imbalance, CVD and large taker orders",
      "Futures layer for open interest and funding, plus macro and economic-calendar freshness checks",
      "Stateful S/R Telegram alerts: a per-zone state machine with a Postgres event ledger",
      "Market regime, trading sessions and a “What changed?” timeline",
    ],
    architecture:
      "Binance · Bybit · Hyperliquid → Fastify workers → PostgreSQL (Drizzle) · Redis → Fastify API → React dashboard · Telegram alerts",
    details: [
      {
        title: "Replay before rollout",
        text: "The v2 alert engine was replayed against 60 days of hourly candles next to the live detector, matching every send and labelling each difference before any cutover.",
      },
      {
        title: "Tests at every step",
        text: "The suite grew from 107 to 423 unit and integration tests across the build, with type checking, ESLint and the production build clean at every checkpoint.",
      },
    ],
  },
];

const spo2Trace =
  "0,22 12,20 24,23 36,21 48,24 60,22 72,38 80,44 88,30 100,23 112,21 124,25 136,22 148,40 156,47 164,33 176,24 188,21 200,23 212,22 224,26 236,21 248,24 260,22 272,23 280,21";

const flowBars = [
  [34, 12],
  [22, 26],
  [40, 10],
  [18, 30],
  [28, 20],
  [46, 8],
  [24, 24],
  [16, 38],
  [30, 14],
  [38, 16],
  [20, 22],
  [44, 12],
];

function ProjectPreview({ project }: { project: Project }) {
  if (project.id === "caregiver") {
    return (
      <div className="sync-preview">
        <div className="preview-title">
          <span>EPIC SYNC · TEST PATIENT</span>
          <strong>Hospital records, safely at home.</strong>
        </div>
        <ul className="sync-list" aria-hidden="true">
          <li><span>MedicationRequest</span><b>12 imported</b><i className="ok">✓</i></li>
          <li><span>AllergyIntolerance</span><b>3 imported</b><i className="ok">✓</i></li>
          <li><span>Condition</span><b>5 unchanged</b><i className="ok">✓</i></li>
          <li><span>Observation · labs</span><b>page 4 of 6</b><i className="run">↻</i></li>
        </ul>
        <div className="preview-bottom"><span>Lease held · checkpoint saved</span><span>Breaker closed</span></div>
      </div>
    );
  }

  if (project.id === "oximetry") {
    return (
      <div className="oxi-preview">
        <div className="preview-title">
          <span>WEB SERIAL · 9600 8-O-1</span>
          <strong>Overnight SpO₂, straight off the device.</strong>
        </div>
        <svg className="oxi-chart" viewBox="0 0 280 60" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="30" x2="280" y2="30" />
          <polyline points={spo2Trace} />
        </svg>
        <div className="oxi-hex" aria-hidden="true">FE FD FB 00 5F 48 · 7D 81 A7 80 80</div>
        <div className="preview-bottom"><span>2 sessions · 592 samples</span><span>4 s interval</span></div>
      </div>
    );
  }

  return (
    <div className="flow-preview">
      <div className="preview-title">
        <span>ORDER FLOW · BTC PERP · 15M</span>
        <strong>Who was aggressive this bar?</strong>
      </div>
      <div className="flow-bars" aria-hidden="true">
        {flowBars.map(([buy, sell], index) => (
          <span key={index}>
            <i className="buy" style={{ height: `${buy}px` }} />
            <i className="sell" style={{ height: `${sell}px` }} />
          </span>
        ))}
      </div>
      <div className="preview-bottom"><span><i className="buy" /> Buy <i className="sell" /> Sell</span><span>Status · AVAILABLE</span></div>
    </div>
  );
}

export default function ProjectShowcase() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <div className="project-list">
      {projects.map((project, index) => {
        const number = String(index + 1).padStart(2, "0");
        const isOpen = openProject === project.id;
        const detailsId = `project-${project.id}-details`;

        return (
          <article
            className={`project project-${project.id}${isOpen ? " is-expanded" : ""}`}
            key={project.id}
          >
            <div className="project-number">{number}</div>
            <div className={`project-preview preview-${project.id}`} role="img" aria-label={project.previewLabel}>
              <div className="preview-bar"><span>{project.title}<b> / workspace</b></span><span>● ● ●</span></div>
              <ProjectPreview project={project} />
              <span className="preview-note">INTERFACE CONCEPT</span>
            </div>
            <div className="project-main">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul
                className="tag-list"
                aria-label={`${project.title} technologies`}
              >
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                className="project-action"
                type="button"
                aria-expanded={isOpen}
                aria-controls={detailsId}
                onClick={() => setOpenProject(isOpen ? null : project.id)}
              >
                <span>{isOpen ? "Close case study" : "Explore project"}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </div>
            <div className="project-outcome">
              <span>Outcome</span>
              <strong>{project.outcome}</strong>
            </div>

            {isOpen && (
              <div className="project-details" id={detailsId}>
                <div className="project-details-heading">
                  <p>Inside the build</p>
                  <span>{project.status}</span>
                </div>

                <div className="project-detail-grid">
                  <section>
                    <span>Challenge</span>
                    <p>{project.challenge}</p>
                  </section>
                  <section>
                    <span>Engineering approach</span>
                    <p>{project.approach}</p>
                  </section>
                </div>

                <div className="project-feature-block">
                  <span>What I built</span>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-architecture">
                  <span>System flow</span>
                  <p>{project.architecture}</p>
                </div>

                <div className="project-detail-grid project-engineering">
                  {project.details.map((detail) => (
                    <section key={detail.title}>
                      <h4>{detail.title}</h4>
                      <p>{detail.text}</p>
                    </section>
                  ))}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
