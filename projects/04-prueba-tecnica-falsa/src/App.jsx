import React, { useState } from 'react'
import { useImageUrl, useRandomFact } from './hooks/hooks'
import './App.css'


export function App() {

  //Estado para actulizar datos
  const [newData, setNewData] = useState(true)

  //Obtener el dato random
  const { fact } = useRandomFact({ newData })

  //Obtener la url de la imagen
  const { imageUrl } = useImageUrl({ fact })

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Image using first word for fact'/>}
      <button onClick={() => {setNewData(!newData)}}>Cambiar</button> 
    </main>
  )
}
