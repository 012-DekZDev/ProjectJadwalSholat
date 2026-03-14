import { useState , useEffect } from "react";

function PrayerTimes() {
    const [times, setTimes] = useState(null)
    const [city, setCity] = useState("Jakarta")
    const [currentTime, setCurrentTime] = useState(new Date())
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes();
    useEffect(()=>{
        setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
    },[])
    useEffect(()=>{
        fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia`)
        .then(res => res.json())
        .then(data => setTimes(data))
    },[city])
    if (!times) {
        return(
            <>
            <p>Loading...</p>
            </>
        )
    }
    else{
        // const asrTime = times.data.timings.Asr;
        // const [asrHour, asrMinute] = asrTime.split(":").map(x => Number(x));
        // if (currentHour > asrHour ||(currentHour === asrHour && currentMinute >= asrMinute)) {
        //     console.log("Ashar")
        // }
        // console.log(times.data.timings)
        return (
            <>
            <div>
                <h1>Jadwal Sholat Hari Ini</h1>
                <h2>Tanggal  {times.data.date.readable}</h2>
                <h2>Wilayah {city}</h2>
                <h2>Jam Sekarang : {currentTime.toLocaleTimeString(`id-ID`, {hour12:false})}</h2>
                <p>Subuh : {times.data.timings.Fajr}</p>
                <p>Zuhur : {times.data.timings.Dhuhr}</p>
                <p>Ashar : {times.data.timings.Asr}</p>
                <p>Maghrib : {times.data.timings.Maghrib}</p>
                <p>Isya : {times.data.timings.Isha}</p>
                <p>Jadwal sholat selanjutnya </p>
                <select id="" onChange={(eventObject)=> setCity(eventObject.target.value)}>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Surabaya">Surabaya</option>
                </select>
            </div>
            </>
        )
    }
}

export default PrayerTimes;