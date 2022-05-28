import s from "./publics.module.scss";

const Publics = (props) => {
    return (
        <section className={s.publics__wrapper}>
            <div className={s.publics__title}>Публикации</div>
            <div className={s.publics__content}>
                <li>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                </li>
            </div>
        </section>
    );
};

export default Publics;
