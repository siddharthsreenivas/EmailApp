import {  createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/EmailReducer";
import axios from "axios";

const EmailContext = createContext()

const API = "https://flipkart-email-mock.now.sh/"

const initialState = {
    emailList : [],
    isLoading: false,
    errorMsg: '',
}

export const EmailContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getEmails = async (url) => {
        dispatch({type: "SET_LOADING"})
        try{
            const res = await axios.get(url)
            const emails = await res.data.list
            dispatch({type: "SET_EMAILS", payload: emails})
        }
        catch(error){
            let err = error.message
            dispatch({type: "SET_ERROR", payload: err})
        }
    }


    useEffect(()=>{
        getEmails(API)
    },[])

    return <EmailContext.Provider value={{...state}} >
        {children}
    </EmailContext.Provider>
}

export const useEmailContext = () => {
    return useContext(EmailContext)
}