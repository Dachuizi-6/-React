import store from "./store/index.js"

import {
    addAction,
    incAction,
    subAction,
    decAction
} from "./store/actions.js"

store.subscribe(() => {
    console.log(store.getState().counter);
})

store.dispatch(addAction(5))
store.dispatch(subAction(3))
store.dispatch(subAction(2))
store.dispatch(incAction())
store.dispatch(addAction(2))
store.dispatch(subAction(2))
store.dispatch(addAction(3))