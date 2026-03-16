import { useState , useEffect } from "react";
import "../css/PrayerTimes.css"

function PrayerTimes() {
    const [times, setTimes] = useState(null)
    const [city, setCity] = useState("Jakarta")
    const [currentTime, setCurrentTime] = useState(new Date())
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    useEffect(()=>{
        setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
    },[])
    // const currentHour = 40
    // const currentMinute = 39
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
        const fajrTime = times.data.timings.Fajr;
        const [fajrHour, fajrMinute] = fajrTime.split(":").map(x => Number(x));
        const dhuhrTime = times.data.timings.Dhuhr;
        const [dhuhrHour, dhuhrMinute] = dhuhrTime.split(":").map(x => Number(x));
        const asrTime = times.data.timings.Asr;
        const [asrHour, asrMinute] = asrTime.split(":").map(x => Number(x));
        const maghribTime = times.data.timings.Maghrib;
        const [maghribHour, maghribMinute] = maghribTime.split(":").map(x => Number(x));
        const ishaTime = times.data.timings.Isha;
        const [ishaHour, ishaMinute] = ishaTime.split(":").map(x => Number(x));
        let isFajr = false;
        let isDhuhr = false;
        let isAsr = false;
        let isMaghrib = false;
        let isIsha = false;
        if ((currentHour > fajrHour || (currentHour === fajrHour && currentMinute >= fajrMinute)) && (currentHour < dhuhrHour || (currentHour === dhuhrHour && currentMinute < dhuhrMinute))) {
            isIsha = false;
            isFajr = true;
            console.log("Subuh")
        }
        else if ((currentHour > dhuhrHour || (currentHour === dhuhrHour && currentMinute >= dhuhrMinute)) && (currentHour < asrHour || (currentHour === asrHour && currentMinute < asrMinute))) {
            isFajr = false;
            isDhuhr = true;
            console.log("Zuhur")
        }
        else if((currentHour > asrHour || (currentHour === asrHour && currentMinute >= asrMinute)) && (currentHour < maghribHour || (currentHour === maghribHour && currentMinute < maghribMinute))){
            isDhuhr = false;
            isAsr = true;
            console.log("Ashar")
        }
        else if ((currentHour > maghribHour || (currentHour === maghribHour && currentMinute >= maghribMinute)) && (currentHour < ishaHour || (currentHour === ishaHour && currentMinute < ishaMinute))) {
            isAsr = false;
            isMaghrib = true;
            console.log("Maghrib")
        }
        else {
            isMaghrib = false;
            isIsha = true;
            console.log("Isya");
        }
        let fajrClasss = "";
        let dhuhrClass = "";
        let asrClass = "";
        let maghribClass = "";
        let ishaClass = "";
        let nextPrayer = "";
        if (isFajr) {
            fajrClasss = "active";
            nextPrayer = "Zuhur";
        }else if (isDhuhr) {
            dhuhrClass =  "active";
            nextPrayer = "Ashar"
        }else if(isAsr){
            asrClass = "active";
            nextPrayer = "Maghrib"
        }else if (isMaghrib) {
            maghribClass = "active";
            nextPrayer = "Isya";
        }else if (isIsha) {
            ishaClass = "active";
            nextPrayer = "Subuh";
        }
        // console.log(times.data.timings)
        return (
            <>
            <div>
                <h1>Jadwal Sholat Hari Ini</h1>
                <h2>Tanggal  {times.data.date.readable}</h2>
                <h2>Wilayah {city}</h2>
                <h2>Jam Sekarang : {currentTime.toLocaleTimeString(`id-ID`, {hour12:false})}</h2>
                <div className="divParent">
                    <div className={fajrClasss}>
                        <p>Subuh : {times.data.timings.Fajr}</p>
                    </div>
                    <div className={dhuhrClass}>
                        <p>Zuhur : {times.data.timings.Dhuhr}</p>
                    </div>
                    <div className={asrClass}>
                        <p>Ashar : {times.data.timings.Asr}</p>
                    </div>
                    <div className={maghribClass}>
                        <p>Maghrib : {times.data.timings.Maghrib}</p>
                    </div>
                    <div className={ishaClass}>
                        <p>Isya : {times.data.timings.Isha}</p>
                    </div>
                </div>
                <p>Sholat selanjutnya {nextPrayer}</p>
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