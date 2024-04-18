import React, { useState } from 'react';
import styles from "./profilePic.module.css"

const ProfilePicture = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.ProfilePictureConatainer}>
      <input type="file" onChange={handleFileChange} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />}
    </div>
  );
};

export default ProfilePicture;
