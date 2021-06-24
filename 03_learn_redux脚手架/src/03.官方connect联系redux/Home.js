import React, { PureComponent } from 'react'

import { connect } from "react-redux"

import {
    incAction,
    addAction
} from "../store/actions"


class Home extends PureComponent {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数(自己的connect)：{this.props.counter}</h2>
                <button onClick={e => this.props.increment()}>+1</button>
                <button onClick={e => this.props.addCrement(5)}>+5</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    increment() {
        dispatch(incAction())
    },
    addCrement(num) {
        dispatch(addAction(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)