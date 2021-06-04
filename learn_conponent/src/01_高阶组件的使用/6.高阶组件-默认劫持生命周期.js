import React, { PureComponent } from 'react'

class Home extends PureComponent {
    UNSAFE_componentWillMount() {
        this.start = Date.now()
    }
    componentDidMount() {
        this.end = Date.now()
        let duration = this.end - this.start;
        console.log(`Home渲染时间为:${duration}`);
    }
    render() {
        return <h2>Home</h2>
    }
}

class About extends PureComponent {
    UNSAFE_componentWillMount() {
        this.start = Date.now()
    }
    componentDidMount() {
        this.end = Date.now()
        let duration = this.end - this.start;
        console.log(`About渲染时间为:${duration}`);
    }
    render() {
        return <h2>About</h2>
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <About />
            </div>
        )
    }
}
