"use client"

import Link from "next/link";
import Image from "next/image";
import "../style/top.css";
import { useState } from "react";

export default function top(){

    
      const [menuOpen, setMenuOpen] = useState(false);
    const [adsOpen, setAdsOpen] = useState(false);
     
    return(
        
        <>

        <head>
        <title>Top-Taxi</title>
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

    <img
        className="logo"
        src="/images/mob-2-01.png"
        alt="Mobiview Logo"
    />

    <div className="info">
        <ul>
            <li>
                <a href="/">Home</a>
                </li>

            <li className="has-dropdown" >
                <span>Advertising</span>
                <div className="dropdown">
                    <a href="#">Top Car Screen</a>
                    <a href="/street">In The Street</a>
                </div>
            </li>

            <li>Works</li>
            <li>Careers</li>
            <li><a href="/about">About Us</a></li>
        </ul>
    </div>

    <a href="#" className="contact">
        <h2>CONTACT</h2>
    </a>

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

    <Link href="/" onClick={() => setMenuOpen(false)}>
        Home
    </Link>

    <div
        className="mobile-drop-title"
        onClick={() => setAdsOpen(!adsOpen)}
    >
        Advertising
        <span>{adsOpen ? "−" : "+"}</span>
    </div>

    {adsOpen && (
        <div className="mobile-submenu">

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
    )}

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

    <Link
        href="/contact"
        className="mobile-contact"
        onClick={() => setMenuOpen(false)}
    >
        CONTACT
    </Link>

</div>


<a href="https://wa.me/9725XXXXXXXX"
   className="whatsapp-float"
   target="_blank"
   aria-label="Chat on WhatsApp">

    <div className="wa-text">
        <span>Let's Chat</span>
        <small>WhatsApp</small>
    </div>

    <i className="fab fa-whatsapp"></i>
</a>


<div className="info-section">
    <img src="/images/top taxi.png"/>

    <div className="txt-section">
        <h2>Top-Taxi Display Advertising</h2>
        <p>Transform every journey into a powerful marketing opportunity with Mobiview Top Taxi Display Advertising. 
            Our advanced<strong> double-sided LED screens</strong> ensure your message is visible from both directions,<strong> maximizing 
            exposure on busy streets and highways. Built to operate reliably in all weather conditions,</strong> the displays deliver bright,
             high-quality visuals day and night, making them one of<strong> the best locations for impactful outdoor advertising</strong>.
         <br/><br/>
          With smart remote content management and centralized control, campaigns can be updated instantly and scheduled with precision.By placing your brand on moving digital platforms that travel through high-traffic areas, 
            Top Taxi advertising provides exceptional reach, strong audience engagement, and continuous visibility—helping businesses connect with customers wherever the road leads.
        </p>

    </div>


</div>

<div className="why">

<img src="/images/rainy.png"/>

<div className="bottom-info">
<h2>Screen properties</h2>
<ul className="why-points">
        <li>24/7 continuous Ads .</li>   
        <li>Outdoor Full-Color LED Display.</li>
        <li>AI based Computer Vision</li>
        <li>Double-Sided (Visible from Both Directions).</li>
        <li>Up to 5,000–7,000 nits for clear daylight visibility.</li>
        <li>Geo-targeted content delivery with location.</li>
        <li>Images, videos, animations, and dynamic advertisements.</li>
        <li>Secure roof-mounted system designed for moving vehicles</li>
        <li>IP65-rated, resistant to rain, dust, and harsh weather</li>
       
    </ul>
</div>

</div>

<div className="ai">

<img src="/images/ai imperssion.png"/>

<div className="bottom-section">
        <h2>AI-Based Computer Vision</h2>

        <p>
Mobiview integrates advanced AI-powered Computer Vision technology to provide intelligent audience measurement and impression analytics for digital advertising campaigns. Using real-time image processing and machine learning algorithms, the system automatically detects and counts individuals within the viewing area of a display, generating accurate estimates of audience exposure and campaign reach.

The technology is designed to deliver actionable insights that help advertisers evaluate performance, optimize content placement, and make data-driven marketing decisions. By converting visual observations into measurable analytics, Mobiview enables brands to better understand audience engagement and maximize the effectiveness of their digital advertising investments.
        </p>

    </div>

</div>

<div className="call">

<div className="call-bottom">

<h2>Contact Us for Advertising and more detalis.</h2>

<a href="#" className="call-contact">
      <h2>Contact Us</h2>
</a>



</div>

</div>

<footer>
    <strong>MobiView</strong> — Advertising Agency |
    جميع الحقوق محفوظة &copy; 2026

    <div className="social-icons">
        <a href="#" target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
        </a>

        <a href="https://www.instagram.com/mobiview_agency/" target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
        </a>

        <a href="#" target="_blank" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
        </a>
    </div>
</footer>

     </>   
    );
}