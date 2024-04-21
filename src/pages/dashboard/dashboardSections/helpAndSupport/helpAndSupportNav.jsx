import styles from "../../../../components/navigation/navigation.module.css"
import { Link } from "react-router-dom"
import settingStyles from "../settings/settings.module.css"

const HelpAndSupportNavigationBar = () => {
    return(
        <>

        <div>
        <ul className={`${styles.navUl} ${settingStyles.settingNavUl}`}>
                <div className={settingStyles.settingsNavContainer}>
                    <li className={`${styles.navli} ${settingStyles.settingsNavli}`}><Link to="./">CONTACT</Link></li>
                    <li className={`${styles.navli} ${settingStyles.settingsNavli}`}><Link to="./faqs">FAQs</Link></li>
                    <li className={`${styles.navli} ${settingStyles.settingsNavli}`}><Link to="./ticket">TICKET</Link></li>
                    
                </div>
                
            </ul> 
        </div>
        </>
    )
}

export default HelpAndSupportNavigationBar