import React from "react"
import "./styles/HomePage.css"
import Layout from "../components/Layout/Layout"

const HomePage = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="tagline_container">
          <div className="main_tagline">
            Never get <span className="gradient_main_tagline">stu...ck,</span>{" "}
            <br /> while{" "}
            <span className="gradient_main_tagline">uploa...ding!</span>
          </div>
          <div className="sub_tagline">
            Uploading files has never been easier! Just drag and drop your files and we'll take care of the rest.
          </div>
        </div>
        <div className="hero_buttons_container">
          <button className="hero_button_get">Get Started</button>
          <button className="hero_button_learn">Learn More</button>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
