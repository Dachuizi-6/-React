import React, { PureComponent } from 'react'

import store from "../store"
import {
    decAction,
    subAction
} from "../store/actions"

export default class About extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        this.unsubcribe = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    componentWillUnmount() {
        this.unsubcribe()
    }
    render() {
        return (
            <div>
                <h1>About</h1>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.decrement()} >-1</button>
                <button onClick={e => this.subDecrement(5)}>-5</button>
            </div>
        )
    }
    decrement() {
        store.dispatch(decAction())
    }
    subDecrement(num) {
        store.dispatch(subAction(num))
    }
}
