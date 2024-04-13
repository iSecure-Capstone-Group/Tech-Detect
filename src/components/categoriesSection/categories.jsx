import React from 'react';
import styles from "./categories.module.css"; // Ensure correct path

const Categories = () => {
    return (
        <div className={styles.categoriesImageContainer}>
            <div className={`${styles.imageBackground} ${styles.image1}`}>
                <p>Data Protection</p>
            </div>
            <div className={`${styles.imageBackground} ${styles.image2}`}>
                <p>Threat Intelligence</p>
            </div>
            <div className={`${styles.imageBackground} ${styles.image3}`}>
                <p>Cybersecurity Trends</p>
            </div>
            <div className={`${styles.imageBackground} ${styles.image4}`}>
                <p>Industry Insights</p>
            </div>
        </div>
    );
}

export default Categories;
