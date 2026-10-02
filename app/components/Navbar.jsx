"use client";
import { Pills, LayoutDashboard, ClipboardList, User } from 'lucide-react';


import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
  <Pills className="icon" size={18} /> Medicine Reminder
</div>

<div className={styles.links}>
  <Link href="/dashboard">
    <LayoutDashboard className="icon" size={18} /> Dashboard
  </Link>

  <Link href="/add-medicine">
    <Pills className="icon" size={18} /> Add Medicine
  </Link>

  <Link href="/history">
    <ClipboardList className="icon" size={18} /> History
  </Link>

  <Link href="/profile">
    <User className="icon" size={18} /> Profile
  </Link>
</div>
    </nav>
  );
}
