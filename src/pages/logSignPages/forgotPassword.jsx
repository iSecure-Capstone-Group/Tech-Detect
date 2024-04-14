import FormContainer from "../../components/forms/formContainers"
import formContainerStyles from "../../components/forms/formContainer.module.css"
import { useFormik, Formik, Form, Field } from "formik"
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
import { Routes, Route, Link } from "react-router-dom"
import YellowButton from "../../components/buttons/yellowButton"
import styles from "./loginSignUp.module.css"
import LoginPage from "./loginPage"
import { useState } from "react"
import ResetPasswordModal from "../../components/modals/resetPasswordModal"
import Logo from "../../components/logo"
import resetStyles from "../../components/modals/modals.module.css"

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

                                


                                {/* <MyModal >
                                    <YellowButton yellowBtn="Get Started" variant="long" >
                                        Reset Password
                                    </YellowButton>
                                </MyModal> */}

                                {/* <Modal yellowBtnTitle="Reset Password">

                                    
                                    <YellowButton yellowBtn="Get Started" variant="long" >
                                        Reset Password
                                    </YellowButton>
                                </Modal> */}

                                <ResetPasswordModal
                                    modalContent={[
                                        <div className={formContainerStyles.form}>
                                            <div key="1" className={formContainerStyles.modalLogo}><Logo /></div>
                                            <div className={formContainerStyles.formIntroContainer}>
                                                <h6 className={formContainerStyles.createAccount}>Reset Password?</h6>
                                                <p className={formContainerStyles.fillForm}>Please fill in the details below to reset your password .</p>

                                            </div>
                                            
                                                
                                            <div>
                                                <label htmlFor="password" className={formContainerStyles.formLabel}>Password</label>
                                                <Field type="password" name="password" placeholder="******************" className={formContainerStyles.formInput}></Field>
                                                {/* <input
                                                    type="password" 
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    placeholder="******************"
                                                /> */}
                                                <div className={formContainerStyles.formErrors}>{errors.password}</div>

                                                <label htmlFor="confirmpassword" className={formContainerStyles.formLabel}>Confirm Password</label>
                                                <Field type="password" name="confirmpassword" placeholder="******************" className={formContainerStyles.formInput}></Field>
                                                {/* <input
                                                    type="password"
                                                    name="confirmpassword" 
                                                    onChange={handleChange}
                                                    value={values.confirmpassword}
                                                    placeholder="******************"
                                                /> */}
                                                <div className={formContainerStyles.formErrors}>{errors.confirmpassword}</div>
                                                <div key="4">
                                                <YellowButton yellowBtn="Get Started" variant="long" >
                                                    <Link to="/loginPage">Get Started</Link>
                                                </YellowButton>
                                                </div>,
                                            </div>
                                            
                                        </div>
                                        // Add more elements as needed
                                    ]}
                                />
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

