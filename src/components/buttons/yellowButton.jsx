import styles from "./buttons.module.css"

const YellowButton = ({ children, variant, navVariant }) =>{
    return(
        <>
            <div className={styles.yellowBtnContainer} buttonVariant={variant} buttonNavVariant={navVariant}>
                <button className={styles.yellowBtn} >{children}</button>
            </div>
        </>
    )
}

export default YellowButton