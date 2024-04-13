import styles from "./loginSignUp.module.css"
import FormContainer from "../../components/forms/formContainers"
import formContainerStyles from "../../components/forms/formContainer.module.css"
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation"
import { useFormik, Formik, Form, Field } from "formik"
import YellowButton from "../../components/buttons/yellowButton"
import { Routes, Route, Link } from "react-router-dom"
import LoginPage from "./loginPage"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
}

const SignupPage = () => {
    // const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: LoginSignupValidation,
    //     onSubmit: (values) => {
    //         console.log(values)
    //     }
    // })
    const navigate = useNavigate()

    const handleSubmit = async (values, { setErrors }) => {
        try {
            const response = await axios.post('http://localhost:3001/auth/register', values);
            console.log(response.data); // Handle response from backend
            // Redirect to login page after successful registration
            navigate('/loginPage');
        } catch (error) {
            if (error.response) {
                // Server responded with a status code other than 2xx
                console.error('Error registering user:', error.response.data);
                setErrors(error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error making request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error:', error.message);
            }
        }
    }



    return(
        <>
            <div className={formContainerStyles.formImageContainer}>
                <FormContainer formTitle="Create an Account" formInstruction="Please kindly fill in the details to create an account with TechDetect"  loginImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711000102/Frame_23_1_hmju0x.svg"/>
                <div className={formContainerStyles.formContainer}>
                    <div className={formContainerStyles.formIntroContainer}>
                        <h6 className={formContainerStyles.createAccount}>Create an Account</h6>
                        <p className={formContainerStyles.fillForm}>Please kindly fill in the details to create an account with TechDetect</p>
                    </div>

                    <Formik
                     initialValues={initialValues}
                     validationSchema={LoginSignupValidation}
                     onSubmit={handleSubmit}
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

                                <YellowButton yellowBtn="Get Started" variant="long" type="submit">
                                    <p>Create Account</p>
                                </YellowButton>

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

                    
                </div>

                
                {/* <FormContainerContent /> */}
            </div>
        </>
    )
}

export default SignupPage