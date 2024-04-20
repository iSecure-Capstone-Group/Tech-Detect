import YellowButton from "../buttons/yellowButton";
import { Routes, Route, Link } from "react-router-dom";
import articleSectionStyles from "./articleSection.module.css"
import styles from "../../pages/logSignPages/terms.module.css"
import formContainerStyles from "../forms/formContainer.module.css"
import DataPrivacyArticle from "../../pages/resources/dataPrivacyArticle";
import { Outlet } from "react-router-dom";


const Articles = (props) => {
  const articles = [
    { id: 1, 
        articleImage: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1711734688/Frame_626425_zwiism.svg',
        articleHeading: 'Protecting Against Phishing Scams: Tips for Identifying and Avoiding Attacks', 
        articleDetails: 'Get insights into common phishing tactics used by cybercriminals and learn how to recognize and avoid falling victim to phishing scams.' 
    },
    { id: 2, 
        articleImage: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1711735817/Frame_626425_3_mwvkga.svg',
        articleHeading: 'Cybersecurity Best Practices for Remote Workforce', 
        articleDetails: 'Explore essential cybersecurity measures to ensure the security of remote work environments and protect sensitive data.' 
    },
    { id: 3, 
        articleImage: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1711734687/Frame_626425_2_d0jlsw.svg',
        articleHeading: 'Data Breach Response Plan: Steps to Take When Your Security is Compromised', 
        articleDetails: 'Learn about the importance of having a data breach response plan in place and the critical steps to take when a security incident occurs' 
    },
  ]; // Your array of objects

  return (
    <>

        <div className={`${articleSectionStyles.articlesContainer} ${styles.termsContainer}`}>
            <div className={articleSectionStyles.mainArticle}>
                <div className={articleSectionStyles.mainArticleImageContainer}>
                    <img src={props.articleImage} alt="" />
                </div>
                <h3 className={`${formContainerStyles.createAccount} ${articleSectionStyles.mainArticleHeading}`}>{props.articleHeading}</h3>
                <div className={articleSectionStyles.eachTermsDescriptionContainer}>
                    <p className={styles.eachTermsDescription}>{props.articleDetails}</p>
                    <p className={styles.eachTermsDescription}>{props.articleDetails1}</p>
                </div>
                
                <YellowButton yellowBtn="Get Started" variant="left">
                    <Link to="./dataPrivacyArticle" className={articleSectionStyles.featureArticle}>Read More</Link>
                    {/* <Routes>
                        <Route path="/dataPrivcacyArticle" element={<DataPrivacyArticle />} />
                    </Routes> */}
                </YellowButton>
                <Outlet />
                
            </div>
            <div className={`${articleSectionStyles.articleCardContainer} ${articleSectionStyles.articlescardContainer}`}>{articles.map((item) => (
                <div key={item.id} className={articleSectionStyles.articleCard}>
                    <div>
                        <img src={item.articleImage} alt="" />
                    </div>

                    <div className={articleSectionStyles.articleBtnContainer}>
                        <div>
                            <h3 className={`${styles.eachTermsHeading} ${articleSectionStyles.eachtermsHeading}`}>{item.articleHeading}</h3>
                            <p className={`${styles.eachTermsDescription} ${articleSectionStyles.eachtermsDescription}`}>{item.articleDetails}</p>
                        </div>
                        <div >
                            <YellowButton yellowBtn="Get Started" variant="left">
                                <p>Read More</p>
                            </YellowButton>
                        </div>
                    </div>
                
                </div>

                
                ))}
            </div>
        </div>
    </>
  );
};

export default Articles;
