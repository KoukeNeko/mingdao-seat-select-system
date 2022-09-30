import React from 'react'

import Seat from './Seat'
import MsgBox from "./MsgBox";

export default function Seats() {

    const [selected, setSelected] = React.useState([]);
    const [seat, setSeat] = React.useState([])
    const [enable, setEnable] = React.useState(true)

    React.useEffect(() => {
        let id = 1;
        let seats = [];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                seats.push(<Seat 
                    key={id}
                    id={id} 
                    canClick={enable}
                    clickFunction={(id) => setSelected(pre => [...pre, id])} 
                    selectSeats = {selected.indexOf(id) + 1}/>)
                id++;
            }
        }
        setSeat(seats)
        if(selected.length >= 4) { //have selected 5 seats
            setEnable(false)
        }
    }, [selected])

    return (
        <div className='seats'>
            {seat}
            <MsgBox />
        </div>
    )
}
