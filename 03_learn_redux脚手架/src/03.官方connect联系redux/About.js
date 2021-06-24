import React, { PureComponent } from 'react'

import { connect } from "react-redux"

import {
    decAction,
    subAction
} from "../store/actions"


class About extends PureComponent {
    render() {
        return (
            <div>
                <h1>About</h1>
                <h2>当前计数(自己connect)：{this.props.counter}</h2>
                <button onClick={e => this.props.decrement()}>-1</button>
                <button onClick={e => this.props.subCrement(10)}>-10</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    decrement() {
        dispatch(decAction())
    },
    subCrement(num) {
        dispatch(subAction(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)