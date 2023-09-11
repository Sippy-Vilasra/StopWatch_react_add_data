// import React, { useReducer } from 'react'

// const initialstate = 0;

// const reducer = (state, action) => {
//     switch (action) {
//         case "Increment":
//             return state + 1
//         case "decrement":
//             return state - 1
//         default:
//             return state

//     }
// }

// const Reducer = () => {
//     const [count, dispatch] = useReducer(reducer, initialstate)
//     return (
//         <div>
//             <div>Count = {count}</div>
//             <button className="btn btn-primary" onClick={() => dispatch("Increment")}>Increment</button>
//             <button className="btn btn-primary" onClick={() => dispatch("decrement")}>decrement</button>
//         </div>
//     )
// }

// export default Reducer









import React, { useEffect, useReducer, useRef } from 'react'

const initialState = {
    isRunning: false,
    time: 0
};

const Reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, isRunning: true };
        case 'stop':
            return { ...state, isRunning: false };
        case 'reset':
            return { isRunning: false, time: 0 };
        case 'tick':
            return { ...state, time: state.time + 1 };
        default:
            throw new Error();

    }
}

const Reducers = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    const idRef = useRef(0);

    useEffect(() => {
        if (!state.isRunning) {
            return;
        }
        idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
        return () => {
            clearInterval(idRef.current);
            idRef.current = 0;
        }
    }, [state.isRunning]);

    return (
        <div className="align-self-center" >
            <h1 >{state.time}s</h1>
            <button type="button" className="btn btn-outline-dark" onClick={() => dispatch({ type: 'start' })}>
                Start
            </button>
            <button type="button" className="btn btn-outline-warning" onClick={() => dispatch({ type: 'stop' })}>
                Stop
            </button>
            <button type="button" className="btn btn-outline-danger" onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    )
}

export default Reducers
