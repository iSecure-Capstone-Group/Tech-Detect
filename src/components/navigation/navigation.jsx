import styles from "./navigation.module.css"
import Logo from "../logo";
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
                <Logo />

                
            </div>
            <ul className={styles.navUl}>
                <div className={styles.navHomeAboutFeaturesResourcesContainer}>
                    <li className={styles.navli}><Link to="/">Home</Link></li>
                    <li className={styles.navli}><Link to="/about">About</Link></li>
                    {/* <li><Link to="/featuresPage">Features</Link></li> */}
                    <li className={styles.navli}><Link to="/resources">Resources</Link></li>
                </div>
                <div className={styles.navLoginSignupContainer}>
                    <li className={`${styles.navli} ${styles.navliWhiteHover}`}><Link to="/login" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>Login</Link></li>
                    <li className={`${styles.navli} ${styles.navliWhiteHover}`}><Link to="/signup" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>SignUp</Link></li>
                    {/* Example of conditional navigation */}
                    {/* {pathname !== '/login' && (
                        <li><Link to="/login" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>Login</Link></li>
                    )}
                    {pathname !== '/signup' && (
                        <li><Link to="/signup" className={`${buttons.yellowBtn}  ${buttons.whiteBG}`}>SignUp</Link></li>
                    )} */}
                </div>
            </ul>

            <div className={styles.hamburgerMenuIcon}>
                <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.234 12h18M3.234 6h18M3.234 18h18" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;