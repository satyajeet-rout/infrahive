import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './pages/Homepage'
import People from './pages/People'
import Knowledge from './pages/Knowledge'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Homepage />} />
      <Route path='people' element={<People />} />
      <Route path='knowledge' element={<Knowledge />} />
      <Route path='deployment' element={<Knowledge />} />
      
     
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

    
  </StrictMode>,
)
