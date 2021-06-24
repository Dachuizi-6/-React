import React, { useState } from 'react'

import { CSSTransition } from "react-transition-group"

import "./index.css"

export default function CsstransitionDemo() {
    const [show, setShow] = useState(true)
    return (
        <div>
            <button onClick={e => setShow(!show)}>切换显示</button>

            <CSSTransition in={show} timeout={1000} classNames="ao">
                <div className="div-wrapper">嗷嗷嗷~</div>
            </CSSTransition>
        </div>
    )
}
