// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
import styles from "../overview.module.css"
import incidenceStyle from "../incidence.module.css"
import HelpAndSupportNavigationBar from "./helpAndSupportNav"
import { Outlet } from "react-router-dom"
const HelpANdSupport = () => {
    return(
        <>
            <div className={styles.overview}>
                <div className={incidenceStyle.dashBoardMenuIntro}>
                    <h4>Help and Support</h4>
                </div>
                <HelpAndSupportNavigationBar />
                <Outlet />
            </div>
        </>
    )
}

export default HelpANdSupport