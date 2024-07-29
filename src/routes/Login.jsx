import axios from "axios"
import { useAuth } from "../hooks/useAuth"
import AuthLayout from "../components/AuthLayout"
import { Link, useNavigate } from "react-router-dom"
import Input from "../components/Input"

const formFields = [
  {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Nombre de usuario",
    required: true,
  },
  {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Contraseña",
    required: true,
  },
]

function Login() {
  const navigate = useNavigate()
  const { authData, onChange } = useAuth()
  const { username, password } = authData
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("/login", {
        username,
        password,
      })

      sessionStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/home")
    } catch (e) {
      alert(e.message)
    }
  }
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center gap-6 w-11/12 md:w-4/12"
      >
        {formFields.map((field, index) => {
          return (
            <Input
              key={index}
              {...field}
              onChange={onChange}
              value={authData[field.name]}
            />
          )
        })}
        <button
          type="submit"
          className="bg-slate-700 w-[fit-content] rounded p-2"
        >
          Ingresar
        </button>
      </form>
      <p className="mt-6">
        Aún no tienes cuenta?{" "}
        <Link className="underline" to="/signup">
          Registrate aqui
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Login
