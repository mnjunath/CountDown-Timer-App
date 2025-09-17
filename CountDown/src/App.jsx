import { useState } from 'react'
import './App.css'
import CountDown from './components/CountDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountDown />
    </>
  )
}

export default App
