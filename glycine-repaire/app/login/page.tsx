"use client";
import {useState} from "react";
import styles from "./login.module.css";
export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        window.location.href = "/dashboard";
      }
    }
    return (
        <div className={styles.Container}>
         <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Connexion</h2>

           <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
            />
            <input 
             type="password"
             placeholder="Mot de passe"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
            />
            <button type="submit">Se connecter</button>
            <p className={styles.message}>{message}</p>
         </form>
        </div>
    );

   }