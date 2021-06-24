import React, { useContext } from 'react'

import { UserContext, ThemeContext } from "../App"

export default function UseContextHookDemo() {
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)

    console.log(user, theme)
    return (
        <div>
            <h2>名字：{user.name} 年龄：{user.age}</h2>

            <div style={{ fontSize: theme.fontSize, color: theme.color }}>我是采用共享的样式</div>
        </div>
    )
}
