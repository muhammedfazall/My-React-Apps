import { useReducer,useState } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return { count: 0 }
        case 'INC_BY':
            return { count: state.count + action.payload }
        default:
            return state;
    }
}

function Counter() {

    const initialState = {
        count: 0,
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const [value, setValue] = useState(0)

    return (
        <div>
        <div className='container'>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
            <input type="number" value={value} onChange={(e)=>{setValue(Number(e.target.value))}}></input>
            <button onClick={() => dispatch({ 
                                                type: 'INC_BY',
                                                payload: value
                                            })
                            }>+{value}
            </button>
        
        </div>
    );
}

export default Counter