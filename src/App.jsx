import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'
import Routes from '../src/routes/Routes'

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  )
}

export default App