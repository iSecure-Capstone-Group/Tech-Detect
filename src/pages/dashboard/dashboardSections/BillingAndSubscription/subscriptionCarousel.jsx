import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../overview.module.css"
import cardStyles from "./subscription.module.css"
import React from "react";
import Slider from "react-slick";
import SubscriptionCard from "./subscriptionCard";
import { Link } from "react-router-dom";
import YellowButton from "../../../../components/buttons/yellowButton";
import subType from "./subType";


function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
      <div className={cardStyles.now}>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <SubscriptionCard>
                            <div className={cardStyles.allCardsContainer}>
                              <div className={cardStyles.subCard}>
                                <div className={cardStyles.subType}>
                                  <subType typeVariant="free">
                                    <p>FREE</p>
                                  </subType>
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
                                  <subType typeVariant="free">
                                    <p>BASIC</p>
                                  </subType>
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
                                    <p>Free features</p>
                                    <p>Increased vulnerability scan frequency</p>
                                    <p>Expanded  threat detection capabilities</p>
                                    <p>Limited incident response support </p>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className={cardStyles.subCard}>
                                <div className={cardStyles.subType}>
                                  <subType typeVariant="free">
                                    <p>PREMIUM</p>
                                  </subType>
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
                                    <p>Basic features</p>
                                    <p>Real time priority alerts</p>
                                    <p>24/7 basic customer support</p>
                                    <p>Advanced incidence response resources</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </SubscriptionCard>
                    </div>
                    <div>
                      <SubscriptionCard>
                        <div className={`${cardStyles.subCard} ${cardStyles.premium}`}>
                          <div className={cardStyles.subType}>
                            <subType typeVariant="free">
                              <p>ENTERPRISE</p>
                            </subType>
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
                              <p>Premium features</p>
                              <p>Advanced threat detection anomaly</p>
                              <p>Dedicated customer success manager</p>
                              <p>Advanced incidence response support</p>
                              
                            </div>
                          </div>
                        </div>
                      </SubscriptionCard>
                    </div>
                    
                </Slider>
            </div>
            <style jsx>{`
        
        .slick-prev:before,
        .slick-next:before {
          color: black; 
        }

        
        .slick-prev {
          left: -30px;
        }

        .slick-next {
          right: -30px; 
        }
      `}</style>
      </div>
    );
  }
  
  export default SimpleSlider;
