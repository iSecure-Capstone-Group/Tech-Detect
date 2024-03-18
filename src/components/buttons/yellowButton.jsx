import styles from "./buttons.module.css"

const YellowButton = (props) =>{
    return(
        <>
            <button type="submit" className={styles.yellowBtn}>{props.yellowBtn}</button>
        </>
    )
}

export default YellowButton