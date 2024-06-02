import axios from "axios"

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import Login from "./pages/Auth/Login.jsx"
import SignUp from "./pages/Auth/SignUp.jsx"
import { useEffect, useState } from "react"
import ApprovalPage from "./pages/ApprovalPage.jsx"

function App() {
  // const [user, setUser] = useState(null)

  // const fetchUser = async () => {
  //   try {
  //     const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/google/login/success`
  //     const res = await axios.get(url, { withCredentials: true })
  //     localStorage.setItem("user", JSON.stringify(res.data.user))
      
  //     setUser(res.data.user)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchUser()
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/approve-video/:videoId" element={<ApprovalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
