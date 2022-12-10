import { useState } from "react";

const Dragable = props => {
    const [position, setPosition] = useState(props.pos);

    const dragAndDrop = e => {
        setPosition([e.pageY, e.pageX]);
        if (e.type === 'dragend') {
            checkPosition();
        }
    };

    const checkPosition = () => {
        let leftCup = document.querySelector('.cup1').getBoundingClientRect();
        let leftCupPos = leftCup.top;
        let rightCup = document.querySelector('.cup2').getBoundingClientRect();
        let rightCupPos = rightCup.top;
        console.log(leftCupPos, rightCupPos);
    };

    return (
        <div
            draggable='true'
            onDragStart={(e) => {
                var img = document.createElement("img");
                img.src = "";
                e.dataTransfer.setDragImage(img, 0, 0);  
            }}
            onDrag={dragAndDrop}
            onDragEnd={dragAndDrop}
            style={{
                cursor: 'pointer',
                width: `${props.size[0]}px`,
                height: `${props.size[1]}px`,
                position: 'absolute',
                top: `${position[0]}px`,
                left: `${position[1]}px`
            }}
        >
            {props.children}
        </div>
    );
}; 

export default Dragable;