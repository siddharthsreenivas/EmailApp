import {  createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/EmailReducer";
import axios from "axios";

const EmailContext = createContext()

const EMAIL_LIST_API = "https://flipkart-email-mock.now.sh/?page="

const EMAIL_BODY_API = "https://flipkart-email-mock.now.sh/?id="

const localStorageItem = JSON.parse(localStorage.getItem('Info'))
// console.log(localStorageItem)

const initialState = {
    emailList : [],
    emailBody: [],
    emailBodyDetails: {
        id: "",
        name: "",
        date: "",
        subject: "",
        
    },
    readAndFavorite: localStorageItem ? localStorageItem : [],
    isLoading: false,
    isBodyLoading: false,
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

    const getEmailBody = async (id) => {
        dispatch({type: "SET_BODY_LOADING"})
        try{
            const res = await axios.get(EMAIL_BODY_API + id)
            const emailBody = await res.data
            // console.log(emailBody);
            
            dispatch({type: "SET_EMAIL_BODY", payload: emailBody})
            dispatch({type: "SET_ISOPEN"})
            dispatch({type: "SET_READ", payload: id})
            
        }
        catch(error){
            console.log(error);
            let err = error.message
            dispatch({type: "SET_ERROR", payload: err})
        }
    }

    const setCurrentPage = (pageNo) => {
        dispatch({type: "SET_CURRENT_PAGE", payload: pageNo})
    }

    const handleFavorite = (id) => {
        dispatch({type: "SET_FAVORITE", payload: id})
    }

    const handleClose = () => {
        dispatch({type: "SET_ISCLOSE"})
    }

    useEffect(()=>{
        getEmails(state.currentPage)
    },[state.currentPage])

    useEffect(()=>{
        localStorage.setItem('Info',JSON.stringify(state.readAndFavorite))

    },[state.readAndFavorite])

    return <EmailContext.Provider value={{...state, setCurrentPage, handleClose, getEmailBody,handleFavorite}} >
        {children}
    </EmailContext.Provider>
}

export const useEmailContext = () => {
    return useContext(EmailContext)
}