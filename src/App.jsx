import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import CopyClicker from './components/CopyClicker'

const initialState = {
    copies: 0,
}

const reducer = (state = initialState, action) => {
    console.log('Reducer: ', action)
    return state
}

const store = createStore(reducer)

console.log("Our Current State: ", store.getState())

store.dispatch({ type: 'COPY_CLICK' })

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    Copy Clicker
                </header>

                <CopyClicker copies={0} CpC={1}/>

            </div>
        </Provider>
    )
}

export default App
