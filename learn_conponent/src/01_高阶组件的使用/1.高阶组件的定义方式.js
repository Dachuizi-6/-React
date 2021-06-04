import React, { PureComponent } from 'react'

class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>App:{this.props.name}</h2>
            </div>
        )
    }
}

function enhanceComponent(WrapperComponent) {
    class NewComponent extends PureComponent {
        render() {
            return <WrapperComponent {...this.props} />
        }
    }

    NewComponent.displayName = "AAA"
    return NewComponent
}

function enhanceComponent2(WrapperComponent) {
    function NewComponent(props) {
        return <WrapperComponent {...props} />
    }

    NewComponent.displayName = "BBB"
    return NewComponent
}

export default enhanceComponent2(App)