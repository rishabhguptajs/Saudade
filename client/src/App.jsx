import axios from "axios"

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import Login from "./pages/Auth/Login.jsx"
import SignUp from "./pages/Auth/SignUp.jsx"
import { useEffect, useState } from "react"

function App() {
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/login/success`
      const res = await axios.get(url, { withCredentials: true })
      console.log(res.data.user._json)
      setUser(res.data.user._json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <HomePage user={user} /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
