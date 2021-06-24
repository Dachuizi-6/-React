import React, { useReducer } from 'react'

import reducer from "./reducer"

export default function Profile() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <h2>当前计数（useReducer    ）：{state.count}</h2>
            <button onClick={e => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={e => dispatch({ type: 'decrement' })}>-1</button>
        </div>
    )
}
