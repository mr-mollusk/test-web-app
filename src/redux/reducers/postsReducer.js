import API from "../../api";

const initialState = {
    posts: [
        {
            id: 1,
            userId: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        },
    ],
};

const actionTypes = {
    SET_POSTS: "SET-POSTS",
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_POSTS: {
            return {
                ...state,
                posts: action.posts,
            };
        }

        default: {
            return state;
        }
    }
};

export const setPostsAC = (posts) => ({
    type: actionTypes.SET_POSTS,
    posts: posts,
});

export const getAllPosts = () => (dispatch) => {
    API.posts
        .getPosts()
        .then((response) => dispatch(setPostsAC(response.data)));
};

export const getPostsByUserId = (id) => (dispatch) => {
    API.posts
        .getPostsByUserId(id)
        .then((response) => dispatch(setPostsAC(response.data)));
};

export default postsReducer;
