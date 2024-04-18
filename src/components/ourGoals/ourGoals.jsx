import styles from "./ourGoals.module.css"
import React, { useEffect, useState } from 'react';

const OurGoals = ({ targetReach, unit, whoToReach }) => {
  const [currentReach, setCurrentReach] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReach((prevReach) =>
        Math.min(prevReach + 1, Number(targetReach))
      );

      if (currentReach >= Number(targetReach)) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentReach, targetReach]);

  return (
    <div className={styles.reachCard}>
      <p className={styles.whoToReach}>{whoToReach}</p>
      <p className={styles.reach}>{currentReach}{unit}</p>
    </div>
  );
};

export default OurGoals;
