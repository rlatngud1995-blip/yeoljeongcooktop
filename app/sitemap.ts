import type {
  MetadataRoute,
} from "next";

import {
  nationwideRegions,
} from "./data/regions";

/* =====================================
   열정쿡탑 사이트 주소
===================================== */

const SITE_URL =
  "https://www.yeoljeongcooktop.com";

/* =====================================
   서비스 카테고리
===================================== */

const services = [
  "built-in-cooktop",
  "gas-cooktop",
  "gas-hole-cutting",
  "cooktop-cutting",
  "induction",
  "cooktop",
  "gas-range",
];

/* =====================================
   사이트맵 생성
===================================== */

export default function sitemap():
  MetadataRoute.Sitemap {
  const urls:
    MetadataRoute.Sitemap = [];

  /* =====================================
     메인 홈페이지
  ===================================== */

  urls.push({
    url: SITE_URL,

    lastModified: new Date(),

    changeFrequency: "weekly",

    priority: 1,
  });

  /* =====================================
     서비스 카테고리 페이지
  ===================================== */

  services.forEach(
    (service) => {
      urls.push({
        url:
          `${SITE_URL}/services/${service}`,

        lastModified:
          new Date(),

        changeFrequency:
          "weekly",

        priority: 0.9,
      });
    }
  );

  /* =====================================
     전국 서비스 × 시군구 페이지

     예:
     /services/cooktop/seoul/강남구
     /services/induction/chungnam/천안시
  ===================================== */

  services.forEach(
    (service) => {
      nationwideRegions.forEach(
        (region) => {
          region.districts.forEach(
            (district) => {
              urls.push({
                url:
                  `${SITE_URL}/services/${service}/${region.slug}/${encodeURIComponent(
                    district
                  )}`,

                lastModified:
                  new Date(),

                changeFrequency:
                  "weekly",

                priority: 0.8,
              });
            }
          );
        }
      );
    }
  );

  return urls;
}
