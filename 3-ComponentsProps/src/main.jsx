import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import ErrorPage from './Pages/404.jsx'
import Products from './Pages/ProductPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <Products/>,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
