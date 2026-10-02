"use client";

import { useState, useEffect } from "react";
import styles from "./profile.module.css";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  const [name, setName] = useState("Medicine User");
  const [email, setEmail] = useState("user@example.com");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
      if (savedProfile) {
        setName(savedProfile.name || "Medicine User");
        setEmail(savedProfile.email || "user@example.com");
        setPhone(savedProfile.phone || "");
      }
    } catch (error) {
      console.error("Failed to load profile:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const profileData = { name, email, phone };
    localStorage.setItem("userProfile", JSON.stringify(profileData));
    alert("Profile updated successfully!");
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading profile...</div>;
  }

  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <main className={styles.mainWrapper}>
        <div className={styles.container}>
          <header className={styles.formHeader}>
            <span className={styles.iconAnchor}>
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.svgIcon}
                width="24"
                height="24"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <div>
              <h1 className={styles.title}>My Profile</h1>
              <p className={styles.subtitle}>
                Manage your personal information.
              </p>
            </div>
          </header>

          <form className={styles.form} onSubmit={handleSave}>
            <label htmlFor="nameInput" className={styles.formLabel}>
              Full Name
            </label>
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.formInput}
            />

            <label htmlFor="emailInput" className={styles.formLabel}>
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.formInput}
            />

            <label htmlFor="phoneInput" className={styles.formLabel}>
              Phone Number
            </label>
            <input
              id="phoneInput"
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.formInput}
            />

            <button type="submit" className={styles.submitBtn}>
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
