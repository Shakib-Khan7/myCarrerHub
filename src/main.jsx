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
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Jobs></Jobs>,
        loader: allLoaders

      },
      {
        path: '/JobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader : ({params}) => fetch(`job-${params.id}.json`)

      },
      {
        path :'/Applied_Jobs',
        element : <AppliedJobs></AppliedJobs>,
        loader : ()=>fetch(`jobs.json`)
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
