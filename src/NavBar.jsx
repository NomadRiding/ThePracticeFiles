import React from "react"
import { Link } from "react-router"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">Practice Projects</Link>
      </h1>
      <ul>
        <li>
          <Link to="/Hangman">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
