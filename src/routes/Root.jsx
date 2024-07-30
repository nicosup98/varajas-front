import { useEffect } from "react"
import { Outlet, useNavigate, Link } from "react-router-dom"
import logo from "../assets/logo_barajas.png"
import "../css/Root.css"

function Root() {
  const user = sessionStorage.getItem("user")
  const navigate = useNavigate()

  function handleLogOut() {
    sessionStorage.clear()
    navigate("/login")
  }
  useEffect(() => {
    //aqui va la validacion del usuario si esta logueado o no, redirige a home o a login
    if (!user) {
      navigate("/login")
    }
  }, [])
  return (
    <>
      <div className="background-animation h-[100vh] overflow-y-scroll">
        <div className="container mx-auto py-1">
          <div className="navbar  bg-gradient-to-r from-cyan-700 to-[#113243] rounded-md">
            <div className="flex-none">
              <Link to="/home" className="btn btn-square btn-ghost">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="flex-1">
              <Link to="/home">Home</Link>
            </div>
            <div className="flex-none">
              <button className="btn btn-outline btn-accent" onClick={handleLogOut}>
                salir
              </button>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Root
