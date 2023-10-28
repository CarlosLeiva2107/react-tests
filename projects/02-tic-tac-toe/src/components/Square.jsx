//Componente del cuadrado, donee estara cada X u O
export const Square = ({isSelected,children, updateBoard, index}) => {
    const className = `square ${isSelected ? `is-selected` : ``}`
    //Para manejar el click cuando se preciona sobre un cuadro
    const handleClick = () => {
      updateBoard(index)
    }
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }