import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './Reducer';
let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: []
}

const AppContext = React.createContext();

const Context = ({ children }) => {

    const [state, dispach] = useReducer(reducer, initialState);

    dispach({ type: "SET_LOADING" })

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            dispach({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
            // isLoading = false
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, []);



    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { Context, AppContext, useGlobalContext }
