import styles from "./buttons.module.css"

const YellowButton = ({ children, variant = "center" }) =>{
    return(
        <>
            <div className={styles.yellowBtnContainer} buttonVariant={variant}>
                <button className={styles.yellowBtn} >{children}</button>
            </div>
        </>
    )
}

export default YellowButton