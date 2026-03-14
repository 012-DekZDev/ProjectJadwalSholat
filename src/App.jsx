import { useState } from 'react'
import PrayerTimes from './components/PrayerTimes'
import './App.css'

// useEffect(()=>{
//   console.log("Component hanya muncul sekali")
// },[])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrayerTimes/>
    </>
  )
}

export default App
