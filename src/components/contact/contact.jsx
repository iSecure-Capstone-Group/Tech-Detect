import styles from './contact.module.css'
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik'
import YellowButton from '../buttons/yellowButton';
// import {Routes, Route, Link} from 'react-router-dom'

let userSchema = object({
    username: string().required().min(8).max(10),
    password: string().required(),
    createdOn: date().default(() => new Date()),
    textarea: string().required().min(8).max(10),
});

const Contact = () =>{
    return(
        <>
            
            <Formik
            validationSchema={userSchema} initialValues={{ username: '', password: '' }}
            >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                    
                    

                    <p className={styles.login}>Name</p>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            value={values.username}
                            placeholder="ENter your full name"

                            className={styles.input}
                        />
                        <div className={styles.formErrors}>{errors.username}</div>
                    </div>
                    
                    <p className={styles.login}>Email</p>
                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Enter your email address"
                            className={styles.input}
                        />
                        <div className={styles.formErrors}>{errors.password}</div>
                    </div>
                    <p className={styles.login}>Phone Number</p>
                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Enter you phone number"
                            className={styles.input}
                        />
                        <div className={styles.formErrors}>{errors.password}</div>
                    </div>

                    <p className={styles.login}>Message</p>
                    <div className={styles.messageContainer}>
                        <textarea type="text"
                            name="textarea"
                            onChange={handleChange}
                            value={values.textarea}>
                            
                            
                        </textarea>
                        <div className={styles.formErrors}>{errors.textarea}</div>
                    </div>

                    
                    
                    {/* <button type="submit" disabled={isSubmitting} className={styles.btn}>
                        Login
                    </button> */}

                    {/* <div className={styles.alreadyHaveAccount}>
                        <p>Don't have an account?</p>
                    </div> */}
                </form>
            )}
            </Formik>
        </>
    )
    
}

export default Contact