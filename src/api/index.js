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
};

const API = {
    info,
    posts,
};

export default API;
