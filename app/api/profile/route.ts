import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = "supercleinsecurisee";

export async function GET(request: Request) {
    try {
        const cookie = request.headers.get("cookie");
        if (!cookie) return NextResponse.json({ authenticated: false});

        const token = cookie
        .split("; ")
        .find((c) => c.trim().startsWith("auth_token="))
        ?.split("=")[1];
    if (!token) return NextResponse.json({ authenticated: false});

    const decoded = jwt.verify(token, SECRET_KEY);
    return NextResponse.json({ authenticated: true, user: decoded });
    } catch (error) {
        return NextResponse.json({authenticated: false});

    }
}
