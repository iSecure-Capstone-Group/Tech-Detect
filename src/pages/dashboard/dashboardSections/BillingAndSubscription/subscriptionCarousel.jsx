import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../overview.module.css"
import cardStyles from "./subscription.module.css"
import React from "react";
import Slider from "react-slick";
import SubscriptionCard from "./subscriptionCard";
import { Link } from "react-router-dom";
import YellowButton from "../../../../components/buttons/yellowButton";
import SubscriptionPlan from "./subscriptionPlan";


function SimpleSlider() {
    
  return (
    <div className={cardStyles.SubPlanContainer}>
      <div className={cardStyles.allCardsContainer}>
        <div className={cardStyles.subCard}>
          <div className={cardStyles.subType}>
            <p></p>
            <SubscriptionPlan variant="free">
              <p>FREE</p>
            </SubscriptionPlan>
          </div>
          <div className={cardStyles.cardContentContainer}>
            <p className={cardStyles.price}>$0.00 <span className={cardStyles.duration}>/mo</span></p>
            
            <div className={cardStyles.subButton}>
              <YellowButton yellowBtn="Get Started" variant="long">
                    <Link type="submit">Sign Up</Link>
              </YellowButton>
            </div>

            <div className={cardStyles.subFeatures}>
              <p className={cardStyles.featureTitle}>Features Included :</p>
              
              <p>Vulnerability scanning</p>
              <p>Security alerts</p>
              
            </div>
          </div>
        </div>

        <div className={cardStyles.subCard}>
          <div className={cardStyles.subType}>
          <p></p>
            <SubscriptionPlan variant="basic">
              <p>BASIC</p>
            </SubscriptionPlan>
          </div>
          <div className={cardStyles.cardContentContainer}>
            <p className={cardStyles.price}>$9.99 <span className={cardStyles.duration}>/mo</span></p>
            
            <div className={cardStyles.subButton}>
              <YellowButton yellowBtn="Get Started" variant="long">
                    <Link type="submit">Sign Up</Link>
              </YellowButton>
            </div>

            <div className={cardStyles.subFeatures}>
              <p className={cardStyles.featureTitle}>Features Included :</p>
              <p>Free features</p>
              <p>Increased vulnerability scan frequency</p>
              <p>Expanded  threat detection capabilities</p>
              <p>Limited incident response support </p>
              
            </div>
          </div>
        </div>

        <div className={cardStyles.subCard}>
          <div className={cardStyles.subType}>
            <p></p>
            <SubscriptionPlan variant="premium">
              <p>PREMIUM</p>
            </SubscriptionPlan>
          </div>
          <div className={cardStyles.cardContentContainer}>
            <p className={cardStyles.price}>$29.99 <span className={cardStyles.duration}>/mo</span></p>
            
            <div className={cardStyles.subButton}>
              <YellowButton yellowBtn="Get Started" variant="long">
                    <Link type="submit">Sign Up</Link>
              </YellowButton>
            </div>

            <div className={cardStyles.subFeatures}>
              <p className={cardStyles.featureTitle}>Features Included :</p>
              <p>Basic features</p>
              <p>Real time priority alerts</p>
              <p>24/7 basic customer support</p>
              <p>Advanced incidence response resources</p>
            </div>
          </div>
        </div>


        <div className={`${cardStyles.subCard} ${cardStyles.premium}`}>
        <div className={cardStyles.subType}>
          <p></p>
          <SubscriptionPlan variant="enterprise">
            <p>ENTERPRISE</p>
          </SubscriptionPlan>
        </div>
        <div className={cardStyles.cardContentContainer}>
          <p className={cardStyles.price}>$99.99 <span className={cardStyles.duration}>/mo</span></p>
          
          <div className={cardStyles.subButton}>
            <YellowButton yellowBtn="Get Started" variant="long">
                  <Link type="submit">Sign Up</Link>
            </YellowButton>
          </div>

          <div className={cardStyles.subFeatures}>
            <p className={cardStyles.featureTitle}>Features Included :</p>
            <p>Premium features</p>
            <p>Advanced threat detection anomaly</p>
            <p>Dedicated customer success manager</p>
            <p>Advanced incidence response support</p>
            
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}
  
export default SimpleSlider;
