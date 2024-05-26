import React from "react"
import "../styles/HomePage.css"
import Layout from "../../components/Layout/Layout"
import Hero3DCard from "../../components/ui/Hero3DCard"
import axios from "axios"

const HomePage = () => {

  const handleLogout = async () => {
    localStorage.removeItem("user")
    await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/logout`)
  }

  return (
    <Layout>
      <button onClick={handleLogout}>Log out</button>
      <div className="homepage">
        <div className="tagline_container">
          <div className="main_tagline">
            Never get <span className="gradient_main_tagline">stu...ck,</span>{" "}
            <br /> while{" "}
            <span className="gradient_main_tagline">uploa...ding!</span>
          </div>
          <div className="sub_tagline">
            Traveling? Working? Studying? We got you covered.
          </div>
        </div>
        <div className="hero_buttons_container">
          <button className="hero_button_get">Get Started</button>
          <button className="hero_button_learn">Learn More</button>
        </div>
        <div className="hero_3d_cards_container">
          <Hero3DCard />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
