import styles from "./dashBoardMenu.module.css"

const DashBoardMenu = (props) => {
    return(
        <>
            <div className={styles.dashBoardMenuContainer}>
                <p>{props.menuIcon}</p>
                <p>{props.menuTitle}</p>
            </div>
        </>
    )
}

export default DashBoardMenu