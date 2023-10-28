import { useEffect, useState } from 'react'
import { getRandomFact, getImageUrl } from '../logic/logic'

//Custom Hooks
export function useRandomFact ({ newData }) {
    //Estado para guardar el dato random del gato
    const [fact, setFact] = useState(null)

    useEffect(() => {
      getRandomFact().then(setFact)
    },[newData])

    return { fact }

}

export function useImageUrl ({ fact }) {
  //Estado para la imagen
  const [imageUrl, setImageUrl] = useState(null)

  //Use effect para obtener la imagen del gato
  useEffect(() => {

    //Si no hay dato se retorna
    if (!fact) return

    getImageUrl(fact).then(setImageUrl)

  },[fact])
  
  return { imageUrl }
}
