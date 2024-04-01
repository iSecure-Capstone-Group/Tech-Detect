import styles from "./home.module.css"
import Footer from "../../components/footer/footer";
import  Hero from "../../components/hero/hero"
import Contact from "../../components/contact/contact";
import Sponsors from "../../components/sponsors/sponsors";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import AboutUs from "../../components/aboutUs/aboutus";
import YellowButton from "../../components/buttons/yellowButton";
import Feautures from "../../components/features/features";
import FAQs from "../../components/faqs/faqs";
import Review from "../../components/reviews/reviews";
import Newsletter from "../../components/newsletter/newsletter";


const Home = () => {
    return(
        <>
            <div>
                <Hero heroHead="Safeguarding your Digital Assets with Confidence" heroText="Explore innovative security measures to ensure the safety of your digital assets and empower your business with robust cybersecurity solutions." image="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711321871/Frame_23_4_yep8p0.svg"/>
                <div className={styles.sponsors}>
                    <SectionHeading heading="Trusted by"/>
                    <Sponsors />
                </div>

                <div className={styles.aboutUsHomeContainer}>
                    <SectionHeading heading="About Us"/>
                    <AboutUs />
                    <YellowButton yellowBtn="Get Started" variant="center">
                        <p>Read more</p>
                    </YellowButton>
                </div>

                <div className={styles.featuresSectionContainer}>
                    <SectionHeading heading="Our Unique Features"/>
                    <div className={styles.featuresContainer}>
                        <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820650/Frame_37_qwsqu0.svg" featureTitle="Incident Detection and Alerting" featureDescription="Our incident detection system constantly monitors all your digital assets for any phishing, unauthorized access attempts"/>

                        <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820648/Frame_39_s6zzsi.svg" featureTitle="Automated Incident Triage" featureDescription="Efficiently categorize security incidents for rapid response, minimizing disruptions to your digital assets and operations."/>

                        <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820649/Frame_38_fdup1j.svg" featureTitle="Data Loss Prevention (DLP)" featureDescription="OOur DLP feature helps to protect your organization’s sensitive data, reducing the risk of data loss incidents."/>

                        <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1710820683/Frame_40_iwfmuo.svg" featureTitle="Multi-Factor Authentication " featureDescription="Our MFA feature adds an extra layer of protection against unauthorized access to your sensitive data and systems."/>
                    </div>
                </div>

                <div className={styles.faqsContainer}>
                    <SectionHeading heading="Frequently Asked Questions"/>
                    <FAQs />
                </div>

                <div className={styles.reviewContainer}>
                    <SectionHeading heading="What our Clients Say"/>
                    {/* <Review /> */}
                    {/* { id: 1, 
                    image: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_20_jlgam2.svg',
                    name: 'Bukky Olamide', 
                    review: 'TechDetect Ventures’ platform is intuitive and user-friendly, making it easy for our team to manage security incidents and stay informed about potential threats. We’re grateful for their reliable and effective solutions.'
                },
                { id: 2, 
                    image: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_21_q4u9cm.svg',
                    name: 'Walter Nelson', 
                    review: 'With TechDetect Ventures, we’ve experienced a noticeable reduction in security breaches. Their platform has become an indipensable tool for safeguarding our digital assets.'
                },
                { id: 3, 
                    image: 'https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_22_foymia.svg',
                    name: 'Bella Anthonio', 
                    review: 'I highly recommend TechDetect Ventures to any business looking to enhance their cybersecurity defenses. Their team’s expertise and dedication to customer satisfaction are unmatched.'
                } */}
                    <div className={styles.reviewFlex}>
                        <Review image='https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_20_jlgam2.svg' name='Bukky Olamide' review='TechDetect Ventures’ platform is intuitive and user-friendly, making it easy for our team to manage security incidents and stay informed about potential threats. We’re grateful for their reliable and effective solutions.'/>

                        <Review image='https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_21_q4u9cm.svg' name='Walter Nelson' review='With TechDetect Ventures, we’ve experienced a noticeable reduction in security breaches. Their platform has become an indipensable tool for safeguarding our digital assets.'/>

                        <Review image='https://res.cloudinary.com/dbv1y1xey/image/upload/v1710945507/Ellipse_22_foymia.svg' name='Bella Anthonio' review='I highly recommend TechDetect Ventures to any business looking to enhance their cybersecurity defenses. Their team’s expertise and dedication to customer satisfaction are unmatched.'/>
                    </div>
                </div>

                <div className={styles.contactSection}>
                    <SectionHeading heading="Contact Us"/>
                    <Contact />
                    <YellowButton yellowBtn="Get Started" variant="center">
                        <p>Read more</p>
                    </YellowButton>
                </div>

                <div className={styles.subscribeNewsletter}>
                    <SectionHeading heading="Subscribe to our Newsletter"/>
                    <Newsletter/>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home