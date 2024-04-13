import React from 'react';
import FormContainer from "../../components/forms/formContainers";
import formContainerStyles from "../../components/forms/formContainer.module.css";
import { Formik, Form, Field } from "formik";
import { LoginSignupValidation } from "../../components/forms/loginSignupFormValidation";
import YellowButton from "../../components/buttons/yellowButton";
import { Link } from "react-router-dom";
import styles from "./loginSignUp.module.css";
import axios from 'axios';

const initialValues = {
    email: '', // Remove unused 'name', 'password', and 'confirmpassword' fields
};

const ForgotPasswordPage = () => {
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:3001/forgot-password', values);
            console.log(response.data); // Handle response from backend
        } catch (error) {
            console.error('Error:', error); // Handle error
        }
    };

    return(
        <>
            <div className={formContainerStyles.formImageContainer}>
                <FormContainer loginImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711000102/Frame_23_3_tl0dv6.svg"/>
                <div className={formContainerStyles.formContainer}>

                    <div className={formContainerStyles.formIntroContainer}>
                        <h6 className={formContainerStyles.createAccount}>Forgot your Password?</h6>
                        <p className={formContainerStyles.fillForm}>No worries! We've got you covered. Please enter the email address associated with your account, and we'll send you a link to reset your password.</p>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSignupValidation}
                        onSubmit={handleSubmit}
                    >
                        {({errors}) => (
                            <Form className={formContainerStyles.form}>

                                <label htmlFor="email" className={formContainerStyles.formLabel}>Email</label>
                                <Field type="email" name="email" placeholder="Enter your email address" className={formContainerStyles.formInput} />

                                <div className={formContainerStyles.formErrors}>{errors.email}</div>

                                <YellowButton yellowBtn="Get Started" variant="long" type="submit">
                                    <p>Reset Password</p>
                                </YellowButton>

                                <Link to="/loginPage" className={styles.bacButton}>Back</Link>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
};

export default ForgotPasswordPage;
