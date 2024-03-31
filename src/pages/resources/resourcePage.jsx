import ResourceHero from "../../components/resourceHero/resourceHero"
import styles from "../../components/resourceHero/resourceHero.module.css"
import SectionHeading from "../../components/sectionHeading/sectionHeading"
import Articles from "../../components/resourceArticle/articleSection"
import YellowButton from "../../components/buttons/yellowButton"
import Styles from "./resourcePage.module.css"
import Categories from "../../components/categoriesSection/categories"

const ResourcePage = () => {
    return(
        <>
        <div>
            <ResourceHero>
                <div className={styles.resourceHeroOverlay}>
                    <h3 className={styles.resourceHeroText}>Explore our latest articles, insights and expert opinionson <span className={styles.yellowText}>cybersecurity</span> trends, bestpractices and industry updates</h3>
                </div>
            </ResourceHero >

            <div className={Styles.articleSection}>
                <SectionHeading heading="Featured Articles"/>
                <div>
                    <Articles articleImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711741287/Frame_626424_id3hqj.svg" articleHeading="The Importance of Data Privacy In The Digital Age" articleDetails="In today's interconnected world, where vast amounts of data are generated, shared, and stored online, ensuring data privacy has become more critical than ever. The digital age has brought unprecedented convenience and efficiency, but it has also exposed individuals and organizations to various privacy risks and threats." articleDetails1="Data privacy refers to the protection of sensitive information from unauthorized access, disclosure, or misuse. This includes personal data such as names, addresses, financial information, and browsing habits, as well as corporate data such as intellectual."/>
 
                </div>

            </div>

            <div className={Styles.categoriesSection}>
                <SectionHeading heading="Categories"/>
                <Categories />
                <YellowButton yellowBtn="Get Started" variant="center" >
                    <p>View All</p>
                </YellowButton>
            </div>

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