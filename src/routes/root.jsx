import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import "../css/Root.css"

function Root() {
  const user = localStorage.getItem("user")
  const navigate = useNavigate()
  useEffect(() => {
    //aqui va la validacion del usuario si esta logueado o no, redirige a home o a login
    if (!user) navigate("/login")
  }, [])
  return (
    <>
      <div className="background-animation">
        <div className="container mx-auto py-1 ">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Root
