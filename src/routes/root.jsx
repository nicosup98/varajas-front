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
      <ul className="menu menu-horizontal bg-base-200">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 5</a></li>
</ul>

         <div className="container mx-auto py-1">
            <Outlet />
         </div>
      </>
   )
}

export default Root


