// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import "../../styles/layout/_Carousel.scss"
import { CardOnlyImage } from "../Element/Card"
import React, { useState, useEffect } from "react"

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

type CardoCardType = {
	contents: any
	card_desc?: any
}

function CaroCard({
	contents = undefined,
	card_desc = "텍스트가 없어요",
}: CardoCardType) {
	const [indexState, setIndexState] = useState(0)

	useEffect(() => {
		console.log(indexState)
	}, [indexState])

	return (
		<>
			<style jsx="true">{`
				.caroCard {
					padding-bottom: 0;
					width: 100%;
					padding-right: 64px;
				}

				.caroCard__desc h3 {
					margin-top: 16px;
				}
			`}</style>

			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView={1}
				spaceBetween={16}
				// loop={true}
				onSlideChange={(swiper: any) => {
					setIndexState(swiper.activeIndex)
				}}
				onSwiper={(swiper: any) => console.log(swiper)}
				className={"caroCard"}
			>
				<SwiperSlide className={"caroCard__slide"}>
					<CardOnlyImage image={contents![0].image} />
				</SwiperSlide>
				<SwiperSlide className={"caroCard__slide"}>
					<CardOnlyImage image={contents![1].image} />
				</SwiperSlide>
				<SwiperSlide className={"caroCard__slide"}>
					<CardOnlyImage image={contents![2].image} />
				</SwiperSlide>

				<span slot="container-end" className="caroCard__desc">
					{indexState === 0
						? contents![0].desc
						: indexState === 1
						? contents![1].desc
						: contents![2].desc}
				</span>
			</Swiper>
		</>
	)
}

export { Carousel, CaroCard }
