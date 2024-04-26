import styles from "../../../../components/navigation/navigation.module.css"
import { Link } from "react-router-dom"
import General from "./general"
import Privacy from "./privacy"
import Billing from "./billing"
import Security from "./security"
import settingStyles from "./settings.module.css"
const SettingsNAvigationBar = () => {
    return(
        <>

        <div>
        <ul className={`${styles.navUl} ${settingStyles.settingNavUl}`}>
                <div className={settingStyles.settingsNavContainer}>
                    <li className={`${styles.navli} ${settingStyles.settingsNavli}`}><Link to="./">GENERAL</Link></li>
                    <li className={`${styles.navli} ${settingStyles.settingsNavli}`}><Link to="./privacy">PRIVACY</Link></li>
                    <li className={`${styles.navli} ${settingStyles.settingsNavli}`}><Link to="./billing">BILLING <span className={settingStyles.subDisappear}> & SUBSCRIPTION</span></Link></li>
                    <li className={`${styles.navli} ${settingStyles.settingsNavli}`}><Link to="./security">SECURITY</Link></li>
                </div>
                
            </ul> 
        </div>
        </>
    )
}

export default SettingsNAvigationBar