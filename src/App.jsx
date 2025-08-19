import React from "react"
import { BrowserRouter} from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'
import MainRoutes from './routes/MainRoutes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App