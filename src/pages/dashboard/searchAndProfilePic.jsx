import styles from "./searchAndProfilePic.module.css"
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
import ProfilePicture from "./profilePicture"
import hamgurgerStyles from "../../components/navigation/navigation.module.css"
import { useState } from "react"
import DashboardNavModal from "./dashboardNavModal"

const SearchAndProfilePic = () => {
    return(
        <>
            <div className={styles.allSearchAndPic}>
                <div className={styles.searchAndPicConatiner}>
                    <div className={styles.searchFieldContainer}>
                        <form action="">
                            
                            <input className={styles.searchField} type="text" placeholder="Type to Search"/>
                            
                            <div className={styles.searchFieldIconContainer}>
                                <svg className={styles.searchFieldIcon} width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.833 12.667A5.333 5.333 0 1 0 7.833 2a5.333 5.333 0 0 0 0 10.667ZM14.5 14l-2.9-2.9" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                        </form>
                    </div>

                    <div className={styles.notifcationAndPicContainer}>
                        <div className={styles.notification}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_837_9782)"><path d="M22.0303 14.586L20 12.5557V9.86621C19.9977 8.00759 19.3063 6.21585 18.0595 4.83745C16.8127 3.45905 15.0991 2.59191 13.25 2.40371V0.866211H11.75V2.40371C9.90093 2.59191 8.18732 3.45905 6.94053 4.83745C5.69373 6.21585 5.00233 8.00759 5 9.86621V12.5557L2.96975 14.586C2.82909 14.7266 2.75004 14.9173 2.75 15.1162V17.3662C2.75 17.5651 2.82902 17.7559 2.96967 17.8965C3.11032 18.0372 3.30109 18.1162 3.5 18.1162H8.75V18.699C8.73369 19.6504 9.06905 20.5745 9.69184 21.294C10.3146 22.0135 11.181 22.4779 12.125 22.5982C12.6464 22.6499 13.1728 22.5919 13.6704 22.428C14.1681 22.264 14.6259 21.9977 15.0144 21.6462C15.4029 21.2947 15.7136 20.8657 15.9264 20.387C16.1392 19.9082 16.2494 19.3902 16.25 18.8662V18.1162H21.5C21.6989 18.1162 21.8897 18.0372 22.0303 17.8965C22.171 17.7559 22.25 17.5651 22.25 17.3662V15.1162C22.25 14.9173 22.1709 14.7266 22.0303 14.586ZM14.75 18.8662C14.75 19.4629 14.5129 20.0352 14.091 20.4572C13.669 20.8792 13.0967 21.1162 12.5 21.1162C11.9033 21.1162 11.331 20.8792 10.909 20.4572C10.4871 20.0352 10.25 19.4629 10.25 18.8662V18.1162H14.75V18.8662ZM20.75 16.6162H4.25V15.4267L6.28025 13.3965C6.42091 13.2558 6.49996 13.0651 6.5 12.8662V9.86621C6.5 8.27491 7.13214 6.74879 8.25736 5.62357C9.38258 4.49835 10.9087 3.86621 12.5 3.86621C14.0913 3.86621 15.6174 4.49835 16.7426 5.62357C17.8679 6.74879 18.5 8.27491 18.5 9.86621V12.8662C18.5 13.0651 18.5791 13.2558 18.7197 13.3965L20.75 15.4267V16.6162Z" fill="#0D0D0D"/></g><defs><clipPath id="clip0_837_9782"><rect width="24" height="24" fill="white" transform="translate(0.5 0.116211)"/></clipPath></defs></svg>

                        </div>

                        <div className={styles.dummyProfilePic}>
                            <div className={styles.googleProfilePic}>
                                <ProfilePicture />
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className={`${hamgurgerStyles.hamburgerMenuIcon} ${styles.dashboardHamburgerIcon}`}>
                <DashboardNavModal />
                </div>
                
            </div>

            
        </>
    )
}

export default SearchAndProfilePic