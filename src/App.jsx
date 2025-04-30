import React from "react"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Hangman from "./Hangman/Hangman.jsx"
import HomePage from "./HomePage/HomePage.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Hangman" element={<Hangman />} />
    </Routes>
  )
}

export default App
