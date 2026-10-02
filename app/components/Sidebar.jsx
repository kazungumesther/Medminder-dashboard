"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";

import {
  LayoutDashboard,
  PlusCircle,
  History,
  User,
  LogOut,
  Pill,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <div className={styles.appIconWrapper}>
          <Pill size={25} className={styles.logoPill} />
        </div>
        <h2 className={styles.logoTitle}>MedMinder</h2>
      </div>

      <nav className={styles.navigationMenu}>
        <Link
          href="/dashboard"
          className={`${styles.navLink} ${isActive("/dashboard") ? styles.activeLink : ""}`}
        >
          <LayoutDashboard size={23} className={styles.navIcon} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/add-medicine"
          className={`${styles.navLink} ${isActive("/add-medicine") ? styles.activeLink : ""}`}
        >
          <PlusCircle size={23} className={styles.navIcon} />
          <span>Add Medicine</span>
        </Link>

        <Link
          href="/history"
          className={`${styles.navLink} ${isActive("/history") ? styles.activeLink : ""}`}
        >
          <History size={23} className={styles.navIcon} />
          <span>History</span>
        </Link>

        <Link
          href="/profile"
          className={`${styles.navLink} ${isActive("/profile") ? styles.activeLink : ""}`}
        >
          <User size={24} className={styles.navIcon} />
          <span>Profile</span>
        </Link>
      </nav>

      <div className={styles.footerSection}>
        <button
          className={styles.logoutButton}
          onClick={() => alert("Logging out... Session safely closed.")}
        >
          <LogOut size={18} className={styles.logoutIcon} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
