import React, { PureComponent } from 'react'

import store from "../store"
import {
    incAction,
    addAction
} from "../store/actions"

export default class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <div>
                <h1> Home </h1>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.addCrement(5)}>+5</button>
            </div>
        )
    }

    increment() {
        store.dispatch(incAction())
    }
    addCrement(num) {
        store.dispatch(addAction(num))
    }
}
