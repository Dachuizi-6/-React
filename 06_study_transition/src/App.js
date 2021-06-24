import React from 'react'

import CsstransitionDemo from "./csstransition"
import SwitchTransitionDemo from './switch-transition'
import TransitionGroupDemo from './transition-group'

export default function App() {
    return (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
            {/* <CsstransitionDemo /> */}

            {/* <SwitchTransitionDemo /> */}
            <TransitionGroupDemo />
        </div>
    )
}
