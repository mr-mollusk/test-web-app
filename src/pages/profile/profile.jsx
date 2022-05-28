import Info from "../../components/info/info";
import Posts from "../../components/posts/posts";
import Publics from "../../components/publics/publics";
import s from "./profile.module.scss";
import { getAllUsers } from "../../redux/reducers/infoReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Profile = (props) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.info);
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <section className={s.profile__wrapper}>
            <Info user={users[0]} />
            <Posts id={users[0].id} />
            <Publics />
        </section>
    );
};

export default Profile;
