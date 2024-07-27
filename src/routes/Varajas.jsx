import { useLoaderData } from "react-router-dom"
import Varaja from "../components/Varaja"
import { useState } from "react"
import { genVaraja } from "../../utils/fetchVaraja"

function Varajas() {
   const [barajas, setBarajas] = useState(useLoaderData())
   const [loading, setLoading] = useState(false)

   async function obtenerCarta() {
      setLoading(true)
      const resp = await genVaraja(barajas[0].tipo)
      const baraja = await resp.json()
      setBarajas([...barajas, baraja])
      setLoading(false)
   }
   return (
      <>
         <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-4 h-[99vh] overflow-y-auto">
            {barajas.map(b => (
               <Varaja key={b.id} {...b} />
            ))}
            <div className="bg-[#113243] rounded-md h-[500px] w-[300px] my-1 flex justify-center items-center hover:scale-105 transition duration-150 ease-out">
               <button className="btn btn-accent" disabled={loading} onClick={obtenerCarta}>
                  {loading && <span class="loading loading-spinner"></span>}
                  obtener carta
               </button>
            </div>
         </div>
      </>
   )
}

export default Varajas