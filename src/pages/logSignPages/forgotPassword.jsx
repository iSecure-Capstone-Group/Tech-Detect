import FormContainer from "../../components/forms/formContainers"
import formContainerStyles from "../../components/forms/formContainer.module.css"
import { useFormik, Formik, Form, Field } from "formik"
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
import { Routes, Route, Link } from "react-router-dom"
import YellowButton from "../../components/buttons/yellowButton"
import styles from "./loginSignUp.module.css"
import LoginPage from "./loginPage"

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
}
const ForgotPasswordPage = () => {
    return(
        <>
        <div className={formContainerStyles.formImageContainer}>
            <FormContainer loginImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711000102/Frame_23_3_tl0dv6.svg"/>
            <div className={formContainerStyles.formContainer}>

            <div className={formContainerStyles.formIntroContainer}>
                <h6 className={formContainerStyles.createAccount}>Forgort your Password?</h6>
                <p className={formContainerStyles.fillForm}>No worries! We've got you covered. Please enter the email address associated with your account, and we'll send you a link to reset your password.</p>
            </div>

            
            <Formik
                     initialValues={initialValues}
                     validationSchema={LoginSignupValidation}
                    >
                        {({errors}) => (
                            <Form className={formContainerStyles.form}>

                                <label htmlFor="name" className={formContainerStyles.formLabel}>Email</label>
                                <Field type="email" name="email" placeholder="Enter your email address" className={formContainerStyles.formInput}></Field>
                                {/* <input 
                                    type="email" 
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    placeholder="ENter your full name"
                                /> */}
                                <div className={formContainerStyles.formErrors}>{errors.email}</div>

                                


                                

                                <YellowButton yellowBtn="Get Started" variant="long" >
                                    <p>Reset Password</p>
                                </YellowButton>
                                
                                <Link to="/loginPage" className={styles.bacButton}>Back</Link>

                                
                            </Form>
                        )}
                        
                    </Formik>
            </div>

            
            {/* <FormContainerContent /> */}
        </div>
        </>
    )
}

export default ForgotPasswordPage

