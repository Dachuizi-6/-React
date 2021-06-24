import React, { PureComponent } from 'react'

function withRender(WrapperComponent) {
    class NewComponent extends PureComponent {
        UNSAFE_componentWillMount() {
            this.start = Date.now()
        }
        componentDidMount() {
            this.end = Date.now()
            let duration = this.end - this.start;
            console.log(`${WrapperComponent.name}渲染时间为:${duration}`);
        }
        render() {
            return <WrapperComponent />
        }
    }
    return NewComponent
}

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

const HomeRender = withRender(Home)
const AboutRender = withRender(About)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <HomeRender />
                <AboutRender />
            </div>
        )
    }
}
