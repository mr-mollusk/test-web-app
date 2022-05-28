import Button from "../button/button";
import s from "./about.module.scss";

const About = (props) => {
    return (
        <section className={s.about__wrapper}>
            <div className={`${s.about__platform} ${s.platform__wrapper}`}>
                <div className={s.platform__title}>О площадке</div>
                <div className={s.platform__text}>
                    <span className={s.platform__subtitle}>
                        Современная площадка для проведения концертов и других
                        мероприятий любой сложности.
                    </span>
                    <span className={s.platform__content}>
                        Мы предоставляем всю необходимую для организаторов
                        инфраструктуру и готовые решения под все основные задачи
                        любого события, а также современное оборудование,
                        соответствующее самым высоким мировым стандартам.
                    </span>
                </div>
            </div>
            <div className={`${s.about__send} ${s.send__wrapper}`}>
                <div className={s.send__title}>
                    Оставить заявку на проведение концерта
                </div>
                <textarea name="text" id="1"></textarea>
                <div className={s.send__button}>
                    <Button text="Отправить" type="black" />
                </div>
            </div>
        </section>
    );
};

export default About;
