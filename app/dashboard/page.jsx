"use client";

import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import styles from "./dashboard.module.css";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";

import { Pill, Clock, RefreshCw, CheckCircle2, Trash2 } from "lucide-react";

export default function Dashboard() {
  const {
    medicines: globalMedicines,
    logIntake,
    removeMedicine,
    isLoading,
  } = useApp();
  const [localMeds, setLocalMeds] = useState([]);

  useEffect(() => {
    if (globalMedicines) {
      const savedTakenIds = JSON.parse(
        localStorage.getItem("medminder_taken_today") || "[]"
      );

      setLocalMeds(
        globalMedicines.map((newMed) => ({
          ...newMed,
          taken: savedTakenIds.includes(newMed.id.toString())
            ? true
            : newMed.taken || false,
        })),
      );
    }
  }, [globalMedicines]);

  const handleTakeMedicine = (medicine) => {
    logIntake(medicine.name, medicine.dosage);

    setLocalMeds((prev) =>
      prev.map((m) => (m.id === medicine.id ? { ...m, taken: true } : m)),
    );

    const savedTakenIds = JSON.parse(
      localStorage.getItem("medminder_taken_today") || "[]"
    );
    if (!savedTakenIds.includes(medicine.id.toString())) {
      savedTakenIds.push(medicine.id.toString());
      localStorage.setItem(
        "medminder_taken_today",
        JSON.stringify(savedTakenIds),
      );
    }

    alert(`⚡ Dose logged! ${medicine.name} marked as taken.`);
  };

  const handleDeleteMedicine = async (medicine) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to permanently remove ${medicine.name}?`,
    );
    if (!confirmDelete) return;

    setLocalMeds((prev) => prev.filter((m) => m.id !== medicine.id));

    if (removeMedicine) {
      removeMedicine(medicine.id);
    }

    const savedTakenIds = JSON.parse(
      localStorage.getItem("medminder_taken_today") || "[]"
    );
    const updatedIds = savedTakenIds.filter(
      (id) => id !== medicine.id.toString(),
    );
    localStorage.setItem("medminder_taken_today", JSON.stringify(updatedIds));

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    try {
      await fetch(`${BACKEND_URL}/api/medicines/${medicine.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.warn(
        "Background API delete sync caught network clear exception:",
        error,
      );
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        Synchronizing healthcare metrics...
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginBottom: "2.5rem",
              paddingRight: "0.25rem",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "800",
                  color: "#1e293b",
                  margin: 0,
                }}
              >
                Good morning!
              </h1>
              <p className={styles.subtitle}>
                Here is your medicine schedule for today.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(30, 41, 59, 0.04)",
                padding: "10px 16px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  background: "#1a6bbc",
                  color: "#ffffff",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                MU
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "13px",
                  lineHeight: "1.2",
                }}
              >
                <strong style={{ color: "#1e293b", fontWeight: "600" }}>
                  Medicine User
                </strong>
                <span style={{ color: "#64748b", fontSize: "12px" }}>
                  Active Profile
                </span>
              </div>
            </div>
          </header>

          <section style={{ marginBottom: "2.5rem", width: "100%" }}>
            <Cards medicines={localMeds} />
          </section>

          <section style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <h2>Today's Medicines</h2>
              <a
                href="/add-medicine"
                style={{
                  color: "#1e70d6",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                + Add Medicine
              </a>
            </div>

            {localMeds.length === 0 ? (
              <div className={styles.emptyState}>
                <h3>Your schedule is clear!</h3>
                <p>No medicines added yet.</p>
              </div>
            ) : (
              <div className={styles.medicationGrid}>
                {localMeds.map((medicine) => (
                  <div className={styles.medicationCard} key={medicine.id}>
                    <div className={styles.cardHeader}>
                      <div className={styles.medInfo}>
                        <div className={styles.iconWrapper}>
                          <Pill size={20} className={styles.vectorIcon} />
                        </div>
                        <div>
                          <h3>{medicine.name}</h3>
                          <p className={styles.dosageText}>{medicine.dosage}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDeleteMedicine(medicine)}
                        className={styles.deleteBtn}
                        title={`Delete ${medicine.name}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#94a3b8",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.metaRow}>
                        <div className={styles.labelContainer}>
                          <Clock size={16} className={styles.metaIcon} />
                          <span className={styles.metaLabel}>Time:</span>
                        </div>
                        <span className={styles.metaValue}>
                          {medicine.time}
                        </span>
                      </div>

                      <div className={styles.metaRow}>
                        <div className={styles.labelContainer}>
                          <RefreshCw size={14} className={styles.metaIcon} />
                          <span className={styles.metaLabel}>Frequency:</span>
                        </div>
                        <span className={styles.metaValue}>
                          {medicine.frequency}
                        </span>
                      </div>

                      <div style={{ marginTop: "1rem" }}>
                        <button
                          type="button"
                          onClick={() => handleTakeMedicine(medicine)}
                          disabled={medicine.taken}
                          style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "6px",
                            border: "none",
                            backgroundColor: medicine.taken ? "#e2e8f0" : "#1a6bbc",
                            color: medicine.taken ? "#94a3b8" : "#ffffff",
                            cursor: medicine.taken ? "not-allowed" : "pointer",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                          }}
                        >
                          <CheckCircle2 size={16} />
                          {medicine.taken ? "Taken" : "Mark as Taken"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
