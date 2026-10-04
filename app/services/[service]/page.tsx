import Link from "next/link";
import { notFound } from "next/navigation";
import { nationwideRegions } from "../../data/regions";

/* =====================================
   열정쿡탑 기본 정보
===================================== */

const COMPANY = "열정쿡탑";

const PHONE = "01094134686";
const PHONE_DISPLAY = "010-9413-4686";

/* =====================================
   서비스 정보
===================================== */

const services = {
  "built-in-cooktop": {
    title: "빌트인 쿡탑 교체",
    shortTitle: "빌트인쿡탑교체",
    icon: "🔥",
    description:
      "기존 빌트인 쿡탑 철거부터 신규 제품 설치까지 현장 규격에 맞춰 작업합니다.",
  },

  "gas-cooktop": {
    title: "가스쿡탑 교체",
    shortTitle: "가스쿡탑교체",
    icon: "🍳",
    description:
      "노후되거나 고장난 가스쿡탑을 철거하고 신규 가스쿡탑 설치를 진행합니다.",
  },

  "gas-hole-cutting": {
    title: "가스 구멍 타공",
    shortTitle: "가스구멍타공",
    icon: "🛠️",
    description:
      "가스배관과 제품 설치에 필요한 주방 상판 구멍 타공 작업을 진행합니다.",
  },

  "cooktop-cutting": {
    title: "쿡탑 타공",
    shortTitle: "쿡탑타공",
    icon: "📐",
    description:
      "기존 쿡탑 타공 사이즈가 맞지 않을 경우 신규 제품 규격에 맞춰 상판 타공 및 확장 작업을 진행합니다.",
  },

  induction: {
    title: "인덕션 교체",
    shortTitle: "인덕션교체",
    icon: "⚡",
    description:
      "기존 쿡탑 및 인덕션 철거 후 신규 인덕션의 규격을 확인하여 교체합니다.",
  },

  cooktop: {
    title: "쿡탑 교체",
    shortTitle: "쿡탑교체",
    icon: "🔧",
    description:
      "다양한 브랜드와 규격의 쿡탑을 현장 상황에 맞춰 철거 및 교체합니다.",
  },

  "gas-range": {
    title: "가스레인지 교체",
    shortTitle: "가스레인지교체",
    icon: "♨️",
    description:
      "기존 가스레인지 철거 후 신규 가스레인지 설치 및 마감 작업을 진행합니다.",
  },
} as const;

type ServiceKey = keyof typeof services;

/* =====================================
   메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  const currentService =
    services[service as ServiceKey];

  if (!currentService) {
    return {};
  }

  return {
    title: `${currentService.title} 전국 출장 | 열정쿡탑`,
    description: `열정쿡탑 ${currentService.title} 전문. 서울, 경기, 인천, 부산, 대구, 대전, 광주, 울산, 세종, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주 전국 상담.`,
  };
}

/* =====================================
   페이지
===================================== */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  const currentService =
    services[service as ServiceKey];

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
          상단
      ====================================== */}

      <header
        style={{
          background: "#111",
          padding: "16px 20px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1180px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: "21px",
            }}
          >
            🔥 열정쿡탑
          </Link>

          <a
            href={`tel:${PHONE}`}
            style={{
              background: "#ff5a1f",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "999px",
              padding: "10px 16px",
              fontWeight: 800,
              fontSize: "14px",
            }}
          >
            ☎ 전화상담
          </a>
        </div>
      </header>

      {/* =====================================
          서비스 메인
      ====================================== */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#141414,#2c2c2c)",
          color: "#fff",
          padding: "65px 20px 60px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              background: "#ff5a1f",
              padding: "7px 14px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "13px",
              marginBottom: "17px",
            }}
          >
            전국 출장 서비스
          </div>

          <div
            style={{
              fontSize: "42px",
              marginBottom: "12px",
            }}
          >
            {currentService.icon}
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px,7vw,54px)",
              lineHeight: 1.15,
              fontWeight: 950,
              letterSpacing: "-2px",
            }}
          >
            {currentService.title}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              marginTop: "20px",
              marginBottom: "0",
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#ddd",
            }}
          >
            {currentService.description}
          </p>

          <a
            href={`tel:${PHONE}`}
            style={{
              display: "inline-block",
              marginTop: "28px",
              padding: "15px 22px",
              background: "#ff5a1f",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "12px",
              fontWeight: 900,
            }}
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* =====================================
          전국 지역
      ====================================== */}

      <section
        style={{
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "55px 18px 120px",
        }}
      >
        <div
          style={{
            marginBottom: "35px",
          }}
        >
          <span
            style={{
              color: "#ff5a1f",
              fontSize: "13px",
              fontWeight: 900,
            }}
          >
            NATIONWIDE
          </span>

          <h2
            style={{
              margin: "7px 0 10px",
              fontSize: "30px",
              letterSpacing: "-1.5px",
            }}
          >
            {currentService.title} 지역 선택
          </h2>

          <p
            style={{
              margin: 0,
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            원하는 시·군·구를 선택하면 지역별{" "}
            {currentService.shortTitle} 페이지로 이동합니다.
          </p>
        </div>

        {/* =====================================
            시도별 지역 표시
        ====================================== */}

        <div
          style={{
            display: "grid",
            gap: "22px",
          }}
        >
          {nationwideRegions.map((region) => (
            <section
              key={region.slug}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "23px",
                border: "1px solid #ececec",
                boxShadow:
                  "0 6px 25px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  marginBottom: "17px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "21px",
                    fontWeight: 900,
                  }}
                >
                  {region.name}
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#888",
                  }}
                >
                  {region.districts.length}개 지역
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(105px,1fr))",
                  gap: "9px",
                }}
              >
                {region.districts.map(
                  (district) => (
                    <Link
                      key={`${region.slug}-${district}`}
                      href={`/services/${service}/${region.slug}/${encodeURIComponent(
                        district
                      )}`}
                      style={{
                        padding: "12px 8px",
                        background: "#f8f8f8",
                        border:
                          "1px solid #e9e9e9",
                        color: "#222",
                        borderRadius: "10px",
                        textAlign: "center",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 750,
                      }}
                    >
                      {district}
                    </Link>
                  )
                )}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* =====================================
          하단 고정 상담
      ====================================== */}

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#111",
          padding:
            "12px 15px calc(12px + env(safe-area-inset-bottom))",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <a
            href={`tel:${PHONE}`}
            style={{
              display: "block",
              background: "#ff5a1f",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: "12px",
              padding: "14px",
              fontWeight: 900,
            }}
          >
            ☎ 열정쿡탑 {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  );
}
