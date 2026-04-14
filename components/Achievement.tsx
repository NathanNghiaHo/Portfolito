"use client";
import Animate from "@/components/Animate";

const achievements = [
  { icon: "🏆", title: "Valedictorian 2024", subtitle: "Aptech Computer Education", desc: "Top graduate of the entire cohort with GPA 3.8/4.0 in Software Engineering." },
  { icon: "⭐", title: "GPA 3.8 / 4.0", subtitle: "Academic Excellence", desc: "Consistently high academic performance throughout the Software Engineering program." },
  { icon: "👥", title: "Team Leader", subtitle: "Multiple ERP Projects", desc: "Led development teams across 4+ enterprise ERP projects for KATA, MIFACO, MDB, and REE Corp." },
  { icon: "⚡", title: "300+ req/s @ 2ms", subtitle: "Performance Engineering", desc: "Load tested and optimized systems to handle 300+ users/second with sub-2ms response time using JMeter." },
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
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: 24, height: "100%" }}>
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
