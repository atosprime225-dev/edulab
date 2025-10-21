"use client";
import {useState} from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import React from "react";
export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const router = useRouter();

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (res.ok) {
      const data = await res.json();
      setMessage("Authentification réussie... redirection");
      console.log("Réponse login:", data);
  
      // ✅ Redirection client vers /
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      const error = await res.json();
      setMessage(error.error || "Erreur d'authentification");
    }
  };
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