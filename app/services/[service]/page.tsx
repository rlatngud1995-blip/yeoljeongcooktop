import Link from "next/link";
import { notFound } from "next/navigation";
import { nationwideRegions } from "../../data/regions";

/* =====================================
   열정쿡탑 기본 정보
===================================== */

const COMPANY = "열정쿡탑";

const PHONE = "01094134686";
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
      "/IMG_1333.jpeg",

    description:
      "가스배관과 제품 설치에 필요한 주방 상판 구멍 타공 작업을 진행합니다.",
  },

  "cooktop-cutting": {
    title:
      "쿡탑 타공",

    shortTitle:
      "쿡탑타공",

    image:
      "/IMG_1340.jpeg",

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
   메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    service: string;
  }>;
}) {
  const { service } =
    await params;

  const currentService =
    services[
      service as ServiceKey
    ];

  if (!currentService) {
    return {};
  }

  return {
    title:
      `${currentService.title} 전국 출장 | 열정쿡탑`,

    description:
      `전국 ${currentService.title} 전문 열정쿡탑입니다. 제품 교체, 상판 타공 및 설치 상담을 진행합니다.`,

    openGraph: {
      title:
        `${currentService.title} | 열정쿡탑`,

      description:
        `전국 ${currentService.title} 상담. 제품 교체 및 주방 상판 타공 전문.`,

      images: [
        {
          url:
            currentService.image,
        },
      ],
    },
  };
}

/* =====================================
   PAGE
===================================== */

