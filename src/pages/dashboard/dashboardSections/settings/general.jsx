import settingsStyles from "./settings.module.css"
import SettingsHeading from "./settingsHeading"
import YellowButton from "../../../../components/buttons/yellowButton"
import { useFormik, Formik, Form, Field } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginSignupValidation } from "../../../../components/forms/loginSignupFormValidation"
import formContainerStyles  from "../../../../components/forms/formContainer.module.css"

const initialValues = {
    username: '',
    firstname: '',
    email: '',
    lastname: '',
}

const General = () => {
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
        console.log(data);
        setIsSuccess(true); 
        } catch (error) {
        console.error('Error creating account:', error);
        }
    };


    return(
        <>
            <div className={settingsStyles.generalSettingsContainer}>
                <SettingsHeading heading="Account Settings" headingExplanation="Here you can change your account information"/>
            </div>
            <div>

                <div className="#">
                    
                    {isSuccess ? (
                        <div >
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

                                <div className={settingsStyles.nameEmailsContainer}>

                                    <div className={settingsStyles.nameEmail}>
                                        <div className={settingsStyles.labelField}>
                                            <label htmlFor="username" className={formContainerStyles.formLabel}>Username</label>
                                            <Field type="text" name="username" placeholder="Blesshelly" className={formContainerStyles.formInput}></Field>
                                            <div className={formContainerStyles.formErrors}>{errors.username}</div>
                                        </div>


                                        <div className={settingsStyles.labelField}>
                                            <label htmlFor="email" className={formContainerStyles.formLabel}>Email</label>
                                            <Field type="email" name="email" placeholder="bleshelly@gmail.com" className={formContainerStyles.formInput}></Field>
                                            <div className={formContainerStyles.formErrors}>{errors.email}</div>
                                        </div>
                                    </div>

                                    <div className={settingsStyles.nameEmail}>
                                        <div className={settingsStyles.labelField}>
                                            <label htmlFor="firstname" className={formContainerStyles.formLabel}>Firstname</label>
                                            <Field type="text" name="firstname" placeholder="Blessing" className={formContainerStyles.formInput}></Field>
                                            <div className={formContainerStyles.formErrors}>{errors.firstname}</div>
                                        </div>

                                        <div className={settingsStyles.labelField}>
                                            <label htmlFor="lastname" className={formContainerStyles.formLabel}>Lastname</label>
                                            <Field type="text" name="lastname" placeholder="Shelly" className={formContainerStyles.formInput}></Field>
                                            <div className={formContainerStyles.formErrors}>{errors.lastname}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div >
                                        <div className={settingsStyles.jobField}>
                                            <label htmlFor="job" className={formContainerStyles.formLabel}>Job</label>
                                            <Field type="=text" name="job" placeholder="Senior IT Analyst" className={formContainerStyles.formInput}></Field>
                                            <div className={formContainerStyles.formErrors}>{errors.job}</div>
                                        </div>

                                        <div>
                                            <label htmlFor="description" className={formContainerStyles.formLabel}>Description</label>
                                            <textarea type="text" name="description" placeholder="Hi, I am Blessing a senior IT Analyst................" className={settingsStyles.settingsDescription}></textarea>
                                            <div className={formContainerStyles.formErrors}>{errors.description}</div>
                                        </div>
                                </div>
                                
                                <YellowButton yellowBtn="Get Started" variant="left">
                                    <button type="submit">Create Account</button>
                                </YellowButton>
                            </Form>
                        )}
                    </Formik>
                    )}
                </div>
                
                
            </div>
        </>
    )
}

export default General