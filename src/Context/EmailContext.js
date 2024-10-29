import {  createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/EmailReducer";
import axios from "axios";

const EmailContext = createContext()

const EMAIL_LIST_API = "https://flipkart-email-mock.now.sh/?page="

const initialState = {
    emailList : [],
    isLoading: false,
    errorMsg: '',
    isSelected: false,
    currentPage: 1,
    totalPages: 2
}

export const EmailContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getEmails = async (currentPage) => {
        dispatch({type: "SET_LOADING"})
        try{
            const res = await axios.get(EMAIL_LIST_API+currentPage)
            const emails = await res.data.list
            dispatch({type: "SET_EMAILS", payload: emails})
        }
        catch(error){
            let err = error.message
            dispatch({type: "SET_ERROR", payload: err})
        }
    }

    const handleClick = (id) => {
        dispatch({type: "SET_ISOPEN"})
        dispatch({type: "SET_READ", payload: id})
    }

    const setCurrentPage = (pageNo) => {
        dispatch({type: "SET_CURRENT_PAGE", payload: pageNo})
    }

    const handleClose = () => {
        dispatch({type: "SET_ISCLOSE"})
    }

    useEffect(()=>{
        getEmails(state.currentPage)
    },[state.currentPage])

    return <EmailContext.Provider value={{...state, setCurrentPage, handleClick, handleClose}} >
        {children}
    </EmailContext.Provider>
}

export const useEmailContext = () => {
    return useContext(EmailContext)
}