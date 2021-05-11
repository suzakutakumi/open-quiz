import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'



function App() {
    let [status, setStatus] = useState("")
    return (
        <div>
            <button onClick={() => {
                fetch('/post', {
                    method: 'POST'
                }).then((res) => res.json()).then((resJson) => {
                    setStatus(resJson.message)
                })
            }}>
                push me!
        </button>
        <br/>
            {status}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))