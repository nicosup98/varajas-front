import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root"
import App from "./routes/App"
import './index.css'


import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
import Varajas from './routes/Varajas'
import { getVaraja, login } from '../utils/fetchVaraja'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //bypass temporal para probar las cartas
    loader: async () => login(),
    children: [
      {
        path :"home",
        element: <App />
      },
      {
        path: "varajas/:tipo",
        element: <Varajas />,
        loader: async ({params}) => getVaraja(params.tipo)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
