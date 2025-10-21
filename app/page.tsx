// app/page.tsx
import "./globals.css";
import { client } from "../sanity/client";
import React from "react";

export default async function HomePage() {
  // On supprime toute logique de cookies / jwt / redirect
  const posts = await client.fetch(`*[_type == "post"]{_id, title, content}`);

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <section className="intro">
        <h2>Bienvenue sur Edulab 🎓</h2>
        <p>
          L’espace pédagogique collaboratif de l’école Les Glycines.  
          Explorez, innovez, partagez vos idées et vos pratiques de classe.
        </p>
      </section>

      <div className="video-placeholder">
        <video autoPlay loop muted playsInline className="avatar-video">
          <source src="/avatar.mp4" type="video/mp4" />
        </video>
      </div>

      <h2>Nos articles :</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
