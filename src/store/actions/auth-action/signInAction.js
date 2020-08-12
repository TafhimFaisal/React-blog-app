

const signInAction = (e) => {

    return (dispatch,getstate) => {

        let email = e.target.elements["email"].value
        let password = e.target.elements["password"].value 

        dispatch({
            type:"Sign_in",
            user_Info : {
                email: e.target.elements["email"].value
            }
        })

    }

}

export default signInAction
