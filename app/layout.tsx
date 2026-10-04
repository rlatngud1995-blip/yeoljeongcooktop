import type { Metadata } from "next";
import "./globals.css";

/* =====================================
   열정쿡탑 기본 정보
===================================== */

const SITE_URL =
  "https://www.yeoljeongcooktop.com";

const SITE_NAME = "열정쿡탑";

const PHONE = "010-9413-4686";

/* =====================================
   메인 검색 제목 / 설명
===================================== */

const SITE_TITLE =
  "열정쿡탑 | 전국 쿡탑교체·쿡탑타공·인덕션교체 전문";

const SITE_DESCRIPTION =
  "열정쿡탑은 전국 쿡탑교체 전문업체입니다. 빌트인쿡탑, 가스쿡탑, 인덕션, 가스레인지 교체와 주방 상판 타공을 상담합니다.";

/* =====================================
   사이트 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | 열정쿡탑",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  /* =====================================
     대표 주소
  ===================================== */

  alternates: {
    canonical: SITE_URL,
  },

  /* =====================================
     검색 키워드
  ===================================== */

  keywords: [
    "열정쿡탑",
    "쿡탑교체",
    "쿡탑타공",
    "빌트인쿡탑교체",
    "가스쿡탑교체",
    "가스구멍타공",
    "인덕션교체",
    "인덕션타공",
    "가스레인지교체",
    "주방상판타공",
  ],

  /* =====================================
     사이트 정보
  ===================================== */

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  /* =====================================
     검색엔진 수집 허용
  ===================================== */

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  /* =====================================
     OPEN GRAPH
  ===================================== */

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title:
      "열정쿡탑 | 전국 쿡탑교체·쿡탑타공 전문",

    description:
      "전국 빌트인쿡탑, 가스쿡탑, 인덕션, 가스레인지 교체 및 주방 상판 타공 전문 열정쿡탑입니다.",
  },

  /* =====================================
     SNS
  ===================================== */

  twitter: {
    card: "summary",

    title:
      "열정쿡탑 | 전국 쿡탑교체·쿡탑타공 전문",

    description:
      "전국 쿡탑·인덕션·가스레인지 교체와 주방 상판 타공 상담.",
  },

  /* =====================================
     네이버 서치어드바이저 소유확인
  ===================================== */

  other: {
    "naver-site-verification":
      "b030641217f030cd4eac5a1c5e8a27f0ea42b3cf",
  },
};

/* =====================================
   ROOT LAYOUT
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* =====================================
     업체 구조화 데이터
  ===================================== */

  const businessJsonLd = {
    "@context": "https://schema.org",

    "@type": "HomeAndConstructionBusiness",

    "@id": `${SITE_URL}/#business`,

    name: SITE_NAME,

    url: SITE_URL,

    telephone: PHONE,

    description: SITE_DESCRIPTION,

    areaServed: {
      "@type": "Country",
      name: "대한민국",
    },

    serviceType: [
      "빌트인 쿡탑 교체",
      "가스쿡탑 교체",
      "가스 구멍 타공",
      "쿡탑 타공",
      "인덕션 교체",
      "쿡탑 교체",
      "가스레인지 교체",
    ],
  };

  /* =====================================
     웹사이트 구조화 데이터
  ===================================== */

  const websiteJsonLd = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    name: SITE_NAME,

    url: SITE_URL,

    description: SITE_DESCRIPTION,

    inLanguage: "ko-KR",

    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };

  return (
    <html lang="ko">
      <head>
        {/* =====================================
            모바일 화면
        ====================================== */}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta
          name="theme-color"
          content="#111111"
        />

        {/* =====================================
            구조화 데이터 - 업체
        ====================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              businessJsonLd
            ),
          }}
        />

        {/* =====================================
            구조화 데이터 - 웹사이트
        ====================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteJsonLd
            ),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
