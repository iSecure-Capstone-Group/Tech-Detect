import threatMonitorStyles from "./threatMonitoring.module.css"

const ThreatSummary = (props) => {
    return(
        <>
            <div className={threatMonitorStyles.propsthreatSummaryContainer}>
                <div className={threatMonitorStyles.threatAndTimeContainer}>
                    <span>{props.threatLocation}</span>
                    <p>{props.time}</p>
                </div>
                <p>{props.NumOfThreats}</p>
                <p>{props.vulnerabilities}</p>
            </div>
        </>
    )
}

export default ThreatSummary