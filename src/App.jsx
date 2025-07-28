import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";

const haniLaEnterpriseRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
  ]);

export default function App() {
  
  return (
    <>
       <RouterProvider router={haniLaEnterpriseRouter} />
    </>
  )
}

