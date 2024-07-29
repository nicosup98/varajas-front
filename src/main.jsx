import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/root"
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Varajas from "./routes/Varajas"
import { getVaraja } from "../utils/fetchVaraja"
import "./index.css"
import "./axiosConfig"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <App />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "varajas/:tipo",
        element: <Varajas />,
        loader: async ({ params }) => getVaraja(params.tipo),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
