import React from 'react'
import ReactDOM from 'react-dom'

function App(props) {
    return (<center>{props.name}</center>)
}
ReactDOM.render(<App name="test" />,document.getElementById('app'))