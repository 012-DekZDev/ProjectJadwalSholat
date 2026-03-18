import { useState , useEffect } from "react";
import "../css/PrayerTimes.css"

function PrayerTimes({city, times,setTimes, currentTime}) {
    const currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()
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
        const sunrise = times.data.timings.Sunrise;
        const [sunriseHour, sunriseMinute] = sunrise.split(":").map(x => Number(x))
        let isFajr = false;
        let isDhuhr = false;
        let isAsr = false;
        let isMaghrib = false;
        let isIsha = false;
        if ((currentHour > fajrHour || (currentHour === fajrHour && currentMinute >= fajrMinute)) && (currentHour < sunriseHour || (currentHour === sunriseHour && currentMinute < sunriseMinute))) {
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
        else if((currentHour > ishaHour || (currentHour === ishaHour && currentMinute > ishaMinute)) && (currentHour < fajrHour || (currentHour === fajrHour && currentMinute < fajrMinute))){
            isMaghrib = false;
            isIsha = true;
            console.log("Isya");
        }
        let fajrClass = "";
        let dhuhrClass = "";
        let asrClass = "";
        let maghribClass = "";
        let ishaClass = "";
        let nextPrayer = "";
        if (isFajr) {
            fajrClass = "active";
            dhuhrClass  ="nonActive";
            asrClass  ="nonActive";
            maghribClass  ="nonActive";
            ishaClass  ="nonActive";
            nextPrayer = "Zuhur";
        }else if (isDhuhr) {
            fajrClass = "nonActive";
            dhuhrClass =  "active";
            asrClass  ="nonActive";
            maghribClass  ="nonActive";
            ishaClass  ="nonActive";
            nextPrayer = "Ashar"
        }else if(isAsr){
            fajrClass = "nonActive";
            dhuhrClass =  "nonActive";
            asrClass  ="active";
            maghribClass  ="nonActive";
            ishaClass  ="nonActive";
            nextPrayer = "Maghrib"
        }else if (isMaghrib) {
            fajrClass = "nonActive";
            dhuhrClass =  "nonActive";
            asrClass  ="nonActive";
            maghribClass  ="active";
            ishaClass  ="nonActive";
            nextPrayer = "Isya";
        }else if (isIsha) {
            fajrClass = "nonActive";
            dhuhrClass =  "nonActive";
            asrClass  ="nonActive";
            maghribClass  ="nonActive";
            ishaClass  ="active";
            nextPrayer = "Subuh";
        }
        else{
            fajrClass = "nonActive";
            dhuhrClass =  "nonActive";
            asrClass  ="nonActive";
            maghribClass  ="nonActive";
            ishaClass  ="nonActive";
            nextPrayer = "Zuhur";
        }
        // console.log(times.data.timings)
        return (
            <>
            <div className="divPrayerTimes">
                <h2>Jadwal Sholat Hari Ini</h2>
                <h5>Tanggal  {times.data.date.readable}</h5>
                <h1>{currentTime.toLocaleTimeString(`id-ID`, {hour12:false})}</h1>
                <div className="divParent">
                    <div className={fajrClass}>
                        <p>Subuh</p>
                        <p>{times.data.timings.Fajr}</p>
                    </div>
                    <div className={dhuhrClass}>
                        <p>Zuhur</p>
                        <p>{times.data.timings.Dhuhr}</p>
                    </div>
                    <div className={asrClass}>
                        <p>Ashar</p>
                        <p>{times.data.timings.Asr}</p>
                    </div>
                    <div className={maghribClass}>
                        <p>Maghrib</p>
                        <p>{times.data.timings.Maghrib}</p>
                    </div>
                    <div className={ishaClass}>
                        <p>Isya</p>
                        <p>{times.data.timings.Isha}</p>
                    </div>
                    <div className="nextPrayer">
                        <p>Sholat selanjutnya: </p>
                        <p className="pNextPrayer">{nextPrayer}</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default PrayerTimes;