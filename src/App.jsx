import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'
import MainRoutes from './routes/MainRoutes'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
     <ToastContainer position="top-right"

theme="dark"
/>
      <Layout>
        <MainRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App