import { useState, useEffect } from 'react'
import PrayerTimes from './components/PrayerTimes'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [city, setCity] = useState("Jakarta");
  const [times, setTimes] = useState(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTime(new Date())
    }, 1000);
    return () => clearInterval(interval); // cleanup
}, [])
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar city={city} setCity={setCity}/>
      <PrayerTimes city={city} times={times} setTimes={setTimes} currentTime={currentTime} className="prayerTimes"/>
      <Footer city={city} times={times} currentTime={currentTime}/>
    </>
  )
}

export default App
