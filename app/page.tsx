"use client";

import Link from "next/link";
import { useState } from "react";

/* =====================================
   열정쿡탑 기본 정보
===================================== */

const COMPANY = "열정쿡탑";

const PHONE = "01094134686";
const PHONE_DISPLAY = "010-9413-4686";

/* =====================================
   서비스 카테고리
===================================== */

const services = [
  {
    slug: "built-in-cooktop",
    title: "빌트인 쿡탑 교체",
    desc: "노후되거나 고장난 빌트인 쿡탑을 현장 규격에 맞춰 교체합니다.",
    icon: "🔥",
  },
  {
    slug: "gas-cooktop",
    title: "가스쿡탑 교체",
    desc: "기존 가스쿡탑 철거부터 새 제품 설치까지 깔끔하게 진행합니다.",
    icon: "🍳",
  },
  {
    slug: "gas-hole-cutting",
    title: "가스 구멍 타공",
    desc: "가스배관 및 제품 설치에 필요한 상판 구멍 타공 작업을 진행합니다.",
    icon: "🛠️",
  },
  {
    slug: "cooktop-cutting",
    title: "쿡탑 타공",
    desc: "인조대리석 및 주방 상판의 쿡탑 규격 변경과 확장 타공을 진행합니다.",
    icon: "📐",
  },
  {
    slug: "induction",
    title: "인덕션 교체",
    desc: "기존 쿡탑 철거 후 인덕션 설치 및 규격 확인을 진행합니다.",
    icon: "⚡",
  },
  {
    slug: "cooktop",
    title: "쿡탑 교체",
    desc: "다양한 브랜드와 규격의 쿡탑을 현장 상황에 맞춰 교체합니다.",
    icon: "🔧",
  },
  {
    slug: "gas-range",
    title: "가스레인지 교체",
    desc: "빌트인 및 일반 가스레인지 철거·교체 작업을 진행합니다.",
    icon: "♨️",
  },
];

/* =====================================
   전국 주요 지역
===================================== */

const regions = [
  "서울",
  "경기",
  "인천",
  "부산",
  "대구",
  "광주",
  "대전",
  "울산",
  "세종",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* =====================================
          상단 메뉴
      ====================================== */}

      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <span className="logo-icon">🔥</span>
            <span>{COMPANY}</span>
          </Link>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            ☰
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <Link href="#services">서비스</Link>

            <Link href="#regions">
              출장지역
            </Link>

            <Link href="#process">
              작업안내
            </Link>

            <a
              href={`tel:${PHONE}`}
              className="nav-call"
            >
              전화상담
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================
          메인 히어로
      ====================================== */}

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            전국 출장 · 쿡탑 전문 시공
          </div>

          <h1>
            쿡탑 교체부터
            <br />
            <strong>상판 타공까지 한번에</strong>
          </h1>

          <p className="hero-description">
            빌트인쿡탑 · 가스쿡탑 · 인덕션 · 가스레인지
            <br />
            교체와 주방 상판 타공을 전문으로 진행합니다.
          </p>

          <div className="hero-keywords">
            <span>빌트인쿡탑교체</span>
            <span>가스쿡탑교체</span>
            <span>쿡탑타공</span>
            <span>인덕션교체</span>
          </div>

          <div className="hero-buttons">
            <a
              href={`tel:${PHONE}`}
              className="primary-button"
            >
              ☎ 전화 상담
            </a>

            <Link
              href="#services"
              className="secondary-button"
            >
              시공 항목 보기
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          핵심 안내
      ====================================== */}

      <section className="quick-info">
        <div className="quick-card">
          <strong>전국 출장</strong>
          <span>전국 시·군·구 상담</span>
        </div>

        <div className="quick-card">
          <strong>규격 확인</strong>
          <span>제품·타공 사이즈 확인</span>
        </div>

        <div className="quick-card">
          <strong>교체 + 타공</strong>
          <span>한 번에 시공 가능</span>
        </div>

        <div className="quick-card">
          <strong>전문 상담</strong>
          <span>현장 사진 상담 가능</span>
        </div>
      </section>

      {/* =====================================
          서비스
      ====================================== */}

      <section
        id="services"
        className="section"
      >
        <div className="section-heading">
          <span>
            YEOLJEONG COOKTOP
          </span>

          <h2>
            쿡탑 전문 서비스
          </h2>

          <p>
            제품 교체부터 상판 규격 변경과 타공까지
            현장 상황에 맞춰 작업합니다.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              className="service-card"
              key={service.slug}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.desc}
              </p>

              <span className="more">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================
          출장 지역
      ====================================== */}

      <section
        id="regions"
        className="region-section"
      >
        <div className="section-heading">
          <span>
            NATIONWIDE SERVICE
          </span>

          <h2>
            전국 출장 가능합니다
          </h2>

          <p>
            서울부터 제주까지 전국 지역별 상담이 가능합니다.
          </p>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <Link
              href={`/regions/${region}`}
              key={region}
              className="region-button"
            >
              {region}
            </Link>
          ))}
        </div>

        <p className="region-notice">
          ※ 지역 및 현장 상황에 따라 출장 가능 여부가 달라질 수 있습니다.
        </p>
      </section>

      {/* =====================================
          작업 순서
      ====================================== */}

      <section
        id="process"
        className="section"
      >
        <div className="section-heading">
          <span>
            PROCESS
          </span>

          <h2>
            쿡탑 교체 진행 과정
          </h2>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <b>01</b>

            <h3>
              현장 사진 상담
            </h3>

            <p>
              기존 쿡탑과 주방 상판 사진을 확인합니다.
            </p>
          </div>

          <div className="process-card">
            <b>02</b>

            <h3>
              제품 규격 확인
            </h3>

            <p>
              기존 타공 사이즈와 신규 제품 규격을 확인합니다.
            </p>
          </div>

          <div className="process-card">
            <b>03</b>

            <h3>
              교체·타공 작업
            </h3>

            <p>
              필요 시 기존 상판을 확장 또는 추가 타공합니다.
            </p>
          </div>

          <div className="process-card">
            <b>04</b>

            <h3>
              설치 확인
            </h3>

            <p>
              제품 설치 상태와 마감 상태를 최종 확인합니다.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          상담 영역
      ====================================== */}

      <section className="cta">
        <div>
          <span>
            전국 쿡탑 전문
          </span>

          <h2>
            교체할 제품과
            <br />
            기존 쿡탑 사진을 보내주세요.
          </h2>

          <p>
            현장 사진과 제품 모델명을 확인하면
            더욱 정확한 상담이 가능합니다.
          </p>
        </div>

        <a
          href={`tel:${PHONE}`}
          className="cta-button"
        >
          ☎ {PHONE_DISPLAY}
        </a>
      </section>

      {/* =====================================
          하단
      ====================================== */}

      <footer className="footer">
        <div className="footer-logo">
          🔥 {COMPANY}
        </div>

        <p>
          전국 쿡탑 · 인덕션 · 가스레인지 교체 및
          주방 상판 타공 전문
        </p>

        <p>
          전화상담 {PHONE_DISPLAY}
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} {COMPANY}. All rights reserved.
        </p>
      </footer>

      {/* =====================================
          모바일 하단 전화 버튼
      ====================================== */}

      <div className="mobile-bottom">
        <a href={`tel:${PHONE}`}>
          ☎ 열정쿡탑 {PHONE_DISPLAY}
        </a>
      </div>
    </main>
  );
}
