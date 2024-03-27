import styles from "../reviews/reviews.module.css"
import coreValues from "./coreValues.module.css"

const CoreValues = (props) => {
    

return(
    <>
        <div className={`${styles.reviewCardContainer} ${coreValues.reviewCardContainer}`}>
            <div className={styles.reviewCard}>
                <div className={styles.reviewerImageContainer}>
                    <p>{props.image}</p>
                </div>
                
                <p className={styles.reviewerName}>{props.name}</p>
                <p className={styles.reviewerReview}><q>{props.review}</q></p>

                
            </div>
        </div>
    </>
)
}

export default CoreValues