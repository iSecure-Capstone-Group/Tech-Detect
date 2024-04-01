import styles from "./newsletter.module.css"
import { LoginSignupValidation } from "../forms/loginSignupFormValidation"
import { useFormik, Formik, Form, Field } from "formik"

const initialValues = {
    email: '',
}


const Newsletter = () => {
    return(
        <>
            <div className={styles.newsletterContainer }>
                <div className={styles.newsletterInstruction}>
                    <p>Be the first to know about our latest product updates, special promotions and discounts</p>
                </div>

                <Formik initialValues={initialValues}
                        validationSchema={LoginSignupValidation}>
                    {({errors}) => (
                        <form action="" >
                            <div className={styles.subscribeFormContainer}>
                                <Field type="email" name="email" placeholder="Enter your email address" className={styles.subscribeForm}></Field>
                                <div className={styles.subscribeButton}>
                                    <button type="submit" >Suscribe</button>
                                </div>
                                {/* <input 
                                    type="email" 
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    placeholder="ENter your full name"
                                /> */}
                                
                            </div>
                            <div >{errors.email}</div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Newsletter