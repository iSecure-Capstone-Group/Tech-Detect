import styles from "./features.module.css"

const Feautures = (props) => {
    return(
        <>
            <div className={styles.featureCardContainer}>
                <div className={styles.featureImageContainer}>
                    <img src={props.featureImage} alt="" />
                </div>
                <div className={styles.titleDescriptionContainer}>
                    <p className={styles.featureTitle}>{props.featureTitle}</p>
                    <p className={styles.featureDescription}>{props.featureDescription}</p>
                </div>
            </div>
        </>
    )
}

export default Feautures