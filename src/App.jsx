import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterSuccess from './pages/RegisterSuccess'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/success" element={<RegisterSuccess />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
