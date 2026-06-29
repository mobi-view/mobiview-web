"use client"

import "../style/street.css"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function street(){


    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return(
        
        <>

        <head>
        <title>Street-Billboard</title>
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
        src="images/mob-2-01.png"
        alt="Mobiview Logo"
    />

    <div className="info">
        <ul>
            <li>
              <a href="/">Home </a>
              </li>

            <li className="has-dropdown" >
                <span>Advertising</span>
                <div className="dropdown">
                    <a href="/top">Top Car Screen</a>
                    <a href="#">In The Street</a>
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
        ×
    </button>

    <Link href="/" onClick={() => setMenuOpen(false)}>
        Home
    </Link>

    <div
        className="mobile-drop-title"
        onClick={() => setDropdownOpen(!dropdownOpen)}
    >
        Advertising
        <span>{dropdownOpen ? "−" : "+"}</span>
    </div>

    {dropdownOpen && (

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

    <Link href="/works" onClick={() => setMenuOpen(false)}>
        Works
    </Link>

    <Link href="/careers" onClick={() => setMenuOpen(false)}>
        Careers
    </Link>

    <Link href="/about" onClick={() => setMenuOpen(false)}>
        About Us
    </Link>

    <a href="#" className="mobile-contact">
        CONTACT
    </a>

</div>


<div className="intro">
 <h1 className="intro-heading">Your Brand<br/><span>Unmissable.</span></h1>
 </div>
<section className="gallery">

  <div className="card card--tall">
    <div className="accent-bar"></div>
    <img src="images/big1.png" alt="North Corridor Billboard" style={{objectFit : "cover"}} />
    <div className="card-label">
      <div>
        <div className="card-location">Commercial Area</div>
        <div className="card-sub">Gantry Billboard ·</div>
      </div>
      
    </div>
  </div>

  <div className="card card--tall">
    <div className="accent-bar"></div>
    <img src="images/big2.png" alt="City Center Billboard" style={{objectFit : "cover"}}/>
    <div className="card-label">
      <div>
        <div className="card-location">City Center</div>
        <div className="card-sub">Gantry Billboard ·</div>
      </div>
      
    </div>
  </div>

  <div className="card card--wide">
    <div className="accent-bar"></div>
    <img src="images/stt.jpeg" alt="South Entry Pylon"/>
    <div className="card-label">
      <div>
        <div className="card-location">University Area</div>
        <div className="card-sub">Single-Pole ·</div>
      </div>
    
    </div>
  </div>

</section>


<div className="board-info">
    <h2>High-Traffic Digital Double-Sided Billboards</h2>

    <p>Strategically positioned in high-traffic locations, our digital billboards place your brand in front of thousands of potential customers every day.
         With bright, high-resolution LED displays operating 24/7, your advertisements remain visible day and night, ensuring continuous exposure and maximum audience reach.
         These premium roadside locations capture the attention of drivers, passengers, and pedestrians alike,
        creating repeated impressions that strengthen brand recognition and campaign effectiveness. 
        Combined with dynamic digital content and flexible scheduling, our billboard network offers a powerful,
         modern advertising solution that delivers lasting impact and exceptional visibility where it matters most.</p>
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