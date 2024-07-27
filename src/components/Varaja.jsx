import { useState } from "react"
import "../css/Varaja.css"
function Varaja(props) {

   const specialBorder = props.imagen.endsWith(".gif") ? "gradient-border" : "border-2 border-teal-600"

   return (
      <>
         <div className=" h-[500px] flip-card my-1 varaja-entrance">
            <div className="flip-card-inner">
               <div className="flip-card-back ">
                  <img className="h-[500px] rounded-md" src={props.imagen} alt="" />
               </div>
               <div className={`bg-base-300 h-full w-full flip-card-front rounded-md backwrap gradient ${specialBorder}`}>
                  <h1 className="text-teal-200 bg-teal-900 text-center p-2 m-1 rounded-md">{props.nombre}</h1>
                  <div className="back-shapes w-full">
                     <span className="floating circle" style={{ top: "66.59856996935649%", left: "53.020833333333334%", animationDelay: "-0.9s" }}></span>
                     <span className="floating triangle" style={{ top: "top:31.46067415730337%", left: "43.59375%", animationDelay: "-4.8s" }}></span>
                     <span className="floating cross" style={{ top: "76.50663942798774%", left: "38.020833333333336%", animationDelay: "-4s" }}></span>
                     <span className="floating square" style={{ top: "21.450459652706844%", left: "14.0625%", animationDelay: "-2.8s" }}></span>
                     <span className="floating cross" style={{ top: "31.3585291113381%", left: "58.541666666666664%", animationDelay: "-0.65s" }}></span>
                     <span className="floating circle" style={{ top: "15.117466802860061%", left: "72.34375%", animationDelay: "-4.1s" }}></span>
                     <span className="floating circle" style={{ top: "15.117466802860061%", left: "20.34375%", animationDelay: "-0.1s" }}></span>
                     <span className="floating square" style={{ top: "1.450459652706844%", left: "10.0625%", animationDelay: "-2.8s" }}></span>
                     <span className="floating triangle" style={{ top: "top:11.46067415730337%", left: "11.59375%", animationDelay: "-1.4s" }}></span>
                     <span className="floating circle" style={{ top: "9.117466802860061%", left: "70.34375%", animationDelay: "-1.1s" }}></span>
                     <span className="floating cross" style={{ top: "12.3585291113381%", left: "55.541666666666664%", animationDelay: "-0.25s" }}></span>
                     
                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default Varaja