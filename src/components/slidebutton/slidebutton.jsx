import s from "./slidebutton.module.scss";
import left from "../../assets/icons/left.svg";

const SlideButton = (props) => {
    return (
        <button className={s.slidebutton__wrapper} onClick={props.onClick}>
            <img src={left} alt="" />
        </button>
    );
};

export default SlideButton;
