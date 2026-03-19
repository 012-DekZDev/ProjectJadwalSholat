import FooterCss from "../css/Footer.module.css";
import moonDown from "../assets/img/moon(2).png";
import dawn from "../assets/img/dawn.png";
import night from "../assets/img/night.png";


function Footer({times, currentTime}) {
    if (!times) {
        return(
            <>Loading...</>
        )
    }else{
        const imsak = times.data.timings.Imsak;
        const fajrTime = times.data.timings.Fajr;
        const [fajrHour, fajrMinute] = fajrTime.split(":").map(x => Number(x));
        const [imsakHour,imsakMinute]= imsak.split(":").map(x=> Number(x))
        const dhuha = times.data.timings.Sunrise;
        const [dhuhaHour, dhuhaMinute] = dhuha.split(":").map(x=>Number(x))
        const dhuhrTime = times.data.timings.Dhuhr;
        const [dhuhrHour, dhuhrMinute] = dhuhrTime.split(":").map(x => Number(x));
        const lastThird = times.data.timings.Lastthird;
        const [tahajudHour, tahajudMinute] = lastThird.split(":").map(x=>Number(x))
        let dhuhaClass = "";
        let imsakClass = "";
        let tahajudClass = "";
        const currentHour = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
        if ((currentHour > dhuhaHour || (currentHour === dhuhaHour && currentMinutes >= dhuhaMinute)) && (currentHour < dhuhrHour || (currentHour === dhuhrHour && currentMinutes < dhuhrMinute))) {
            dhuhaClass = "active";
            imsakClass = "nonActive";
            tahajudClass = "nonActive";
        }else if ((currentHour > imsakHour || (currentHour === imsakHour && currentMinutes >= imsakMinute)) && (currentHour < fajrHour || (currentHour === fajrHour && currentMinutes <fajrMinute))) {
            imsakClass = "active";
            dhuhaClass = "nonActive";
            tahajudClass = "nonActive";
        }else if ((currentHour > tahajudHour || (currentHour === tahajudHour && currentMinutes >= tahajudMinute)) && (currentHour < fajrHour || (currentHour === fajrHour && currentMinutes < fajrMinute))){
            tahajudClass = "active";
            dhuhaClass = "nonActive";
            imsakClass = "nonActive";
        }
        else{
            tahajudClass = "nonActive";
            dhuhaClass = "nonActive";
            imsakClass = "nonActive";
        }
        return (
            <>
                <div className={FooterCss["divFooter"]}>
                    <p>"Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman."</p>
                    <h3 className={FooterCss["surah"]}>— QS. An-Nisa: 103</h3>
                    <div className={FooterCss["divFooterPrayer"]}>
                        <div className={FooterCss[imsakClass]}>
                            <img src={moonDown} alt="" />
                            <div>
                                <p>Imsak</p>
                                <p>{times.data.timings.Imsak}</p>
                            </div>
                        </div>
                        <div className={FooterCss[dhuhaClass]}>
                            <img src={dawn} alt="" />
                            <div>
                                <p>Dhuha</p>
                                <p>{times.data.timings.Sunrise}</p>
                            </div>
                        </div>
                        <div className={FooterCss[tahajudClass]}>
                            <img src={night} alt="" />
                            <div>
                                <p>Tahajud</p>
                                <p>{times.data.timings.Lastthird}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;