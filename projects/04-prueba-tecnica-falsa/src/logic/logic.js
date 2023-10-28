//Constantes para los endpoints
const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_IMAGE_ENDPOINT = 'https://cataas.com/cat/says/'


//Parte Logica
export const getRandomFact = () => {
    return fetch(CAT_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const  { fact } = data
        return fact
    })
}

export const getImageUrl = (fact) => {

    //Obtener las primeras tres palabras del dato
    const word = fact.split(' ',3).join(' ')

    //Obtener la imagen
    return fetch(`${CAT_IMAGE_ENDPOINT}${word}`)
      .then(res => {
        const { url } = res
        return url
    })
}

