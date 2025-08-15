import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'
import MainRoutes from './routes/MainRoutes'

function App() {
  return (
    <Router>
      <Layout>
        <MainRoutes />
      </Layout>
    </Router>
  )
}

export default App