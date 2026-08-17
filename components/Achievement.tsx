"use client";
import Animate from "@/components/Animate";

const achievements = [
  { icon: "🏆", title: "Valedictorian 2024", subtitle: "Aptech Computer Education", desc: "Top graduate of the entire cohort in Software Engineering.", link: "https://aptechvietnam.com.vn/hoc-vien/thu-khoa-chuyen-nganh-cong-nghe-phan-mem-2024-ho-trung-nghia-tu-dam-me-dan-loi-den-thanh-cong/" },
  { icon: "👥", title: "Team Leader", subtitle: "Multiple ERP Projects", desc: "Led development teams across 4+ enterprise ERP projects for KATA, MIFACO, MDB, and REE Corp." },
  { icon: "⚡", title: "2,000 req/s", subtitle: "Performance Engineering", desc: "Redesigned voting system architecture — throughput scaled from 300 to 2,000 req/s (~6.7x) with Redis bitmap and async messaging, verified with JMeter." },
  { icon: "🚀", title: "3+ Years Experience", subtitle: "Enterprise Development", desc: "Hands-on experience building production-grade systems used by real businesses." },
];

export default function Achievement() {
  return (
    <section style={{ padding: "80px 0", background: "#0a0a0a", color: "#fff", borderBottom: "1px solid #222" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>Recognition</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Achievements</h2>
        </div>
        <div className="grid-5">
          {achievements.map((a, i) => (
            <Animate key={a.title} direction="up" delay={i * 80}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: 24, height: "100%", cursor: a.link ? "pointer" : "default" }} onClick={a.link ? () => window.open(a.link, "_blank") : undefined}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{a.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{a.title}</h3>
                <p style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>{a.subtitle}</p>
                <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
