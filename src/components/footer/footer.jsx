import styles from './footer.module.css'
import { Router, Route, Link } from 'react-router-dom'

const Footer = () => {
    return(
        <>
            <div className={styles.footerContainer}>
                <section className={styles.footerLogoContactNav}>
                    <div className={styles.footerSectionContainer}>
                        <div className={styles.logo}>
                            <img src={"https://res.cloudinary.com/dbv1y1xey/image/upload/v1711955663/Frame_427321927_mxssut.svg"} alt="Logo" />

                            
                        </div>
                        <div className={styles.contactSocialIconsContainer}>
                            <div className={styles.contactDetails}>
                                <a href="tel:+2349145458987">+2349145458987</a>
                                <a href="mailto:techdetectventures@gmail.com">techdetectventures@gmail.com</a>
                            </div>

                            <div className={styles.socialMediaHandleIcons}>
                                <a href="#"><svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.94 13.5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002Zm.06 3.48h-4V29.5h4V16.98Zm6.32 0h-3.98V29.5h3.94v-6.57c0-3.66 4.77-4 4.77 0v6.57H30v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" fill="#fff"/><circle cx="20" cy="20.5" r="19.5" stroke="#fff"/></svg></a>
                                
                                <a href="#"><svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 22h2.5l1-4H22v-2c0-1.03 0-2 2-2h1.5v-3.36c-.326-.043-1.557-.14-2.857-.14-2.715 0-4.643 1.656-4.643 4.7V18h-3v4h3v8.5h4V22Z" fill="#fff"/><circle cx="20" cy="20.5" r="19.5" stroke="#fff"/></svg></a>
                                
                                <a href="#"><svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 24.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 24.5v-8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5Z" stroke="#fff" stroke-width="1.5"/><path d="m25.5 15.01.01-.011" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20.5" r="19.5" stroke="#fff"/></svg></a>
                                
                                <a href="#"><svg width="40" height="41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.46 14.5c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05-.79-.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z" fill="#fff"/><circle cx="20" cy="20.5" r="19.5" stroke="#fff"/></svg></a>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.footerSectionContainer}>
                        <p className={styles.footerHeading}>Company</p>
                        <ul className={styles.footerUlContainer}>
                            <li className={styles.footerLi}><Link to="Home" >Home</Link></li>
                            <li className={styles.footerLi}><Link to="Home" >About Us</Link></li>
                            <li className={styles.footerLi}><Link to="Home" >Features</Link></li>
                            <li className={styles.footerLi}><Link to="Home" >Resources</Link></li>
                            <li className={styles.footerLi}><Link to="Home" >FAQs</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerSectionContainer}>
                        <p className={styles.footerHeading}>Legal</p>
                        <ul className={styles.footerUlContainer}>
                            <li className={styles.footerLi}><Link to="Home" >Terms of Service</Link></li>
                            <li className={styles.footerLi}><Link to="Home" >Privacy Policy</Link></li>
                        </ul>
                    </div>
                </section>

                <hr />

                <section className={styles.rights}>
                    <p>2024 TechDetect Ventures - All Rights Reserved</p>
                </section>

            </div>
        </>
    )
}

export default Footer