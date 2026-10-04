import Link from "next/link";
import { notFound } from "next/navigation";
import { nationwideRegions } from "../../../../data/regions";

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
    description:
      "기존 빌트인 쿡탑 철거부터 신규 제품 설치까지 현장 규격에 맞춰 작업합니다.",
  },

  "gas-cooktop": {
    title: "가스쿡탑 교체",
    shortTitle: "가스쿡탑교체",
    description:
      "노후되거나 고장난 가스쿡탑 철거 및 신규 제품 교체 작업을 진행합니다.",
  },

  "gas-hole-cutting": {
    title: "가스 구멍 타공",
    shortTitle: "가스구멍타공",
    description:
      "가스배관 및 가스 제품 설치를 위한 주방 상판 구멍 타공 작업을 진행합니다.",
  },

  "cooktop-cutting": {
    title: "쿡탑 타공",
    shortTitle: "쿡탑타공",
    description:
      "기존 상판 타공 사이즈가 맞지 않을 경우 신규 제품 규격에 맞춰 확장 및 타공 작업을 진행합니다.",
  },

  induction: {
    title: "인덕션 교체",
    shortTitle: "인덕션교체",
    description:
      "기존 쿡탑이나 인덕션 철거 후 신규 인덕션의 규격을 확인하여 교체합니다.",
  },

  cooktop: {
    title: "쿡탑 교체",
    shortTitle: "쿡탑교체",
    description:
      "다양한 브랜드와 규격의 쿡탑을 현장 상황에 맞춰 철거 및 교체합니다.",
  },

  "gas-range": {
    title: "가스레인지 교체",
    shortTitle: "가스레인지교체",
    description:
      "기존 가스레인지 철거 후 신규 가스레인지 설치와 마감 작업을 진행합니다.",
  },
} as const;

type ServiceKey = keyof typeof services;

/* =====================================
   지역 찾기
===================================== */

