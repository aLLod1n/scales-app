const Weight = ({label, labelSize}) => {
    return (
        <div className="imageWrapp" >
            <div style={{fontSize: labelSize}} className="labelKg">{label}</div>
            <div className="element1"></div>
            <div className="element2"></div>
            <div className="element3"></div>
        </div>
    );
};

export default Weight;