import React from "react"
import Layout from "../Layout"
import "./Hangman.css"

function Hangman() {
  // State variables for the game

  const [wordList, setWordList] = React.useState([
    "Tourist",
    "Pineapple",
    "Japan",
    "Egypt",
    "Roaming",
  ])

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length)
    return wordList[randomIndex].toLowerCase()
  }

  React.useEffect(() => {
    const randomWord = getRandomWord()
    setWord(randomWord)
  }, [])
  const [word, setWord] = React.useState("")

  return (
    <Layout>
      <div className="hangmanContainer">
        <h1 className="GameTitle">Hangman</h1>
        <p className="GameDescription">A fun word guessing game!</p>
        <p>Guess the word before you run out of attempts!</p>
      </div>
    </Layout>
  )
}
export default Hangman
