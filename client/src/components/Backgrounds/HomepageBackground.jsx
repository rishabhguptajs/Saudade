import React from "react"
import './HomepageBackground.css'

const HomepageBackground = ({children}) => {
  return (
    <div className="container_bg_homepage">
        {children}
    </div>
  )
}

export default HomepageBackground
