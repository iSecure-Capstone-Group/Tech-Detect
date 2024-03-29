import styles from './hero.module.css'
// import image from '../../../src/assets/images/Frame-23.svg'
import YellowButton from '../buttons/yellowButton'

const Hero = ({ heroHead, heroText, image, variant }) =>  {
    return(
        <>
            <div className={styles.heroContainer} variantWhite={variant}>
                
                <section className={styles.heroHeadingContainer}>
                    <h2 className={styles.heroHeading}>{heroHead}</h2>
                    <p className={styles.heroText}>{heroText}</p>
                    <div className={styles.yellowButtonContainer} variantWhite={variant}>
                        <YellowButton yellowBtn="Get Started" variant="left">
                            <p>Get started</p>
                        </YellowButton>
                    </div>
                </section >

                <section className={styles.heroImageContainer}>
                    <img src={image} alt="Image of a man carring an open laptop on his hand" className={styles.heroImage}/>
                    
                </section>

                
            </div>

            
        </>
    )
}
export default Hero