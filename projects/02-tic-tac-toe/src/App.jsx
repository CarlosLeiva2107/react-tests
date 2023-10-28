import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App() {

  //COnstante para actualizar el tablero de juego
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  //Constante para especificar el turno
  const [turn,setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.x
  })

  //null no hay ganador, false hay un empate
  const [winner,setWinner] = useState(null)

  //Metodo para resetear el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {


      //No hace nada si tiene algo
      if (board[index] || winner) return 
      //Actualizar tablero
      const newBoard = [...board]
      newBoard[index] = [turn]  
      setBoard(newBoard)
      //Actualizar turno
      const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
      setTurn(newTurn)

      //Guardar partida
      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn', newTurn)

      //Verificar si hay un ganador
      const newWinnner = checkWinner(newBoard)

      if (newWinnner){
        setWinner(newWinnner)
        confetti()
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
      }
  }

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Resetear Juego</button>
      <section className="board game">
        {        
        board.map((square,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })}
      </section>

      <section className="turn">
          <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
          <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>

    </main>
    
  )
}

export default App
