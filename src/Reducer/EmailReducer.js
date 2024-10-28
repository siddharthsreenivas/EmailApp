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
    }
}


export default EmailReducer