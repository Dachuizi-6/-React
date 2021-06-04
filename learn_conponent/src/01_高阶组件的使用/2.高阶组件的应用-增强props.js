import React, { PureComponent } from 'react'

class Home extends PureComponent {
    render() {
        return <h2>{`昵称：${this.props.nickname} 级别：${this.props.level} 地区：${this.props.origin}`}</h2>
    }
}

class About extends PureComponent {
    render() {
        return <h2>{`昵称：${this.props.nickname} 级别：${this.props.level} 地区：${this.props.origin}`}</h2>
    }
}

function enhanceProps(WrapperComponent) {
    class NewComponent extends PureComponent {
        render() {
            return <WrapperComponent {...this.props} origin="中国" />
        }
    }
    NewComponent.displayName = "MyComponent"
    return NewComponent
}

const EnhanceHome = enhanceProps(Home)

const EnhanceAbout = enhanceProps(About)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                App
                {/* <Home nickname="tom" level={0} origin="大中华" />
                <About nickname="jack" level={90} origin="China" /> */}

                <EnhanceHome nickname="tom" level={0} />
                <EnhanceAbout nickname="jack" level={90} />
            </div>
        )
    }
}