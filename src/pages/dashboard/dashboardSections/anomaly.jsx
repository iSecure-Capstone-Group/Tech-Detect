// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
import styles from "./anomaly.module.css"
import LineChart from "./charts/lineChart"
import DonutPieChart from "./charts/donutPieChart"
import overviewStyles from "./overview.module.css"
import AnomalyActivityLog from "./anomalyActivityLog"
import incidenceStyle from "./incidence.module.css"
const Anomaly = () => {
    return(
        <>
            <div className={overviewStyles.overview}>
                <div className={incidenceStyle.dashBoardMenuIntro}>
                    <h4>Anomaly and Activity Detection</h4>
                </div>

                <div className={styles.anomalyChartActivityLogContainerContainer}>
                    
                    <section className={styles.lineChartDonutContainer}>
                        <div className={styles.lineChartCintainer}>
                            <p className={styles.anomalyChartTitle}>System Performance/Behaviour by Month</p>
                            <LineChart />
                        </div>

                        
                        <div className={styles.donutContainer}>
                            <p className={styles.anomalyChartTitle}>Traffic</p>
                            <DonutPieChart />
                        </div>
                        
                    </section>

                    <section className={styles.anomalyActivityLogContainer}>
                        <p className={styles.anomalyChartTitle}>Recent Activity Log</p>
                        <div className={styles.activityLogComponenet}>
                            <AnomalyActivityLog activity="Firewall Configuration Update" description="Firewall rules updated to restrict outbound traffic on port 22." time="09:30 am" date="March 4, 2024" status="Completed"/>
                        </div>
                        
                        <div className={styles.activityLogComponenet}>
                            <AnomalyActivityLog activity="User Login" description="Successful login from IP address 192.1688.1.10" time="11:30 am" date="February 28, 2024" status="Completed"/>
                        </div>
                        
                        <div className={styles.activityLogComponenet}>
                            <AnomalyActivityLog activity="System Updaten" description="Patch applied to address critical security vulnerability." time="09:30 am" date="February 24, 2024" status="Completed"/>
                        </div>
                    </section>
                </div>
                
            </div>
        </>
    )
}

export default Anomaly