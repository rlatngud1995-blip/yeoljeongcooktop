import type { MetadataRoute } from "next";
import { nationwideRegions } from "./data/regions";

const SITE_URL = "https://www.yeoljeongcooktop.com";

const services = [
  "built-in-cooktop",
  "gas-cooktop",
  "gas-hole-cutting",
  "cooktop-cutting",
  "induction",
  "cooktop",
  "gas-range",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  /* =====================================
     서비스 메인 페이지
  ===================================== */

  services.forEach((service) => {
    urls.push({
      url: `${SITE_URL}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  /* =====================================
     전국 서비스 × 시군구 페이지
  ===================================== */

  services.forEach((service) => {
    nationwideRegions.forEach((region) => {
      region.districts.forEach((district) => {
        urls.push({
          url: `${SITE_URL}/services/${service}/${region.slug}/${encodeURIComponent(
            district
          )}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        });
      });
    });
  });

  return urls;
}
