import React, {useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="bg-blue-900 text-white p-5">
            <h1>Name: remote-microfrontend</h1>
            <div>Count = {count}</div>
            <div><button onClick={() => setCount(count + 1)}>Add One</button></div>
            <div><button onClick={() => setCount(count - 1)}>Subtract One</button></div>
        </div>
    )
}
