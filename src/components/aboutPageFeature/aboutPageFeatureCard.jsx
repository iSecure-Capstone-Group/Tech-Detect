import styles from "./aboutPageFeature.module.css"

const AboutPageFeatureCard = (props) => {
    return(
        <>
            <div >
                <div className={styles.featureIconContainer}>
                    <div>{props.svg}</div>
                    <p className={styles.feature}>{props.feature}</p>
                </div>
            </div>
        </>
    )
}

export default AboutPageFeatureCard