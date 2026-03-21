import { useState, useEffect } from 'react'
import PrayerTimes from './components/PrayerTimes'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [city, setCity] = useState("Jakarta");
  const [times, setTimes] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isGreen, setIsGreen] = useState(true);
  useEffect(() => {
    if (isGreen) {
      document.documentElement.classList.remove("blue");
    } else {
      document.documentElement.classList.add("blue");
    }
  }, [isGreen]);
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTime(new Date())
    }, 1000);
    return () => clearInterval(interval); // cleanup
}, [])
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar city={city} setCity={setCity} isGreen={isGreen} onToggle={() => setIsGreen(!isGreen)}/>
        <PrayerTimes city={city} times={times} setTimes={setTimes} currentTime={currentTime} className="prayerTimes"/>
        <Footer city={city} times={times} currentTime={currentTime}/>
      {/* <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
      </div> */}
    </>
  )
}

export default App
