import { PureComponent } from "react"

import store from "../store"

function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceRedux(WrapperComponent) {
        return class NewComponent extends PureComponent {
            constructor(props) {
                super(props)

                this.state = {
                    stateCounter: store.getState()
                }
            }
            componentDidMount() {
                this.unsubscribe = store.subscribe(() => {
                    this.setState({
                        stateCounter: store.getState()
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                return (
                    <WrapperComponent {...this.props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />
                )
            }
        }
    }
}

export default connect