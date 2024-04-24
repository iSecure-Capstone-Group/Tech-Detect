import styles from "./overview.module.css"
import incidenceStyle from "./incidence.module.css"
import IncidenceStatus from "./incidenceStatus"
import IncidentSummary from "./incidentSummary"


const Incidence = () => {
    return(
        <>
            <div className={styles.overview}>
                <div className={incidenceStyle.dashBoardMenuIntro}>
                    <h4>Incidence Response</h4>
                </div>
                <div className={incidenceStyle.incidentSumaryContainer}>
                    <div className={incidenceStyle.incidentSummaryCard}>
                        <IncidentSummary variant="activeIncidents">
                            <div className={incidenceStyle.incidentSummary}>
                                <p>Active Incidents</p>
                                <p>23</p>
                            </div>
                        </IncidentSummary>

                    </div>

                    <div className={incidenceStyle.incidentSummaryCard}>
                        <IncidentSummary variant="resolvedIncidents">
                            <div className={incidenceStyle.incidentSummary}>
                                <p>Resolved Incidents</p>
                                <p>27</p>
                            </div>
                        </IncidentSummary>
                    </div>

                    <div className={incidenceStyle.incidentSummaryCard}>
                        <IncidentSummary variant="totalIncidents">
                            <div className={incidenceStyle.incidentSummary}>
                                <p>Total Incidents</p>
                                <p>50</p>
                            </div>
                        </IncidentSummary>
                    </div>
                </div>
                <div className={incidenceStyle.tableContainer}>
                    <table>
                        <tr>
                            <th>Incident Type</th>
                            <th>Affected Systems</th>
                            <th>Severity</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        <tr>
                            <td>Data Breach</td>
                            <td>Database Server</td>
                            <td>High</td>
                            <td>April 14, 2024</td>
                            <td>10:15am</td>
                            <td className={incidenceStyle.status}> 
                                <IncidenceStatus variant="resolved">
                                    Resolved
                                </IncidenceStatus>
                            </td>
                            <td>--</td>
                        </tr>

                        <tr>
                            <td>Malware Attack</td>
                            <td>Workstation</td>
                            <td>Medium</td>
                            <td>April 6, 2024</td>
                            <td>12:20pm</td>
                            <td className={incidenceStyle.status}>
                                <IncidenceStatus variant="inProgress">
                                    In Progress
                                </IncidenceStatus>
                            </td>
                            <td><span className={incidenceStyle.action}>Request Service</span></td>
                        </tr>

                        <tr>
                            <td>Phishing Attempt</td>
                            <td>Email System</td>
                            <td>Low</td>
                            <td>April 2, 2024</td>
                            <td>04:30pm</td>
                            <td className={incidenceStyle.status}> 
                                <IncidenceStatus variant="resolved">
                                    Resolved
                                </IncidenceStatus>
                            </td>
                            <td>--</td>
                        </tr>

                        <tr>
                            <td>Insider Threat</td>
                            <td>CRM Sysytem</td>
                            <td>High</td>
                            <td>March 11, 2024</td>
                            <td>11:00am</td>
                            <td className={incidenceStyle.status}>
                                <IncidenceStatus variant="inProgress">
                                    In Progress
                                </IncidenceStatus>
                            </td>
                            <td><span className={incidenceStyle.action}>Request Service</span></td>
                        </tr>

                        <tr>
                            <td>Suspicious Login</td>
                            <td>User Authentication</td>
                            <td>Medium</td>
                            <td>March 5, 2024</td>
                            <td>06:00pm</td>
                            <td className={incidenceStyle.status}> 
                                <IncidenceStatus variant="resolved">
                                    Resolved
                                </IncidenceStatus>
                            </td>
                            <td>--</td>
                        </tr>

                        <tr>
                            <td>Sysytem Failure</td>
                            <td>Backup Server</td>
                            <td>High</td>
                            <td>March 4, 2024</td>
                            <td>04:00am</td>
                            <td className={incidenceStyle.status}>
                                <IncidenceStatus variant="inProgress">
                                    In Progress
                                </IncidenceStatus>
                            </td>
                            <td><span className={incidenceStyle.action}>Request Service</span></td>
                        </tr>

                        <tr>
                            <td>Data Loss</td>
                            <td>Cloud Storage</td>
                            <td>High</td>
                            <td>March 4, 2024</td>
                            <td>10:95am</td>
                            <td className={incidenceStyle.status}>
                                <IncidenceStatus variant="inProgress">
                                    In Progress
                                </IncidenceStatus>
                            </td>
                            <td><span className={incidenceStyle.action}>Request Service</span></td>
                        </tr>

                        <tr>
                            <td>DDoS</td>
                            <td>Web Application</td>
                            <td>High</td>
                            <td>March 4, 2024</td>
                            <td>10:44pm</td>
                            <td className={incidenceStyle.status}> 
                                <IncidenceStatus variant="resolved">
                                    Resolved
                                </IncidenceStatus>
                            </td>
                            <td>--</td>
                        </tr>

                        <tr>
                            <td>Vulnerability</td>
                            <td>Software Application</td>
                            <td>Medium</td>
                            <td>March 4, 2024</td>
                            <td>11:30pm</td>
                            <td className={incidenceStyle.status}> 
                                <IncidenceStatus variant="resolved">
                                    Resolved
                                </IncidenceStatus>
                            </td>
                            <td>--</td>
                        </tr>

                        <tr>
                            <td>Ransomware</td>
                            <td>SFile System</td>
                            <td>High</td>
                            <td>Feb 26, 2024</td>
                            <td>11:17pm</td>
                            <td className={incidenceStyle.status}>
                                <IncidenceStatus variant="resolved">
                                    Resolved
                                </IncidenceStatus>
                            </td>
                            <td>--</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Incidence