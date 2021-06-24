import React, { useState } from 'react'

import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./index.css"

export default function TransitionGroupDemo() {
    const [friends, setFriends] = useState(["Lilly", "lucy", "rebeca"])
    const removeItem = (index) => {
        setFriends(friends.filter((item, indey) => index !== indey))
    }
    return (
        <TransitionGroup>
            {
                friends.map((item, index) => {
                    return (
                        <CSSTransition key={item} timeout={1000} classNames="af" onExited={el => console.log("111")}>
                            <div>
                                {item}
                                <button onClick={e => removeItem(index)}>-</button>
                            </div>
                        </CSSTransition>
                    )
                })
            }
            <button onClick={e => setFriends([...friends, "Zohnny"])}>AddFriends</button>
        </TransitionGroup>
    )
}
