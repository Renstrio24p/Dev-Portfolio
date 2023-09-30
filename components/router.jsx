import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './views/Home/Home'
import AboutPage from './views/About/About'
import NotFound from './views/NotFound/404'
import Layout from './views/Layouts/Layout'
import Contact from './views/Contact/Contact'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
