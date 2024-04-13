import React from 'react';
import styles from "./newsletter.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'; // Assuming Yup is used for validation

const initialValues = {
    email: '',
};

const NewsletterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

const Newsletter = () => {
    return (
        <div className={styles.newsletterContainer}>
            <div className={styles.newsletterInstruction}>
                <p>Be the first to know about our latest product updates, special promotions, and discounts.</p>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={NewsletterSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // Handle your form submission logic here
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles.subscribeFormContainer}>
                            <Field 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email address" 
                                className={styles.subscribeForm}
                            />
                            <div className={styles.subscribeButton}>
                                <button type="submit">Subscribe</button>
                            </div>
                        </div>
                        {touched.email && errors.email && <div>{errors.email}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Newsletter;
