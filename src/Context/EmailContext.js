import {  createContext, useContext } from "react";

const EmailContext = createContext()

export const EmailContextProvider = ({children}) => {

    const test = "testing"

    return <EmailContext.Provider value={test}>
        {children}
    </EmailContext.Provider>
}

export const useEmailContext = () => {
    return useContext(EmailContext)
}