// app/page.tsx
import "./globals.css";
import { client } from "../sanity/client";  // Assurez-vous que le chemin vers client est correct
import React from "react";
import PostCarousel from "../components/PostCarousel";  // Importation du carrousel
import "../app/postcarousel.css"  // Importation du CSS du carrousel

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, author->{name}, image}`;

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  // Récupérer les posts depuis Sanity
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
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

      {/* Afficher le carrousel */}
      <PostCarousel posts={posts} />
    </main>
  );
}
