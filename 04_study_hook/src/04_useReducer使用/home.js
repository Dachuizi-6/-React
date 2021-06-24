import React, { useReducer } from 'react'

// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return { ...state, count: state.count + 1 }
//         case 'decrement':
//             return { ...state, count: state.count - 1 }
//         default:
//             return state
//     }
// }

import reducer from "./reducer"

export default function Home() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <h2>当前计数（useReducer    ）：{state.count}</h2>
            <button onClick={e => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={e => dispatch({ type: 'decrement' })}>-1</button>
        </div>
    )
}
