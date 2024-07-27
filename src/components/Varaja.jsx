import "../css/Varaja.css"
function Varaja(props) {

   return (
      <>
         <div className=" h-[500px] flip-card">
            <div className="flip-card-inner">
               <div className="flip-card-back ">
                  <img className="h-[500px] rounded-md" src={props.imagen} alt="" />
               </div>
               <div className="bg-base-300 h-full w-full flip-card-front rounded-md">
                  <h1 className="text-sky-800 bg-purple-900 text-center p-2 m-2 rounded-md">{props.nombre}</h1>
               </div>
            </div>

         </div>
      </>
   )
}

export default Varaja