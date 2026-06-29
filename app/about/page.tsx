
"use client";

import { useEffect, useRef , useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../style/about.css";


export default function About() {


  const [menuOpen, setMenuOpen] = useState(false);
const [adsOpen, setAdsOpen] = useState(false);
  const revealRefs = useRef<HTMLDivElement[]>([]);
 
  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((el) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;
        if (top < visible) {
          el.classList.add("visible");
        }
      });
    };
 
    window.addEventListener("scroll", handleScroll);
    handleScroll();
 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    
    <>
      <head>
        <title>About Us</title>
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
              <Link href="/">Home</Link>
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
              <Link href="#">About Us</Link>
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

    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

    <button
        className="close-menu"
        onClick={() => setMenuOpen(false)}
    >
        ✕
    </button>

    <Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>

    <div
        className="mobile-drop-title"
        onClick={()=>setAdsOpen(!adsOpen)}
      >
        Advertising
        <span>{adsOpen ? "−" : "+"}</span>
    </div>

    {adsOpen && (
        <div className="mobile-submenu">
            <Link href="/top">Top Car Screen</Link>
            <Link href="/street">In The Street</Link>
        </div>
    )}

    <Link href="/works">Works</Link>
    <Link href="/careers">Careers</Link>
    <Link href="/about">About Us</Link>

    <a className="mobile-contact">
        CONTACT
    </a>

    </div>
      

      {/* ── About content ── */}
      <div className="content reveal" ref={addRevealRef}>
        <h2 className="us">About Us</h2>
        <div className="about-grid">

          {/* Left column */}
          <div>
            <p>
              Mobiview is a company specialized in smart outdoor digital advertising
              solutions, offering a modern concept of mobile advertising through
              advanced digital display technologies and intelligent management systems.
              We transform vehicles, bridges, and high-traffic locations into smart
              moving advertising platforms that provide brands with wider exposure and
              stronger visual impact, inline with the latest global technologies in
              digital advertising industry.
            </p>

            <div className="about-block">
              <h3>Our Services</h3>
              <ul>
                <li>Installation of digital screens on vehicles and bridges</li>
                <li>Remote advertising content management and operation</li>
                <li>Smart monitoring and control systems</li>
                <li>Innovative advertising solutions for businesses and organizations</li>
                <li>Import, distribution, operation, and maintenance services</li>
                <li>Digital campaign design and management</li>
              </ul>
            </div>

            <div className="about-block">
              <h3>Our Vision</h3>
              <p>
                To become a leading company in smart mobile digital advertising
                solutions in Palestine by delivering innovative technological solutions
                that revolutionize the experience of visual advertising.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="about-block">
              <h3>Our Mission</h3>
              <p>
                To provide modern digital advertising solutions that enable businesses
                and brands reach their audiences in a creative, effective, and visually
                impactful way.
              </p>
            </div>

            <div className="about-block">
              <h3>What Makes Us Different</h3>
              <ul>
                <li>Innovative and modern advertising solutions</li>
                <li>Smart centralized screen management</li>
                <li>Continuous technical support and maintenance</li>
                <li>High-quality display and operation</li>
                <li>Flexible advertising campaign management</li>
                <li>Wide spread and direct audience impact</li>
                <li>Commitment to professionalism and safety standards</li>
              </ul>
            </div>

            <div className="about-block">
              <h3>Our Values</h3>
              <p>
                Innovation • Quality • Credibility • Commitment • Continuous Improvement
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Video section ── */}
      <div className="map reveal" ref={addRevealRef}>
        <video autoPlay muted loop playsInline>
          <source
            src="/images/4beb9d1b-b828-4eda-98c1-ab7852508899_1080p_mp4_30_16-9.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ── Footer ── */}
      <footer>
        <span>
          <strong>MobiView</strong> — Advertising Agency | جميع الحقوق محفوظة &copy; 2026
        </span>

        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            {/* Font Awesome loaded via CDN in layout, or swap with react-icons */}
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/mobiview_agency/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.instagram.com/mobiview_agency/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </footer>
    </>
  );
}