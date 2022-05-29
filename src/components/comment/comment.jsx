import s from "./comment.module.scss";

const Comment = (props) => {
    return (
        <section className={s.comment__wrapper}>
            <div className={s.comment__title}>{props.name}</div>
            <div className={s.comment__body}>{props.body}</div>
        </section>
    );
};

export default Comment;
