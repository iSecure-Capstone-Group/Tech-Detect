import styles from "./missionVision.module.css"

const MissionVision = ({ children, variant }) => {
    return(
        <>
            {/* <div className={styles.missionVisionContainer} backgroundVariant={variant}>
                <p>{props.heading}</p>
            </div> */}
            <div className={styles.missionVisionContainer} backgroundVariant={variant}>
                {children}
            </div>
        </>
    )
}

export default MissionVision