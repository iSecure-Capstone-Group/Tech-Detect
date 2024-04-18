import styles from './hero.module.css'
// import image from '../../../src/assets/images/Frame-23.svg'
import YellowButton from '../buttons/yellowButton'
import { Routes, Route, Link } from 'react-router-dom'
import Overview from '../../pages/dashboard/dashboardSections/overview'
import Dashboard from '../../pages/dashboard/dashboard'

const Hero = ({ heroHead, heroText, image, variant }) =>  {
    return(
        <>
            <div className={styles.heroContainer} variantWhite={variant}>
                
                <section className={styles.heroHeadingContainer}>
                    <h2 className={styles.heroHeading}>{heroHead}</h2>
                    <p className={styles.heroText}>{heroText}</p>

                    {/* Remove this later and link the dashboard properly through login */}
                    <Link to="/signupPage" className={styles.yellowButtonContainer} variantWhite={variant}>
                        <YellowButton yellowBtn="Get Started" variant="left">
                            <p>Get started</p>
                        </YellowButton>
                    </Link>

                    {/* <Routes>
                        <Route path="/overview" element={<Overview />} />
                    </Routes> */}
                </section >

                <section className={styles.heroImageContainer}>
                    <img src={image} alt="Image of a man carring an open laptop on his hand" className={styles.heroImage}/>
                    
                </section>

                <Link to="/loginPage" className={`${styles.yellowButtonContainer} ${styles.displayLong}`} variantWhite={variant}>
                    <YellowButton yellowBtn="Get Started" variant="long">
                        <p to="/loginPage">Get started</p>
                    </YellowButton>
                </Link>

                
            </div>

            
        </>
    )
}
export default Hero