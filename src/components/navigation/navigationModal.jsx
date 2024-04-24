import React from 'react';
import styles from "./navigation.module.css"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import buttons from "../buttons/buttons.module.css"
import Logo from '../logo';




function NavModal({ onClose }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modal")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button onClick={onClose} className={styles.closeBtn}>&#x2716;</button>
          <ul className={`${styles.navUl} ${styles.modalNavUl}`}>
            <div className={styles.modalNavLi}>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="/">Home</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="./about">About</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="/resources">Resources</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="/login">Login</Link></li>
                <li className={`${styles.navli} ${styles.navModalLi}`}><Link to="/signup">SignUp</Link></li>
            </div>
          </ul>
          
        </div>
    </div>
    
    </>
  );
}

export default NavModal;
