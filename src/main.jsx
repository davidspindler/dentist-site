import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   // {
//   //   path: "/about",
//   //   element: <div>about</div>,
//   // },
//   // {
//   //   path: "/services",
//   //   element: <div>services</div>,
//   // },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <App /> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
