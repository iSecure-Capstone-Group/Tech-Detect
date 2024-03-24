import * as Yup from 'yup' 

export const LoginSignupValidation = Yup.object({
    name: Yup.string().min(3).required("Please enter name"),
    email: Yup.string().email("Please enter valid email").required("Please enter Email"),
    password: Yup.string().min(5).required("Please enter Password"),
    confirmpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched").required("Please confirm password")
})