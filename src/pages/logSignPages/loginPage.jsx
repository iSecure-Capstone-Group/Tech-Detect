import FormContainer from "../../components/forms/formContainers"
import formContainerStyles from "../../components/forms/formContainer.module.css"
import { useFormik, Formik, Form, Field } from "formik"
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
import { Routes, Route, Link } from "react-router-dom"
import YellowButton from "../../components/buttons/yellowButton"
import styles from "./loginSignUp.module.css"
import ForgotPasswordPage from "./forgotPassword"
import Dashboard from "../dashboard/dashboard"
import { useNavigate } from 'react-router-dom';
import LogoOnly from "../../components/logoOnly"
import axios from "axios"
import { useState } from "react"
import GoogleSignIn from "./googleSignIn"




const initialValues = {
    email: '',
    password: '',
    confirmpassword: '',
}
const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
        // Make the API call using Axios
        const response = await axios.post("your_login_api_endpoint", values);
        console.log(response.data); // Log the response data if needed
        // Optionally, set user authentication state or store tokens in local storage
        navigate("/dashboard"); // Navigate to the dashboard page after successful login
        } catch (error) {
        console.error("Error submitting form:", error);
        setErrorMessage("Invalid email or password. Please try again."); // Set error message if API call fails
        }
    };

    return(
        <>
        <div className={formContainerStyles.formImageContainer}>
            <FormContainer loginImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711000107/Frame_23_2_ttrqd8.svg"/>
            <div className={formContainerStyles.formContainer}>

            <div className={formContainerStyles.formIntroContainer}>
                <LogoOnly />
                <h6 className={formContainerStyles.createAccount}>Hi, Welcome Back!</h6>
                <p className={formContainerStyles.fillForm}>Login to your account to continue</p>
            </div>

            <div className={styles.googleEmailLogin}>
                {/* <div className={styles.googleLogin}>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.884 10.041h-.806V10h-9v4h5.652a5.998 5.998 0 0 1-11.652-2 6 6 0 0 1 6-6c1.53 0 2.921.577 3.98 1.52l2.83-2.829A9.954 9.954 0 0 0 12.077 2c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.194-1.959Z" fill="#FFC107"/><path d="m3.231 7.346 3.285 2.409A5.997 5.997 0 0 1 12.078 6c1.53 0 2.921.577 3.98 1.52l2.829-2.829A9.954 9.954 0 0 0 12.078 2a9.994 9.994 0 0 0-8.847 5.346Z" fill="#FF3D00"/><path d="M12.078 22c2.583 0 4.93-.989 6.705-2.596l-3.095-2.62A5.956 5.956 0 0 1 12.078 18a5.997 5.997 0 0 1-5.641-3.973l-3.261 2.512C4.83 19.778 8.192 22 12.078 22Z" fill="#4CAF50"/><path d="M21.884 10.041h-.806V10h-9v4h5.652a6.02 6.02 0 0 1-2.044 2.785h.002l3.095 2.619c-.22.198 3.295-2.404 3.295-7.404 0-.67-.069-1.325-.194-1.959Z" fill="#1976D2"/></svg>

                    <p className={styles.googleSignin}>Sign in with Google</p>
                </div> */}
                <div>
                    {/* <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.884 10.041h-.806V10h-9v4h5.652a5.998 5.998 0 0 1-11.652-2 6 6 0 0 1 6-6c1.53 0 2.921.577 3.98 1.52l2.83-2.829A9.954 9.954 0 0 0 12.077 2c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.194-1.959Z" fill="#FFC107"/><path d="m3.231 7.346 3.285 2.409A5.997 5.997 0 0 1 12.078 6c1.53 0 2.921.577 3.98 1.52l2.829-2.829A9.954 9.954 0 0 0 12.078 2a9.994 9.994 0 0 0-8.847 5.346Z" fill="#FF3D00"/><path d="M12.078 22c2.583 0 4.93-.989 6.705-2.596l-3.095-2.62A5.956 5.956 0 0 1 12.078 18a5.997 5.997 0 0 1-5.641-3.973l-3.261 2.512C4.83 19.778 8.192 22 12.078 22Z" fill="#4CAF50"/><path d="M21.884 10.041h-.806V10h-9v4h5.652a6.02 6.02 0 0 1-2.044 2.785h.002l3.095 2.619c-.22.198 3.295-2.404 3.295-7.404 0-.67-.069-1.325-.194-1.959Z" fill="#1976D2"/></svg>

                    <p className={styles.googleSignin}>Sign in with Google</p> */}
                    <GoogleSignIn promptText="Sign in with Google"/>
                </div>

                

                <fieldset>
                    <legend>or Sign in with Email</legend>
                </fieldset>
            </div>
            <Formik
                     initialValues={initialValues}
                     validationSchema={LoginSignupValidation}
                     onSubmit={(values) => handleSubmit(values)}
                    >
                        {({errors}) => (
                            <Form className={formContainerStyles.form}>

                                <label htmlFor="email" className={formContainerStyles.formLabel}>Email</label>
                                <Field type="email" name="email" placeholder="Enter your email address" className={formContainerStyles.formInput}></Field>
                                {/* <input 
                                    type="email" 
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    placeholder="ENter your full name"
                                /> */}
                                <div className={formContainerStyles.formErrors}>{errors.email}</div>

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


                                <div className={formContainerStyles.Checkboxterms}>
                                    <input type="checkbox" name="" id="" className={formContainerStyles.formCheckbox} /><span className={`${formContainerStyles.checkboxSpan} ${styles.forgotPassword}`}>Remember me? <Link to="/forgot-password" className={styles.forgot}>
                                    Forgot your password?</Link>
                                    {/* <Routes>
                                        <Route path="./forgotPassword" element={<ForgotPasswordPage />} />
                                    </Routes> */}
                                    </span>
                                    
                                </div>

                                <YellowButton yellowBtn="Get Started" variant="long" >
                                    <button type="submit" >Login</button>
                                </YellowButton>

                                {errorMessage && (
                                <div className={formContainerStyles.errorMessage}>
                                {errorMessage}
                                </div>)}

                                {/* <Modal yellowBtnTitle="Reset Password">

                                                                    
                                <YellowButton yellowBtn="Get Started" variant="long" >
                                    Login
                                </YellowButton>
                                </Modal> */}

                                <div className={formContainerStyles.createAccountLogin}>
                                    <p>Not registered yet?</p>
                                    <Link to="/signup">Create an account</Link>
                                    {/* <Routes>
                                        <Route path="/signupPage" element={<LoginPage />} />
                                    </Routes> */}
                                </div>

                                
                            </Form>
                            
                        )}
                        
                    </Formik>
                    
            </div>
            
            
            {/* <FormContainerContent /> */}
        </div>
        
        </>
    )
}

export default LoginPage

