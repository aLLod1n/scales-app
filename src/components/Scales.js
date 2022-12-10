const Scales = (props) => {
    console.log(props);
    return (
        <div className="scalesWrapp">
            <div className="leftCup">
                <div className="cup cup1"></div>
                <div className="cupLine1"></div>
                <div className="cupLine2"></div>
            </div>
            <div className="rightCup">
                <div className="cup cup2"></div>
                <div className="cupLine1"></div>
                <div className="cupLine2"></div>
            </div>
            <div className="balanceLeft"></div>
            <div className="balanceRight"></div>
            <div className="balanceStick"></div>
            <div className="scalesHead"></div>
            <div className="scalesBody"></div>
            <div className="scalesBottom"></div>
        </div>
    )
}

export default Scales;