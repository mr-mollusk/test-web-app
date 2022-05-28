import Button from "../../components/button/button";
import s from "./main.module.scss";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";
import SlideButton from "../../components/slidebutton/slidebutton";
import Users from "../../components/users/users";
import About from "../../components/about/about";
import Group from "../../components/group/group";

const Main = (props) => {
    return (
        <section className={s.main__wrapper}>
            <div className={s.main__img}>
                <div className={s.main__shadow}>
                    <div className={s.main__title}>
                        <span>Twenty One Pilots</span>
                    </div>
                    <div className={s.main__subtitle}>
                        <span>22.02.23 в 21:00</span>
                    </div>
                </div>
                <div className={s.main__buttons}>
                    <div className={s.main__left}>
                        <SlideButton/>
                    </div>
                    <div className={s.main__buy}>
                        <Button text="Купить билет" />
                    </div>
                    <div className={s.main__right}>
                    <SlideButton/>
                    </div>
                </div>
            </div>
            <Users />
            <About />
            <Group />
        </section>
    );
};

export default Main;
