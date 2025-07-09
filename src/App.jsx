import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"


const haniLaEnterpriseRouter = createBrowserRouter([
  { path: '/', element: <Home /> },

  ]);

export default function App() {
  
  return (
    <>
       <RouterProvider router={haniLaEnterpriseRouter} />
    </>
  )
}

