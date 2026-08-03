"use client";

import {  useState } from "react";
import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";
import Card from "../cards/page";
import "../style/career.css"
import "../style/head.css"


export default function Careers (){

    return (
        <>
        
        <Header/>
    

        <section className="join">

        <h1>Your <span>Career</span>.  Our <span>Vision</span>.  One <span>Future</span>  </h1>
        <br></br>
        <p>We are building Palestinian's most advanced 
            digital advertising network.</p>

        

         </section>
        
        <section className="grid-card">
             
                    <Card 
                        title="Software Engineer"
                        statas="CLOSED"
                    />

                    <Card
                        title="Accountant"
                        statas="CLOSED"
                    />

                    <Card 
                        title="Graphic Designer"
                        statas="OPEN"
                    />

                     <Card 
                        title="Marketing and Sales"
                        statas="OPEN"
                    />

                     
             
              
        </section>
     
        <section className="job-future">

            <h1>Ready to Shape the Future?</h1>

            <p>Let's build smarter advertising togother.</p>

            <button>Send Your CV</button>

        </section>


        <Footer/>
        </>
    )

}