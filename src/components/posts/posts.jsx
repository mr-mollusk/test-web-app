import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId } from "../../redux/reducers/postsReducer";
import Post from "../post/post";
import s from "./posts.module.scss";
import Button from "../button/button";

const Posts = (props) => {
    const minPostsCount = 3;
    const { posts } = useSelector((state) => state.posts);
    const [postCount, setPostCount] = useState(minPostsCount);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsByUserId(props.id));
    }, [dispatch, props.id]);
    const showAllPosts = useCallback(() => {
        if (postCount === minPostsCount) setPostCount(posts.length);
        else setPostCount(minPostsCount);
    }, [postCount, posts.length]);
    return (
        <section className={s.posts__wrapper}>
            <div className={s.posts__title}>Посты</div>
            <div className={s.posts__content}>
                {posts
                    .filter((post, k) => k < postCount)
                    .map((post) => (
                        <Post
                            title={post.title}
                            body={post.body}
                            key={post.id}
                        />
                    ))}
            </div>
            <div className={s.posts__button}>
                <Button
                    text={
                        postCount === minPostsCount ? "Показать все посты" : "Скрыть посты"
                    }
                    type="black"
                    onClick={() => showAllPosts()}
                />
            </div>
        </section>
    );
};

export default Posts;
