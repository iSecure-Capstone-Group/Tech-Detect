// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
import settingsStyles from "./settings.module.css"
import SettingsHeading from "./settingsHeading"
import PersonalInfoSharing from "./personalInfoSharing"
import OnAndOffIcon from "./onANdOffSwitch"
const Privacy = () => {
    return(
        <>
            <div className={settingsStyles.generalSettingsContainer}>
                <SettingsHeading heading="Privacy Settings" headingExplanation="Here you can manage how your personal information is used and shared"/>
            </div>

            <div className={settingsStyles.infoChoiceConatiner}>
                <PersonalInfoSharing>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Data Sharing</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p>Manage your preferences for data sharing with third-party applications or partners</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Acivity tracking</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p> Manage your activity tracking preferences to control the data collected</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Location Sharing</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p> Control whether your location information is shared with TechDetect for enhanced services.</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                    <div className={settingsStyles.InfoChoiceToggleContainer}>
                        <p className={settingsStyles.InfoChoiceTitle}>Third-Party Access</p>
                        <div className={settingsStyles.InfoChoiceToggle}>
                            <p>Control access to your TechDetect data by third-party applications and services.</p>
                            <OnAndOffIcon />
                        </div>
                    </div>
                </PersonalInfoSharing>
            </div>
        </>
    )
}

export default Privacy