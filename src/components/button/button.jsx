import s from "./button.module.scss";

const Button = (props) => {
    return (
        <button className={s.button__wrapper}>
            <span className={s.button__text}>{props.text}</span>
        </button>
    );
};

export default Button;
