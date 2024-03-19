import styles from "./sponsors.module.css"

const Sponsors = ({ children }) => {
    return(
        <>
            <div className={styles.sponosorsLogos}>
                {children}
            </div>
        </>
    )
} 

export default Sponsors