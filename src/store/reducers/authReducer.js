const initialState = {
    is_authenticated:false
}

const authReducer = (state = initialState,action) => {
    if(action.type){
        switch (action.type) {
            case "Sign_in":
                return {
                    is_authenticated:true
                }
            case "Sign_out" :
                return {
                    is_authenticated:false
                }
            default:
                return {
                    is_authenticated:false
                }
            
        }   
       
    }
}

export default authReducer
