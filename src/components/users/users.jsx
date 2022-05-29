import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/reducers/infoReducer";
import User from "../user/user";
import s from "./users.module.scss";

const Users = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.info.users);
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);
    return (
        <section className={s.users__wrapper}>
            <div className={s.users__title}>Купили билеты</div>
            <div className={s.users__content}>
                {state
                    .filter((post, k) => k < 4)
                    .map((user) => (
                        <User
                            name={user.name}
                            city={user.address.city}
                            key={user.id}
                            id={user.id}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Users;
