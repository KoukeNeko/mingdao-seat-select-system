import React from 'react'

export default function MsgBox() {
  return (
    <nav className="confirm" id="confirm-box">
        <a className="info">已選取 第1排 第2列</a>
        <div className="btns">
            <button className="cancel-btn" onclick="cancel();">重選</button>
            <button className="confirm-btn" onclick="confirm();" disabled>送出</button>
        </div>
    </nav>
  )
}
