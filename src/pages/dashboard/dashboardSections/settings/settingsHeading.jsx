import settingStyles from "./settings.module.css"

const SettingsHeading = (props) => {
    return(
        <>
            <div className={settingStyles.headingContainer}>
                
                <p className={settingStyles.settingHeadingProps}>{props.heading}</p>
                <p >{props.headingExplanation}</p>
            </div>
        </>
    )
}

export default SettingsHeading