import Link from "next/link";
import { notFound } from "next/navigation";

import {
  nationwideRegions,
} from "../../../../data/regions";

/* =====================================
   열정쿡탑 기본 정보
===================================== */

const COMPANY =
  "열정쿡탑";

const SITE_URL =
  "https://www.yeoljeongcooktop.com";

const PHONE =
  "01094134686";

const PHONE_DISPLAY =
  "010-9413-4686";

/* =====================================
   서비스 정보 + 사진
===================================== */

const services = {
  "built-in-cooktop": {
    title:
      "빌트인 쿡탑 교체",

    shortTitle:
      "빌트인쿡탑교체",

    image:
      "/IMG_1338.jpeg",

    description:
      "기존 빌트인 쿡탑 철거부터 신규 제품 설치까지 현장 규격에 맞춰 작업합니다.",
  },

  "gas-cooktop": {
    title:
      "가스쿡탑 교체",

    shortTitle:
      "가스쿡탑교체",

    image:
      "/IMG_1335.jpeg",

    description:
      "노후되거나 고장난 가스쿡탑을 철거하고 신규 가스쿡탑 설치를 진행합니다.",
  },

  "gas-hole-cutting": {
    title:
      "가스 구멍 타공",

    shortTitle:
      "가스구멍타공",

    image:
      "/IMG_1340.jpeg",

    description:
      "가스배관과 제품 설치에 필요한 주방 상판 구멍 타공 작업을 진행합니다.",
  },

  "cooktop-cutting": {
    title:
      "쿡탑 타공",

    shortTitle:
      "쿡탑타공",

    image:
      "/IMG_1333.jpeg",

    description:
      "신규 쿡탑 규격에 맞지 않는 기존 주방 상판을 확인하여 확장 및 타공 작업을 진행합니다.",
  },

  induction: {
    title:
      "인덕션 교체",

    shortTitle:
      "인덕션교체",

    image:
      "/IMG_1334.jpeg",

    description:
      "기존 쿡탑 철거 후 신규 인덕션 규격을 확인하여 교체 및 설치합니다.",
  },

  cooktop: {
    title:
      "쿡탑 교체",

    shortTitle:
      "쿡탑교체",

    image:
      "/IMG_1337.jpeg",

    description:
      "다양한 브랜드와 규격의 쿡탑을 현장 상황에 맞춰 철거 및 교체합니다.",
  },

  "gas-range": {
    title:
      "가스레인지 교체",

    shortTitle:
      "가스레인지교체",

    image:
      "/IMG_1336.jpeg",

    description:
      "기존 가스레인지 철거 후 신규 가스레인지 설치 및 마감 작업을 진행합니다.",
  },
} as const;

type ServiceKey =
  keyof typeof services;

/* =====================================
   지역 찾기
===================================== */

function getRegionData(
  regionSlug: string,
  districtName: string
) {
  const region =
    nationwideRegions.find(
      (item) =>
        item.slug === regionSlug
    );

  if (!region) {
    return null;
  }

  const district =
    region.districts.find(
      (item) =>
        item === districtName
    );

  if (!district) {
    return null;
  }

  return {
    region,
    district,
  };
}

/* =====================================
   메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    service: string;
    region: string;
    district: string;
  }>;
}) {
  const {
    service,
    region,
    district,
  } = await params;

  const currentService =
    services[
      service as ServiceKey
    ];

  if (!currentService) {
    return {};
  }

  const decodedDistrict =
    decodeURIComponent(district);

  const regionData =
    getRegionData(
      region,
      decodedDistrict
    );

  if (!regionData) {
    return {};
  }

  const fullRegionName =
    `${regionData.region.name} ${regionData.district}`;

  const pageUrl =
    `${SITE_URL}/services/${service}/${region}/${encodeURIComponent(
      decodedDistrict
    )}`;

  return {
    title:
      `${fullRegionName} ${currentService.shortTitle} | 열정쿡탑`,

    description:
      `${fullRegionName} ${currentService.shortTitle} 전문 열정쿡탑입니다. 제품 교체, 설치, 주방 상판 타공 및 규격 변경 상담을 진행합니다.`,

    alternates: {
      canonical:
        pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",

      url:
        pageUrl,

      title:
        `${fullRegionName} ${currentService.shortTitle} | 열정쿡탑`,

      description:
        `${fullRegionName} ${currentService.title} 상담. 쿡탑 교체와 주방 상판 타공을 전문으로 진행합니다.`,

      images: [
        {
          url:
            currentService.image,

          alt:
            `${fullRegionName} ${currentService.shortTitle} 열정쿡탑`,
        },
      ],
    },
  };
}

/* =====================================
   지역 상세 페이지
===================================== */

