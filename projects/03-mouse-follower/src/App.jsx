import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {

  const [enabled,setEnabled] = useState(false)

  const[position,setPosition] = useState({x:0,y:0})

  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }

    if (enabled){
      window.addEventListener('pointermove',handleMove)
    }

    //cleanup del use effect
    //para evitar problemas
    return () => {
      window.removeEventListener('pointermove',handleMove)
    }
    
  },[enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => {setEnabled(!enabled)}}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>  
  )
}

function App() {

  const [mounted, setMounted] = useState(false)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => {setMounted(!mounted)}}>{mounted ? 'Desactivar' : 'Activar'} componente de seguido del boton</button>
    </main>
  )
}

export default App
