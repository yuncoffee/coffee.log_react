import React, { useEffect, useState, useRef } from "react"
import { useRecoilState } from "recoil"
import Icon from "../Element/Icon"
import {
	coreContentsModalAtom,
	coreCellabAtom,
	coreCellabColorAtom,
} from "../../recoils/CommonAtoms"
import "../../styles/layout/_Modal.scss"
import Carousel from "./Swiper"

type ContentsModalType = {
	modalLoadingState?: boolean
	setModalLoadingState?: any
}

function ContentsModal({
	modalLoadingState,
	setModalLoadingState,
}: ContentsModalType) {
	const [coreCellab, setCoreCellab] = useRecoilState(coreCellabAtom)
	const [coreModal, setCoreModal] = useRecoilState(coreContentsModalAtom)
	const [coreColor, setCoreColor] = useRecoilState(coreCellabColorAtom)

	const mainContentsRef = useRef<HTMLElement>(null)
	const contentsRef = useRef<HTMLDivElement>(null)
	const colorChipRef = useRef<any>([])
	const [mainTopState, setMainTopState] = useState(0)
	useEffect(() => {
		const mainContents = mainContentsRef.current
		mainContents?.addEventListener("scroll", () => {
			if (
				mainContentsRef.current &&
				mainContentsRef.current !== undefined
			) {
				setMainTopState(mainContentsRef.current.scrollTop)
			}
		})
	})

	useEffect(() => {
		if (modalLoadingState) {
			for (let i = 0; i < colorChipRef.current.length; i++) {
				const colorChip = colorChipRef.current[i]

				colorChip.addEventListener("click", () => {
					console.log("클릭되었음")
				})
			}
		}
	}, [modalLoadingState])

	return (
		<>
			{modalLoadingState ? (
				<section
					className={
						coreModal.visible
							? "contentsModal__wrap show"
							: "contentsModal__wrap"
					}
				>
					<div
						className="contentsModal__header"
						s-display="flex"
						s-align="center"
						s-justify="space-between"
						s-padding="16px"
						s-position="absolute"
						style={{ width: "100%", zIndex: "10" }}
					>
						<h3 className="contents__title">{coreCellab.title}</h3>
						<Icon
							type="text"
							use="cancel"
							size="mid"
							iconName="ri-close-fill"
							onClick={() => {
								setCoreModal({
									...coreModal,
									visible: false,
								})
								const timer = setTimeout(() => {
									setModalLoadingState(false)
									clearTimeout(timer)
								}, 400)
							}}
						/>
					</div>
					<section
						className="contents__header"
						s-position="absolute"
						style={{
							width: "100%",
						}}
					>
						<div
							className="banner"
							style={{
								height: "200px",
								background: "#AAC5DA",
							}}
						></div>
						<div
							className="contents__desc"
							s-display="flex"
							s-direction="column"
							s-gap="8px"
							s-padding="8px"
						>
							<div
								className="label-wrap"
								s-display="flex"
								s-gap="4px"
							>
								{coreCellab.tags
									? coreCellab.tags.map((tag, i) => {
											return (
												<label
													key={i}
													s-label="label"
													s-radius="2px"
												>
													{tag}
												</label>
											)
									  })
									: ""}
							</div>
							<h5 style={{ overflowY: "scroll", height: "84px" }}>
								{coreCellab.desc}
							</h5>
						</div>
					</section>
					<section
						className={
							mainTopState > 336
								? "contents__main scrolled start topend"
								: mainTopState > 203
								? "contents__main scrolled start"
								: mainTopState > 8
								? "contents__main scrolled"
								: "contents__main"
						}
						ref={mainContentsRef}
					>
						<div
							className={
								mainTopState > 8
									? "contents__item scrolled"
									: "contents__item"
							}
							ref={contentsRef}
						>
							<section
								className="contents__item-0"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
							>
								<Carousel />
							</section>
							<section
								className="contents__item-1"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
							>
								<h3>Branding</h3>
								<figure>
									<img
										src="/assets/images/cellab/cellab_symbol.png"
										alt="셀렙의 메인심볼"
									/>
								</figure>
								<h6>{coreCellab.brand_desc}</h6>
							</section>
							<section
								className="contents__item-2"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
								s-display="flex"
								s-gap="16px"
								s-direction="column"
							>
								<h3>Color</h3>
								<div className="block__wrap">
									{coreColor.map((color, i) => {
										return (
											<div
												className={
													"block__item item-" + i
												}
												s-display="flex"
												s-gap="16px"
												s-justify="space-between"
												key={i}
											>
												<div
													className={
														"block__color color-" +
														i
													}
													ref={(el) => {
														colorChipRef.current[
															i
														] = el
													}}
												>
													<div className="block__color__chip"></div>
												</div>
												<div className="block__code">
													<h5>{color.title}</h5>
													<h6>RGB : {color.rgb}</h6>
													<h6>Hex : {color.hex}</h6>
													<h6>CMYK : {color.hex}</h6>
												</div>
											</div>
										)
									})}
								</div>
							</section>
							<section
								className="contents__item-1"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
							>
								<h3>Branding</h3>
								<figure>
									<img
										src="/assets/images/cellab/cellab_symbol.png"
										alt="셀렙의 메인심볼"
									/>
								</figure>
								<h6>{coreCellab.brand_desc}</h6>
							</section>
						</div>
					</section>
				</section>
			) : (
				""
			)}
		</>
	)
}

export default ContentsModal
