import React from "react"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Hangman from "./Hangman/Hangman.jsx"
import HomePage from "./HomePage/HomePage.jsx"
import Projects from "./Projects.jsx"
import About from "./About.jsx"
import Resume from "./Resume.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Projects/Hangman" element={<Hangman />} />
      <Route path="/Hangman" element={<Hangman />} />
    </Routes>
  )
}

export default App
