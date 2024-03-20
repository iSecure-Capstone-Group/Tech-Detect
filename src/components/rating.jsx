import { useState } from 'react';
import styles from "../components/rating.module.css";

const Rating = () => {
    const [rating, setRating] = useState(5); // Example rating value

    const StarIcon = () => (
        <svg width="24" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5 2.694 8.292h8.719l-7.054 5.124 2.694 8.292L12 17.084l-7.053 5.124 2.694-8.292L.587 8.792h8.719L12 .5Z" fill="#FDAF33"/></svg>
    );

    return (
        <div className={styles.rateStarIcons}>
            {[...Array(rating)].map((_, index) => (
                <StarIcon key={index} />
            ))}
        </div>
    );
};

export default Rating;
