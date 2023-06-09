import React from 'react'
import { Navigate, createBrowserRouter } from "react-router-dom"
import { Layout } from 'src/components'

const Home = React.lazy(() => import('src/pages/home'))
const NotFound = React.lazy(() => import('src/pages/notfound'))

const routes = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: '', element: <Navigate to='home' replace />, },
      { path: 'home', element: <Home />, },
      // {
      //   path: 'contratos', children: [
      //     { path: '', element: <ContratosList />, },
      //     { path: ':id', element: <ContratosForm />, },
      //   ]
      // },
    ]
  },
  { path: '*', element: <NotFound />, },
])

export default routes