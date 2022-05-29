import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import {
    getCommentsByPostId,
    getCommentsByUserId,
    getPostById,
    postComment,
    setCommentsAC,
} from "../../redux/reducers/commentsReducer";
import Post from "../../components/post/post";
import s from "./comments.module.scss";
import Comment from "../../components/comment/comment";
import Button from "../../components/button/button";

const Comments = (props) => {
    const dispatch = useDispatch();
    const params = useParams();
    const [commentText, setCommentText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const post = useSelector((state) => state.comments.post);
    const comments = useSelector((state) => state.comments.comments);
    useEffect(() => {
        dispatch(getPostById(params.postId));
        dispatch(getCommentsByPostId(params.postId));
    }, []);
    const postCommentOnClick = useCallback(() => {
        debugger
        dispatch(postComment(post.id, name, email, commentText));
    }, [commentText, dispatch, email, name, post.id]);
    return (
        <section className={s.comments__wrapper}>
            <div className={s.comments__post}>
                <Post title={post.title} body={post.body} />
            </div>

            <div className={s.comments__title}>Комментарии</div>
            <div className={s.comments__content}>
                {comments.map((comment) => (
                    <Comment
                        name={comment.name}
                        body={comment.body}
                        key={comment.id}
                    />
                ))}
            </div>
            <div className={s.comments__data}>
                <div className={s.comments__name}>
                    <span>Имя:</span>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className={s.comments__email}>
                    <span>Email:</span>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className={s.comments__send}>
                <textarea
                    name="sendComment"
                    id="2"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <div className={s.comments__button}>
                    <Button
                        text="Отправить комментарий"
                        type="black"
                        onClick={postCommentOnClick}
                    />
                </div>
            </div>
        </section>
    );
};

export default Comments;
