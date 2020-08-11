
const signOutAction = () => {
    return (dispatch,getstate) => {

        dispatch({
            type:"Sign_out",
            is_authenticated: false
        })
        
    }
}

export default signOutAction