
import React from 'react'
import ReactDOM from 'react-dom'
import counter from './reducers'
import App from './App'
import { createStore } from 'redux'
import {Provider} from 'react-redux'

const store = createStore(counter)
const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)

render()
store.subscribe(render)

