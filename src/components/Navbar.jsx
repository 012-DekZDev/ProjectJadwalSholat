import "../css/Navbar.css";
import ToggleButton from "../components/ToggleButton"

function Navbar({city, setCity, isGreen, onToggle}) {
    return(
        <>
        <nav>
            <h3>Wilayah: {city}</h3>
            <div className="divNav">
                <ToggleButton className="toggleButton" isGreen={isGreen} onToggle={onToggle}/>
                <select onChange={(eventobject) => setCity(eventobject.target.value)}>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Medan">Medan</option>
                    <option value="Semarang">Semarang</option>
                    <option value="Makassar">Makassar</option>
                    <option value="Depok">Depok</option>
                    <option value="Tangerang">Tangerang</option>
                    <option value="Bekasi">Bekasi</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Palembang">Palembang</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Bali">Bali</option>
                </select>
            </div>
        </nav>
        </>
    )
}

export default Navbar;