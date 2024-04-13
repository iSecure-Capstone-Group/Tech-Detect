import React from 'react';
import styles from "./resourceHero.module.css";

const ResourceHero = ({ children, variant, title }) => {
    return (
        <div className={styles.resourceHeroContainer} resourceSecondHero={variant}>
            <div className={styles.resourceHeroOverlay}> 
                {title && (
                    <h1 className={styles.resourceHeroText}>{title}</h1>
                )}
            </div>
            {children}
        </div>
    );
}

export default ResourceHero;

