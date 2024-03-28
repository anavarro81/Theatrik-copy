import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingPage from './pages/BookingPage/BookingPage'
import Info from './pages/Info/Info'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'

// const [plays, setplays] = useState([])

const router = createBrowserRouter([
  {path: "/",
  element: <Layout/>,
  
  errorElement: <ErrorPage/>,
  children: [

    {
      path: "/",
      element: <Home/>,
      loader: async ()=> {
        return fetch('http://localhost:5002/play/getAllPlays')
        // const resp = await fetch('http://localhost:5002/play/getAllPlays')
        // const plays = await resp.json()
        // return plays    
        
      },
    },
    
    {
      path: "/booking/:id",

      loader: async ({params})=> {
    
        const resp = await fetch(`http://localhost:5002/play/getPlay/${params.id}`)
        const plays = await resp.json()
        return plays    
        
      },
      
      element: <BookingPage/>
    },

    {
      path: "/info/:id ",
      loader: async ({params})=> {
    
        const resp = await fetch(`http://localhost:5002/play/getPlay/${params.id}`)
        const plays = await resp.json()
        return plays    
        
      },
      
      element: <Info/>
    }
  
  ]
  },
  

])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>  
)}

export default App