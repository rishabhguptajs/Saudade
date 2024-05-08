import React from "react"
import "./styles/HomePage.css"
import Layout from "../components/Layout/Layout"
import HomepageBackground from "../components/Backgrounds/HomepageBackground"
import ProfileCard from "../components/ProfileCard/ProfileCard"

const HomePage = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="profile_card_homepage">
          <ProfileCard />
        </div>
        <div className="nothing">Tryna implement a different background for uniqueness</div>
      </div>
    </Layout>
  )
}

export default HomePage
