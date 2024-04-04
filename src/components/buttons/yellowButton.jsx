import styles from "./buttons.module.css"

const YellowButton = ({ children, variant, navVariant, border }) =>{
    return(
        <>
            <div className={styles.yellowBtnContainer} buttonVariant={variant}  buttonNavVariant={navVariant}>
                <button className={styles.yellowBtn} borderWhite={border}>{children}</button>
            </div>
        </>
    )
}

export default YellowButton