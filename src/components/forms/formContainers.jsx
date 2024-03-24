import styles from "./formContainer.module.css"
import navStyles from "../navigation/navigation.module.css"
import Navigation from "../navigation/navigation"
import FormContainerContent from "./formContainerContent"

const FormContainer = (props) => {
    return(
        <>
            <div className={styles.formImageContainer}>
                <div className={styles.imageContainer}>
                    <img src={props.loginImage} alt="" />
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default FormContainer