

const signInAction = (e) => {
    return (dispatch,getstate) => {
        e.preventDefault()
        console.log(e);

        dispatch({
            type:"Sign_in",
            is_authenticated: true
        })
        
    }
}

export default signInAction
