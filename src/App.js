import React,{useState} from "react"
import "./App.css"

const App = () => {
    const [counter,setCounter] = useState(0)

    
    return (
        <div className="app">
            <div className="box">
                <h1>Counter</h1>
                <h2 style={{marginTop:"25px"}}>{counter}</h2>
                <div style={{marginTop:"25px"}}>
                    <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
                    <button type="button" onClick={() => setCounter(0)}>Reset</button>
                    <button type="button" onClick={() => setCounter(counter - 1)}>Decrement</button>
                </div>
                
            </div>
        </div>
    )
}

export default App