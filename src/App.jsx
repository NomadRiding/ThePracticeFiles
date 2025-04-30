import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Hangman from "./Hangman/Hangman.jsx"

function App() {
  return (
    <Routes>
      <Route path="/Hangman" element={<Hangman />} />
    </Routes>
  )
}

export default App
