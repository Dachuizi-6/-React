import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group"

import "./index.css"

export default function SwitchTransitionDemo() {

    const [isOn, setIsOn] = useState(true)

    return (
        <SwitchTransition>
            <CSSTransition key={isOn ? "on" : "off"} timeout={500} classNames="btn">
                <button onClick={e => setIsOn(!isOn)}>{isOn ? "on" : "off"}</button>
            </CSSTransition>
        </SwitchTransition>
    )
}
