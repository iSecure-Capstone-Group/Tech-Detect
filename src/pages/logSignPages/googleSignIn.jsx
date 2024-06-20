import styles from "./loginSignUp.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
// import style from "../dashboard/dashboard"

const GoogleSignIn = () => {
//   function googleLogin() {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider).then(async (result) => {
//       console.log(result);
//     });


const googleLogin = () => {
    const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle the successful result
      console.log('User signed in:', result.user);
      if(result.user){
        // toast.succes("User logged in Successfully", {
        //     position: "top-center"
        // })
        window.location.href = "../dashboard"
      }
    })
    .catch((error) => {
      if (error.code === 'auth/popup-closed-by-user') {
        console.warn('Authentication popup closed by user');
        // Optionally, provide feedback to the user here
      } else {
        console.error('An error occurred during sign-in:', error);
        // Optionally, handle other types of errors here
      }
    });
  }
  return (
    <>
      <div className={styles.googleLogin} onClick={googleLogin}>
        <svg
          
          width="25"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.884 10.041h-.806V10h-9v4h5.652a5.998 5.998 0 0 1-11.652-2 6 6 0 0 1 6-6c1.53 0 2.921.577 3.98 1.52l2.83-2.829A9.954 9.954 0 0 0 12.077 2c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.194-1.959Z"
            fill="#FFC107"
          />
          <path
            d="m3.231 7.346 3.285 2.409A5.997 5.997 0 0 1 12.078 6c1.53 0 2.921.577 3.98 1.52l2.829-2.829A9.954 9.954 0 0 0 12.078 2a9.994 9.994 0 0 0-8.847 5.346Z"
            fill="#FF3D00"
          />
          <path
            d="M12.078 22c2.583 0 4.93-.989 6.705-2.596l-3.095-2.62A5.956 5.956 0 0 1 12.078 18a5.997 5.997 0 0 1-5.641-3.973l-3.261 2.512C4.83 19.778 8.192 22 12.078 22Z"
            fill="#4CAF50"
          />
          <path
            d="M21.884 10.041h-.806V10h-9v4h5.652a6.02 6.02 0 0 1-2.044 2.785h.002l3.095 2.619c-.22.198 3.295-2.404 3.295-7.404 0-.67-.069-1.325-.194-1.959Z"
            fill="#1976D2"
          />
        </svg>
        <p className={styles.googleSignin}>Sign in with Google</p>
      </div>
      

      
    </>
  );
};

export default GoogleSignIn;
