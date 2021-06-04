import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
    nickName: 'julyion',
    level: 30,
    region: '中国'
})

class Home extends PureComponent {
    render() {
        return (
            <h2>{`昵称：${this.props.nickName} 等级：${this.props.level} 地区：${this.props.region}`}</h2>
        )
    }
}

class About extends PureComponent {
    render() {
        return (
            <h2>{`昵称：${this.props.nickName} 等级：${this.props.level} 地区：${this.props.region}`}</h2>
        )
    }
}

class Detail extends PureComponent {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.nickName}</li>
                    <li>{this.props.level}</li>
                    <li>{this.props.region}</li>
                </ul>
            </div>
        )
    }
}


function enhanceContext(WrapperContext) {
    function NewComponent(props) {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            < WrapperContext {...props} {...user} />
                        )
                    }
                }
            </UserContext.Consumer>
        )
    }
    NewComponent.displayName = "EnhanceContext"
    return NewComponent
}

const EnhanceContextHome = enhanceContext(Home)
const EnhanceContextAbout = enhanceContext(About)
const EnhanceContextDetail = enhanceContext(Detail)


export default class App extends PureComponent {
    render() {
        return (
            <UserContext.Provider value={{ nickName: '大帅比', level: 99, region: '大中华' }}>
                App
                <EnhanceContextHome />
                <EnhanceContextAbout />
                <EnhanceContextDetail />
            </UserContext.Provider>
        )
    }
}
