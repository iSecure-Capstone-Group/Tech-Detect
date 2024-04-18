import { useState } from "react"
import styles from "./loginSignUp.module.css"
import FormContainer from "../../components/forms/formContainers"
import formContainerStyles from "../../components/forms/formContainer.module.css"
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
import { useFormik, Formik, Form, Field } from "formik"
import YellowButton from "../../components/buttons/yellowButton"
import { Routes, Route, Link } from "react-router-dom"
import LoginPage from "./loginPage"
import SuccessfulACcount from "../../components/modals/createAccountSuccess"
import Logo from "../../components/logo"
import resetStyles from "../../components/modals/modals.module.css"
import LogoOnly from "../../components/logoOnly"


const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
}

const SignupPage = () => {

    const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('your_api_endpoint_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data); // Handle response from the backend
      setIsSuccess(true); // Set isSuccess to true if the signup is successful
      // Optionally, you can redirect the user to a different page here
    } catch (error) {
      console.error('Error creating account:', error);
      // Handle error scenario (e.g., show error message to the user)
    }
  };
    // const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: LoginSignupValidation,
    //     onSubmit: (values) => {
    //         console.log(values)
    //     }
    // })
    return(
        <>
            <div className={formContainerStyles.formImageContainer}>
                <FormContainer formTitle="Create an Account" formInstruction="Please kindly fill in the details to create an account with TechDetect"  loginImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711000102/Frame_23_1_hmju0x.svg"/>
                <div className={formContainerStyles.formContainer}>
                    <div className={formContainerStyles.formIntroContainer}>
                        <h6 className={formContainerStyles.createAccount}>Create an Account</h6>
                        <p className={formContainerStyles.fillForm}>Please kindly fill in the details to create an account with TechDetect</p>
                    </div>
                    {isSuccess ? (
                        <div className={formContainerStyles.successMessage}>
                        Account created successfully! {/* You can customize this message */}
                        </div>
                    ) : (
                    <Formik
                     initialValues={initialValues}
                     validationSchema={LoginSignupValidation}
                     onSubmit={(values) => handleSubmit(values)} // Call the handleSubmit function on form submission
                    >
                        {({errors}) => (
                            <Form className={formContainerStyles.form}>
                                <label htmlFor="name" className={formContainerStyles.formLabel}>Name</label>
                                <Field type="text" name="name" placeholder="Enter your full name" className={formContainerStyles.formInput}></Field>
                                {/* <input
                                    type="text" 
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    placeholder="ENter our full name"
                                /> */}
                                <div className={formContainerStyles.formErrors}>{errors.name}</div>


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

                                <div className={formContainerStyles.Checkboxterms}>
                                    <input type="checkbox" name="" id="" className={formContainerStyles.formCheckbox} /><span className={formContainerStyles.checkboxSpan}>By clicking on this you agree to the <Link to="/terms" className="">
                                    terms of service</Link></span>
                                </div>

                                <YellowButton yellowBtn="Get Started" variant="long">
                                    <button type="submit">Create Account</button>
                                </YellowButton>
                                {/* <SuccessfulACcount
                                    modalContent={[
                                        <div className={resetStyles.contents}>
                                            <div key="1"><LogoOnly /></div>,
                                            <p key="2"><svg width="121" height="121" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.5 110.5c27.5 0 50-22.5 50-50s-22.5-50-50-50-50 22.5-50 50 22.5 50 50 50Z" stroke="#007300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.25 60.5 53.4 74.65l28.35-28.3" stroke="#007300" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></p>,
                                            <h5 key="3">Congratulations</h5>,
                                            <p>You have successfully created your account</p>,
                                            <div key="4">
                                                <YellowButton yellowBtn="Get Started" variant="long" >
                                                    <Link to="/loginPage">Get Started</Link>
                                                </YellowButton>
                                            </div>,
                                        </div>
                                        
                                    ]}
                                /> */}

                                <div className={formContainerStyles.createAccountLogin}>
                                    <p>Already have an account?</p>
                                    <Link to="/loginPage">Login</Link>
                                    <Routes>
                                        <Route path="/loginPage" element={<LoginPage />} />
                                    </Routes>
                                </div>

                                
                            </Form>
                        )}
                        
                    </Formik>
                    )}
                    
                </div>

                
                {/* <FormContainerContent /> */}
            </div>
        </>
    )
}

export default SignupPage