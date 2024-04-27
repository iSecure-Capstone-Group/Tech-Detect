import cardStyles from "./subscription.module.css"

const SubscriptionPlan = ({ children, variant }) => {
    return(
        <>
            <div className={cardStyles.cardTypeContainer} typeVariant={variant}>
                {children}
            </div>
        </>
    )
}

export default SubscriptionPlan