import s from "./group.module.scss";

const Group = (props) => {
    return (
        <section className={s.group__wrapper}>
            <div className={s.group__title}>О группе</div>
            <div className={s.group__text}>
                Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
                Группа образовалась в 2009 году и на данный момент состоит из
                Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил
                два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
            </div>
        </section>
    );
};

export default Group;
