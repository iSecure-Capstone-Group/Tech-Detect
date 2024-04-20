import styles from "./terms.module.css"
import formContainerStyles from "../../components/forms/formContainer.module.css"
import { Link } from "react-router-dom"

const Terms = () => {
    return(
        <>
            <div className={styles.termsContainer}>
                <div className={styles.termsHeading}>
                    <Link to="/signup"><svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 12.5h-14M12.5 19.5l-7-7 7-7" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></Link>
                    <h4 className={`${formContainerStyles.createAccount} ${styles.termsOfService}`}>Terms of Service</h4>
                </div>

                <h6 className={`${formContainerStyles.createAccount} ${styles.updateDate}`}>Last Updated April 8, 2024</h6>

                <div >
                    <p className={styles.eachTermsDescription}>Welcome to TechDetect Ventures! These Terms of Service ("Terms") govern your use of our web application, and any related services (collectively referred to as the "Service"). By accessing or using the Service, you agree to be bound by these Terms. Please read them carefully before using the Service.</p>

                    <div className={styles.eachTermsContainer}>
                        <p className={styles.eachTermsHeading}>Description of Service:<span className={styles.eachTermsDescription}> The Service provides cybersecurity solutions, resources, and educational content to help individuals and businesses protect their digital assets.</span></p>
                    </div>
                    <div className={styles.eachTermsContainer}>
                        <p className={styles.eachTermsHeading}>User Accounts:<span className={styles.eachTermsDescription}> Some features of the Service may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account. You agree to provide accurate and complete information when creating your account and to promptly update any information that may change.</span></p>
                    </div>
                    <div className={styles.eachTermsContainer}>
                        <p className={styles.eachTermsHeading}>Intellectual Property:<span className={styles.eachTermsDescription}>  The Service and its original content, features, and functionality are owned by TechDetect Ventures and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</span></p>
                    </div>
                    <div className={styles.eachTermsContainer}>
                        <p className={styles.eachTermsHeading}>Prohibited Conduct<span className={styles.eachTermsDescription}>You agree not to engage in any conduct that violates these Terms or any applicable laws or regulations. This includes, but is not limited to, unauthorized access to the Service, interference with the operation of the Service, and infringement of intellectual property rights.</span></p>
                    </div>
                    <div className={styles.eachTermsContainer}>
                        <p className={styles.eachTermsHeading}>Modification of Terms:<span className={styles.eachTermsDescription}>echDetect Ventures reserves the right to modify or revise these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on the Service. By continuing to use the Service after any such changes, you agree to be bound by the revised Terms.</span></p>
                    </div>
                    <div className={styles.eachTermsContainer}>
                        <p className={styles.eachTermsHeading}>Termination:<span className={styles.eachTermsDescription}> TechDetect Ventures reserves the right to suspend or terminate your access to the Service at any time, with or without cause, and without prior notice.</span></p>
                    </div>
                    <div className={styles.eachTermsContainer}>
                        <p className={styles.eachTermsHeading}>Contact Us<span className={styles.eachTermsDescription}>If you have any questions about these Terms, please contact us at techdetetventures@gmail.com.</span></p>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default Terms