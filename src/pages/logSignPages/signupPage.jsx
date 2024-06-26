// import { useState } from "react"
// import styles from "./loginSignUp.module.css"
// import FormContainer from "../../components/forms/formContainers"
// import formContainerStyles from "../../components/forms/formContainer.module.css"
// import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
// import { useFormik, Formik, Form, Field } from "formik"
// import YellowButton from "../../components/buttons/yellowButton"
// import { Routes, Route, Link, useNavigate } from "react-router-dom"
// import LoginPage from "./loginPage"
// import SuccessfulACcount from "../../components/modals/createAccountSuccess"
// import Logo from "../../components/logo"
// import resetStyles from "../../components/modals/modals.module.css"
// import LogoOnly from "../../components/logoOnly"
// import axios from "axios"



// const initialValues = {
//     name: '',
//     phoneNumber: '',
//     email: '',
//     companyName: '',
//     password: '',
//     confirmpassword: '',
// }

// const SignupPage = () => {
//     const [errorMessage, setErrorMessage] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (values) => {
//         try {
//         // Make the API call using Axios
//         const response = await axios.post("your_api_endpoint", values);
//         console.log(response.data); // Log the response data if needed
//         // Optionally, set the success message
//         navigate("/login"); // Navigate to the login page after successful signup
//         } catch (error) {
//         console.error("Error submitting form:", error);
//         setErrorMessage("Failed to create account. Please try again."); // Set error message if API call fails
//         }
//     };
    
//     // const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
//     //     initialValues: initialValues,
//     //     validationSchema: LoginSignupValidation,
//     //     onSubmit: (values) => {
//     //         console.log(values)
//     //     }
//     // })
//     return(
//         <>
//             <div className={formContainerStyles.formImageContainer}>
//                 <FormContainer formTitle="Create an Account" formInstruction="Please kindly fill in the details to create an account with TechDetect"  loginImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711000102/Frame_23_1_hmju0x.svg"/>
//                 <div className={formContainerStyles.formContainer}>
//                     <div className={formContainerStyles.formIntroContainer}>
//                         <LogoOnly />
//                         <h6 className={formContainerStyles.createAccount}>Create an Account</h6>
//                         <p className={formContainerStyles.fillForm}>Please kindly fill in the details to create an account with TechDetect</p>
//                     </div>
                    
//                     <Formik
//                      initialValues={initialValues}
//                      validationSchema={LoginSignupValidation}
//                      onSubmit={(values) => handleSubmit(values)} // Call the handleSubmit function on form submission
//                     >
//                         {({errors}) => (
//                             <Form className={formContainerStyles.form}>

//                                 <label htmlFor="name" className={formContainerStyles.formLabel}>Name</label>
//                                 <Field type="text" name="name" placeholder="Enter your full name" className={formContainerStyles.formInput}></Field>
//                                 {/* <input
//                                     type="text" 
//                                     name="name"
//                                     onChange={handleChange}
//                                     value={values.name}
//                                     placeholder="ENter our full name"
//                                 /> */}
//                                 <div className={formContainerStyles.formErrors}>{errors.name}</div>

//                                 <label htmlFor="phoneNumber" className={formContainerStyles.formLabel}>Phone Number</label>
//                                 <Field type="number" name="phoneNumber" placeholder="Enter your phone number" className={formContainerStyles.formInput}></Field>
//                                 {/* <input
//                                     type="text" 
//                                     name="name"
//                                     onChange={handleChange}
//                                     value={values.name}
//                                     placeholder="ENter our full name"
//                                 /> */}
//                                 <div className={formContainerStyles.formErrors}>{errors.phoneNumber}</div>

//                                 <label htmlFor="name" className={formContainerStyles.formLabel}>Email</label>
//                                 <Field type="email" name="email" placeholder="Enter your email address" className={formContainerStyles.formInput}></Field>
//                                 {/* <input 
//                                     type="email" 
//                                     name="email"
//                                     onChange={handleChange}
//                                     value={values.email}
//                                     placeholder="ENter your full name"
//                                 /> */}
//                                 <div className={formContainerStyles.formErrors}>{errors.email}</div>

//                                 <label htmlFor="companyName" className={formContainerStyles.formLabel}>Company Name</label>
//                                 <Field type="text" name="companyName" placeholder="Enter your company name" className={formContainerStyles.formInput}></Field>
//                                 {/* <input 
//                                     type="email" 
//                                     name="email"
//                                     onChange={handleChange}
//                                     value={values.email}
//                                     placeholder="ENter your full name"
//                                 /> */}
//                                 <div className={formContainerStyles.formErrors}>{errors.companyName}</div>

