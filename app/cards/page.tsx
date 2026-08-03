import "../style/card.css"

export default function Card(props :any){

    return(

       <>

        ق
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      
      
    <div className="card">
         


       <div className="dot"> 
        {props.statas} 
        
        <i className="fa-solid fa-circle" 
        style={{
          color : props.statas === "OPEN" ?  "#22c55e" : "#ef4444",

        }}
        >  </i>
         </div> 

        <p>{props.title} </p>

        <div className="location"> 
          
            <i className="fa-solid fa-location-dot"> </i> Nablus <span> .Full Time</span>
        </div>
        

      <a href="#"><button ><b> Apply Now</b></button> </a> 



    </ div>


       </>
    )


}