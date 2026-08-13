"use client";

import {  useState } from "react";
import Link from "next/link";
import "../style/head.css"

export default function Header (){

const [menuOpen, setMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [adsOpen, setAdsOpen] = useState(false);

return (


    <>

      <head>
          <title>Careers</title>
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
                  <a href="/">Home</a>
                </li>
                <li className="has-dropdown" tabIndex={0}>
                  <span>Advertising</span>
                  <div className="dropdown">
                    <a href="/top">Top Car Screen</a>
                    <a href="/street">Street Billboard</a>
                  </div>
                </li>

                

                <li><a href="/career"> Careers</a></li>
                
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
          Street Billboard
        </Link>
    
      </div>
    
      
    
      <Link
        href="#"
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
    
    
    
    
    





    
    </>


 
)

}