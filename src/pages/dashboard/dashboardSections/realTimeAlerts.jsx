import styles from "./overview.module.css"
import incidenceStyle from "./incidence.module.css"
import IncidenceStatus from "./incidenceStatus"
import threatStyles from "./realTimeAlerts.module.css"
import { useState } from "react"

const RealTimeAlerts = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
        <div className={styles.overview}>
            <div className={incidenceStyle.dashBoardMenuIntro}>
            <h4>Real Time Alerts</h4>
            </div>
            <p className={threatStyles.threatDetectionDates}>14th February</p>
            <div className={threatStyles.realTimeContainer}>
                <IncidenceStatus variant="realTimeResolved">
                    <div
                        className={incidenceStyle.initialText}
                        onClick={toggleExpand}
                        style={{
                        whiteSpace: isExpanded ? 'normal' : 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        }}>

                        <div className={threatStyles.threatStatusHeading}>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z"
                            fill="#43A047"/></svg>

                            <p className={threatStyles.threatStatus}>Threat Resolved Successfully</p>
                        </div>

                        {!isExpanded &&  <p className={threatStyles.collapsedText}>
                            The security alert has been resolved successfully. Your response has helped prevent potential threat{''}
                            <p className={threatStyles.learnMore}>Learn More</p>
                        </p>}
                        

                        {isExpanded && (
                        <div className={threatStyles.expandedText}>
                            <p>
                                <span className={threatStyles.successful}>Alert Received Successfully</span>
                                Congratulations! The breach has been successfully resolved. Your prompt and effective response has mitigated potential risks, ensuring the safety and integrity of your digital assets. Here's a detailed breakdown of the resolution process:Alert Details:
                                <ul className={threatStyles.threatStatusUl}>
                                    <li>Alert ID: H1A76</li>
                                    <li>Severity Level: Medium</li>
                                    <li>Incident Type: [Incident Type]</li>
                                    <li>Timestamp: 13:09 (14/02/24)</li>
                                </ul>
                                <p>Resolution Steps:</p>

                                <ul className={threatStyles.threatStatusUl}>
                                    <li>Identification: The alert was identified and prioritized based on its severity and impact on the system.Alert ID: H1A76</li>
                                    <li>Investigation: a thorough Scan investigation to understand the nature and scope of the security breach.</li>
                                    <li>Response: Immediate action was taken to contain and mitigate the security threat, preventing further impact on your systems.</li>
                                    <li>Resolution: The necessary measures were implemented to address the root cause of the alert and ensure a secure environment.</li>
                                </ul>
                            </p>
                        </div>
                )}
                    </div>
            
                    
                </IncidenceStatus>
            </div>


            <div className={threatStyles.realTimeContainer}>
                <IncidenceStatus variant="realTimeThreat">
                    <div
                        className={incidenceStyle.initialText}
                        onClick={toggleExpand}
                        style={{
                        whiteSpace: isExpanded ? 'normal' : 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        }}>

                        <div className={threatStyles.threatStatusHeading}>
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 13h2v2H9v-2Zm0-8h2v6H9V5Zm.99-5C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0ZM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z" fill="#FF9800"/></svg>

                            <p className={threatStyles.threatStatus}>Threat Detected</p>
                        </div>

                        {!isExpanded &&  <p className={threatStyles.collapsedText}>
                        A medium level security breach has been detected. Immediate action is required to mitigate potential risks to your digital assets.{''}
                            {/* <p className={threatStyles.learnMore}>Learn More</p> */}
                        </p>}
                        

                        {isExpanded && (
                        <div className={threatStyles.expandedText}>
                            <p>
                            A medium level security breach has been detected. Immediate action is required to mitigate potential risks to your digital assets.
                            </p>
                        </div>
                )}
                    </div>
            
                    
                </IncidenceStatus>
            </div>

            <div className={threatStyles.realTimeContainer}>
                <IncidenceStatus variant="realTimeAuthFail">
                    <div
                        className={incidenceStyle.initialText}
                        onClick={toggleExpand}
                        style={{
                        whiteSpace: isExpanded ? 'normal' : 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        }}>

                        <div className={threatStyles.threatStatusHeading}>
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 13h2v2H9v-2Zm0-8h2v6H9V5Zm.99-5C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0ZM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z" fill="#FF9800"/></svg>

                            <p className={threatStyles.threatStatus}>Authentication Failed</p>
                        </div>

                        {!isExpanded &&  <p className={threatStyles.collapsedText}>
                        Error: Authentication failed. Please check your credentials and try again. Contact support if the issue persists.{''}
                            {/* <p className={threatStyles.learnMore}>Learn More</p> */}
                        </p>}
                        

                        {isExpanded && (
                        <div className={threatStyles.expandedText}>
                            <p>
                            Error: Authentication failed. Please check your credentials and try again. Contact support if the issue persists.
                            </p>
                        </div>
                )}
                    </div>
            
                    
                </IncidenceStatus>
            </div>

            <div className={threatStyles.realTimeContainer}>
                <IncidenceStatus variant="realTimeFilterAlert">
                    <div
                        className={incidenceStyle.initialText}
                        onClick={toggleExpand}
                        style={{
                        whiteSpace: isExpanded ? 'normal' : 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        }}>

                        <div className={threatStyles.threatStatusHeading}>
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 13h2v2H9v-2Zm0-8h2v6H9V5Zm.99-5C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0ZM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z" fill="#FF9800"/></svg>

                            <p className={threatStyles.threatStatus}>Filter Alerts!</p>
                        </div>

                        {!isExpanded &&  <p className={threatStyles.collapsedText}>
                        Hint: You can filter alerts by severity level (high, medium, low) to prioritize your incident response tasks more effectively.{''}
                            <p className={threatStyles.learnMore}>Learn More</p>
                        </p>}
                        

                        {isExpanded && (
                        <div className={threatStyles.expandedText}>
                            <p>
                            Error: Authentication failed. Please check your credentials and try again. Contact support if the issue persists.
                            </p>
                        </div>
                )}
                    </div>
            
                    
                </IncidenceStatus>
            </div>

            <p className={threatStyles.threatDetectionDates}>10th February</p>
            <div className={threatStyles.realTimeContainer}>
                <IncidenceStatus variant="realTimeResolved">
                    <div
                        className={incidenceStyle.initialText}
                        onClick={toggleExpand}
                        style={{
                        whiteSpace: isExpanded ? 'normal' : 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        }}>

                        <div className={threatStyles.threatStatusHeading}>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z"
                            fill="#43A047"/></svg>

                            <p className={threatStyles.threatStatus}>Threat Resolved Successfully</p>
                        </div>

                        {!isExpanded &&  <p className={threatStyles.collapsedText}>
                            The security alert has been resolved successfully. Your response has helped prevent potential threat{''}
                            <p className={threatStyles.learnMore}>Learn More</p>
                        </p>}
                        

                        {isExpanded && (
                        <div className={threatStyles.expandedText}>
                            <p>
                                <span className={threatStyles.successful}>Alert Received Successfully</span>
                                Congratulations! The breach has been successfully resolved. Your prompt and effective response has mitigated potential risks, ensuring the safety and integrity of your digital assets. Here's a detailed breakdown of the resolution process:Alert Details:
                                <ul className={threatStyles.threatStatusUl}>
                                    <li>Alert ID: H1A76</li>
                                    <li>Severity Level: Medium</li>
                                    <li>Incident Type: [Incident Type]</li>
                                    <li>Timestamp: 13:09 (14/02/24)</li>
                                </ul>
                                <p>Resolution Steps:</p>

                                <ul className={threatStyles.threatStatusUl}>
                                    <li>Identification: The alert was identified and prioritized based on its severity and impact on the system.Alert ID: H1A76</li>
                                    <li>Investigation: a thorough Scan investigation to understand the nature and scope of the security breach.</li>
                                    <li>Response: Immediate action was taken to contain and mitigate the security threat, preventing further impact on your systems.</li>
                                    <li>Resolution: The necessary measures were implemented to address the root cause of the alert and ensure a secure environment.</li>
                                </ul>
                            </p>
                        </div>
                )}
                    </div>
            
                    
                </IncidenceStatus>
            </div>
        </div>
    );
  };
  
  export default RealTimeAlerts;


// import React, { useState } from 'react';

// const ExpandableText = ({ text }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div onClick={toggleExpand}>
//       <p style={{ whiteSpace: isExpanded ? 'normal' : 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//         {text}
//       </p>
//       {!isExpanded && <button>Learn More</button>}
//     </div>
//   );
// };

// export default ExpandableText;
