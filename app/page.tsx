"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./style/Home.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

 
export default function Home() {

const [menuOpen, setMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [adsOpen, setAdsOpen] = useState(false);

const [now, setNow] = useState(new Date());

const [stats, setStats] = useState({
  impressions: 28475,
  reach: 11260,
  vehicles: 57,
  screens: 134,
  campaigns: 18,
});

useEffect(() => {
  const clock = setInterval(() => {
    setNow(new Date());
  }, 1000);

  const dataUpdate = setInterval(() => {
    setStats((prev) => ({
      ...prev,
      impressions:
        prev.impressions +
        Math.floor(Math.random() * 150 + 50),

      reach:
        prev.reach +
        Math.floor(Math.random() * 70 + 25),
    }));
  }, 30000);

  return () => {
    clearInterval(clock);
    clearInterval(dataUpdate);
  };
}, []);

const dayName = now.toLocaleDateString("en-US", {
  weekday: "long",
});

const fullDate = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

 const timeString = now.toLocaleTimeString();

  const slides = [
    {
      img: "./images/top taxi.png",
      alt: "Top Taxi",
      content: (
        <div className="txt2">
          <h2>
            <span>
              Geo-Targeted,
              <br />
            </span>
            real time Ads
          </h2>
        </div>
      ),
      extraClass: "",
    },
    {
      img: "./images/stt.jpeg",
      alt: "Street Advertising",
      content: (
        <div className="txt">
          <h2>
            Bring your Ads to <span>LIFE</span>
          </h2>
        </div>
      ),
      extraClass: "st",
    },
  ];
 
  const [current, setCurrent] = useState(0);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);
 
  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
  }, [slides.length]);
 
  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  }, [slides.length, startAutoSlide]);
 
  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoSlide();
  }, [slides.length, startAutoSlide]);
 
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [startAutoSlide]);
 
  /* ─── Scroll reveal ─── */
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
 
    function checkReveal() {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;
        if (top < visible) {
          el.classList.add("visible");
        }
      });
    }
 
    window.addEventListener("scroll", checkReveal);
    checkReveal(); // run once on mount (replaces dispatchEvent(new Event('scroll')))
 
    return () => {
      window.removeEventListener("scroll", checkReveal);
    };
  }, []);


  
 
  return (
   
   
   <>
      <head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
 
      <nav>
        <img className="logo" src="./images/mob-2-01.png" alt="Mobiview Logo" />
        <div className="info">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li className="has-dropdown" tabIndex={0}>
              <span>Advertising</span>
              <div className="dropdown">
                <a href="/top">Top Car Screen</a>
                <a href="/street">In The Street</a>
              </div>
            </li>
            <li>Works</li>
            <li>Careers</li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2>CONTACT</h2>
        </div>
       
        <button

        className="menu-btn"

        onClick={() => setMenuOpen(true)}

    >

        ☰

    </button>

  
      </nav>


    <div
  className={`mobile-overlay ${menuOpen ? "show" : ""}`}
  onClick={() => {
    setMenuOpen(false);
    setAdsOpen(false);
  }}
/>

<div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

  <button
    className="close-menu"
    onClick={() => {
      setMenuOpen(false);
      setAdsOpen(false);
    }}
  >
    ✕
  </button>

  <Link
    href="/"
    onClick={() => setMenuOpen(false)}
  >
    Home
  </Link>

  <button
    className="mobile-drop-title"
    onClick={() => setAdsOpen(!adsOpen)}
  >
    <span>Advertising</span>

    <i
      className={`fas fa-chevron-${adsOpen ? "up" : "down"}`}
    />
  </button>

  <div className={`mobile-submenu ${adsOpen ? "show" : ""}`}>

    <Link
      href="/top"
      onClick={() => setMenuOpen(false)}
    >
      Top Car Screen
    </Link>

    <Link
      href="/street"
      onClick={() => setMenuOpen(false)}
    >
      In The Street
    </Link>

  </div>

  <Link
    href="/works"
    onClick={() => setMenuOpen(false)}
  >
    Works
  </Link>

  <Link
    href="/careers"
    onClick={() => setMenuOpen(false)}
  >
    Careers
  </Link>

  <Link
    href="/about"
    onClick={() => setMenuOpen(false)}
  >
    About Us
  </Link>

  <a
    href="#"
    className="mobile-contact"
    onClick={() => setMenuOpen(false)}
  >
    CONTACT
  </a>

</div>





  
      <div className="street-slider">
        <button className="slider-btn prev" onClick={handlePrev} aria-label="Previous slide">
          ❮
        </button>
 
        {slides.map((slide, i) => (
          <div key={i} className={`slide ${i === current ? "active" : ""}`}>
            <img
              className={slide.extraClass}
              src={slide.img}
              alt={slide.alt}
            />
            {slide.content}
          </div>
        ))}
 
        <button className="slider-btn next" onClick={handleNext} aria-label="Next slide">
          ❯
        </button>
      </div>
 
      <div className="line" />
 
      <div className="dash-root">
 
      {/* ── Header ── */}
      <div className="dash-header">
        <div>
          <div className="dash-tag">
            <span className="dash-tag-dot" />
            LIVE OPERATIONS CENTER
          </div>
          <h2 className="dash-title">Real-Time Network Dashboard</h2>
          <p className="dash-sub">
            Monitor campaign delivery, audience impressions and advertising
            network activity in real time.
          </p>
        </div>
        <div className="live-badge">
          <div className="pulse-dot" />
          ONLINE
        </div>
      </div>
 
      {/* ── Clock ── */}
      <div className="dash-clock">
        <div className="clock-day">
          <h3>{dayName}</h3>
          <span>{fullDate}</span>
        </div>
        <div className="clock-time">
          <strong>{timeString}</strong>
        </div>
        <div className="clock-tz">
          <p>Palestine Standard Time</p>
             
        </div>
      </div>
 
      {/* ── Live Stats ── */}
      <div className="dash-stats">
        <div className="stat-cell">
          <span className="stat-label">IMPRESSIONS</span>
          <span className="stat-num">{stats.impressions.toLocaleString()}</span>
          <span className="stat-badge stat-badge--green">↑ LIVE</span>
        </div>
        <div className="stat-cell">
          <span className="stat-label">REACH</span>
          <span className="stat-num">{stats.reach.toLocaleString()}</span>
          <span className="stat-badge stat-badge--green">↑ LIVE</span>
        </div>
        <div className="stat-cell">
          <span className="stat-label">CAMPAIGNS</span>
          <span className="stat-num">{stats.campaigns}</span>
          <span className="stat-badge stat-badge--blue">ACTIVE</span>
        </div>
      </div>
 
      {/* ── Separator ── */}
      <div className="dash-sep">
        <span className="dash-sep-label">ALL-TIME TOTALS</span>
        <div className="dash-sep-line" />
      </div>
 
      {/* ── Totals ── */}
      <div className="dash-totals">
        <div className="total-cell">
          <span className="total-label">TOTAL IMPRESSIONS</span>
          <span className="total-num">12.8M</span>
          <span className="total-sub total-sub--green">↑ Growing</span>
        </div>
        <div className="total-cell">
          <span className="total-label">TOTAL REACH</span>
          <span className="total-num">4.7M</span>
          <span className="total-sub total-sub--green">↑ Growing</span>
        </div>
        <div className="total-cell">
          <span className="total-label">CAMPAIGNS RUN</span>
          <span className="total-num">860</span>
          <span className="total-sub total-sub--muted">All time</span>
        </div>
      </div>
 
    </div>
 
 
      <div className="line" />
 
      
      <div className="why reveal">
        <img src="./images/pardo da.png" alt="Why Top Taxi" />
        <div className="bottom-info">
          <h2>Why Top-Taxi advertising</h2>
          <ul className="why-points">
            <li>High visibility across busy roads.</li>
            <li>Wide audience reach.</li>
            <li>Thousands of daily impressions.</li>
            <li>Dynamic digital advertising.</li>
            <li>Flexible campaign management.</li>
            <li>Geo-targeted content delivery.</li>
            <li>Continuous brand exposure.</li>
          </ul>
        </div>
      </div>
 
      <div className="line" />
 
      {/* ─── Clients slider ─── */}
      <div className="clients reveal">
        <h2>Our Clients</h2>
        <div className="clients-slider">
          <div className="clients-track">
            {[...Array(4)].flatMap((_, group) =>
              ["pardo.jpg", "mobi222.jpg", "jawwal.png", "ubc2222.jpg"].map(
                (img, i) => (
                  <img
                    key={`${group}-${i}`}
                    src={`./images/${img}`}
                    alt={img.split(".")[0]}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
 
      <div className="line" />
 
      <footer>
        <strong>MobiView</strong> — Advertising Agency | جميع الحقوق محفوظة © 2026
        <div className="social-icons">
          <a href="#" target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/mobiview_agency/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a href="#" target="_blank" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </footer>
    </>
  );
}