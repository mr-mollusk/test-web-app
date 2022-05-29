import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { getAllUsers } from "../../redux/reducers/infoReducer";
import User from "../user/user";
import s from "./users.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import { Navigation, Pagination } from "swiper";

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
                <Swiper
                    modules={[Pagination]}
                    
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={4}
                >
                    {state.map((user) => (
                        <SwiperSlide key={user.id}>
                            <User
                                name={user.name}
                                city={user.address.city}
                                id={user.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Users;
