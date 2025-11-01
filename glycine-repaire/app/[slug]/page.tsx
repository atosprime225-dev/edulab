// app/[slug]/page.tsx

import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../sanity/client";
import Link from "next/link";
import "../post.css";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 1 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Correction : on attend "params" avant de l'utiliser
  const { slug } = await params;
    // 🧩 LOG pour vérifier le slug reçu
    console.log("🧩 SLUG REÇU :", slug);
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);

  if (!post) {
    return (
      <main className="container">
        <h1>Article introuvable 😕</h1>
        <Link href="/">← Retour à l’accueil</Link>
      </main>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container">
      <Link href="/" className="hover:underline">
        ← Retour aux articles
      </Link>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="illustration"
          width="550"
          height="310"
        />
      )}

      <h1>{post.title}</h1>
      <div className="prose">
        <p>Publié le : {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
