import styles from "./navigation.module.css"
import { Link, useLocation } from 'react-router-dom'
import Home from "../../pages/homePage/homePage";
import AboutUsPage from "../../pages/aboutPage/aboutPage";
import FeaturesPage from "../../pages/featuresPage/featuresPage";
import LoginPage from "../../pages/logSignPages/loginPage";
import SignupPage from "../../pages/logSignPages/signupPage";
import YellowButton from "../buttons/yellowButton";
import buttons from "../buttons/buttons.module.css"


const Navigation = () => {
    const { pathname } = useLocation();
  
    return (
      <nav>
        <div className={styles.navContainer}>
            <div className={styles.navLogoContainer}>
                <img src="" alt="Logo" />
            </div>
            <ul className={styles.navUl}>
                <div className={styles.navHomeAboutFeaturesResourcesContainer}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutPage">About</Link></li>
                    {/* <li><Link to="/featuresPage">Features</Link></li> */}
                    <li><Link to="/resourcesPage">Resources</Link></li>
                </div>
                <div className={styles.navLoginSignupContainer}>
                    <li><Link to="/loginPage" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>Login</Link></li>
                    <li><Link to="/signupPage" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>SignUp</Link></li>
                    {/* Example of conditional navigation */}
                    {/* {pathname !== '/login' && (
                        <li><Link to="/login" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>Login</Link></li>
                    )}
                    {pathname !== '/signup' && (
                        <li><Link to="/signup" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>SignUp</Link></li>
                    )} */}
                </div>
            </ul>
        </div>
      </nav>
    );
  };
  
  export default Navigation;