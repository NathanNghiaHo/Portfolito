"use client";
import Animate from "@/components/Animate";

const projects = [
  {
    name: "Reetech ERP System",
    period: "Sep 2025 — Present",
    role: "ERP Solution Developer",
    desc: "Enterprise ERP system at REE Corp. Responsible for full cycle: requirements gathering, system design, and implementation. Applied Saga/Outbox pattern, Audit Log, CI/CD on Azure DevOps.",
    tech: ["ASP.NET Core", "MassTransit", "Azure DevOps", "SQL Server", "JMeter", "Microservices"],
    badge: "CURRENT", badgeColor: "#000",
  },
  {
    name: "Voting System — Shareholder Meeting",
    period: "2025",
    role: "ERP Solution Developer",
    desc: "Real-time voting platform for shareholder general meetings. Built with microservices architecture, scaled to handle high concurrent load with data integrity guarantees.",
    tech: ["ASP.NET Core", "Microservices", "MassTransit", "SignalR", "SQL Server", "JMeter"],
    badge: "MICROSERVICES", badgeColor: "#1a1a1a",
  },
  {
    name: "CFS — Consolidated Financial System",
    period: "2025 — Present",
    role: "ERP Solution Developer",
    desc: "Consolidated accounting system. Currently contributing to development while deepening knowledge in consolidation accounting domain.",
    tech: ["ASP.NET Core", "SQL Server", "Accounting Domain"],
    badge: "IN PROGRESS", badgeColor: "#555",
  },
  {
    name: "HRM System — CAREVN",
    period: "Mar 2025 — Jul 2025",
    role: ".NET Developer",
    desc: "Web-based HRM system with background job processing, API gateway routing, and multi-environment DevOps setup across Windows & Linux.",
    tech: ["ASP.NET Core MVC", "Hangfire", "Ocelot", "MongoDB"],
    badge: null, badgeColor: "",
  },
  {
    name: "ERP System — KATA, MIFACO, MDB",
    period: "2022 — 2025",
    role: "Team Leader",
    desc: "ERP systems for multiple enterprises with WinForms UI, real-time notifications, message queuing, and SSRS reporting. Led the development team.",
    tech: ["C#", "DevExpress", "SQL Server", "SignalR", "RabbitMQ", "SSRS"],
    badge: null, badgeColor: "",
  },
  {
    name: "BookShradha General Book Stores",
    period: "Jun 2023 — Jul 2023",
    role: "Team Leader",
    desc: "Full-stack e-commerce bookstore with PayPal integration, RESTful API, and Angular frontend.",
    tech: ["ASP.NET Core API", "Angular", "SQL Server", "PayPal API"],
    badge: null, badgeColor: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 0", borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>Work</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Projects</h2>
        </div>
        <div className="grid-2">
          {projects.map((p, i) => (
            <Animate key={i} direction="up" delay={i * 80}>
              <div style={{ border: "1px solid #e5e5e5", padding: 24, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700 }}>{p.name}</h3>
                      {p.badge && (
                        <span style={{ fontSize: 10, background: p.badgeColor, color: "#fff", padding: "2px 8px", fontWeight: 700 }}>{p.badge}</span>
                      )}
                    </div>
                    <p style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{p.role} · {p.period}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#666", marginBottom: 16, lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ fontSize: 11, border: "1px solid #ddd", padding: "3px 8px", color: "#777" }}>{t}</span>
                  ))}
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
