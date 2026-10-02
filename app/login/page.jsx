"use client";

import React, { useState } from "react";
import { Pill } from 'lucide-react';
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      window.location.href = "/dashboard";
    }
  };
  return (
    <main className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.icon}>
          <Pill size={24} />
        </div>

        <h1>MedMinder</h1>
        <p className={styles.welcome}>Welcome back!</p>
        <p className={styles.description}>
          Log in to manage your medicines and reminders.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className={styles.registerText}>
          Don't have an account? <a href="/register">Create an account</a>
        </p>
      </div>
    </main>
  );
}
