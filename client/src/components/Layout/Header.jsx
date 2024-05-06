import React from "react"
import "./Layout.css"
import { NavLink } from "react-router-dom"
import logo from "/saudade.svg"

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/#features" className="nav_links">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="nav_links">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav_links">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav_links">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <NavLink to="/login">
          <button className="login_btn">Login</button>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
