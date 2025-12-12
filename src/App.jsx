import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectDetails from './components/ProjectDetails'

const App = () => {
   
  return (
    <div>
   <RouterProvider router={AllRouters}/>
    </div>
  )
}

export default App
