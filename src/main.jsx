/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs.jsx';
import allLoaders from './Components/Loaders.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path : '/',
        element : <Jobs></Jobs>,
        loader : allLoaders
        
      },
      
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
