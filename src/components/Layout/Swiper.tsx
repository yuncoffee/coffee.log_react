// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import "../../styles/layout/_Carousel.scss"

function Carousel() {
	return (
		<>
			<style jsx="true">{`
				.swiper {
					padding-bottom: 24px;
					width: 232px;
				}

				.swiper-slide {
				}

				.swiper-horizontal > .swiper-pagination {
					bottom: 4px;
				}
			`}</style>

			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView={1}
				spaceBetween={-16}
				// loop={true}
				pagination={{ clickable: true }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper: any) => console.log(swiper)}
			>
				<SwiperSlide>
					<article className="mockup"></article>
				</SwiperSlide>
				<SwiperSlide>
					<article className="mockup"></article>
				</SwiperSlide>
				<SwiperSlide>
					<article className="mockup"></article>
				</SwiperSlide>
				<SwiperSlide>
					<article className="mockup"></article>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Carousel
