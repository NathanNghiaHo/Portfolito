"use client";
import Animate from "@/components/Animate";

const experiences = [
  {
    company: "REE Corp",
    role: "ERP Solution Developer",
    period: "Sep 2025 — Present",
    location: "Ho Chi Minh City",
    highlights: [
      "Building enterprise ERP microservices system",
      "Implemented CI/CD pipelines with Azure DevOps",
      "Applied Saga & Outbox patterns with MassTransit",
      "Designed multi-format Audit Log system",
      "Unit of Work + Repository pattern architecture",
      "SQL optimization & HealthCheck integration",
      "Load & performance testing with JMeter (300+ req/s, ~2ms response)",
    ],
    tech: ["C#", "ASP.NET Core", "MassTransit", "Azure DevOps", "Microservices", "SQL Server", "JMeter"],
    current: true,
  },
  {
    company: "TSP Solution",
    role: ".NET Developer",
    period: "Mar 2025 — Jul 2025",
    location: "Ho Chi Minh City",
    highlights: [
      "Built HRM web system for CAREVN using ASP.NET Core MVC",
      "Implemented background jobs with Hangfire",
      "Integrated API Gateway (Ocelot) for service routing",
      "DevOps setup across Windows & Linux environments",
      "Deployed and managed MongoDB environment",
    ],
    tech: ["C#", "ASP.NET Core MVC", "Hangfire", "Ocelot", "MongoDB"],
    current: false,
  },
  {
    company: "Duc Anh Solution",
    role: "Full Stack Developer & Team Leader",
    period: "Nov 2022 — Feb 2025",
    location: "Ho Chi Minh City",
    highlights: [
      "Led development of ERP systems for KATA, MIFACO, REETECH, MDB",
      "Built WinForms apps with C# and DevExpress",
      "Deployed RabbitMQ for microservice messaging",
      "Real-time notifications via SignalR",
      "Business reports with SSRS & stored procedures",
      "IIS deployment and API management",
    ],
    tech: ["C#", "DevExpress", "SQL Server", "SSRS", "SignalR", "RabbitMQ", "MassTransit"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 0", borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>Career</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Experience</h2>
        </div>
        <div>
          {experiences.map((exp, i) => (
            <Animate key={i} direction="up" delay={i * 100}>
              <div style={{ padding: "40px 0", borderBottom: i < experiences.length - 1 ? "1px solid #e5e5e5" : "none" }}>
                <div className="grid-exp">
                  {/* Left */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700 }}>{exp.company}</h3>
                      {exp.current && (
                        <span style={{ fontSize: 10, background: "#000", color: "#fff", padding: "2px 8px", fontWeight: 700 }}>NOW</span>
                      )}
                    </div>
                    <p style={{ fontSize: 13, color: "#555", fontWeight: 500, marginBottom: 4 }}>{exp.role}</p>
                    <p style={{ fontSize: 12, color: "#999" }}>{exp.period}</p>
                    <p style={{ fontSize: 12, color: "#999" }}>{exp.location}</p>
                  </div>

                  {/* Middle */}
                  <div>
                    <ul style={{ listStyle: "none" }}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} style={{ fontSize: 13, color: "#444", display: "flex", gap: 10, marginBottom: 8, lineHeight: 1.5 }}>
                          <span style={{ color: "#000", flexShrink: 0, marginTop: 1 }}>—</span>{h}
                        </li>
                      ))}
                    </ul>
                    {/* Tech shown on mobile (hidden col on desktop) */}
                    <div className="grid-exp-tech-mobile" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                      {exp.tech.map((t) => (
                        <span key={t} style={{ fontSize: 11, border: "1px solid #ccc", padding: "3px 8px", color: "#555" }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right — desktop only */}
                  <div className="grid-exp-tech">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {exp.tech.map((t) => (
                        <span key={t} style={{ fontSize: 11, border: "1px solid #ccc", padding: "3px 8px", color: "#555" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 1025px) { .grid-exp-tech-mobile { display: none !important; } }
        @media (max-width: 1024px) { .grid-exp-tech { display: none !important; } }
      `}</style>
    </section>
  );
}
