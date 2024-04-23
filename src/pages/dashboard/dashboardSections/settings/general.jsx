import settingsStyles from "./settings.module.css"
import SettingsHeading from "./settingsHeading"
import YellowButton from "../../../../components/buttons/yellowButton"
import { useFormik, Formik, Form, Field } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginSignupValidation } from "../../../../components/forms/loginSignupFormValidation"
import formContainerStyles  from "../../../../components/forms/formContainer.module.css"
import axios from "axios"

const initialValues = {
    username: '',
    firstname: '',
    email: '',
    lastname: '',
}

const General = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (values) => {
        try {
        
        const response = await axios.post('our_endpoint', values);
        console.log(response.data); 
        setSuccessMessage('Submission successful!');
        } catch (error) {
        console.error('Error submitting form:', error);
        }
    };


    return(
        <>
            <div className={settingsStyles.generalSettingsContainer}>
                <SettingsHeading heading="Account Settings" headingExplanation="Here you can change your account information"/>
            </div>
            <div>

                <div className="#">
                    
                    
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
                                            <Field type="text" name="job" placeholder="Senior IT Analyst" className={formContainerStyles.formInput}></Field>
                                            <div className={formContainerStyles.formErrors}>{errors.job}</div>
                                        </div>

                                        <div>
                                            <label htmlFor="description" className={formContainerStyles.formLabel}>Description</label>
                                            <textarea type="text" name="description" placeholder="Hi, I am Blessing a senior IT Analyst................" className={settingsStyles.settingsDescription}></textarea>
                                            <div className={formContainerStyles.formErrors}>{errors.description}</div>
                                        </div>
                                </div>
                                {successMessage && <div className={settingsStyles.successMessage}>{successMessage}</div>}
                                <YellowButton yellowBtn="Get Started" variant="left">
                                    <button type="submit">Submit</button>
                                </YellowButton>
                            </Form>
                        )}
                    </Formik>
                    
                </div>
                
                
            </div>
        </>
    )
}

export default General