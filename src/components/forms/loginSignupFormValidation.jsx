import * as Yup from 'yup' 

export const LoginSignupValidation = Yup.object({
    name: Yup.string().min(3).required("Please enter name"),
    firstname: Yup.string().min(3).required("Please enter Firstname"),
    lastname: Yup.string().min(3).required("Please enter Lastname"),
    username: Yup.string().min(5).required("Please enter username"),
    email: Yup.string().email("Please enter valid email").required("Please enter Email"),
    phoneNumber: Yup.number().integer().required("Please enter a number"),
    companyName: Yup.string().min(3).required("Please enter your company name"),
    password: Yup.string().min(5).required("Please enter Password"),
    confirmpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched").required("Please confirm password"),
    description: Yup.string().min(15).required("Please enter a description"),
    job: Yup.string().min(5).required("Please enter your job"),
})