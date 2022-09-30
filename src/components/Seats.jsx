import React from "react";

import Seat from "./Seat";
import MsgBox from "./MsgBox";

export default function Seats() {
    const [selected, setSelected] = React.useState([]);
    const [seats, setSeats] = React.useState([]);
    const [msg, setMsg] = React.useState("");
    const [status, setStatus] = React.useState({
        enable: true,
        showUpmsg: false,
        isShow: false,
    });

    React.useEffect(() => {
        setSeats(
            Array.from({ length: 48 }).map((_, index) => ({
                id: index + 1,
                isSelected: false,
            }))
        );
    }, []);

    React.useEffect(() => {
        if (selected.length >= 5) {
            setMsg("已選擇 " + selected.length + " 個座位，已達上限");
            setStatus(pre => ({ ...pre, enable: false}));
        }
        else {
            setStatus(pre => ({ ...pre, enable: false}));
        }

        if (selected.length === 0){
            setStatus(pre => ({...pre, isShow: false, enable: false}))
        }else{
            setStatus(pre => ({...pre, isShow: true, enable: false}))
        }
            
    }, [selected]);

    const handelReset = () => {
        setSelected([]);
        setSeats(
            seats.map((seat) => ({
                ...seat,
                isSelected: false,
            }))
        );

        setStatus({
            enable: true,
            showUpmsg: false,
        });
    };

    function handelClick(id) {

        setSeats(
            seats.map((seat) => {
                if (seat.id === id) {
                    const row = Math.floor((seat.id - 1) / 8) + 1;
                    const column = 8 - ((seat.id - 1) % 8);
                    if (seat.isSelected) {
                        setSelected(selected.filter((item) => item !== id));
                        setMsg(`已取消 第 ${row} 排 第 ${column} 列`);
                    } else {
                        setSelected([...selected, id]);
                        setMsg(`已選擇 第 ${row} 排 第 ${column} 列`);
                    }
                    return {
                        ...seat,
                        isSelected: !seat.isSelected,
                    };
                }
                return seat;
            })
        );

        setStatus({
            enable: selected.length >= 5 ? false : true,
            showUpmsg: true,
        });
    }

    return (
        <div className="seats">
            {seats.map((items) => (
                <Seat
                    seatArray={selected}
                    id={items.id}
                    isSelected={items.isSelected}
                    onClickFunction={() => handelClick(items.id)}
                />
            ))}
            {
                <MsgBox
                    isShow={status.isShow}
                    canSend={selected.length == 5}
                    id={selected[selected.length - 1]}
                    resetFunction={() => handelReset()}
                    msg={msg}
                />
            }
        </div>
    );
}
