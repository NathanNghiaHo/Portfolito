export default function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>Say hello</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Contact</h2>
        </div>
        <div className="grid-2" style={{ alignItems: "start" }}>
          <div>
            <p style={{ color: "#666", marginBottom: 32, lineHeight: 1.7, fontSize: 14 }}>
              Open to new opportunities, collaborations, or just a good tech conversation. Feel free to reach out.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "@", label: "hotrungnghia2704@gmail.com", href: "mailto:hotrungnghia2704@gmail.com" },
                { icon: "☎", label: "036 798 2053", href: "tel:+84367982053" },
                { icon: "in", label: "linkedin.com/in/nowfne", href: "https://www.linkedin.com/in/nowfne/" },
                { icon: "gh", label: "github.com/NathanNghiaHo", href: "https://github.com/NathanNghiaHo" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 12, color: "inherit" }}>
                  <span style={{ width: 40, height: 40, border: "1.5px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{item.label}</span>
                </a>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 40, height: 40, border: "1.5px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>📍</span>
                <span style={{ fontSize: 13, color: "#999" }}>Binh Chanh, Ho Chi Minh City</span>
              </div>
            </div>
          </div>
          <div style={{ border: "1.5px solid #000", padding: 40 }}>
            <p style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" }}>Let&apos;s build something great.</p>
            <p style={{ color: "#777", fontSize: 13, marginBottom: 28 }}>Available for full-time roles and freelance projects.</p>
            <a href="mailto:hotrungnghia2704@gmail.com" style={{ display: "inline-block", background: "#000", color: "#fff", padding: "12px 32px", fontSize: 13, fontWeight: 600 }}>
              Send an email →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
