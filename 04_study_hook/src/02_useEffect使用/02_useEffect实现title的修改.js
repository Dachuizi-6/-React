import React, { useEffect, useState } from 'react'

export default function EffectHookChangeTitle() {
    const [count, setCount] = useState(0)
    console.log("函数组件渲染了")

    useEffect(() => {
        document.title = count
    })

    return (
        <div>
            <h2>当前计数：{count}</h2>
            <button onClick={e => setCount(count + 1)}>
                +1
            </button>
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}
