import s from "./button.module.scss";

const Button = (props) => {
    return (
        <button onClick={props.onClick}
            className={
                props.type === "black"
                    ? s.button__wrapper_black
                    : s.button__wrapper
            }
        >
            <span
                className={
                    props.type === "black"
                        ? s.button__text_black
                        : s.button__text
                }
            >
                {props.text}
            </span>
        </button>
    );
};

export default Button;
