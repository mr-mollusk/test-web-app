import API from "../../api";

const initialState = {
    post: {
        id: 1,
        userId: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    comments: [
        {
            id: 1,
            postId: 5,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
    ],
};

const actionTypes = {
    SET_COMMENTS: "SET-COMMENTS",
    SET_POST: "SET-POST",
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COMMENTS: {
            return {
                ...state,
                comments: action.comments,
            };
        }
        case actionTypes.SET_POST: {
            return {
                ...state,
                post: action.post,
            };
        }
        default: {
            return state;
        }
    }
};

export const setCommentsAC = (comments) => ({
    type: actionTypes.SET_COMMENTS,
    comments: comments,
});

export const setPostAC = (post) => ({
    type: actionTypes.SET_POST,
    post: post,
});

export const getPostById = (id) => (dispatch) => {
    API.posts
        .getPostById(id)
        .then((response) => dispatch(setPostAC(response.data)));
};

export const getCommentsByPostId = (id) => (dispatch) => {
    API.comments
        .getCommentsByPostId(id)
        .then((response) => dispatch(setCommentsAC(response.data)));
};

export const postComment = (postId, name, email, body) => (dispatch) => {
    API.comments.postComment(postId, name, email, body).then((response) => {
        dispatch(getCommentsByPostId(postId));
        alert(`Response status: ${response.status}`);
    });
};

export default commentsReducer;
