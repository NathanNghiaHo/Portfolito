import Image from "next/image";
import Animate from "@/components/Animate";

export default function Hero() {
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <div className="grid-hero">
          {/* Text */}
          <Animate direction="left">
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1.5px solid #000", padding: "6px 14px",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: 24,
              }}>
                🏆 Valedictorian 2024 — GPA 3.8/4.0
              </div>
              <h1 className="hero-title" style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 16 }}>
                Ho Trung<br />
                <span style={{ borderBottom: "4px solid #000" }}>Nghia</span>
              </h1>
              <p style={{ fontSize: 18, color: "#666", fontWeight: 500, marginBottom: 20 }}>
                .NET Developer & ERP Solution Developer
              </p>
              <p style={{ color: "#777", maxWidth: 420, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>
                Experienced in building enterprise-grade ERP systems, microservices architecture,
                and DevOps pipelines. Currently at REE Corp, delivering scalable .NET solutions.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#contact" style={{ background: "#000", color: "#fff", padding: "12px 28px", fontSize: 13, fontWeight: 600, display: "inline-block" }}>
                  Get in touch
                </a>
                <a href="https://www.linkedin.com/in/nowfne/" target="_blank" rel="noopener noreferrer"
                  style={{ border: "1.5px solid #000", padding: "12px 28px", fontSize: 13, fontWeight: 600, display: "inline-block" }}>
                  LinkedIn
                </a>
                <a href="https://github.com/NathanNghiaHo" target="_blank" rel="noopener noreferrer"
                  style={{ border: "1.5px solid #000", padding: "12px 28px", fontSize: 13, fontWeight: 600, display: "inline-block" }}>
                  GitHub
                </a>
              </div>
            </div>
          </Animate>

          {/* Avatar */}
          <Animate direction="right" delay={200}>
            <div className="hero-avatar" style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ position: "relative" }}>
                <div style={{ width: 300, height: 300, border: "2px solid #000", overflow: "hidden" }}>
                  <Image
                    src="/avatar.jpg"
                    alt="Ho Trung Nghia"
                    width={300}
                    height={300}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    priority
                  />
                </div>
                <div style={{ position: "absolute", bottom: -10, right: -10, width: 300, height: 300, border: "1px solid rgba(0,0,0,0.15)", zIndex: -1 }} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
