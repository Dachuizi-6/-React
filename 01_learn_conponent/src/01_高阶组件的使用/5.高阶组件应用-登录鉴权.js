import React, { PureComponent } from 'react'

function withLogin(WrapperComponent) {
    function NewComponent(props) {
        if (props.isLogin) {
            return <WrapperComponent {...props} />
        } else {
            return <LoginPage />
        }
    }
    return NewComponent
}

function LoginPage() {
    return <h2>欢迎登录</h2>
}

class CratPage extends PureComponent {
    render() {
        return <h2>购物车</h2>
    }
}

const WithCrat = withLogin(CratPage)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <WithCrat isLogin={false}></WithCrat>
            </div>
        )
    }
}
