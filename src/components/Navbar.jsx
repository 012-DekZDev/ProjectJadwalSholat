import "../css/Navbar.css";

function Navbar({city, setCity}) {
    return(
        <>
        <nav>
            <h3>Wilayah: {city}</h3>
            <select onChange={(eventobject) => setCity(eventobject.target.value)}>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Surabaya">Surabaya</option>
            </select>
        </nav>
        </>
    )
}

export default Navbar;