import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import './Carrousel.css'
import FotoCarro1 from "../img/FotoCarro1Edit.png";
import FotoCarro2 from "../img/FotoTijeras.jpg";
import FotoCarro3 from "../img/FotoHerramientas2.jpg";
import FotoCarro4 from "../img/FotoLocalFinal.png";
import FotoCarro6 from "../img/FotoCarroBN.png";
import FotoCarro5 from "../img/FotoHerramientas.jpg";


function Carrousel() {
    return (
        <div style={{scrollMarginTop: "200px"}} id="inicio">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className="Swiper-img" src={FotoCarro1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="Swiper-img" src={FotoCarro4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="Swiper-img" src={FotoCarro6} alt="" /></SwiperSlide>
                <SwiperSlide><img className="Swiper-img" src={FotoCarro2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="Swiper-img" src={FotoCarro5} alt="" /></SwiperSlide>
                <SwiperSlide><img className="Swiper-img" src={FotoCarro3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carrousel