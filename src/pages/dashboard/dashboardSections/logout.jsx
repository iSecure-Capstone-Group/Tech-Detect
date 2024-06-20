// import withDashboardMenu from "../../../components/HOCs/withDarkMenuBarForDashBoard"
// import styles from "./logout.module.css"
// import { Link } from "react-router-dom"
// const Logout = () => {
//     return(
//         <>
//             <div className={styles.logoutContainer}>
//                 <p>I am the Logout Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut fuga error modi in, veritatis libero ad cupiditate labore quam maiores nemo at ipsum eveniet eum vero commodi nisi illo quis deleniti officiis tenetur quos. Laudantium laboriosam placeat accusamus, voluptatibus dolore reiciendis sit. Consequatur esse voluptatem praesentium rem ullam delectus distinctio autem officiis? Adipisci ratione sed, dignissimos, eaque distinctio rerum, corrupti consequuntur necessitatibus dolores accusantium quaerat soluta aut quos fugiat reiciendis odio sequi amet voluptas numquam! Pariatur enim impedit repudiandae alias sit sequi atque exercitationem beatae error quia earum, ad, id assumenda? Harum fugiat architecto assumenda incidunt nulla. Nisi, aperiam?</p>
//             </div>
            
//         </>
//     )
// }

// export default Logout

import { useState, useEffect } from 'react';
import styles from "./logout.module.css"
import LogoOnly from "../../../components/logoOnly"
import { Link } from "react-router-dom"
import YellowButton from "../../../components/buttons/yellowButton"
import formContainerStyles from "../../../components/forms/formContainer.module.css"
import backstyles from "../../logSignPages/loginSignUp.module.css"
import Dashboard from "../dashboard"
import logoutSuccess from "../../../components/modals/logoutSuccess"
import LogoutSuccess from "../../../components/modals/logoutSuccess"
import resetStyles from "../../../components/modals/modals.module.css"
import { auth } from "../../../firebase"

const Logout = () => {
    const [userDetails, setUserDetails] = useState(null);
  // const [settingsData, setSettingsData] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user)
      setUserDetails(user)
    })
  }


    async function handleLogout(){
        try{
            await auth.signOut()
            window.location.href = "../login"
            alert("Logout Successful")
           
        }catch (error) {
            console.log("Error logging out:", error.message)
        }
    }

    useEffect(() => {
        fetchUserData();
      }, []);

    return(
       <div>
        {userDetails ? (
             <>
             <div className={styles.logoutContainer}>
                 
                 <div className={styles.logout}>
                     <div className={formContainerStyles.modalLogo}>
                         <LogoOnly />
                     </div>
                     <p className={`${formContainerStyles.fillForm} ${styles.formInstruction}`}>Are you sure you want to Logout?</p>
                     {/* <LogoutSuccess
                                     modalContent={[
                                         <div className={resetStyles.contents}>
                                             <div key="1"><LogoOnly /></div>,
                                             <p key="2"><svg width="121" height="121" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.5 110.5c27.5 0 50-22.5 50-50s-22.5-50-50-50-50 22.5-50 50 22.5 50 50 50Z" stroke="#007300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.25 60.5 53.4 74.65l28.35-28.3" stroke="#007300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></p>,
                                             <h5 key="3">Logout Successful</h5>,
                                             <p>You have successfully logged out from your account</p>,
                                             <div key="4">
                                                 <YellowButton yellowBtn="Get Started" variant="long" >
                                                     <Link to="/loginPage">Login</Link>
                                                 </YellowButton>
                                             </div>,
                                         </div>
                                         // Add more elements as needed
                                     ]}
                                 /> */}
                     {/* <YellowButton yellowBtn="Get Started" variant="long" >
                         <Link to="/loginPage">Get Started</Link>
                     </YellowButton> */}
                     <YellowButton yellowBtn="Get Started" variant="long" >
       <button onClick={handleLogout}>Yes, Proceed to Logout </button>
       </YellowButton>
 
                     <Link to="/dashboard" className={`${backstyles.bacButton} ${styles.backLink}`}>No, Take me Back</Link>
                 </div>
                 
             </div>
         </>
        ): <p>Loading...</p>}
       </div>
    )
}

export default Logout