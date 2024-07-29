import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/root"
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import "./index.css"
import "./axiosConfig"

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
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
