function ToggleButton({ isGreen, onToggle }) {
return (
    <div
    onClick={onToggle}
    style={{
        width: "56px",
        height: "28px",
        borderRadius: "999px",
        backgroundColor: isGreen ? "#1D9E75" : "#1a3a6b",
        display: "flex",
        alignItems: "center",
        padding: "3px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        border: "1px solid #556b64"
        }}
    >
        <div
        style={{
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        backgroundColor: "white",
        transform: isGreen ? "translateX(0px)" : "translateX(28px)",
        transition: "transform 0.3s ease",
        }}
    />
    </div>
);
}

export default ToggleButton;