import styles from "./incidence.module.css"
const IncidenceStatus = ({ children, variant }) => {
    return(
        <> 
            
            <span className={styles.status} statusResolved={variant}>
                {children}
            </span>
            
            
        </>
    )
}
export default IncidenceStatus