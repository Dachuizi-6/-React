import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
    nickName: 'lucy',
    level: 20,
    region: '中国'
})

class Home extends PureComponent {
    render() {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <h2>{`昵称：${user.nickName} 等级：${user.level} 地区：${user.region}`}</h2>
                        )
                    }
                }
            </UserContext.Consumer>
        )
    }
}

class About extends PureComponent {
    render() {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <h2>{`昵称：${user.nickName} 等级：${user.level} 地区：${user.region}`}</h2>
                        )
                    }
                }
            </UserContext.Consumer>
        )
    }
}



export default class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <Home /><About />
            </div>
        )
    }
}
