import s from "./user.module.scss";
import Button from "../button/button";
import { Link } from "react-router-dom";

const User = (props) => {

    return (
        <section className={s.user__wrapper}>
            <div className={s.user__title}>{props.name}</div>
            <div className={s.user__city}>{props.city}</div>
            <div className={s.user__button}>
                <Link to={`profile/${props.id}`}>
                    <Button
                        text="Смотреть профиль"
                        type="black"
                    />
                </Link>
            </div>
        </section>
    );
};

export default User;
