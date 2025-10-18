import { NextResponse } from "next/server";
import client from "@/lib/sanityClient";

export async function GET() {
  const posts = await client.fetch(`*[_type == "post"] | order(createdAt desc)`);
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const { title, content } = await req.json();
  const newPost = await client.create({
    _type: "post",
    title,
    content,
    createdAt: new Date().toISOString(),
  });
  return NextResponse.json({ message: "Article ajouté", post: newPost });
}
