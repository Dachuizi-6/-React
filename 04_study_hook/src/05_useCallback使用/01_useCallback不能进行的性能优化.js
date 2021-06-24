import React, { useState, useCallback } from 'react'

export default function UseCallbackNoDemo() {
    const [count, setCount] = useState(0)

    const handleChangeAdd1 = () => {
        console.log("第一个函数渲染")
        setCount(count + 1)
    }

    const handleChangeAdd2 = useCallback(() => {
        console.log("第二个函数渲染")
        setCount(count + 1)
    }, [])

    return (
        <div>
            <h2>useCallback不能进行的性能优化：{count}</h2>
            <button onClick={handleChangeAdd1}>+1</button>
            <button onClick={handleChangeAdd2}>+1</button>
        </div>
    )
}
