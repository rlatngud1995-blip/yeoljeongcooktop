import type {
  MetadataRoute,
} from "next";

/* =====================================
   열정쿡탑 robots.txt
===================================== */

const SITE_URL =
  "https://www.yeoljeongcooktop.com";

export default function robots():
  MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap:
      `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}
