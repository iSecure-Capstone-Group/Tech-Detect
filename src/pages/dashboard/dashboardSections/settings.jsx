// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
import styles from "./overview.module.css"
import incidenceStyle from "./incidence.module.css"
const Settings = () => {
    return(
        <>
            <div className={styles.overview}>
                <div className={incidenceStyle.dashBoardMenuIntro}>
                    <h4>Settings</h4>
                </div>
            </div>
        </>
    )
}

export default Settings