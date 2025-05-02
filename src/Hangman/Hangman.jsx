import React from "react"
import Layout from "../Layout"
import "./Hangman.css"

function Hangman() {
  const [startGame, setStartGame] = React.useState(false)
  const [gameOver, setGameOver] = React.useState(false)
  const [gameWon, setGameWon] = React.useState(false)
  const [showWord, setShowWord] = React.useState(false)

  const [wordList] = React.useState([
    "Tourist",
    "Pineapple",
    "Japan",
    "Egypt",
    "Roaming",
  ])

  const [word, setWord] = React.useState("")
  const [guessedLetters, setGuessedLetters] = React.useState([])
  const [attempts, setAttempts] = React.useState(6)
  const [correctLetters, setCorrectLetters] = React.useState([])
  const [wrongLetters, setWrongLetters] = React.useState([])

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length)
    return wordList[randomIndex].toLowerCase()
  }

  React.useEffect(() => {
    setWord(getRandomWord())
  }, [])

  React.useEffect(() => {
    if (attempts <= 0) {
      setGameOver(true)
      setShowWord(true)
    } else if (correctLetters.length === new Set(word.split("")).size) {
      setGameWon(true)
      setShowWord(true)
    }
  }, [attempts, correctLetters, word])

  React.useEffect(() => {
    if (startGame) {
      setWord(getRandomWord())
      setAttempts(6)
      setGuessedLetters([])
      setCorrectLetters([])
      setWrongLetters([])
      setGameOver(false)
      setGameWon(false)
      setShowWord(false)
    }
  }, [startGame])

  React.useEffect(() => {
    if (gameOver) {
      alert("Game Over! You lost!")
    } else if (gameWon) {
      alert("Congratulations! You won!")
    }
  }, [gameOver, gameWon])

  return (
    <Layout>
      <div className="hangmanContainer">
        <h1 className="GameTitle">Hangman</h1>
        <p className="GameDescription">A fun word guessing game!</p>
        <p>Guess the word before you run out of attempts!</p>
        <div className="gameContainer">
          <div className="wordContainer">
            {word.split("").map((letter, index) => (
              <span key={index} className="letter">
                {guessedLetters.includes(letter) ? letter : "_"}
              </span>
            ))}
          </div>
          <div className="attemptsContainer">
            <p>Attempts left: {attempts}</p>
          </div>
          <div className="lettersContainer">
            {guessedLetters.map((letter, index) => (
              <span key={index} className="guessedLetter">
                {letter}
              </span>
            ))}
          </div>
          <div className="inputContainer">
            <input
              type="text"
              maxLength="1"
              onChange={(e) => {
                const letter = e.target.value.toLowerCase()
                if (letter && !guessedLetters.includes(letter)) {
                  setGuessedLetters([...guessedLetters, letter])
                  if (word.includes(letter)) {
                    setCorrectLetters([...correctLetters, letter])
                  } else {
                    setWrongLetters([...wrongLetters, letter])
                    setAttempts(attempts - 1)
                  }
                }
                e.target.value = ""
              }}
            />
          </div>
        </div>
        <div className="gameControls">
          <button onClick={() => setStartGame(true)}>Start Game</button>
          <button onClick={() => setStartGame(true)}>Restart Game</button>
        </div>
      </div>
    </Layout>
  )
}

export default Hangman
