// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
// import { PieChart, Pie, Cell } from 'recharts';
import RadialGuageChart from "./charts/radialGuageCharts";

import styles from "./overview.module.css"
import SimpleBarChart from './charts/barChart';
import threatStyles from "./threatMonitoring.module.css"
import incidenceStyle from "./incidence.module.css"
import anomalyStyles from "./anomaly.module.css"
import ThreatSummary from "./threatSummary";

const ThreatMonitoring = () => {
  return(
    <>
        <div className={styles.overview}>
          <div className={incidenceStyle.dashBoardMenuIntro}>
              <h4>Threat Identification and Monitoring</h4>
          </div>

          <div className={threatStyles.threatContainer}>
            <section className={threatStyles.barChartContainer}>
              <p className={styles.chartTitle}>Threats over Time</p>
              <SimpleBarChart />
            </section>

            <section className={threatStyles.threatSummaryContainer}>
              <p className={styles.chartTitle}>Threat Summary</p>
              <div className={threatStyles.allThreatMonitorContainer}>
                <div className={threatStyles.threatMonitorSummaryContainer}>
                  <ThreatSummary threatLocation="Application" time="30 mins ago" NumOfThreats="99 of 128 scanned" vulnerabilities="10 medium vulnerabilities detected"/>
                </div>

                <div className={threatStyles.threatMonitorSummaryContainer}>
                  <ThreatSummary threatLocation="Databases" time="30 mins ago" NumOfThreats="44 of 128 scanned" vulnerabilities="No vulnerabilities detected"/>
                </div>


                <div className={threatStyles.threatMonitorSummaryContainer}>
                  <ThreatSummary threatLocation="Firewalls" time="30 mins ago" NumOfThreats="99 of 128 scanned" vulnerabilities="2 Critical vulnerabilities detected"/>
                </div>
                <div className={threatStyles.threatMonitorSummaryContainer}>
                  <ThreatSummary threatLocation="Servers" time="1 day ago" NumOfThreats="42 of 128 scanned" vulnerabilities="No vulnerabilities detected"/>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* <div>
          <RadialGuageChart />
        </div> */}

        
    </>
  )
}

export default ThreatMonitoring