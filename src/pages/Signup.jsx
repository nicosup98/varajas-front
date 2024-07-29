import axios from "axios"
import { useAuth } from "../hooks/useAuth"
import AuthLayout from "../components/AuthLayout"
import { Link, useNavigate } from "react-router-dom"
import Input from "../components/Input"

function Signup() {
  const navigate = useNavigate()
  const { authData, onChange } = useAuth()

  const formFields = [
    {
      type: "text",
      name: "fullname",
      id: "fullname",
      placeholder: "Nombre completo",
      required: true,
    },
    {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "Nombre de usuario",
      required: true,
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email",
      required: true,
    },
    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Contraseña",
      required: true,
    },
    {
      type: "password",
      name: "confirmPassword",
      id: "confirmPassword",
      placeholder: "Confirmar contraseña",
      required: true,
    },
  ]

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("/singup", authData)

      alert("Usuario registrado exitosamente")
      navigate("/login")
    } catch (e) {
      alert(e.message)
    }
  }
  return (
    <AuthLayout title="Signup">
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
          Registrarse
        </button>
      </form>
      <p className="mt-6">
        Ya tienes cuenta?{" "}
        <Link className="underline" to="/login">
          Ingresa aqui
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Signup
