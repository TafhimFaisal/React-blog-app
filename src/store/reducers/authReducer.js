const initialState = {
    is_authenticated:false,
    email:null,
    name:null,
    uid:null
}

const authReducer = (state = initialState,action) => {
    if(action.type){
        switch (action.type) {
            case "Sign_in":
                return {
                    is_authenticated:true,
                    email:action.user_Info.email
                }
            case "Sign_out":
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
