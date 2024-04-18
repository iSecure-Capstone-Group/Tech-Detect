import anomalyStyles from "./anomaly.module.css"

const AnomalyActivityLog = (props) => {
    return(
        <>
            <div>
                <p>{props.heading}</p>
                <div className={anomalyStyles.activityLogContainer}>
                    <div className={anomalyStyles.activityLog}>
                        <span>Activity:</span><p>{props.activity}</p>
                    </div>
                    <div className={anomalyStyles.activityLog}>
                        <span>Descr:</span><p>{props.description}</p>
                    </div>
                    <div className={anomalyStyles.activityLog}>
                        <span>Time:</span><p>{props.time}</p>
                    </div>
                    <div className={anomalyStyles.activityLog}>
                        <span>Date:</span><p>{props.date}</p>
                    </div>
                    <div className={anomalyStyles.activityLog}>
                        <span>Status:</span><p>{props.status}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnomalyActivityLog
