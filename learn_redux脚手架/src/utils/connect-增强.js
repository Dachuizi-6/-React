import { PureComponent } from "react"

import { StoreContext } from "./context"

function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceRedux(WrapperComponent) {
        class NewComponent extends PureComponent {
            constructor(props, context) {
                super(props, context)

                this.state = {
                    stateCounter: context.getState()
                }
            }
            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState({
                        stateCounter: this.context.getState()
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                return (
                    <WrapperComponent {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)} />
                )
            }
        }
        NewComponent.contextType = StoreContext
        return NewComponent
    }
}

export default connect