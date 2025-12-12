import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'

const AllRouters =createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/project-details",
                element: <ProjectDetails />
            }
        ]

        },
        

    ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
