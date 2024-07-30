import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/Root"
import App from "./routes/App"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
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
        path: "barajas/:tipo",
        element: <Varajas />,
        loader: async ({ params }) => getVaraja(params.tipo),
      },
    ],
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
], {
  basename:"/barajas"
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
)