function getRegionData(
  regionSlug: string,
  districtName: string
) {
  const region = nationwideRegions.find(
    (item) => item.slug === regionSlug
  );

  if (!region) {
    return null;
  }

  const district = region.districts.find(
    (item) => item === districtName
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
  const { service, region, district } =
    await params;

  const currentService =
    services[service as ServiceKey];

  if (!currentService) {
    return {};
  }

  const decodedDistrict =
    decodeURIComponent(district);

  const regionData = getRegionData(
    region,
    decodedDistrict
  );

  if (!regionData) {
    return {};
  }

  const fullRegionName =
    `${regionData.region.name} ${regionData.district}`;

  return {
    title:
      `${fullRegionName} ${currentService.shortTitle} | 열정쿡탑`,

    description:
      `${fullRegionName} ${currentService.shortTitle} 전문 열정쿡탑입니다. ${currentService.title}, 쿡탑 설치, 타공, 교체 상담이 가능합니다. 전화 ${PHONE_DISPLAY}.`,

    keywords: [
      `${fullRegionName} ${currentService.shortTitle}`,
      `${regionData.district} ${currentService.shortTitle}`,
      `${regionData.region.name} ${currentService.shortTitle}`,
      `${regionData.district} 쿡탑교체`,
      `${regionData.district} 쿡탑타공`,
      `${regionData.district} 인덕션교체`,
      `${regionData.district} 가스쿡탑교체`,
      "열정쿡탑",
    ],

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =====================================
   페이지
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
  const { service, region, district } =
    await params;

  const currentService =
    services[service as ServiceKey];

  if (!currentService) {
    notFound();
  }

  const decodedDistrict =
    decodeURIComponent(district);

  const regionData = getRegionData(
    region,
    decodedDistrict
  );

  if (!regionData) {
    notFound();
  }

  const regionName = regionData.region.name;
  const districtName = regionData.district;

  const fullRegionName =
    `${regionName} ${districtName}`;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        color: "#171717",
      }}
    >
      {/* =====================================
          헤더
      ====================================== */}

      <header
        style={{
          background: "#111",
          padding: "15px 18px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
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
              fontSize: "20px",
            }}
          >
            🔥 {COMPANY}
          </Link>

          <a
            href={`tel:${PHONE}`}
            style={{
              background: "#ff5a1f",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: "13px",
            }}
          >
            ☎ 전화상담
          </a>
        </div>
      </header>

      {/* =====================================
          지역 히어로
      ====================================== */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#141414,#292929)",
          color: "#fff",
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#ff5a1f",
              borderRadius: "999px",
              padding: "7px 13px",
              fontWeight: 900,
              fontSize: "13px",
              marginBottom: "18px",
            }}
          >
            {fullRegionName} 출장 상담
          </span>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px,7vw,52px)",
              lineHeight: 1.2,
              letterSpacing: "-2px",
              fontWeight: 950,
            }}
          >
            {districtName}
            <br />
            <strong>
              {currentService.shortTitle}
            </strong>
          </h1>

          <p
            style={{
              maxWidth: "720px",
              marginTop: "22px",
              fontSize: "17px",
              lineHeight: 1.85,
              color: "#ddd",
            }}
          >
            {fullRegionName} 지역의{" "}
            {currentService.title} 상담을 진행합니다.
            기존 제품의 규격과 주방 상판 타공
            사이즈를 확인하여 현장 상황에 맞는
            작업을 안내합니다.
          </p>

          <a
            href={`tel:${PHONE}`}
            style={{
              display: "inline-block",
              marginTop: "25px",
              background: "#ff5a1f",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "12px",
              padding: "15px 22px",
              fontWeight: 900,
              fontSize: "16px",
            }}
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* =====================================
          내용
      ====================================== */}

      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "50px 18px 120px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "28px",
            border: "1px solid #ececec",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 900,
              color: "#ff5a1f",
            }}
          >
            SERVICE
          </span>

          <h2
            style={{
              margin: "8px 0 15px",
              fontSize: "27px",
              letterSpacing: "-1px",
            }}
          >
            {fullRegionName}{" "}
            {currentService.title}
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: 1.9,
              margin: 0,
              fontSize: "16px",
            }}
          >
            {currentService.description}
            {" "}
            {districtName} 지역에서 기존 제품과
            신규 제품의 규격이 다를 경우 상판 상태를
            확인한 뒤 타공 또는 확장 작업이 필요한지
            상담해드립니다.
          </p>
        </div>

        {/* =====================================
            상담 시 확인사항
        ====================================== */}

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "28px",
            border: "1px solid #ececec",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              margin: "0 0 20px",
              fontSize: "25px",
            }}
          >
            상담 전 준비해주세요
          </h2>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {[
              "현재 설치된 쿡탑 전체 사진",
              "기존 제품 모델명 또는 제품명",
              "새로 설치할 제품 모델명",
              "기존 상판 타공 사이즈",
              "설치 지역 및 현장 주소",
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#f7f7f7",
                  borderRadius: "12px",
                  padding: "15px",
                }}
              >
                <strong
                  style={{
                    minWidth: "30px",
                    color: "#ff5a1f",
                  }}
                >
                  {index + 1}
                </strong>

                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            주요 작업
        ====================================== */}

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "28px",
            border: "1px solid #ececec",
          }}
        >
          <h2
            style={{
              margin: "0 0 20px",
              fontSize: "25px",
            }}
          >
            열정쿡탑 주요 작업
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(170px,1fr))",
              gap: "12px",
            }}
          >
            {Object.entries(services).map(
              ([slug, item]) => (
                <Link
                  key={slug}
                  href={`/services/${slug}/${region}/${encodeURIComponent(
                    districtName
                  )}`}
                  style={{
                    padding: "16px",
                    background:
                      slug === service
                        ? "#fff1eb"
                        : "#f7f7f7",
                    border:
                      slug === service
                        ? "1px solid #ffb699"
                        : "1px solid #ededed",
                    borderRadius: "12px",
                    textDecoration: "none",
                    color: "#222",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>

        {/* =====================================
            뒤로가기
        ====================================== */}

        <div
          style={{
            marginTop: "25px",
          }}
        >
          <Link
            href={`/services/${service}`}
            style={{
              color: "#555",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            ← 전국 {currentService.title} 지역 보기
          </Link>
        </div>
      </section>

      {/* =====================================
          모바일 하단 상담
      ====================================== */}

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          background: "#111",
          padding:
            "12px 14px calc(12px + env(safe-area-inset-bottom))",
        }}
      >
        <a
          href={`tel:${PHONE}`}
          style={{
            display: "block",
            maxWidth: "700px",
            margin: "0 auto",
            background: "#ff5a1f",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          ☎ {districtName} {currentService.shortTitle} 상담
        </a>
      </div>
    </main>
  );
}
