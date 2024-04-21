// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
import styles from "../overview.module.css"
import incidenceStyle from "../incidence.module.css"
import SettingsNAvigationBar from "./settingsNav"
import { Outlet } from "react-router-dom"
import settingsStyles from "./settings.module.css"
const Settings = () => {
    return(
        <>
            <div className={styles.overview}>
                <div className={incidenceStyle.dashBoardMenuIntro}>
                    <h4>Settings</h4>
                </div>

                <div className={settingsStyles.settingsContainer}>
                    <SettingsNAvigationBar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Settings