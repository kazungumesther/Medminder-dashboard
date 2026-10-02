import styles from "./register.module.css";
import { Pill } from 'lucide-react';
export default function Register() {
  return (
    <main className={styles.registerPage}>
      <div className={styles.registerCard}>
        <div className={styles.icon}>
          <Pill size={24} />
        </div>

        <h1>Create Account</h1>

        <p className={styles.welcome}>Start managing your medicines</p>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Create a password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />

          <button type="submit">Create Account</button>
        </form>

        <p className={styles.loginText}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </main>
  );
}
