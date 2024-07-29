import { useState } from "react"

function useAuth() {
  const [authData, setAuthData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const onChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    })
  }

  return {
    authData,
    onChange,
  }
}

export { useAuth }
