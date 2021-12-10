import React from "react";
import Context from './Context'
import useStorage from "../utils/useStorage";


const StoreProvider = ({children}) =>{
    const [token, setToken, revoveToken] = useStorage('token')
    return(
        <Context.Provider
        value ={{
            token,
            setToken,
            revoveToken
        }}
        >
            {children}
        </Context.Provider>
    )
}


export default StoreProvider;