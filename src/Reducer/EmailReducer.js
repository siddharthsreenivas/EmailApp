const EmailReducer = (state,action) => {
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            }
        
        case "SET_EMAILS":
            // const updatedEmailList = action.payload.map((curEle)=>{
            //     return ( {...curEle,read: false, isFavorite: false} )
            // })
            const tempreadAndFavorite = action.payload.map((item)=>({id: item.id, read: false, isFavorite: false}))
            const combinedData = [...state.readAndFavorite, ...tempreadAndFavorite]
            const uniqueData = combinedData.filter((item, index, self) => 
                index === self.findIndex((t)=>t.id === item.id)
            )
            // const localStorageItem = localStorage.getItem('Info')
            // console.log(JSON.parse(localStorageItem))
            return{
                ...state,
                isLoading: false,
                emailList: action.payload,
                filteredEmail: action.payload,
                readAndFavorite: uniqueData
            }

        case "SET_FILTERED_EMAIL":
            const filter = action.payload
            if(filter === "read"){
                let ids = state.readAndFavorite.filter((item)=>item.read).map((item)=>item.id)
                let updatedFilterEmail = state.emailList.filter(item => ids.includes(item.id))
                // console.log(updatedFilterEmail);
                return{
                    ...state,
                    filteredEmail: updatedFilterEmail,
                    appliedFilter: filter
                }
                
            }
            else if(filter === "unread"){
                let ids = state.readAndFavorite.filter((item)=>(!item.read)).map((item)=>item.id)
                let updatedFilterEmail = state.emailList.filter(item => ids.includes(item.id))
                // console.log(updatedFilterEmail);
                return{
                    ...state,
                    filteredEmail: updatedFilterEmail,
                    appliedFilter: filter
                }
            }
            else if(filter === "favorites"){
                let ids = state.readAndFavorite.filter((item)=>item.isFavorite).map((item)=>item.id)
                let updatedFilterEmail = state.emailList.filter(item => ids.includes(item.id))
                // console.log(updatedFilterEmail);
                return{
                    ...state,
                    filteredEmail: updatedFilterEmail,
                    appliedFilter: filter
                }
            }
            else{
                let updatedFilterEmail = state.emailList
                return{
                    ...state,
                    filteredEmail: updatedFilterEmail,
                    appliedFilter: filter
                }
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
            // let updatedEmails = state.emailList.map((curEle)=>{
            //     return(
            //         (curEle.id === id) ? {...curEle,read: true} : {...curEle}
            //     )
            // })
            let updatedRead = state.readAndFavorite.map((item)=>{
                return(
                    (item.id === id) ? {...item, read: true} : {...item}
                )
            })

            return{
                ...state,
                // emailList: updatedEmails,
                readAndFavorite: updatedRead
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

        case "SET_BODY_LOADING":
            return{
                ...state,
                isBodyLoading: true,
                emailBody: [],
                emailBodyDetails: [],
            }

        case "SET_EMAIL_BODY":

           const emailId = action.payload.id
           const emailBodyDetail = state.emailList.find((curEle)=> curEle.id === emailId )

            return{
                ...state,
                emailBodyDetails: {
                    id: emailBodyDetail.id,
                    name: emailBodyDetail.from.name,
                    date: emailBodyDetail.date,
                    subject: emailBodyDetail.subject,
                },
                isBodyLoading: false,
                emailBody: action.payload,
            }

        case "SET_FAVORITE":
            const curId = action.payload
            // const favoriteValue = 
            // const updatedEmailFavorite = state.emailList.map((curEle)=> {
            //     return (
            //         (curEle.id === curId) ? {...curEle,isFavorite: !curEle.isFavorite} : {...curEle}
            //     )
            // })
            const updatedFavorite = state.readAndFavorite.map((curEle)=> {
                return (
                    (curEle.id === curId) ? {...curEle,isFavorite: !curEle.isFavorite} : {...curEle}
                )
            })

            // if(state.emailBodyDetails.id === curId) {
            //     // state.emailBodyDetails.favorite = !state.emailBodyDetails.favorite
            //     state.emailBodyDetails.favorite = state.readAndFavorite.find((item)=>(item.id)===curId && (!item.isFavorite))
                
            // }
            // const test = state.readAndFavorite.find((item)=>(item.id)===curId && item.isFavorite)
            // console.log(test);
            

            return{
                ...state,
                // emailList: updatedEmailFavorite,
                // emailBodyDetails: state.emailBodyDetails,
                readAndFavorite: updatedFavorite
            }

        default:
            return{
                ...state
            }
    }
}


export default EmailReducer