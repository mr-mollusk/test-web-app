import { Link } from "react-router-dom";
import Button from "../button/button";
import s from "./header.module.scss";

const Header = (props) => {
    return (
        <header className={s.header__wrapper}>
            <span className={s.header__span}>
                <Link to={"/"}>CONCERT CLUB</Link>
            </span>

            <div className={s.header__buttons}>
                <Button text="Версия для слабовидящих" />
                <div className={s.header__link}>
                    <Link to={"/profile"}>
                        <Button text="Мой профиль" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
