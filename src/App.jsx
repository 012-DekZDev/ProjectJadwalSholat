import { useState } from 'react'
import PrayerTimes from './components/PrayerTimes'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [city, setCity] = useState("Jakarta");
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar city={city} setCity={setCity}/>
      <PrayerTimes city={city} className="prayerTimes"/>
      <Footer/>
    </>
  )
}

export default App
