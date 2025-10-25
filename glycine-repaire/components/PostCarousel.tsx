// components/PostCarousel.tsx
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import Link from "next/link";

// Define the props type for PostCarousel
type PostCarouselProps = {
  posts: SanityDocument[]; // Assuming SanityDocument is the correct type for your posts
};

const { projectId, dataset } = client.config();
const urlFor = (source: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default function PostCarousel({ posts }: PostCarouselProps) {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {posts.map((post) => {
          const postImageUrl = post.image
            ? urlFor(post.image)?.width(550).height(310).url()
            : null;

          return (
            <div className="carousel-item" key={post._id}>
              {postImageUrl && (
                <img
                  src={postImageUrl}
                  alt={post.title}
                  className="carousel-image"
                  width="550"
                  height="310"
                />
              )}
              <h3>{post.title}</h3>
              <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
              <p>Author: {post.author?.name}</p>
              <Link href={`/${post.slug.current}`} className="carousel-link">
                Read more
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
