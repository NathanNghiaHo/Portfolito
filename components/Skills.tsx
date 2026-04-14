"use client";
import Animate from "@/components/Animate";

type Level = "Learning" | "Experienced" | "Proficient";

interface Skill { name: string; level: Level; }
interface Group { category: string; skills: Skill[]; }

const skillGroups: Group[] = [
  {
    category: "Language & Framework",
    skills: [
      { name: "C#", level: "Proficient" },
      { name: "ASP.NET Core", level: "Proficient" },
      { name: "ASP.NET Core MVC", level: "Proficient" },
      { name: "RESTful API", level: "Proficient" },
      { name: "NestJS", level: "Experienced" },
    ],
  },
  {
    category: "Database & Data Access",
    skills: [
      { name: "SQL Server", level: "Proficient" },
      { name: "Dapper", level: "Proficient" },
      { name: "SSRS", level: "Proficient" },
      { name: "Entity Framework", level: "Experienced" },
      { name: "ADO.NET", level: "Experienced" },
      { name: "SqlBulkCopy", level: "Experienced" },
      { name: "SQL Optimization", level: "Experienced" },
      { name: "MySQL", level: "Experienced" },
      { name: "MongoDB", level: "Experienced" },
    ],
  },
  {
    category: "Async & Concurrency",
    skills: [
      { name: "Async/Await", level: "Proficient" },
      { name: "Background Services", level: "Proficient" },
      { name: "Hangfire", level: "Experienced" },
      { name: "Task Parallel Library (TPL)", level: "Experienced" },
    ],
  },
  {
    category: "Messaging & Event-Driven",
    skills: [
      { name: "RabbitMQ", level: "Proficient" },
      { name: "MassTransit", level: "Proficient" },
      { name: "SignalR", level: "Experienced" },
      { name: "Saga Pattern", level: "Experienced" },
      { name: "Outbox Pattern", level: "Experienced" },
    ],
  },
  {
    category: "Architecture & Patterns",
    skills: [
      { name: "Unit of Work", level: "Proficient" },
      { name: "Repository Pattern", level: "Proficient" },
      { name: "Microservices", level: "Experienced" },
      { name: "API Gateway (Ocelot)", level: "Experienced" },
      { name: "Identity & Custom Authorize", level: "Experienced" },
      { name: "HealthCheck", level: "Experienced" },
      { name: "Audit Log System", level: "Experienced" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "IIS Deployment", level: "Experienced" },
      { name: "Azure DevOps", level: "Experienced" },
      { name: "CI/CD", level: "Experienced" },
      { name: "VMware", level: "Experienced" },
      { name: "Linux/Windows", level: "Experienced" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS/JavaScript", level: "Proficient" },
      { name: "Angular", level: "Experienced" },
      { name: "ReactJS", level: "Experienced" },
    ],
  },
  {
    category: "Testing & Performance",
    skills: [
      { name: "JMeter", level: "Experienced" },
      { name: "Load Testing", level: "Experienced" },
      { name: "Performance Testing", level: "Experienced" },
      { name: "Scalability Testing", level: "Experienced" },
    ],
  },
];

// 3 levels — màu rõ ràng, dễ phân biệt
const levelStyle: Record<Level, { bg: string; color: string; border: string }> = {
  Learning:    { bg: "#fff",    color: "#aaa",  border: "#e0e0e0" },
  Experienced: { bg: "#f4f4f4", color: "#333",  border: "#ccc"    },
  Proficient:  { bg: "#0a0a0a", color: "#fff",  border: "#0a0a0a" },
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 0", borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>Expertise</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Technical Skills</h2>
        </div>

        {/* Legend — dùng tag thật để nhất quán */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginRight: 4 }}>Level:</span>
          {(["Learning", "Experienced", "Proficient"] as Level[]).map((l) => {
            const s = levelStyle[l];
            return (
              <span key={l} style={{
                fontSize: 11, fontWeight: 700, padding: "4px 12px",
                background: s.bg, color: s.color,
                border: `1px solid ${s.border}`,
                letterSpacing: "0.05em",
              }}>{l}</span>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid-3">
          {skillGroups.map((group, i) => (
            <Animate key={group.category} direction="up" delay={i * 60}>
              <div style={{ border: "1px solid #e5e5e5", padding: "20px 20px 16px", height: "100%" }}>
                <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#999", marginBottom: 14 }}>
                  {group.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {group.skills.map((skill) => {
                    const s = levelStyle[skill.level];
                    return (
                      <span key={skill.name} style={{
                        fontSize: 12, fontWeight: 500, padding: "5px 11px",
                        background: s.bg, color: s.color,
                        border: `1px solid ${s.border}`,
                        whiteSpace: "nowrap",
                      }}>
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
