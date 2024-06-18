
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import SupportIssue from './pages/RightSideBody/SupportIssue.jsx'
// import SupportIssue from './pages/RightSideBody/SupportIssue/SupportIssue.jsx'
import SupportIssue from './app/pages/RightSideBody/SupportIssue/SupportIssue.jsx'
import Lms from './app/pages/RightSideBody/Lms/Lms.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route path="support-issue" element={<SupportIssue/>}/>
      <Route path="Lms" element={<Lms/>}/>
      {/* <Route path="ContactUs" element={<Contact/>}/>
      <Route path="User/:userid" element={<User/>}/> */}
      {/* <Route path="" element={<Home/>}/> */}

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

