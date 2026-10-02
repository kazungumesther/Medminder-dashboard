"use client";

import { useApp } from "../../context/AppContext";
import styles from "./history.module.css";
import Sidebar from "../components/Sidebar";

export default function History() {
  const { history, isLoading } = useApp();

  const formatTimestamp = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>Loading tracking history...</div>
    );
  }

  return (
    <div className={styles.layoutContainer}>
      <Sidebar />

      <div className={styles.mainWrapper}>
        <div className={styles.contentContainer}>
          <header className={styles.header}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span
                className={styles.iconAnchor}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#e6f0fa",
                  borderRadius: "50%",
                  color: "#1a73e8",
                  flexShrink: 0,
                }}
              >
                <svg
                  xmlns="http://w3.org"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </span>
              <div>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#1e293b",
                  }}
                >
                  Medicine History
                </h1>
                <p
                  className={styles.subtitle}
                  style={{ margin: "4px 0 0 0", color: "#64748b" }}
                >
                  Here are the medicines you have taken.
                </p>
              </div>
            </div>
          </header>

          {history.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No medicines have been taken yet.</p>
            </div>
          ) : (
            <main className={styles.timeline}>
              {history.map((log) => (
                <div className={styles.historyCard} key={log.id}>
                  <div className={styles.cardLeft}>
                    <div className={styles.medDetails}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <svg
                          xmlns="http://w3.org"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1a73e8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                          <path d="m8.5 8.5 7 7" />
                        </svg>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "1.1rem",
                            color: "#1e293b",
                          }}
                        >
                          {log.name}
                        </h3>
                      </div>
                      <p style={{ margin: "4px 0" }}>
                        Dosage: <strong>{log.dosage}</strong>
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.cardRight}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "8px",
                    }}
                  >
                    <div
                      className={styles.timestampBox}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <svg
                        xmlns="http://w3.org"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span
                        className={styles.timeLabel}
                        style={{ color: "#64748b", fontSize: "0.875rem" }}
                      >
                        {formatTimestamp(log.timestamp)}
                      </span>
                    </div>

                    <span
                      className={styles.statusBadge}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        backgroundColor: "#ecfdf5",
                        color: "#059669",
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      <svg
                        xmlns="http://w3.org"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Taken
                    </span>
                  </div>
                </div>
              ))}
            </main>
          )}
        </div>
      </div>
    </div>
  );
}
