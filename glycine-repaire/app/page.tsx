// app/page.tsx
import "./globals.css";
import { cookies} from "next/headers"
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  
  if (!token) {
    redirect("/login");
  }
  try {
    // Vérifie le token avec la clé secrète du .env
    jwt.verify(token, process.env.JWT_SECRET!);
  } catch (err) {
    redirect("/login");
  }
  return (
    <>
      <main className="home">
        <section className="intro">
          <h2>Bienvenue sur Edulab</h2>
          <p>
            L’espace pédagogique collaboratif de l’école Les Glycines.  
            Explorez, innovez, partagez vos idées et vos pratiques de classe.
          </p>
        </section>

        <div className="video-placeholder">
          <video autoPlay loop muted playsInline className= "avatar-video">
            <source src="/avatar.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
    </>
  );
}
