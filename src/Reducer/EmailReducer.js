const EmailReducer = (state,action) => {
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            }
        
        case "SET_EMAILS":
            return{
                ...state,
                isLoading: false,
                emailList: action.payload
            }

        case "SET_ERROR":
            return{
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }
        
        case "SET_CURRENT_PAGE":
            return{
                ...state,
                currentPage: action.payload
            }
        
        case "SET_READ":
            let id = action.payload
            let updatedEmails = state.emailList.map((curEle)=>{
                return(
                    (curEle.id === id) ? {...curEle,read: true} : {...curEle}
                )
            })

            return{
                ...state,
                emailList: updatedEmails
            }

        case "SET_ISOPEN":
            return{
                ...state,
                isSelected: true
            }

        case "SET_ISCLOSE":
            return{
                ...state,
                isSelected: false
            }

        default:
            return{
                ...state
            }
    }
}


export default EmailReducer