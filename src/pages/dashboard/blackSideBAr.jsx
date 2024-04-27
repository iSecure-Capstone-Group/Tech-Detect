import styles from "./blackSideBar.module.css"
import Logo from "../../components/logo"
import DashBoardMenu from "./dashBoardMenu"
import { Link } from 'react-router-dom'
// import Overview from "./dashboardSections/overview"
// import incidence from "./dashboardSections/incidence"

const BlackSideBAr = ({ children }) => {
    return(
        <>
            <div className={styles.blackSideBarCOntainer}>
                <Logo />
                {children}
                
            </div>

            

        </>
    )
} 

export default BlackSideBAr