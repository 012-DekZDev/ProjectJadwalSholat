import styles from "../css/ToggleButton.module.css";

function ToggleButton({ isGreen, onToggle, className}) {
return (
    <div
        onClick={onToggle}
        className={`${styles.track} ${className || ""}`}
        style={{
        backgroundColor: isGreen ? "#1D9E75" : "#1a3a6b",
    }}
    >
        <div
            className={styles.thumb}
            style={{
            transform: isGreen ? "translateX(0px)" : "translateX(28px)",
            }}
        />
    </div>
    );
}

export default ToggleButton;