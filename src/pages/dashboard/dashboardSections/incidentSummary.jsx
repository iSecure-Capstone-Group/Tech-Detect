import styles from "./incidence.module.css"

const IncidentSummary = ({ children, variant }) => {
    return(
        <>
            <div className={styles.incidentSummaryVariantToggle} incidentSummary={variant}>
                {children}
            </div>
        </>
    )
}

export default IncidentSummary