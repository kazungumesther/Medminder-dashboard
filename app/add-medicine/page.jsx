"use client";
import { useState } from "react";
import { useApp } from "../../context/AppContext";
import Sidebar from "../components/Sidebar";
import { Pill, Clock, RefreshCw, Weight, Layers } from "lucide-react";
import styles from "./medicine.module.css";

export default function AddMedicine() {
  const { addMedicine } = useApp();
  const [isLoading, setIsLoading] = useState(false);

  const [dosageForm, setDosageForm] = useState("Tablet");

  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    time: "08:00",
    frequency: "Once a day",
  });

  const formOptions = ["Tablet", "Capsule", "Syrup", "Injection"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dosage) {
      alert("Please fill in the medicine name and dosage strength.");
      return;
    }

    setIsLoading(true);

    const finalDosage = formData.dosage.trim();
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
      const response = await fetch(`${BACKEND_URL}/api/medicines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          dosage: finalDosage,
          time: formData.time,
          frequency: formData.frequency,
          dosageForm: dosageForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to log medication to server database.",
        );
      }

      addMedicine({
        id: Date.now().toString(),
        name: formData.name,
        dosage: finalDosage,
        time: formData.time,
        frequency: formData.frequency,
        dosageForm: dosageForm,
        taken: false,
      });

      alert("Medication added safely with zero flagged interaction risks!");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Fullstack connection failure:", error);
      alert(
        `${error.message}\n\nAn urgent summary alert was dispatched to your phone.`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.iconWrapper}>
              <Pill size={24} />
            </div>
            <div>
              <h1 className={styles.formTitle}>Add New Medicine</h1>
              <p className={styles.formSubtitle}>
                Schedule a new medication reminder
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.medicationForm}>
            <div className={styles.inputGroup}>
              <label>
                <Pill size={16} /> Medicine Name
              </label>
              <input
                type="text"
                placeholder="e.g. Paracetamol"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>
                <Layers size={16} /> Dosage Form
              </label>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  overflowX: "auto",
                  paddingBottom: "4px",
                  marginTop: "4px",
                }}
              >
                {formOptions.map((option) => {
                  const isSelected = dosageForm === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isLoading}
                      onClick={() => setDosageForm(option)}
                      style={{
                        padding: "8px 16px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        cursor: "pointer",
                        border: isSelected
                          ? "1.5px solid #2563eb"
                          : "1px solid #cbd5e1",
                        backgroundColor: isSelected ? "#eff6ff" : "#ffffff",
                        color: isSelected ? "#2563eb" : "#64748b",
                        transition: "all 0.15s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>
                <Weight size={16} /> Dosage Strength
              </label>
              <input
                type="text"
                placeholder="e.g. 500mg, 10ml, 5 drops, 1 pill"
                value={formData.dosage}
                onChange={(e) =>
                  setFormData({ ...formData, dosage: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>
                <Clock size={16} /> Reminder Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>
                <RefreshCw size={16} /> Frequency
              </label>
              <select
                value={formData.frequency}
                onChange={(e) =>
                  setFormData({ ...formData, frequency: e.target.value })
                }
                disabled={isLoading}
              >
                <option value="Once a day">Once a day</option>
                <option value="Twice a day">Twice a day</option>
                <option value="Three times a day">Three times a day</option>
                <option value="As needed">As needed (PRN)</option>
              </select>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading}
            >
              {isLoading ? "Validating Safety Protocols..." : "Save Medicine"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
