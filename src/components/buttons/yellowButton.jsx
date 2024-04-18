import styles from "./buttons.module.css"

const YellowButton = ({ children, variant, navVariant, border }) =>{
    return(
        <>
            <div className={styles.yellowBtnContainer} buttonVariant={variant}  buttonNavVariant={navVariant}>
                {/* <button type="submit" className={styles.yellowBtn} borderWhite={border}>{children}</button> */}
                {children}
            </div>
        </>
    )
}

export default YellowButton