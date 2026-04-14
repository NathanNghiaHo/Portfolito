"use client";
import Animate from "@/components/Animate";

const domains = [
  { icon: "🛒", title: "Sales & Order Management", items: ["Sales Order (SO)", "Delivery & Partial Delivery", "Return & Credit Limit", "Document Flow (PXK, Packing List, Invoice)"] },
  { icon: "📦", title: "Purchase Management", items: ["Purchase Order (PO)", "3-Way Matching (PO → Receipt → Invoice)", "Supplier Invoice Reconciliation"] },
  { icon: "🏭", title: "Inventory Management", items: ["Stock In / Out", "Real-time Ledger", "Return Handling", "Inventory Adjustment"] },
  { icon: "💰", title: "Accounting", items: ["AR / AP", "VAT & Debit Note", "Cost Accounting", "General Ledger (GL)", "Reconciliation"] },
  { icon: "🔄", title: "Cross-Module Flow", items: ["Sales → Inventory → Accounting", "End-to-end document traceability", "Approval Workflow"] },
  { icon: "🔐", title: "Access & Reporting", items: ["RBAC & Data-level Permission", "Financial & Inventory Reports", "Real-time & Snapshot Reporting"] },
  { icon: "🔧", title: "Manufacturing (Basic)", items: ["Bill of Materials (BOM)", "Work Order", "Work In Progress (WIP)"] },
];

export default function ERPDomain() {
  return (
    <section id="erp" style={{ padding: "80px 0", borderBottom: "1px solid #e5e5e5", background: "#fafafa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>Beyond Code</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>ERP Domain Expertise</h2>
        </div>
        <p style={{ color: "#777", fontSize: 14, marginBottom: 32, maxWidth: 560, lineHeight: 1.7 }}>
          Not just a developer — I&apos;m also a direct end-user and operator of ERP systems in production.
          Deep business process knowledge across the full ERP lifecycle.
        </p>
        <div style={{ borderLeft: "4px solid #000", background: "#fff", padding: "16px 20px", marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 24 }}>🔥</span>
          <div>
            <p style={{ fontWeight: 700, fontSize: 14 }}>Full ERP Lifecycle Coverage</p>
            <p style={{ fontSize: 12, color: "#777", marginTop: 2 }}>From Sales Order to GL reconciliation — I understand every module, every document, every flow.</p>
          </div>
        </div>
        <div className="grid-4">
          {domains.map((d, i) => (
            <Animate key={d.title} direction="up" delay={i * 70}>
              <div style={{ background: "#fff", border: "1px solid #e5e5e5", padding: 20, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>{d.icon}</span>
                  <h3 style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>{d.title}</h3>
                </div>
                <ul style={{ listStyle: "none" }}>
                  {d.items.map((item) => (
                    <li key={item} style={{ fontSize: 12, color: "#666", display: "flex", gap: 6, marginBottom: 4 }}>
                      <span style={{ color: "#000", flexShrink: 0 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
