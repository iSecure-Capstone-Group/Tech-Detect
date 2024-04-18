import styles from "./reviews.module.css"
import Rating from "../rating"
const Review = (props) => {
    
    // const ReviewDetails = [
    //     { id: 1, 
    //         image: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_20_jlgam2.svg',
    //         name: 'Bukky Olamide', 
    //         review: 'TechDetect Ventures’ platform is intuitive and user-friendly, making it easy for our team to manage security incidents and stay informed about potential threats. We’re grateful for their reliable and effective solutions.'
    //     },
    //     { id: 2, 
    //         image: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_21_q4u9cm.svg',
    //         name: 'Walter Nelson', 
    //         review: 'With TechDetect Ventures, we’ve experienced a noticeable reduction in security breaches. Their platform has become an indipensable tool for safeguarding our digital assets.'
    //     },
    //     { id: 3, 
    //         image: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_22_foymia.svg',
    //         name: 'Bella Anthonio', 
    //         review: 'I highly recommend TechDetect Ventures to any business looking to enhance their cybersecurity defenses. Their team’s expertise and dedication to customer satisfaction are unmatched.'
    //     },
       
    // ]
    return(
        <>
            <div className={styles.reviewCardContainer}>
                {/* {ReviewDetails.map((review) => (
                    <div key={review.id} className={styles.reviewCard}>
                        <div className={styles.reviewerImageContainer}>
                            <img src={review.image} alt="" />
                        </div>
                        
                        <p className={styles.reviewerName}>{review.name}</p>
                        <p className={styles.reviewerReview}><q>{review.review}</q></p>

                        <Rating />
                    </div>
                ))} */}
                
                <div className={styles.reviewCard}>
                    <div className={styles.reviewerImageContainer}>
                        <img src={props.image} alt="" />
                    </div>
                    
                    <p className={styles.reviewerName}>{props.name}</p>
                    <div className={styles.reviewRateContainer}>
                        <p className={styles.reviewerReview}><q>{props.review}</q></p>

                        <Rating />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review