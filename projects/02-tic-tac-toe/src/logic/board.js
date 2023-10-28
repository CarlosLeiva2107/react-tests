import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
    //Revisamos todas las combinaciones ganadoras
    //Para ver si hay un ganador X u O
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a].toString() === boardToCheck[b]?.toString() &&
        boardToCheck[a].toString() === boardToCheck[c]?.toString()
      ){
        return boardToCheck[a]
      }
    }

    return null
}

//Metodo para ver si el juego termino
export const checkEndGame = (newBoard) => {
  //Revisamos si hay un empate
  //Hay empate si ninguna posicion es nula
  return newBoard.every((square) => square !== null)
}