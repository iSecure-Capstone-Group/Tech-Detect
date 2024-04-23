import cardStyles from "./subscription.module.css" 

const subType = ({ children, typeVariant }) => {
    return(
        <>
            <div className={cardStyles.cardTypeContainer}>
                {children}
            </div>
        </>
    )
}

export default subType