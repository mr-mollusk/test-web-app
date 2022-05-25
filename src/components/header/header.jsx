import Button from "../button/button";
import s from "./header.module.scss";

const Header = (props) => {
    return (
        <header className={s.header__wrapper}>
            <span className={s.header__span}>CONCERT CLUB</span>
            <div className={s.header__buttons}>
                <Button text="Версия для слабовидящих"/>
                <Button text="Мой профиль"/>
            </div>
        </header>
    );
};

export default Header;
