export default function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

// useReducer 只会共享reducer函数、不会共享状态