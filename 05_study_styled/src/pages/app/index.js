import React, { PureComponent } from 'react'

import { ZohnnyButton, PrimaryZohnnyButton } from './style'

export default class Main extends PureComponent {
    render() {
        return (
            <div>
                <ZohnnyButton>一般按钮</ZohnnyButton>
                <PrimaryZohnnyButton>主要按钮</PrimaryZohnnyButton>
            </div>
        )
    }
}
