import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "supercleinsecurisee";
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const filePath = path.join(process.cwd(), "app/api/login/users.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(fileData);
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (!user) return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 401});
    const passwordMatch = user.password === password;
    if (!passwordMatch) return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
    const token = jwt.sign({ email: user.email }, 
      SECRET_KEY || "supersecret",
      { expiresIn: "2h" } 
    );
    // réponse avec cookie HTTPonly
    const response = NextResponse.json({ success: true, message: "Authentification reussie" });
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 2 * 60 * 60, // 2 heures
    });
    return response;
  } catch (error) {
    console.error("Erreur login:", error);
    return NextResponse.json({ success: false, message: "Erreur interne"});
  }
}
   
