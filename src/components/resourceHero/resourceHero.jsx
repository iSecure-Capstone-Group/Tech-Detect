import styles from "./resourceHero.module.css"

const ResourceHero = ({ children, variant }) => {
    return(
        <>
            <div className={styles.resourceHeroContainer} resourceSecondHero={variant}>
                {children}
                {/* <div className={styles.resourceHeroOverlay}>
                    <h3 className={styles.resourceHeroText}>{heroText}</h3>
                </div> */}

            </div>
        </>
    )
}

export default ResourceHero