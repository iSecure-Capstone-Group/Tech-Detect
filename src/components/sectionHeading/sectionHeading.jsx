import styles from "./sectionheading.module.css"

const SectionHeading = (props) => {
    return(
        <>
            <p className={styles.sectionHeading}>{props.heading}</p>
        </>
    )
}

export default SectionHeading