export default async function DistrictPage({
  params,
}: {
  params: Promise<{
    service: string;
    region: string;
    district: string;
  }>;
}) {
  const {
    service,
    region,
    district,
  } = await params;

  const currentService =
    services[
      service as ServiceKey
    ];

  if (!currentService) {
    notFound();
  }

  const decodedDistrict =
    decodeURIComponent(
      district
    );

  const regionData =
    getRegionData(
      region,
      decodedDistrict
    );

  if (!regionData) {
    notFound();
  }

  const regionName =
    regionData.region.name;

  const districtName =
    regionData.district;

  const fullRegionName =
    `${regionName} ${districtName}`;

  return (
    <main
      style={{
        minHeight:
          "100vh",

        background:
          "#f7f7f7",

        color:
          "#171717",
      }}
    >
      {/* =====================================
          HEADER
      ====================================== */}

      <header
        style={{
          position:
            "sticky",

          top: 0,

          zIndex:
            100,

          background:
            "#111",

          padding:
            "15px 18px",
        }}
      >
        <div
          style={{
            maxWidth:
              "1100px",

            margin:
              "0 auto",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "space-between",

            gap:
              "15px",
          }}
        >
          <Link
            href="/"
            style={{
              color:
                "#fff",

              textDecoration:
                "none",

              fontSize:
                "20px",

              fontWeight:
                900,
            }}
          >
            🔥 {COMPANY}
          </Link>

          <a
            href={`tel:${PHONE}`}
            style={{
              background:
                "#ff5a1f",

              color:
                "#fff",

              padding:
                "10px 15px",

              borderRadius:
                "999px",

              textDecoration:
                "none",

              fontWeight:
                900,

              fontSize:
                "13px",
            }}
          >
            ☎ 전화상담
          </a>
        </div>
      </header>

      {/* =====================================
          지역 + 서비스 대표사진
      ====================================== */}

      <section
        style={{
          background:
            "#111",

          color:
            "#fff",

          padding:
            "35px 18px 55px",
        }}
      >
        <div
          style={{
            width:
              "100%",

            maxWidth:
              "1080px",

            margin:
              "0 auto",
          }}
        >
          {/* 사진 */}

          <div
            style={{
              width:
                "100%",

              height:
                "clamp(250px,55vw,520px)",

              borderRadius:
                "22px",

              overflow:
                "hidden",

              background:
                "#222",

              marginBottom:
                "30px",

              boxShadow:
                "0 20px 50px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={
                currentService.image
              }

              alt={`${fullRegionName} ${currentService.shortTitle}`}

              style={{
                width:
                  "100%",

                height:
                  "100%",

                objectFit:
                  "cover",

                display:
                  "block",
              }}
            />
          </div>

          {/* 지역 배지 */}

          <span
            style={{
              display:
                "inline-block",

              background:
                "#ff5a1f",

              borderRadius:
                "999px",

              padding:
                "7px 14px",

              fontWeight:
                900,

              fontSize:
                "13px",

              marginBottom:
                "18px",
            }}
          >
            {fullRegionName} 출장 상담
          </span>

          {/* 제목 */}

          <h1
            style={{
              margin:
                0,

              fontSize:
                "clamp(33px,7vw,55px)",

              lineHeight:
                1.15,

              letterSpacing:
                "-2px",

              fontWeight:
                950,
            }}
          >
            {districtName}
            <br />

            <strong
              style={{
                color:
                  "#ff5a1f",
              }}
            >
              {
                currentService.shortTitle
              }
            </strong>
          </h1>

          <p
            style={{
              maxWidth:
                "760px",

              margin:
                "22px 0 0",

              color:
                "#ddd",

              fontSize:
                "16px",

              lineHeight:
                1.85,
            }}
          >
            {fullRegionName} 지역의{" "}
            {currentService.title} 상담을
            진행합니다. 기존 제품 규격과
            주방 상판 타공 사이즈를
            확인하여 현장에 맞는 작업을
            안내합니다.
          </p>

          <a
            href={`tel:${PHONE}`}
            style={{
              display:
                "inline-block",

              marginTop:
                "25px",

              background:
                "#ff5a1f",

              color:
                "#fff",

              textDecoration:
                "none",

              borderRadius:
                "12px",

              padding:
                "15px 22px",

              fontWeight:
                900,

              fontSize:
                "16px",
            }}
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* =====================================
          서비스 설명
      ====================================== */}

      <section
        style={{
          maxWidth:
            "1050px",

          margin:
            "0 auto",

          padding:
            "50px 18px 20px",
        }}
      >
        <div
          style={{
            background:
              "#fff",

            borderRadius:
              "20px",

            padding:
              "28px",

            border:
              "1px solid #ececec",

            boxShadow:
              "0 8px 30px rgba(0,0,0,0.035)",
          }}
        >
          <span
            style={{
              color:
                "#ff5a1f",

              fontSize:
                "13px",

              fontWeight:
                900,
            }}
          >
            SERVICE
          </span>

          <h2
            style={{
              margin:
                "8px 0 15px",

              fontSize:
                "27px",

              letterSpacing:
                "-1px",
            }}
          >
            {fullRegionName}{" "}
            {currentService.title}
          </h2>

          <p
            style={{
              color:
                "#555",

              lineHeight:
                1.9,

              margin:
                0,

              fontSize:
                "16px",
            }}
          >
            {
              currentService.description
            }
            {" "}

            {districtName} 지역에서 기존
            제품과 신규 제품의 규격이
            다를 경우 상판 상태와 타공
            크기를 확인한 뒤 확장 또는
            추가 타공이 필요한지
            안내합니다.
          </p>
        </div>
      </section>

      {/* =====================================
          상담 준비사항
      ====================================== */}

      <section
        style={{
          maxWidth:
            "1050px",

          margin:
            "0 auto",

          padding:
            "5px 18px 20px",
        }}
      >
        <div
          style={{
            background:
              "#fff",

            borderRadius:
              "20px",

            padding:
              "28px",

            border:
              "1px solid #ececec",
          }}
        >
          <h2
            style={{
              margin:
                "0 0 20px",

              fontSize:
                "25px",

              letterSpacing:
                "-1px",
            }}
          >
            상담 전 준비해주세요
          </h2>

          <div
            style={{
              display:
                "grid",

              gap:
                "11px",
            }}
          >
            {[
              "현재 설치된 쿡탑 전체 사진",
              "기존 제품 모델명 또는 제품명",
              "새로 설치할 제품 모델명",
              "기존 상판 타공 사이즈",
              "설치 지역 및 현장 주소",
            ].map(
              (
                item,
                index
              ) => (
                <div
                  key={
                    item
                  }
                  style={{
                    display:
                      "flex",

                    alignItems:
                      "center",

                    gap:
                      "12px",

                    background:
                      "#f7f7f7",

                    borderRadius:
                      "12px",

                    padding:
                      "15px",
                  }}
                >
                  <strong
                    style={{
                      minWidth:
                        "28px",

                      color:
                        "#ff5a1f",
                    }}
                  >
                    {index + 1}
                  </strong>

                  <span
                    style={{
                      fontWeight:
                        700,

                      lineHeight:
                        1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          다른 서비스
      ====================================== */}

      <section
        style={{
          maxWidth:
            "1050px",

          margin:
            "0 auto",

          padding:
            "5px 18px 120px",
        }}
      >
        <div
          style={{
            background:
              "#fff",

            borderRadius:
              "20px",

            padding:
              "28px",

            border:
              "1px solid #ececec",
          }}
        >
          <h2
            style={{
              margin:
                "0 0 20px",

              fontSize:
                "25px",

              letterSpacing:
                "-1px",
            }}
          >
            {districtName} 다른 쿡탑 서비스
          </h2>

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(150px,1fr))",

              gap:
                "12px",
            }}
          >
            {Object.entries(
              services
            ).map(
              (
                [
                  slug,
                  item,
                ]
              ) => (
                <Link
                  key={
                    slug
                  }

                  href={`/services/${slug}/${region}/${encodeURIComponent(
                    districtName
                  )}`}

                  style={{
                    overflow:
                      "hidden",

                    borderRadius:
                      "14px",

                    textDecoration:
                      "none",

                    color:
                      "#222",

                    background:
                      slug === service
                        ? "#fff2ec"
                        : "#f7f7f7",

                    border:
                      slug === service
                        ? "1px solid #ffb89d"
                        : "1px solid #ededed",
                  }}
                >
                  <div
                    style={{
                      width:
                        "100%",

                      height:
                        "120px",

                      overflow:
                        "hidden",
                    }}
                  >
                    <img
                      src={
                        item.image
                      }

                      alt={
                        item.title
                      }

                      style={{
                        width:
                          "100%",

                        height:
                          "100%",

                        objectFit:
                          "cover",

                        display:
                          "block",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding:
                        "14px 10px",

                      textAlign:
                        "center",

                      fontSize:
                        "14px",

                      fontWeight:
                        800,
                    }}
                  >
                    {
                      item.title
                    }
                  </div>
                </Link>
              )
            )}
          </div>

          <div
            style={{
              marginTop:
                "25px",
            }}
          >
            <Link
              href={`/services/${service}`}
              style={{
                color:
                  "#555",

                textDecoration:
                  "none",

                fontWeight:
                  800,
              }}
            >
              ← 전국{" "}
              {
                currentService.title
              }{" "}
              지역 보기
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          하단 고정 상담
      ====================================== */}

      <div
        style={{
          position:
            "fixed",

          bottom:
            0,

          left:
            0,

          right:
            0,

          zIndex:
            999,

          background:
            "#111",

          padding:
            "11px 14px calc(11px + env(safe-area-inset-bottom))",
        }}
      >
        <a
          href={`tel:${PHONE}`}
          style={{
            display:
              "block",

            maxWidth:
              "700px",

            margin:
              "0 auto",

            padding:
              "14px",

            background:
              "#ff5a1f",

            color:
              "#fff",

            textDecoration:
              "none",

            textAlign:
              "center",

            borderRadius:
              "12px",

            fontWeight:
              900,
          }}
        >
          ☎ {districtName}{" "}
          {currentService.shortTitle} 상담
        </a>
      </div>
    </main>
  );
}
