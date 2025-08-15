import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router'; // Changed to react-router-dom
import { CartProvider } from './Content/cart'; // Don't forget to import CartProvider!
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const haniLaEnterpriseRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {
  return (
    <CartProvider>
      {/* Place ToastContainer here, outside of the router. 
          This ensures it's available on every page. */}
      <ToastContainer />
      <RouterProvider router={haniLaEnterpriseRouter} />
    </CartProvider>
  );
}