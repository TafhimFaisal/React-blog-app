

const createBlogAction = (blog) => {
    return ( dispatch,getState ) => {
        dispatch({
            type:"create_blog",
            blog
        })
    }
}

export default createBlogAction
