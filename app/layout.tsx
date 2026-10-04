import type { Metadata } from "next";
import "./globals.css";

/* =====================================
   열정쿡탑 기본 정보
===================================== */

const SITE_URL = "https://www.yeoljeongcooktop.com";

const SITE_NAME = "열정쿡탑";

const SITE_TITLE =
  "열정쿡탑 | 전국 쿡탑·인덕션·가스레인지 교체 및 타공 전문";

const SITE_DESCRIPTION =
  "열정쿡탑은 전국 쿡탑 전문 시공업체입니다. 빌트인쿡탑교체, 가스쿡탑교체, 가스구멍타공, 쿡탑타공, 인덕션교체, 쿡탑교체, 가스레인지교체 상담을 진행합니다.";

/* =====================================
   메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | 열정쿡탑",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "열정쿡탑",
    "쿡탑교체",
    "쿡탑타공",
    "빌트인쿡탑교체",
    "가스쿡탑교체",
    "가스구멍타공",
    "인덕션교체",
    "가스레인지교체",
    "전국쿡탑교체",
    "전국쿡탑타공",
    "빌트인가스레인지교체",
    "주방상판타공",
    "인덕션타공",
  ],

  authors: [
    {
      name: SITE_NAME,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,
  },

  other: {
    "naver-site-verification": "",
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
  return (
    <html lang="ko">
      <head>
        {/* =====================================
            기본 모바일 설정
        ====================================== */}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />

        {/* =====================================
            검색엔진
        ====================================== */}

        <meta
          name="robots"
          content="index, follow"
        />

        {/* =====================================
            사이트 테마
        ====================================== */}

        <meta
          name="theme-color"
          content="#111111"
        />

        {/* =====================================
            구조화 데이터
        ====================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",

              name: SITE_NAME,

              url: SITE_URL,

              telephone: "010-9413-4686",

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
            }),
          }}
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
