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
// import JobDetails from './Components/JobDetails/JobDetails.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Assignment_marks from './Components/Assignment_marks.jsx';
import Blog from './Components/Blog/Blog.jsx';
import JobDetail from './Components/JobDetail/JobDetail.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: allLoaders,
    children: [
      {
        path: '/',
        element: <Jobs></Jobs>,
        

      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/details/:id',
        element : <JobDetail></JobDetail>,
        loader : ({params})=> fetch(`job-${params.id}.json`)
      },
      
      {
        path: 'Applied_Jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch(`jobs.json`)
      },
      {
        path: 'statistics',
        element : <Assignment_marks></Assignment_marks>


      }



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
