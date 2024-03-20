import styles from './hero.module.css'
import image from '../../../src/assets/images/Frame-23.svg'
import YellowButton from '../buttons/yellowButton'

const Hero = () =>  {
    return(
        <>
            <div className={styles.heroContainer}>
                
                <section className={styles.heroHeadingContainer}>
                    <h2 className={styles.heroHeading}>Safeguarding your Digital Assets with Confidence</h2>
                    <p className={styles.heroText}>Explore innovative security measures to ensure the safety of your digital assets and empower your business with robust cybersecurity solutions.</p>
                    <YellowButton yellowBtn="Get Started" variant="left">
                        <p>Get started</p>
                    </YellowButton>
                </section>

                <section className={styles.heroImageContainer}>
                    <img src={image} alt="Image of a man carring an open laptop on his hand" className={styles.heroImage}/>
                    
                </section>

                
            </div>

            
        </>
    )
}
export default Hero