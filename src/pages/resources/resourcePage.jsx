import ResourceHero from "../../components/resourceHero/resourceHero"
import styles from "../../components/resourceHero/resourceHero.module.css"

const ResourcePage = () => {
    return(
        <>
        <div>
            <ResourceHero>
                <div className={styles.resourceHeroOverlay}>
                    <h3 className={styles.resourceHeroText}>Explore our latest articles, insights and expert opinionson <span className={styles.yellowText}>cybersecurity</span> trends, bestpractices and industry updates</h3>
                </div>
            </ResourceHero >
            <ResourceHero variant="anotherHero">
                <div className={`${styles.resourceHeroOverlay} ${styles.noOverlay}`}>
                    <h3 className={styles.resourceHeroText}>Explore more insightful articles on cybersecurity. Start reading now!</h3>
                </div>
            </ResourceHero >
        </div>
        </>
    )
}

export default ResourcePage