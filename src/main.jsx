import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Componet/Home/Home.jsx';
import Contact from './assets/Componet/Contact/Contact.jsx';
import About from './assets/Componet/About/About.jsx';
import Service from './assets/Componet/Service/Service.jsx';
import User from './assets/Componet/User/User.jsx';
import UsersDetails from './assets/Componet/UsersDetals/UsersDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children: [
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/service",
        element: <Service></Service>
      },
      {
        path: "/User",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User></User>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        // dynamic users details check,
        path: "/users/:usersId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element:<UsersDetails></UsersDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
