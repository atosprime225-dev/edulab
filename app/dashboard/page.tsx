"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/profile");
      const data = await res.json();

      if (!data.authenticated) {
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };
    checkAuth();
  }, []);

  if (!user) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Bienvenue {user.email}</h1>
      <button
        onClick={async () => {
          await fetch("/api/logout");
          window.location.href = "/login";
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}
