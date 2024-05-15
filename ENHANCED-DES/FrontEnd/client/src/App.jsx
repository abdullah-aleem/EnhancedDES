
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Encrypt from './Encrypt'
import Decrypt from './Decrypt'
import axios from 'axios'
function App() {
  axios.defaults.baseURL='http://localhost:4000'
  axios.defaults.withCredentials=true
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index path="/" element={<Home />} />
      <Route path="/encrypt" element={<Encrypt />} />
      <Route path="/decrypt" element={<Decrypt />} />
     </Route>
    </Routes>
  )
}

export default App
