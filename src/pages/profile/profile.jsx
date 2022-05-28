import Info from "../../components/info/info";
import Posts from "../../components/posts/posts";
import Publics from "../../components/publics/publics";
import s from "./profile.module.scss";
import { getAllUsers } from "../../redux/reducers/infoReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = (props) => {
    const params = useParams();
    console.log(params.userId);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.info.users);
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);
    console.log(state);
    return (
        <section className={s.profile__wrapper}>
            <Info user={state[params.userId - 1]} />
            <Posts id={state[params.userId - 1].id} />
            <Publics />
        </section>
    );
};

export default Profile;
