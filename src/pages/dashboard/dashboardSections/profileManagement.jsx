// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
import styles from "./overview.module.css"
import incidenceStyle from "./incidence.module.css"
import profileMMStyles from "./profileMM.module.css"
import YellowButton from "../../../components/buttons/yellowButton";
import { Link } from "react-router-dom";


import React, { useState, useEffect } from 'react';
import { fetchUserData, fetchSettingsData } from "../../../components/mockData"

const ProfileManagement = () => {
  const [userData, setUserData] = useState(null);
  const [settingsData, setSettingsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await fetchUserData();
      const settingsResponse = await fetchSettingsData();

      setUserData(userResponse);
      setSettingsData(settingsResponse);
    };

    fetchData();
  }, []);

  if (!userData || !settingsData) {
    return <div>Loading...</div>; // You can show a loading indicator
  }

  

  return (
    <>
        <div className={`${styles.overview} ${profileMMStyles.profileContainer}`}>
            <div className={incidenceStyle.dashBoardMenuIntro}>
                <h4>Profile Management</h4>
            </div>
            <div className={profileMMStyles.profileAndSettingContainer}>

                
                <section className={profileMMStyles.profileDataContainer}>
                    

                    <div className={profileMMStyles.profileEditIconContainer}>
                        <h4 className={profileMMStyles.profileInfo}>Profile Info</h4>

                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>

                    <div className={profileMMStyles.profilePictureContainer}>
                        <img src={userData.profilePicture} alt="" />
                    </div>
                    <div className={profileMMStyles.nameRoleContainer}>
                        <h4>{userData.username} </h4>
                        <span className={profileMMStyles.role}>{userData.role}</span>
                    </div>

                    <div className={profileMMStyles.userDataContainer}>
                        <div className={profileMMStyles.dataContainer}>
                            <p className={profileMMStyles.dataTitle}>Email Address</p>
                            <p className={profileMMStyles.data}>{userData.email}</p>
                        </div>
                        <div className={profileMMStyles.dataContainer}>
                            <p className={profileMMStyles.dataTitle}>Phone Number</p>
                            <p className={profileMMStyles.data}>{userData.phoneNumber}</p>
                        </div>
                        <div className={profileMMStyles.dataContainer}>
                            <p className={profileMMStyles.dataTitle}>Organization</p>
                            <p className={profileMMStyles.data}>{userData.organization}</p>
                        </div>
                    </div>
                </section>

                <section className={profileMMStyles.settingsContainer}>
                    <YellowButton yellowBtn="Get Started" variant="long" >
                        <Link to="#">Two Factor Authentication</Link>
                    </YellowButton>
                    <YellowButton yellowBtn="Get Started" variant="long" >
                        <Link to="#">General Settings</Link>
                    </YellowButton>
                    <YellowButton yellowBtn="Get Started" variant="long" >
                        <Link to="#">General Settings</Link>
                    </YellowButton>
                    <YellowButton yellowBtn="Get Started" variant="long" >
                        <Link to="#">Notification Settings Settings</Link>
                    </YellowButton>
                </section>
            </div>
            
            <div className={`${incidenceStyle.tableContainer} ${profileMMStyles.activityLogContainer}`}>
                <h4 className={profileMMStyles.logTitle}>Activity Log</h4>
                <table>
                    <tr>
                        <th>Date & Time</th>
                        <th>Activity Description</th>
                        <th>Affected Systems</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>March 12, 2024 09:45 AM</td>
                        <td>Changed password for account security</td>
                        <td>Website 1</td>
                        <td className={profileMMStyles.activitySuccess}>successful</td>
                    </tr>
                </table>
            </div>
        </div>
    </>
  );
};

export default ProfileManagement;








// const ProfileManagement = () => {
//     return(
//         <>
//             <div className={styles.overview}>
//                 I am the ProfileManagement
//             </div>
//         </>
//     )
// }

// export default ProfileManagement