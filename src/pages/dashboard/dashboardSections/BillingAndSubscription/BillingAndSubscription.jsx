import styles from "../overview.module.css"
import incidenceStyle from "../incidence.module.css"
import SimpleSlider from "./subscriptionCarousel"
import subStyles from "./subscription.module.css"
const BillingAndSubscription = () => {
    return(
        <>
            <div className={styles.overview}>
                <div className={incidenceStyle.dashBoardMenuIntro}>
                    <h4>Subscription Plans</h4>
                </div>
                <div className={subStyles.chooseBestPlanContainer}>
                    <p className={subStyles.choosePlan}>Choose Your Plan</p>
                    <p className={subStyles.bestPlans}>Best Plans For your <span>digital safety</span></p>
                </div>
                <SimpleSlider />
            </div>
        </>
    )
}

export default BillingAndSubscription