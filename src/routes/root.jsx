import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"



function Root() {
   const navigate = useNavigate()
   useEffect(() => {
      //aqui va la validacion del usuario si esta logueado o no, redirige a home o a login
      navigate("/home")
   }, [])
   return (
      <>
         <div className="flex justify-center py-2">
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
               <li><a>Item 1</a></li>
               <li><a>Item 2</a></li>
               <li><a>Item 3</a></li>
            </ul>
         </div>
         <div className="container mx-auto py-1">
            <Outlet />
         </div>
      </>
   )
}

export default Root


