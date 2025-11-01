// app/categories/[slug]/page.tsx
import React from "react";
import PostCarousel from "../../../components/PostCarousel";
import "../../postcarousel.css";

import { client } from "../../../sanity/client";

const POSTS_QUERY = `
  *[_type == "post" && $slug in tags[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    image
  }
`;

const options = { next: { revalidate: 1 } };

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>; // note le Promise ici 
}) {
  const { slug } = await params;
  const posts = await client.fetch(POSTS_QUERY, { slug }, options);

  if (!posts || posts.length === 0) {
    return <p>Aucun article trouvé dans la catégorie {slug}.</p>;
  }

  return (
    <main>
      <h1>Catégorie : {slug}</h1>
      <p>Découvrez tous les articles liés à ce thème.</p>
      <PostCarousel posts={posts} />
    </main>
  );
}
