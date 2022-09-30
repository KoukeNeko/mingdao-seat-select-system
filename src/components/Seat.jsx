import React from "react";

export default function Seat(props) {

    return (
        <>
            <div
                onClick={() => {
                    if (props.seatArray.length < 5 || props.seatArray.includes(props.id)) 
                        props.onClickFunction(props.id);                  
                }}
                className="seat"
                style={{
                    backgroundColor: props.isSelected  ? "#ADFF87" : "#696969",
                    // pointerEvents: props.isSelected ? "none" : "auto",
                }}    
            >
                {props.seatArray.indexOf(props.id) >= 0 ?  props.seatArray.indexOf(props.id) + 1 : ""}
            </div>
        </>
    );
}
