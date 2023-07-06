import React from 'react'
import Menu from './components/Menu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path: '/',
      element:<Menu />,
    },
  ]
)

function App() {
    return <RouterProvider router={router} />
}

export default App