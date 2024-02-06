import { createContext, useContext } from "react";
import { useState } from "react";

const GlobalContext = createContext(null);
export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
    //set all your global state here and pass it down in the value statement
    const [value, setValue] = useState(2);
    
    return(
    <GlobalContext.Provider value={{ value, setValue }}>
        {children}
    </GlobalContext.Provider>
    )
}



