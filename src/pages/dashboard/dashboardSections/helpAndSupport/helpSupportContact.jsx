import helpSupportStyles from "./helpSupport.module.css"
import SettingsStyle from "../settings/settings"

const HelpSupportContact = () => {
    return(
        <>
            <div className={helpSupportStyles.contactConatiner}>
                
                
                    <p className={helpSupportStyles.contactDetails}>
                    Email: <span>support@techdetect.com</span>
                    </p>
                    <p className={helpSupportStyles.contactDetails}>
                    Phone: <span>+2349012456721</span>
                    </p>
                    <p className={helpSupportStyles.contactDetails}>
                    Support Hours: <span>08:00am-04:00pm GMT</span>
                    </p>
                
            </div>
        </>
    )
}

export default HelpSupportContact