import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ServiceEffect from './components/ServiceEffect';
import Projects from './components/Projects';
import SEO from './components/SEO';
import AboutUs from './components/AboutUs';
import GetQuoteModal from './components/QuoteForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App