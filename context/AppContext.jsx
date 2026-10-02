"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  medicines: [],
  history: [],
  addMedicine: () => {},
  removeMedicine: () => {},
  logIntake: () => {},
  isLoading: true
});

export function AppProvider({ children }) {
  const [medicines, setMedicines] = useState([]);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedMeds = window.localStorage.getItem("medicine_list");
      const storedHistory = window.localStorage.getItem("medicine_history");
      
      if (storedMeds) setMedicines(JSON.parse(storedMeds));
      if (storedHistory) setHistory(JSON.parse(storedHistory));
    } catch (error) {
      console.error("Storage failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addMedicine = (newMed) => {
    const updated = [
      ...medicines, 
      { ...newMed, id: Date.now().toString(), createdAt: new Date().toISOString() }
    ];
    setMedicines(updated);
    window.localStorage.setItem("medicine_list", JSON.stringify(updated));
  };

  const removeMedicine = (id) => {
    const updated = medicines.filter(med => med.id !== id);
    setMedicines(updated);
    window.localStorage.setItem("medicine_list", JSON.stringify(updated));
  };

  const logIntake = (medName, dosage) => {
    const newLog = {
      id: Date.now().toString(),
      name: medName,
      dosage,
      timestamp: new Date().toISOString()
    };
    const updatedHistory = [newLog, ...history];
    setHistory(updatedHistory);
    window.localStorage.setItem("medicine_history", JSON.stringify(updatedHistory));
  };

  return (
    <AppContext.Provider value={{ medicines, history, addMedicine, removeMedicine, logIntake, isLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
