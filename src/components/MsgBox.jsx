import React from "react";

export default function MsgBox(props) {

  return (
    <nav className="confirm" id="confirm-box" style={{
      bottom: props.isShow ? "10px" : "-100px",
    }}>
      <a className="info">{props.msg}</a>
      <div className="btns">
        <button className="cancel-btn" onClick={props.resetFunction}>
          重選
        </button>
        <button className="confirm-btn" onClick={() => alert("狐狸都不幫我")} disabled={!props.canSend} style={{
          cursor: props.canSend ? "pointer" : "not-allowed",
        }}>
          送出
        </button>
      </div>
    </nav>
  );
}
