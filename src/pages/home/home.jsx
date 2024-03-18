import styles from "./home.module.css"
import Footer from "../../components/footer/footer";
import  Hero from "../../components/hero/hero"
import Contact from "../../components/contact/contact";
import Sponsors from "../../components/sponsors/sponsors";
import SectionHeading from "../../components/sectionHeading/sectionHeading";


const Home = () => {
    return(
        <>
            <div>
                <Hero />
                <div className={styles.sponsors}>
                    <SectionHeading heading="I am sectional head"/>
                    <Sponsors />
                    
                    
                </div>
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Home