import colorTableStyles from "./colorTable.module.css"

const ColorTable = () => {
    return(
        <>
            <div className={colorTableStyles.tableContainer}>
                <div className={colorTableStyles.threatTableContainer}>
                    <span className={colorTableStyles.sidetexxt}>Threat Level Severity</span>
                    <table className={colorTableStyles.colorTable}>
                        {/* <colgroup>
                            <col span="2" className={colorTableStyles.white-col} />
                            <col className={colorTableStyles.gray-col} />
                            <col className={colorTableStyles.yellow-col} />
                            <col />
                            
                        </colgroup> */}
                        <tr className={colorTableStyles.tableRow}>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.severity}`}>Very High</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.yellowData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                        </tr>
                        <tr className={colorTableStyles.tableRow}>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.severity}`}>High</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.yellowData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                        </tr>
                        <tr className={colorTableStyles.tableRow}>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.severity}`}>Moderate</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.yellowData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.yellowData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.redData}`}></td>
                        </tr>
                        <tr className={colorTableStyles.tableRow}>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.severity}`}>Low</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.yellowData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.yellowData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.yellowData}`}></td>
                        </tr>
                        <tr className={colorTableStyles.tableRow}>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.severity}`}>Very Low</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.greenData}`}></td>
                        </tr>
                        <tr className={`${colorTableStyles.tableRow} ${colorTableStyles.categoriesContainer}`}>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.tableDataVertical}`}></td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.tableDataVertical}`}>Very Low</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.tableDataVertical}`}>Low</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.tableDataVertical}`}>Moderate</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.tableDataVertical}`}>High</td>
                            <td className={`${colorTableStyles.tableData} ${colorTableStyles.tableDataVertical}`}>Very High</td>
                            
                        </tr>
                    </table>
                    
                </div>
                <p className={colorTableStyles.categories}>Threat Categories</p>

            </div>
        </>
    )
}
export default ColorTable 