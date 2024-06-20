// import React, { useState } from 'react';
import styles from "./profilePic.module.css"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../../firebase';

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user)
      setImage(user)
    })
  }
  useEffect(() => {
    fetchUserData();
  }, []);


  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className={styles.ProfilePictureConatainer}>
      {/* <input type="file" onChange={handleFileChange} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />} */}
      {image ? (
        <>
          <img className={styles.profilePictureGoogle} src={image.photoURL} alt="Uploaded"/>
        </>
      ): <p>Loading....</p>}
    </div>
  );
};

export default ProfilePicture;
