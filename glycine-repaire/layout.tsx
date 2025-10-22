import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Edulab",
  description: "Espace pédagogique collaboratif - École Les Glycines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
/*  */