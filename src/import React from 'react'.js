import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Login, Logout } from './actions'

const App = () => {
    const counter = useSelector((state) => state.counter)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Counter: {counter}</h2>

            <button onClick={() => dispatch(Increment())}>+</button>
            <button onClick={() => dispatch(Decrement())}>-</button>
            <br />
            {
                user ? (
                    <>
                        <h3>some valueable Infomation User is Logged In</h3>
                        <br />
                        <button onClick={() => dispatch(Logout())}>Logout</button>
                    </>
                ):(
                    <>
                        <br />
                        <button onClick={() => dispatch(Login())}>
                            Login
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default App
