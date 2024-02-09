import { createContext, useContext } from "react";
import { useState } from "react";

const GlobalContext = createContext(null);
export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
    //set all your global state here and pass it down in the value statement
    const [menu,setMenu] = useState(false);
    const projects = [
        {
          id: 1,
          img: "../assets/png.png",
        },
        {
          id: 2,
          img: "../assets/png.png",
        },
        {
          id: 3,
          img: "../assets/png.png",
        },
        {
          id: 4,
          img: "../assets/png.png",
        },
        {
          id: 5,
          img: "../assets/png.png",
        },
      ];
    
    return(
    <GlobalContext.Provider value={{ menu,setMenu,projects }}>
        {children}
    </GlobalContext.Provider>
    )
}