export default async function ServicePage({
  params,
}: {
  params: Promise<{
    service: string;
  }>;
}) {
  const { service } =
    await params;

  const currentService =
    services[
      service as ServiceKey
    ];

  if (!currentService) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        color: "#171717",
      }}
    >
      {/* =====================================
          HEADER
      ====================================== */}

      <header
        style={{
          background: "#111",
          padding: "15px 18px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",

            display: "flex",
            alignItems: "center",
            justifyContent:
              "space-between",

            gap: "15px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "21px",
              fontWeight: 900,
            }}
          >
            🔥 {COMPANY}
          </Link>

          <a
            href={`tel:${PHONE}`}
            style={{
              background:
                "#ff5a1f",

              color: "#fff",

              padding:
                "10px 16px",

              borderRadius:
                "999px",

              textDecoration:
                "none",

              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            ☎ 전화상담
          </a>
        </div>
      </header>

      {/* =====================================
          SERVICE HERO PHOTO
      ====================================== */}

      <section
        style={{
          background: "#111",
          color: "#fff",
          padding:
            "35px 18px 55px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "100%",
              height:
                "clamp(250px,55vw,520px)",

              borderRadius:
                "22px",

              overflow:
                "hidden",

              marginBottom:
                "32px",

              background:
                "#222",
            }}
          >
            <img
              src={
                currentService.image
              }

              alt={`${currentService.title} 열정쿡탑`}

              style={{
                width: "100%",
                height: "100%",

                objectFit:
                  "cover",

                display:
                  "block",
              }}
            />
          </div>

          <div
            style={{
              display:
                "inline-block",

              background:
                "#ff5a1f",

              padding:
                "7px 14px",

              borderRadius:
                "999px",

              fontSize:
                "13px",

              fontWeight:
                900,

              marginBottom:
                "18px",
            }}
          >
            전국 출장 전문
          </div>

          <h1
            style={{
              margin: 0,

              fontSize:
                "clamp(32px,7vw,55px)",

              lineHeight:
                1.15,

              letterSpacing:
                "-2px",

              fontWeight:
                950,
            }}
          >
            {currentService.title}
          </h1>

          <p
            style={{
              maxWidth:
                "750px",

              margin:
                "20px 0 0",

              color:
                "#ddd",

              lineHeight:
                1.85,

              fontSize:
                "16px",
            }}
          >
            {
              currentService.description
            }
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

              padding:
                "15px 22px",

              borderRadius:
                "12px",

              fontWeight:
                900,
            }}
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* =====================================
          SERVICE INFORMATION
      ====================================== */}

      <section
        style={{
          maxWidth:
            "1100px",

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
          }}
        >
          <span
            style={{
              color:
                "#ff5a1f",

              fontWeight:
                900,

              fontSize:
                "13px",
            }}
          >
            YEOLJEONG COOKTOP
          </span>

          <h2
            style={{
              margin:
                "8px 0 15px",

              fontSize:
                "28px",

              letterSpacing:
                "-1px",
            }}
          >
            {currentService.title}
            전문 시공
          </h2>

          <p
            style={{
              margin: 0,

              color:
                "#555",

              fontSize:
                "15px",

              lineHeight:
                1.9,
            }}
          >
            기존 제품의
            모델과 규격,
            주방 상판의
            타공 사이즈를
            확인한 후 현장
            상황에 맞는
            교체 및 설치
            방법을 안내합니다.
          </p>
        </div>
      </section>

      {/* =====================================
          REGIONS
      ====================================== */}

      <section
        style={{
          maxWidth:
            "1180px",

          margin:
            "0 auto",

          padding:
            "35px 18px 120px",
        }}
      >
        <div
          style={{
            marginBottom:
              "30px",
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
            NATIONWIDE
          </span>

          <h2
            style={{
              margin:
                "7px 0 10px",

              fontSize:
                "30px",

              letterSpacing:
                "-1.4px",
            }}
          >
            {currentService.title}
            {" "}
            지역 선택
          </h2>

          <p
            style={{
              margin: 0,

              color:
                "#666",

              lineHeight:
                1.7,
            }}
          >
            시·군·구를 선택하면
            지역별{" "}
            {
              currentService.shortTitle
            }{" "}
            페이지로 이동합니다.
          </p>
        </div>

        <div
          style={{
            display:
              "grid",

            gap:
              "22px",
          }}
        >
          {nationwideRegions.map(
            (region) => (
              <section
                key={
                  region.slug
                }
                style={{
                  background:
                    "#fff",

                  borderRadius:
                    "18px",

                  padding:
                    "23px",

                  border:
                    "1px solid #ececec",

                  boxShadow:
                    "0 6px 25px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display:
                      "flex",

                    justifyContent:
                      "space-between",

                    alignItems:
                      "center",

                    marginBottom:
                      "17px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,

                      fontSize:
                        "21px",

                      fontWeight:
                        900,
                    }}
                  >
                    {
                      region.name
                    }
                  </h3>

                  <span
                    style={{
                      fontSize:
                        "12px",

                      color:
                        "#888",
                    }}
                  >
                    {
                      region
                        .districts
                        .length
                    }
                    개 지역
                  </span>
                </div>

                <div
                  style={{
                    display:
                      "grid",

                    gridTemplateColumns:
                      "repeat(auto-fit,minmax(105px,1fr))",

                    gap:
                      "9px",
                  }}
                >
                  {region.districts.map(
                    (
                      district
                    ) => (
                      <Link
                        key={`${region.slug}-${district}`}

                        href={`/services/${service}/${region.slug}/${encodeURIComponent(
                          district
                        )}`}

                        style={{
                          padding:
                            "12px 8px",

                          background:
                            "#f8f8f8",

                          border:
                            "1px solid #e9e9e9",

                          color:
                            "#222",

                          borderRadius:
                            "10px",

                          textAlign:
                            "center",

                          textDecoration:
                            "none",

                          fontSize:
                            "14px",

                          fontWeight:
                            750,
                        }}
                      >
                        {
                          district
                        }
                      </Link>
                    )
                  )}
                </div>
              </section>
            )
          )}
        </div>
      </section>

      {/* =====================================
          FIXED CALL BUTTON
      ====================================== */}

      <div
        style={{
          position:
            "fixed",

          bottom: 0,
          left: 0,
          right: 0,

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
          ☎ 열정쿡탑{" "}
          {PHONE_DISPLAY}
        </a>
      </div>
    </main>
  );
}
