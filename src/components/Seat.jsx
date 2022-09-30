import React from "react";



export default function Seat(props) {
    const [selected, setSelected] = React.useState(false);
    const [selectedID, setSelectedID] = React.useState("");
    const row = Math.floor((props.id - 1) / 8) + 1;
    const column = 8 - ((props.id - 1) % 8);

    return (
        <>
            <div
                onClick={() => {
                    setSelectedID(props.clickFunction(props.id));
                    // alert(`Seat ${row} ${column} is selected`)
                    console.log(props.selectSeats);
                    setSelected(!selected);
                    
                }}
                className="seat"
                style={{
                    backgroundColor: selected ? "#ADFF87" : "#696969",
                    pointerEvents: (selected ||!props.canClick) ? "none" : "auto",
                }}
                
            >
                {selected && props.selectSeats >= 0 ? props.selectSeats : ""}
            </div>
        </>
    );
}
