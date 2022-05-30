import Button from "../../components/button/button";
import Users from "../../components/users/users";
import About from "../../components/about/about";
import Group from "../../components/group/group";
import bg from "../../assets/img/bg.png";
import "swiper/scss";
import "swiper/scss/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import s from "./main.module.scss";

const Main = (props) => {
    return (
        <section className={s.main__wrapper}>
            <div className={s.main__img}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    {[0, 1, 2].map((e) => (
                        <SwiperSlide key={e}>
                            <img src={bg} alt="" />
                            <div className={s.main__shadow}>
                                <div className={s.main__title}>
                                    <span>Twenty One Pilots</span>
                                </div>
                                <div className={s.main__subtitle}>
                                    <span>22.02.23 в 21:00</span>
                                </div>
                            </div>
                            <div className={s.main__buy}>
                                <Button text="Купить билет" />
                            </div>
                        </SwiperSlide>
                    ))}
                    ...
                </Swiper>
            </div>
            <Users />
            <About />
            <Group />
        </section>
    );
};

export default Main;
