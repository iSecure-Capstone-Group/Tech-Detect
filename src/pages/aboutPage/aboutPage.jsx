import Hero from "../../components/hero/hero"
import Footer from "../../components/footer/footer"
import SectionHeading from "../../components/sectionHeading/sectionHeading"
import Feautures from "../../components/features/features"
import styles from "../homePage/home.module.css"
import Sponsors from "../../components/sponsors/sponsors"
import Review from "../../components/reviews/reviews"
import CoreValues from "../../components/coreValues/coreValues"
// import styles from "../../components/hero/hero"
import aboutPageStyles from "./aboutPage.module.css"
import MissionVision from "../../components/missionVision/missionVision"

const AboutUsPage = () => {
    return(
        <>
        <div>
            <Hero heroHeading="What is TechDetect and How Valid Is It?" heroText="TechDetect Ventures is the go-to partner for individuals who are seeking to protect their digital assets and also people that are concerned about security." image="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711321869/Frame_20_ji1r9i.svg" />


            <div className={`${styles.reviewContainer} ${aboutPageStyles.reviewContainer}`}>
                <SectionHeading heading="Our Core Values"/>
                <div className={styles.reviewFlex}>
                    <CoreValues image={(<svg width="31" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.712 0c.524 0 1.04.034 1.52.114.473.062.94.165 1.394.308.456.138.902.31 1.348.526.434.206.88.458 1.326.732.754.48 1.496.868 2.252 1.178 1.489.596 3.062.95 4.662 1.05.812.058 1.646.092 2.514.092v8c0 1.52-.194 2.96-.582 4.332a17.988 17.988 0 0 1-1.578 3.886 20.624 20.624 0 0 1-2.376 3.45 30.176 30.176 0 0 1-2.984 3.064 35.144 35.144 0 0 1-3.406 2.65 52.754 52.754 0 0 1-3.588 2.286l-.48.286-.48-.286a54.136 54.136 0 0 1-3.612-2.286 31.153 31.153 0 0 1-3.406-2.65 30.162 30.162 0 0 1-2.982-3.064 21.895 21.895 0 0 1-2.388-3.45 19.505 19.505 0 0 1-1.578-3.886A15.794 15.794 0 0 1 .716 12V4c.87 0 1.704-.034 2.516-.092.8-.055 1.594-.17 2.376-.342.766-.172 1.532-.4 2.286-.708a13.127 13.127 0 0 0 2.24-1.166c.88-.572 1.772-.994 2.652-1.272A9.58 9.58 0 0 1 15.712 0Zm13.004 5.966a19.132 19.132 0 0 1-4.468-.754 15.919 15.919 0 0 1-4.092-1.886 8.528 8.528 0 0 0-2.122-1.006 7.77 7.77 0 0 0-2.312-.332 7.98 7.98 0 0 0-2.33.332 7.89 7.89 0 0 0-2.116 1.006A15.853 15.853 0 0 1 7.174 5.22a20.189 20.189 0 0 1-4.458.756v6.034c0 1.326.172 2.594.516 3.816.35 1.212.834 2.38 1.44 3.486a19.206 19.206 0 0 0 2.16 3.144 29.169 29.169 0 0 0 2.684 2.764c.96.87 1.966 1.67 3.018 2.412a44.187 44.187 0 0 0 3.188 2.034 44.756 44.756 0 0 0 3.178-2.034 30.775 30.775 0 0 0 3.028-2.412 29.19 29.19 0 0 0 2.686-2.764 19.187 19.187 0 0 0 2.16-3.144 16.515 16.515 0 0 0 1.418-3.486c.355-1.24.531-2.525.524-3.816V5.966Z" fill="#FDAF33"/><path fill-rule="evenodd" clip-rule="evenodd" d="m23.168 9.418-.88-.756-.812.07-8.72 10.296-2.97-4.24-.8-.136-.926.662-.138.8 3.818 5.452.434.24.914.056.468-.204 9.67-11.43-.058-.81Z" fill="#FDAF33"/></svg>)} name='Integrity' review='Integrity is the heart of our business. We believe in honesty, transparency and ethical behaviour in all our dealings.'/>

                    <CoreValues image={(<svg width="29" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.537.012a.998.998 0 0 0-.76.35l-.1.072c-3.01-.884-6.424-.2-8.806 2.054C2.757 4.486 1.95 7.25 2.445 9.836l-.03.028-1.342 1.27a2.695 2.695 0 0 0 0 3.96 3.05 3.05 0 0 0 2.514.792c.128.466.386.908.772 1.274a3.03 3.03 0 0 0 1.876.812c.05.646.336 1.28.86 1.774a3.02 3.02 0 0 0 1.874.812c.05.646.336 1.28.86 1.774a3.09 3.09 0 0 0 3.892.246l.66.624c1.16 1.1 3.046 1.1 4.208 0 .52-.494.808-1.122.86-1.766.68-.05 1.344-.32 1.864-.812.52-.492.808-1.122.86-1.766a3.03 3.03 0 0 0 1.84-.81 2.75 2.75 0 0 0 .786-1.338c.88.106 1.798-.16 2.472-.796a2.691 2.691 0 0 0 0-3.96l-1.188-1.124.226-.84a7.647 7.647 0 0 0-.738-5.772c-1.47-2.604-4.316-4.2-7.38-4.2h-2.038a5.675 5.675 0 0 0-.276-.006h-1.34Zm8.744 10.914.972.96c.06.06.129.11.202.152l1.362 1.288a.825.825 0 0 1 0 1.212.944.944 0 0 1-1.28 0l-2.28-2.154a1.07 1.07 0 0 0-1.452 0l-.024.02a.942.942 0 0 0 0 1.376l1.778 1.68a.827.827 0 0 1 0 1.212.946.946 0 0 1-1.186.08 1.072 1.072 0 0 0-1.35.092.934.934 0 0 0-.084 1.278.824.824 0 0 1-.08 1.128.946.946 0 0 1-1.2.07 1.072 1.072 0 0 0-1.358.074.935.935 0 0 0-.088 1.286c.28.34.254.834-.078 1.148a.96.96 0 0 1-1.3 0l-.644-.608.168-.158a2.691 2.691 0 0 0 0-3.96 3.026 3.026 0 0 0-1.876-.812 2.726 2.726 0 0 0-.86-1.774 3.028 3.028 0 0 0-1.874-.814 2.726 2.726 0 0 0-.86-1.774 3.065 3.065 0 0 0-2.514-.792 2.754 2.754 0 0 0-.772-1.272 3.048 3.048 0 0 0-2.204-.82 6.13 6.13 0 0 1 1.924-5.182 6.912 6.912 0 0 1 5.16-1.846l-2.19 1.58a3.008 3.008 0 0 0-.588 4.356 3.28 3.28 0 0 0 4.44.6l2.694-1.94h2.88l4.562 4.314Zm-12.818-5.71 4.446-3.204h.97c.084 0 .167.001.25.006h2.06c2.384 0 4.544 1.24 5.64 3.184a5.648 5.648 0 0 1 .604 4.052l-4.426-4.356a1 1 0 0 0-.7-.286h-3.794a1 1 0 0 0-.584.188l-2.952 2.13a1.28 1.28 0 0 1-1.714-.232 1.01 1.01 0 0 1 .2-1.48m2.164 13.258a.944.944 0 0 1 1.28.002.825.825 0 0 1 0 1.212l-1.344 1.27a.944.944 0 0 1-1.28 0 .823.823 0 0 1 0-1.212l1.344-1.272ZM11.175 17.1 9.83 18.374a.944.944 0 0 1-1.282 0 .824.824 0 0 1-.02-1.192l.02-.02 1.342-1.27.02-.02a.944.944 0 0 1 1.262.02.824.824 0 0 1 .004 1.208Zm-2.74-2.582-1.34 1.268-.022.02a.944.944 0 0 1-1.26-.02.823.823 0 0 1 0-1.212l1.34-1.268a.944.944 0 0 1 1.284 0 .824.824 0 0 1 .02 1.192l-.022.02ZM5.151 12.45 3.81 13.72a.944.944 0 0 1-1.28 0 .823.823 0 0 1 0-1.212l1.34-1.27a.944.944 0 0 1 1.282 0 .825.825 0 0 1 0 1.212Z" fill="#FDAF33"/></svg>)} name='Collaboration' review='Collaboration is key to our success. We believe in the power of teamwork and partnership to achieve common goals.'/>

                    <CoreValues image={(<svg width="29" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.495.406 4.087 1.812l2.095 2.094L7.588 2.5 5.495.406Zm18.375 0L21.775 2.5l1.407 1.406 2.094-2.093L23.87.406Zm-9.188.624c-.33.004-.664.023-1 .064-.01 0-.02-.002-.03 0-4.056.465-7.284 3.742-7.845 7.78-.448 3.25.892 6.197 3.125 8.095a5.237 5.237 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1h2.28v-4h.094V20.81c0-1.466.762-2.944 2-4.093 1.656-1.658 2.906-4.013 2.906-6.718 0-4.94-4.066-9.016-9-8.97Zm0 2c3.865-.054 7 3.11 7 6.97 0 2.094-.97 3.938-2.313 5.28l.032.032A7.792 7.792 0 0 0 16.96 20h-4.374c-.22-1.714-.955-3.373-2.344-4.563-1.767-1.5-2.82-3.76-2.468-6.312.437-3.15 2.993-5.683 6.125-6.03a6.91 6.91 0 0 1 .78-.064l.002-.001ZM.682 10v2h3v-2h-3Zm25 0v2h3v-2h-3Zm-19.5 8.094-2.094 2.093 1.407 1.407L7.587 19.5l-1.405-1.406Zm17 0L21.776 19.5l2.093 2.094 1.407-1.407-2.094-2.093ZM12.682 22h4v2h-4v-2Z" fill="#FDAF33"/></svg>)} name='Innovation' review='Innovation drives us forward. We are dedicated to exploring new ideas, and finding innovative solutions to complex security challenges.'/>
                    
                    <CoreValues image={(<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.56803 14.9998L13.9014 18.9998L20.568 9.6665M15.2347 28.3332C22.5987 28.3332 28.568 22.3638 28.568 14.9998C28.568 7.63584 22.5987 1.6665 15.2347 1.6665C7.8707 1.6665 1.90137 7.63584 1.90137 14.9998C1.90137 22.3638 7.8707 28.3332 15.2347 28.3332Z" stroke="#FDAF33" stroke-width="2"/></svg>)} name='Excellence' review='Excellence is our standard. We are committed to delivering exceptional results and exceeding expectations at every opportunity.'/>
                </div>
            </div>

            <MissionVision heading="Mission" variant="lightPink">
                <p>Mission</p>
            </MissionVision>
            <MissionVision heading="Mission" variant="lightBlue">
                <p>Vission</p>
            </MissionVision>
           

            <div className={styles.sponsors}>
                    <SectionHeading heading="Trusted by"/>
                    <Sponsors />
            </div>


            <div className={styles.featuresSectionContainer}>
                <SectionHeading heading="Meet Our Esteemed Team"/>
                <div className={styles.featuresContainer}>
                    <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711516759/Frame_37_1_xqtxoy.svg" featureTitle="Margaret Yvonne " featureDescription="C.E.O"/>

                    <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711516759/Frame_37_2_zzrcqh.svg" featureTitle="Leathia Amanih" featureDescription="Cyber Security lead"/>

                    <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711516759/Frame_37_3_wku01m.svg" featureTitle="Tobi Taiwo" featureDescription="Data Analyst lead"/>

                    <Feautures featureImage="https://res.cloudinary.com/dbv1y1xey/image/upload/v1711516758/Frame_37_4_joq32g.svg" featureTitle="Chika Miguel" featureDescription=" UI/UX Designer"/>
                </div>
            </div>


            <Footer />
        </div>
        </>
    )
}

export default AboutUsPage