import React, { useEffect, useState } from 'react'

export default function MultiEffectHook() {
    const [count, setCount] = useState(0)
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        console.log("修改Dom", count)
    }, [count])

    useEffect(() => {
        console.log("发送请求")
    }, [])

    useEffect(() => {
        console.log("监听事件")
    }, [])

    return (
        <div>
            <h2>MultiEffectHook</h2>
            <h2>{count}</h2>
            <button onClick={e => setCount(count + 1)}> +1 </button>

            <h2>{isLogin ? "Zohnny" : '未登录'}</h2>
            <button onClick={e => setIsLogin(!isLogin)}>切换登录</button>
        </div>
    )
}
