import React, { PureComponent } from 'react'

import { ZohnnyInput } from "./style"

export default class Profile extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            color: "red"
        }
    }
    render() {
        return (
            <div>
                <h2>我是Profile标题</h2>
                <input type="password" />
                {/* 动态改变样式 */}
                <ZohnnyInput color={this.state.color} type="password" />
                <ul>
                    <li>设置列表1</li>
                    <li>设置列表2</li>
                    <li>设置列表3</li>
                </ul>
            </div>
        )
    }
}
