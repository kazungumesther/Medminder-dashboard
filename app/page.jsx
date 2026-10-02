import React from "react";
import Link from "next/link";
import {
  Pill,
  AlarmClock,
  BarChart3,
  Lock,
  Eye,
  Apple,
  AlertCircle,
  Moon,
} from "lucide-react";
import "./globals.css";

export default function Page({ onGetStarted }) {
  return (
    <div
      className="landing-container"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
     <header className="landing-navbar">
  <div
    className="landing-logo"
    style={{ display: "flex", alignItems: "center", gap: "10px" }}
  >
    <Pill size={24} /> MedMinder
  </div>
  <div className="navbar-links">
    <a href="#features">Features</a>
    <a href="#security">Privacy</a>
    <Link href="/register" className="btn-nav-login" style={{ textDecoration: 'none' }}>
      Sign In
    </Link>
  </div>
</header>

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "140px",
            background:
              "linear-gradient(135deg, #7e9ee2 0%, #1d4ed8 40%, #051e59 100%)",
            borderRadius: "20px",
            marginBottom: "2.5rem",
            boxShadow:
              "0 10px 25px -5px rgba(29, 78, 216, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            padding: "0 40px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40%",
              left: "20%",
              width: "250px",
              height: "250px",
              background:
                "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "1.4rem",
                fontWeight: "800",
                margin: 0,
                letterSpacing: "-0.025em",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              MedMinder Analytics Suite v1.0
            </h3>
            <p
              style={{
                color: "#93c5fd",
                fontSize: "0.875rem",
                fontWeight: "500",
                margin: "4px 0 0 0",
                opacity: 0.9,
              }}
            >
              Your digital care matrix companion panel is primed and running
              securely.
            </p>
          </div>
        </div>
      </div>

      <main className="landing-hero">
        <div className="hero-content">
          <div className="hero-text-side">
            <span className="hero-badge">Health Management Made Simple</span>
            <h1>
              Never miss a dose. <br />
              <span className="text-gradient">Stay on track.</span>
            </h1>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "24px",
                padding: "24px",
                margin: "28px 0 32px 0",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.02)",
                maxWidth: "560px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <Eye size={18} color="#2563eb" />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#1e293b",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Custom Smart Label Support
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderRadius: "16px",
                    border: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#eff6ff",
                      borderRadius: "12px",
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                    }}
                  >
                    <Apple size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h5 style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", margin: 0 }}>With Food</h5>
                    <p style={{ fontSize: "11px", color: '#64748b', margin: 0 }}>Prevents irritation</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderRadius: "16px",
                    border: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fff7ed",
                      borderRadius: "12px",
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                    }}
                  >
                    <AlertCircle size={18} color="#ea580c" />
                  </div>
                  <div>
                    <h5 style={{ fontSize: "13px", fontWeight: "700", color: "#ea580c", margin: 0 }}>Empty Stomach</h5>
                    <p style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>Fast absorption</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderRadius: "16px",
                    border: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f5f3ff",
                      borderRadius: "12px",
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                    }}
                  >
                    <Moon size={18} color="#6d28d9" />
                  </div>
                  <div>
                    <h5 style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", margin: 0 }}>Before Bed</h5>
                    <p style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>Nighttime schedule</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderRadius: "16px",
                    border: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f0fdf4",
                      borderRadius: "12px",
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                    }}
                  >
                    <Pill size={18} color="#16a34a" />
                  </div>
                  <div>
                    <h5 style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", margin: 0 }}>As Needed</h5>
                    <p style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>PRN symptoms log</p>
                  </div>
                </div>
              </div>
            </div>

            <p style={{ marginTop: "0px" }}>
              MedMinder helps you easily organize your daily prescription schedule, 
              track active compliance streaks, and receive smart, timely reminders when it's time to take your pills.
            </p>
            
            <div id="features" className="hero-features-list" style={{ marginTop: "32px" }}>
              <div className="feature-item" style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fee2e2", border: "1px solid #fca5a5", borderRadius: "50%", width: "48px", height: "48px", flexShrink: 0 }}>
                  <AlarmClock size={22} color="#ef4444" fill="#fecaca" />
                </div>
                <div>
                  <h4>Smart Schedule Reminders</h4>
                  <p>Custom alerts tailored precisely around your daily routine frequencies.</p>
                </div>
              </div>
              
              <div className="feature-item" style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginTop: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "50%", width: "48px", height: "48px", flexShrink: 0 }}>
                  <BarChart3 size={22} color="#059669" />
                </div>
                <div>
                  <h4>Progress Logs &amp; History</h4>
                  <p>Visual compliance data reports to review comfortably with your doctor.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-action-side">
            <div className="cta-card">
              <h3>Get Started Today</h3>
              <p>Join thousands managing their prescription plans seamlessly.</p>
              
              <div className="cta-form-group">
                <Link href="/dashboard" className="btn-cta-primary" style={{ display: "block", textDecoration: "none" }}>
                  Enter Dashboard View →
                </Link>
              </div>

              <div className="cta-footer-note" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f5f9", padding: "6px", borderRadius: "6px" }}>
                  <Lock size={12} color="#475569" />
                </div>
                Your health data is encrypted securely &amp; kept locally.
              </div>
            </div>
          </div>
        </div>
      </main>

      <hr style={{ border: 'none', borderTop: '1px solid #cbd5e1', maxWidth: '1400px', margin: '5rem auto 0 auto', width: '100%', padding: '0 80px', opacity: 0.5 }} />

      <section id="security" style={{ maxWidth: "1400px", margin: "3rem auto 5rem auto", padding: "0 80px", color: "#1e293b", width: '100%' }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>Data Privacy &amp; Security</h3>
        <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6", maxWidth: "800px", margin: 0 }}>
          At MedMinder, your health compliance data is processed locally with hardware-level security protocols. 
          We do not store prescription logs on public cloud vectors or exchange profile metrics with external marketing channels.
        </p>
      </section>
    </div>
  );
}
