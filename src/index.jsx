import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    copies: 0,
    CpC: 1
}

const reducer = (state = initialState, action) => {
    const { type } = action
    switch (type) {
        case 'COPY_CLICK':
            console.log('Current coppies: ' + state.copies)
            return {
                ...state,
                copies: state.copies + state.CpC
            }
        case 'UPGRADE_COPY':
            console.log('Current CpC: ' + state.CpC)
            return {
                ...state,
                CpC: state.CpC + 1
            }
        default:
            return state
    }
}

const store = createStore(reducer, initialState)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)
