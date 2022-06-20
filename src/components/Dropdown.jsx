import React from "react"
import styles from "../styles/Dropdown.module.scss"
import arrow from '../images/arrow.png'
import checked from '../images/checked.png'
const Dropdown = ({ config }) => {
    const [isSelected, setIsSelected] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState("")

    return (
        <div className={styles.wrapper}>
            <div className={styles.dropdown} onClick={() => { setIsSelected(!isSelected) }}>
                <span className={selectedOption === "" ? styles.placeholder : styles.hidden}>
                    {config.placeholder || "Select"}
                    <img src={arrow} className={config.type === 'variant3' ? styles.hidden : styles.dropdown_image} alt="dropdown arrow" style={isSelected ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} />
                </span>

                <span className={selectedOption !== "" ? styles.selected_option : styles.hidden}>
                    <img src={config.image || ''} className={config.image && config.type === 'variant2' ? styles.option_image : styles.hidden} alt="options" />
                    {selectedOption}
                    <img src={arrow} className={config.type === 'variant3' ? styles.hidden : styles.dropdown_image} alt="dropdown arrow" style={isSelected ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} />
                </span>

            </div>
            <div className={isSelected ? styles.options : styles.hidden}>
                {config?.options.map((option, index) => {
                    if (config.type === "variant4") {
                        return (
                            <div key={index + option}
                                onClick={() => {
                                    setSelectedOption(option)
                                    setIsSelected(false)
                                }}>
                                <p className={styles.option} >
                                    <input type="radio" className={styles.radio} checked={selectedOption === option} readOnly />
                                    <label className={styles.radio_label}>{option}</label>
                                    <span className={styles.description_option}>{config.descriptionOption}</span>
                                </p>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index + option}
                                onClick={() => {
                                    setSelectedOption(option)
                                    setIsSelected(false)
                                }}>
                                <p className={styles.option} >
                                    <img src={config.image || ''} className={config.image && config.type === 'variant2' ? styles.option_image : styles.hidden} alt="options" />
                                    {option}
                                    <img src={checked} className={selectedOption === option ? styles.checked : styles.hidden} alt="checked" />
                                </p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Dropdown