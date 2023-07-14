import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import './Carrousel.css'
import FotoCarro1 from "../img/FotoCarro1.png";

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
                <SwiperSlide><img className="Swiper-img" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img className="Swiper-img" src="https://cdn.create.vista.com/api/media/medium/204534504/stock-photo-close-view-various-barber-tools?token=" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carrousel