"use client";

import React from "react";
import { Pill, CheckCircle2, Clock } from "lucide-react";

export default function Cards({ medicines = [] }) {
  const totalCount = medicines.length;
  const takenCount = medicines.filter((med) => med.taken).length;
  const upcomingCount = totalCount - takenCount;

  const cardStyle = {
    flex: 1,
    background: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#1e70d6",
    fontSize: "1rem",
    fontWeight: "600",
    margin: "0 0 12px 0",
  };

  const counterStyle = {
    fontSize: "1.75rem",
    fontWeight: "800",
    color: "#0f172a",
    margin: "0 0 6px 0",
  };

  const footerTextStyle = {
    color: "#64748b",
    fontSize: "0.875rem",
    margin: 0,
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "100%",
        alignItems: "stretch",
      }}
    >
      <div style={cardStyle}>
        <h3 style={headerStyle}>
          <Pill size={18} /> Medicines
        </h3>
        <h2 style={counterStyle}>{totalCount}</h2>
        <p style={footerTextStyle}>Total Added</p>
      </div>

      <div style={{ display: "flex", flex: 2, gap: "20px" }}>
        <div style={cardStyle}>
          <h3 style={headerStyle}>
            <CheckCircle2 size={18} /> Taken
          </h3>
          <h2 style={counterStyle}>{takenCount}</h2>
          <p style={footerTextStyle}>Completed</p>
        </div>

        <div style={cardStyle}>
          <h3 style={headerStyle}>
            <Clock size={18} /> Upcoming
          </h3>
          <h2 style={counterStyle}>{upcomingCount}</h2>
          <p style={footerTextStyle}>Remaining</p>
        </div>
      </div>
    </div>
  );
}
