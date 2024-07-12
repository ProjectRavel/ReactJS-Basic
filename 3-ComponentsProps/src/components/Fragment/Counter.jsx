import {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div className="flex shadow-md text-3xl">
        <h1 className="px-5 py-1 rounded-l-full shadow-md shadow-slate-400" >{counter}</h1>
        <button className="bg-black py-1 text-white px-5 rounded-r-full shadow-md shadow-slate-500" onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    )    
}

export default Counter;