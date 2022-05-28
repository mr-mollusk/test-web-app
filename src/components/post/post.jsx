import s from "./post.module.scss";

const Post = (props) => {
    return (
        <section className={s.post__wrapper}>
            <div className={s.post__title}>{props.title}</div>
            <div className={s.post__body}>{props.body}</div>
        </section>
    );
};

export default Post;
