import React from 'react';
import styles from './overview.module.css';
import RadialChart from './charts/radialChart';
import SimpleBarChart from './charts/barChart';
import SimplePieChart from './charts/pieChart';
import SimpleAreaChart from './charts/areaChart';
import ColorTable from './charts/colorTable';
import incidenceStyle from "./incidence.module.css";
// import { fetchUserData, fetchSettingsData } from "../../../components/mockData";
import YellowButton from '../../../components/buttons/yellowButton';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../../../firebase';
// import { doc, getDoc } from 'firebase/firestore';


const Overview = () => {
  const [userDetails, setUserDetails] = useState(null);
  // const [settingsData, setSettingsData] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user)
      setUserDetails(user)
    })
  }

  useEffect(() => {
    // const fetchData = async () => {
    //   const userResponse = await fetchUserData();
    //   const settingsResponse = await fetchSettingsData();

    //   setUserData(userResponse);
    //   setSettingsData(settingsResponse);
    // };

    fetchUserData();
  }, []);

  // if (!userData || !settingsData) {
  //   return <div>Loading...</div>; // You can show a loading indicator
  // }
  

 

  return (
    <div>
      {userDetails ? (
        <>
        
        <div className={styles.overview}>
          <div className={incidenceStyle.dashBoardMenuIntro}>
            <h4>Hi {userDetails.displayName}! Welcome to TechDetect</h4>
          </div>
  
          <div className={styles.overviewChartsContainer}>
            <section className={styles.AnalysisIncidentHeatmapConatiner}>
              <div className={styles.areaChartContainer}>
                <p className={styles.chartTitle}>Performance Analytics</p>
                <SimpleAreaChart />
              </div>
  
              <div className={styles.pieChartContainer}>
                <div className={styles.pieChart}>
                  <div className={styles.titleAndPiechartContainer}>
                    <p className={styles.chartTitle}>Active Incidents</p>
                    <SimplePieChart />
                  </div>
                  <div className={styles.boxesAndYellowButtonContainer}>
                    <div className={styles.allBoxContainer}>
                      <div className={styles.threatBoxContainer}>
                        <span className={`${styles.threatBox} ${styles.red}`}></span>
                        <p>Data Breach</p>
                      </div>
                      <div className={styles.threatBoxContainer}>
                        <span className={`${styles.threatBox} ${styles.orange}`}></span>
                        <p>Malware Infection</p>
                      </div>
                      <div className={styles.threatBoxContainer}>
                        <span className={`${styles.threatBox} ${styles.yellow}`}></span>
                        <p>Suspicious Login attempt</p>
                      </div>
  
                      <div className={styles.overviewYellowButton}>
                      <Link to="#">View Report</Link>
                        {/* <YellowButton yellowBtn="Get Started" variant="center" >
                            <Link to="#">View Report</Link>
                        </YellowButton> */}
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className={styles.overviewColorTable}>
                  <p className={styles.chartTitle}> Threat Level Heatmap</p>
                  <ColorTable />
                </div>
              </div>
            </section>
  
            <section  className={styles.protectionStatusContainer}>
              <div>
              <p className={styles.chartTitle}> Protection Status</p>
              <RadialChart />
              </div>
              <div className={styles.protectionStatusList}>
                <ul>
                  <li>Enable Multi-Factor Authentication for an added layer of security.</li>
                  <li>Use a strong and unique password.</li>
                  <li>Avoid clicking on suspicious links or email attachments.</li>
                </ul>
              </div>
            </section>
          </div>
  
          
          
          
          {/* <SimpleBarChart /> */}
          
        </div>
  
              
              
          
      </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Overview;