// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
import settingsStyles from "./settings.module.css"
import SettingsHeading from "./settingsHeading"
import PersonalInfoSharing from "./personalInfoSharing"
import OnAndOffIcon from "./onANdOffSwitch"
const Security = () => {
    return(
        <>
            <div className={settingsStyles.generalSettingsContainer}>
                <SettingsHeading heading="Security" headingExplanation="Customize your security preferences to ensure the safety of your account and data"/>
            </div>

            <div className={settingsStyles.infoChoiceConatiner}>
                <PersonalInfoSharing>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Password Setting</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p>Strengthen your account security by updating your password regularly. </p>
                            
                        </div>
                    </div>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Two-Factor Authentication (2FA)</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p> Enable 2FA to add an extra layer of security to your account.</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Activity Logs</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p> Monitor account activity to detect any unusual behavior or potential security threats.</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Encryption Settings</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p>Enable end-to-end encryption for enhanced data protection and privacy.</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Security Recommendations</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p>Receive personalized recommendations to improve your account security.</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                </PersonalInfoSharing>
            </div>
        </>
    )
}

export default Security