
import React from 'react'
import ReactDOM from 'react-dom'
import counter from './reducers'
import App from './App'
import { createStore } from 'redux'
import {increment, decrement, multiple, division} from './actions'


const store = createStore(counter)
const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
    <App
          value={store.getState()}
          onIncrement={(i) => store.dispatch(increment(i))}
          onDecrement={(i) => store.dispatch(decrement(i))}
          onMultiply={(i, multiplier)=>store.dispatch(multiple(i, multiplier))}
          onDivision ={(i, divisor)=>store.dispatch(division(i, divisor))}
    />,
    rootEl
)

render()
store.subscribe(render)