//                                 <label htmlFor="password" className={formContainerStyles.formLabel}>Password</label>
//                                 <Field type="password" name="password" placeholder="******************" className={formContainerStyles.formInput}></Field>
//                                 {/* <input
//                                     type="password" 
//                                     name="password"
//                                     onChange={handleChange}
//                                     value={values.password}
//                                     placeholder="******************"
//                                 /> */}
//                                 <div className={formContainerStyles.formErrors}>{errors.password}</div>

//                                 <label htmlFor="confirmpassword" className={formContainerStyles.formLabel}>Confirm Password</label>
//                                 <Field type="password" name="confirmpassword" placeholder="******************" className={formContainerStyles.formInput}></Field>
//                                 {/* <input
//                                     type="password"
//                                     name="confirmpassword" 
//                                     onChange={handleChange}
//                                     value={values.confirmpassword}
//                                     placeholder="******************"
//                                 /> */}
//                                 <div className={formContainerStyles.formErrors}>{errors.confirmpassword}</div>
                                
//                                 <div className={formContainerStyles.Checkboxterms}>
//                                     <input type="checkbox" name="" id="" className={formContainerStyles.formCheckbox} required/><span className={formContainerStyles.checkboxSpan}>By clicking on this you agree to the <Link to="/terms" className="">
//                                     terms of service</Link></span>
                                    
//                                 </div>

//                                 <YellowButton yellowBtn="Get Started" variant="long">
//                                     <button type="submit">Create Account</button>
//                                 </YellowButton>
//                                 {/* <SuccessfulACcount
//                                     modalContent={[
//                                         <div className={resetStyles.contents}>
//                                             <div key="1"><LogoOnly /></div>,
//                                             <p key="2"><svg width="121" height="121" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.5 110.5c27.5 0 50-22.5 50-50s-22.5-50-50-50-50 22.5-50 50 22.5 50 50 50Z" stroke="#007300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.25 60.5 53.4 74.65l28.35-28.3" stroke="#007300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></p>,
//                                             <h5 key="3">Congratulations</h5>,
//                                             <p>You have successfully created your account</p>,
//                                             <div key="4">
//                                                 <YellowButton yellowBtn="Get Started" variant="long" >
//                                                     <Link to="/loginPage">Get Started</Link>
//                                                 </YellowButton>
//                                             </div>,
//                                         </div>
                                        
//                                     ]}
//                                 /> */}
                                
//                                 {errorMessage && <div className={formContainerStyles.errorMessage}>{errorMessage}</div>}
                                
//                                 <div className={formContainerStyles.createAccountLogin}>
//                                     <p>Already have an account?</p>
//                                     <Link to="/login">Login</Link>
//                                     {/* <Routes>
//                                         <Route path="/loginPage" element={<LoginPage />} />
//                                     </Routes> */}
//                                 </div>
                                
                                
//                             </Form>
                            
//                         )}
                        
                        
//                     </Formik>
                    
                    
                    
//                 </div>

                
//                 {/* <FormContainerContent /> */}
                
                
//             </div>
            
//         </>
//     )
// }


// export default SignupPage



import { useState } from "react"
import styles from "./loginSignUp.module.css"
import FormContainer from "../../components/forms/formContainers"
import formContainerStyles from "../../components/forms/formContainer.module.css"
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
import { useFormik, Formik, Form, Field } from "formik"
import YellowButton from "../../components/buttons/yellowButton"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import LoginPage from "./loginPage"
import SuccessfulACcount from "../../components/modals/createAccountSuccess"
import Logo from "../../components/logo"
import resetStyles from "../../components/modals/modals.module.css"
import LogoOnly from "../../components/logoOnly"
import axios from "axios"
import GoogleSignIn from "./googleSignIn"


const SignupPage = () => {

    
    
    return(
        <>
            <div className={formContainerStyles.formImageContainer}>
                <FormContainer formTitle="Create an Account" formInstruction="Please kindly fill in the details to create an account with TechDetect"  loginImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711000102/Frame_23_1_hmju0x.svg"/>
                <div className={formContainerStyles.formContainer}>
                    <div className={formContainerStyles.formIntroContainer}>
                        <LogoOnly />
                        <h6 className={formContainerStyles.createAccount}>Create an Account</h6>
                        {/* <p className={formContainerStyles.fillForm}>Please kindly fill in the details to create an account with TechDetect</p> */}
                    </div>
                    
                    
                    
                    <GoogleSignIn promptText="Sign up with Google"/>
                    <div className={formContainerStyles.createAccountLogin}>
                        <p>Already have an account?</p>
                        <Link to="/login">Login</Link>
                        {/* <Routes>
                            <Route path="/loginPage" element={<LoginPage />} />
                        </Routes> */}
                    </div>
                </div>
                

                
                {/* <FormContainerContent /> */}
                
                
            </div>
            
            
        </>
    )
}


export default SignupPage