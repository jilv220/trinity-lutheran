import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient } from "next-sanity";

export const isDevelopment = () => {
  const ctx = getCloudflareContext();
  const appEnv = ctx.env.NEXTJS_ENV
  return appEnv === "development"
}

export const client = createClient({
  projectId: "0952e622",
  dataset: isDevelopment() ? "development" : "production",
  apiVersion: "2024-01-01",
  useCdn: isDevelopment() ? false : true,
});