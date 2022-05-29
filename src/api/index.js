import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const info = {
    getInfo: () => instance.get("users"),
};

const posts = {
    getPosts: () => instance.get("posts"),
    getPostsByUserId: (id) => instance.get(`users/${id}/posts`),
    getPostById: (id) => instance.get(`posts/${id}`),
};

const comments = {
    getCommentsByPostId: (id) => instance.get(`comments?postId=${id}`),
    postComment: (postId, name, email, body) => instance.post(`comments`, {postId, name, email, body})
};

const API = {
    info,
    posts,
    comments,
};

export default API;
