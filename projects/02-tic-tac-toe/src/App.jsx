import { useState } from "react"

const TURNS = {
  x: 'x',
  o: 'o'
}

const Square = ({isSelected,children, updateBoard, index}) => {
  const className = `square ${isSelected ? `is-selected` : ``}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {


  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn,setTurn] = useState(TURNS.x)

  const updateBoard = (index) => {


      //No hace nada si tiene algo
      if (board[index]) return 
      //Actualizar tablero
      const newBoard = [...board]
      newBoard[index] = [turn]
      setBoard(newBoard)
      //Actualizar turno
      const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
      setTurn(newTurn)
  }

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <section className="board game">
        {
          board.map((_,index) => {
            return (
              <Square
                key={index}
                index={index}
                children={_}
                updateBoard={updateBoard}
              />
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x} children={TURNS.x}/>
        <Square isSelected={turn === TURNS.o} children={TURNS.o}/>
      </section>
    </main>
    
  )
}

export default App
