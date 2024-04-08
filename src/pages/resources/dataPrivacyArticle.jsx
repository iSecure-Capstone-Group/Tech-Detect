import articleStyles from "./resourcePage.module.css"
import Footer from "../../components/footer/footer"
import SectionHeading from "../../components/sectionHeading/sectionHeading"
import articleSectionStyles from "../../components/resourceArticle/articleSection.module.css"
import styles from "../logSignPages/terms.module.css"
import termstyles from "../logSignPages/terms.module.css"
import withNavigation from "../../components/HOCs/withNavigationBar"

const DataPrivacyArticle = () => {
    return(
        <>
            <div>
            <div>
                <div className={articleStyles.articleHero}>
                    <img className={articleStyles.articleHeroImage} src={"https://res.cloudinary.com/dbv1y1xey/image/upload/v1711741287/Frame_626424_id3hqj.svg"} alt="" />
                </div>
            </div>

            
            <div className={articleStyles.dataPrivacyContainer}>
                <SectionHeading heading="The Importance of Data Privacy In The Digital Age"/>

                <div className={termstyles.termsContainer}>
                    <div className={articleSectionStyles.eachTermsDescriptionContainer}>
                        <p className={styles.eachTermsDescription}>In today's interconnected world, where vast amounts of data are generated, shared, and stored online, ensuring data privacy has become more critical than ever. The digital age has brought unprecedented convenience and efficiency, but it has also exposed individuals and organizations to various privacy risks and threats.</p>
                        <p className={styles.eachTermsDescription}>Data privacy refers to the protection of sensitive information from unauthorized access, disclosure, or misuse. This includes personal data such as names, addresses, financial information, and browsing habits, as well as corporate data such as intellectual property, trade secrets, and proprietary information.</p>
                        <p className={styles.eachTermsDescription}>The importance of data privacy in the digital age cannot be overstated, as it impacts individuals, businesses, and society as a whole in several ways:habits, as well as corporate data such as intellectual property, trade secrets, and proprietary information.</p>
                        
                        
                        <ul className={articleStyles.ul}>
                            <li className={`${styles.eachTermsDescription} ${articleStyles.li}`}><span className={termstyles.eachTermsHeading} >Protection of Personal Information:</span> Data privacy safeguards individuals' sensitive personal information from being exploited by cybercriminals, hackers, or malicious entities. It ensures that personal data remains confidential and secure, reducing the risk of identity theft, fraud, and other cybercrimes.</li>
                            
                            <li className={`${styles.eachTermsDescription} ${articleStyles.li}`}><span className={termstyles.eachTermsHeading} >Trust and Reputation:</span>  Maintaining strong data privacy practices fosters trust and confidence among customers, clients, and stakeholders. When individuals know that their data is being handled responsibly and securely, they are more likely to engage with businesses and organizations and share their information willingly.</li>
                            
                            <li className={`${styles.eachTermsDescription} ${articleStyles.li}`}><span className={termstyles.eachTermsHeading} >Compliance with Regulations:</span> The digital age has seen the introduction of stringent data protection regulations and laws, such as the General Data Protection Regulation (GDPR). Adhering to these regulations is not only a legal requirement but also demonstrates a commitment to ethical data handling practices.</li>

                            <li className={`${styles.eachTermsDescription} ${articleStyles.li}`}><span className={termstyles.eachTermsHeading} >Business Competitiveness:</span> Data privacy has become a competitive differentiator for businesses in today's market. Companies that prioritize data privacy and security are viewed as trustworthy and reliable partners, gaining a competitive edge over their peers.</li>

                            <li className={`${styles.eachTermsDescription} ${articleStyles.li}`}><span className={termstyles.eachTermsHeading} >Protection Against Cyber Threats:</span> Data privacy measures, such as encryption, access controls, and secure data storage, help mitigate the risk of data breaches, cyberattacks, and data loss incidents. By implementing robust data privacy practices, organizations can better safeguard their digital assets and infrastructure.</li>
                        </ul>
                        
                    </div>
                </div>

                
            </div>

           

            <Footer/>
            </div>
        </>
    )
}

export default withNavigation(DataPrivacyArticle)