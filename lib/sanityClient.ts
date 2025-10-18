import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN, // facultatif pour lecture
});

export default client;

