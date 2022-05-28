import s from "./info.module.scss";
import Button from "../button/button";

const Info = (props) => {
    const state = props.user;

    return (
        <section className={s.info__wrapper}>
            <div className={s.info__table}>
                <div className={s.info__row_1}>
                    <div className={s.info__cell}></div>
                    <div className={`${s.info__cell} ${s.info__name}`}>
                        {state.name}
                    </div>
                    <div className={s.info__cell}></div>
                </div>
                <div className={s.info__row_2}>
                    <div className={s.info__cell}></div>
                    <div className={`${s.info__cell} ${s.info__text}`}>
                        {state.address.city}
                    </div>
                    <div className={`${s.info__cell} ${s.info__text}`}>
                        {state.email}
                    </div>
                    <div className={`${s.info__cell} ${s.info__text}`}>
                        {state.phone}
                    </div>
                    <div className={s.info__cell}>
                        <Button text="Написать сообщение" type="black" />
                    </div>
                    <div className={`${s.info__cell} ${s.info__last}`}>
                        <Button text="Предложить сходить на концерт" type="black"/>
                    </div>
                    <div className={s.info__cell}></div>
                </div>
            </div>
        </section>
    );
};

export default Info;
