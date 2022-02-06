import React, { useEffect, useState, useRef } from "react"
import { useRecoilState } from "recoil"
import Icon from "../Element/Icon"
import {
	coreContentsModalAtom,
	coreCellabAtom,
	coreCellabColorAtom,
	coreCellabTypeAtom,
} from "../../recoils/CommonAtoms"
import "../../styles/layout/_Modal.scss"
import { CaroCard, Carousel } from "./Swiper"

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
	const [coreType, setCoreType] = useRecoilState(coreCellabTypeAtom)

	const [isColorActive, setIsColorActive] = useState<any>([
		{ id: 0, isActive: true },
		{ id: 1, isActive: false },
		{ id: 2, isActive: false },
		{ id: 3, isActive: false },
	])

	const [contentsState, setContentsState] = useState<any>([
		{
			id: 0,
			image: "url(/assets/images/cellab/research_01.png) no-repeat center / contain",
			desc: (
				<h3>
					MZ세대를 위해 <br />
					<h5>미래사회의 주체가 될 MZ세대들이</h5>
				</h3>
			),
		},
		{
			id: 1,
			image: "url(/assets/images/cellab/thumbnail.jpg) no-repeat center / cover",
			desc: (
				<h3>
					코스메슈티컬을 활용한 <br />
					<h5>헬스케어 서비스를 제공받을 수 있도록</h5>
				</h3>
			),
		},
		{
			id: 2,
			image: "url(/assets/images/cellab/thumbnail.jpg) no-repeat center / cover",
			desc: (
				<h3>
					헬스케어 서비스를 제공합니다 <br />
					<h5>피부진단, 코스메슈티컬 관리 등</h5>
				</h3>
			),
		},
	])

	const [bgImgState, setBgImgState] = useState([
		// 2017
		{ year: 2016, length: 82, isActive: false },
		{ year: 2017, length: 122, isActive: false },
		{ year: 2018, length: 198, isActive: false },
		{ year: 2019, length: 272, isActive: false },
		{ year: 2020, length: 350, isActive: false },
		{ year: 2021, length: 594.5, isActive: true },
	])

	const mainContentsRef = useRef<HTMLElement>(null)
	const contentsRef = useRef<HTMLDivElement>(null)
	const colorChipRef = useRef<any>([])
	const colorBoxRef = useRef<any>([])
	const bgGraphRef = useRef<any>([])
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
				const colorBox = colorBoxRef.current[i]

				colorChip.addEventListener("click", (e: any) => {
					const index = e.target.dataset.index
					for (let i = 0; i < colorChipRef.current.length; i++) {
						setIsColorActive([
							...isColorActive,
							(isColorActive[i] = { id: i, isActive: false }),
						])
					}

					setIsColorActive([
						...isColorActive,
						(isColorActive[index].isActive = true),
					])
				})
				colorBox.addEventListener("click", (e: any) => {
					const index = e.target.dataset.index
					for (let i = 0; i < colorBoxRef.current.length; i++) {
						setIsColorActive([
							...isColorActive,
							(isColorActive[i] = { id: i, isActive: false }),
						])
					}

					setIsColorActive([
						...isColorActive,
						(isColorActive[index].isActive = true),
					])
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
							{/* section_color */}
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
								<div
									s-display="flex"
									s-align="center"
									s-justify="center"
									s-gap="16px"
								>
									{coreColor.map((item, i) => {
										return (
											<div
												key={i}
												className={
													isColorActive[i].isActive
														? "color-picker isActive"
														: "color-picker"
												}
												ref={(el) => {
													colorBoxRef.current[i] = el
												}}
												data-index={i}
											>
												<div
													className="color-picker__color"
													data-index={i}
													style={{
														background: `#${item.hex}`,
													}}
												></div>
											</div>
										)
									})}
								</div>
								<div className="block__wrap">
									{coreColor.map((color, i) => {
										return (
											<div
												className={
													isColorActive[i].isActive
														? "block__item item-" +
														  i +
														  " isActive"
														: "block__item item-" +
														  i
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
													data-index={i}
												></div>
												<div className="block__code">
													<h5>{color.title}</h5>
													<h6>RGB : {color.rgb}</h6>
													<h6>Hex : {color.hex}</h6>
													<h6>CMYK : {color.cmyk}</h6>
												</div>
											</div>
										)
									})}
								</div>
							</section>
							{/* section_typo */}
							<section
								className="contents__item-3"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
							>
								<h3>Typeface</h3>
								<div
									s-display="flex"
									s-justify="space-between"
									s-align="center"
									s-gap="16px"
								>
									<div>
										<h5>{coreType.font}</h5>
										<h6>{coreType.font_desc}</h6>
									</div>
									<figure>
										<img
											src="/assets/images/cellab/typeface_kor.png"
											alt="셀렙의 메인심볼"
										/>
									</figure>
								</div>
							</section>
							{/* section_goal */}
							<section
								className="contents__item-4"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
								s-display="flex"
								s-direction="column"
								s-gap="16px"
							>
								<h3>Project Goal</h3>
								<div
									className="text__wrap"
									s-display="flex"
									s-gap="4px"
									s-direction="column"
								>
									<h4>
										MZ세대를 위한 코스메슈티컬 헬스케어
										플랫폼 서비스
									</h4>
									<h6>
										미래사회의 주체가 될 MZ세대를 기반으로
										코스메슈티컬을 통해 헬스케어를 이루어낼
										수 있도록 진단, 구매, 관리 기능을 통해
										코스메슈티컬을 제공하는 디지털 플랫폼을
										서비스합니다
									</h6>
								</div>

								<figure>
									<img
										src="/assets/images/cellab/project_goal.png"
										alt="프로젝트 목표"
									/>
								</figure>
							</section>
							{/* section_background */}
							<section
								className="contents__item-5"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
							>
								<h3>background</h3>
								<div className="background__wrap">
									<div className="background__text for_graph">
										<h2>
											포스트코로나 이후 코스메슈티컬에
											대한 관심증가
										</h2>
										<h5>
											포스트코로나시대의 유통과 소비시장은
											오프라인에서 온라인으로 변화되어
											가고 있고, 코스메슈티컬 시장이 점점
											커져가고 있습니다 이에, 시장상황에
											맞추어 코스메슈티컬과 소비자를
											연결시킬 플랫폼 서비스가 필요합니다
										</h5>
									</div>
									<div
										className="background__image"
										s-display="flex"
										s-gap="24px"
										s-align="flex-end"
										s-justify="flex-end"
										s-margin-right="32px"
									>
										{bgImgState.map((item, i) => {
											return (
												<div
													key={i}
													s-display="flex"
													s-direction="column"
													s-gap="4px"
													s-align="center"
													data-index={i}
													className={
														item.isActive
															? "background__image__item isActive"
															: "background__image__item"
													}
													ref={(el) => {
														bgGraphRef.current[i] =
															el
													}}
												>
													<h4>{item.length}</h4>
													<div
														className="percent"
														style={{
															height: `${
																item.length / 2
															}px`,
														}}
													></div>
													<h6>{item.year}</h6>
												</div>
											)
										})}
									</div>
								</div>
								<CaroCard contents={contentsState} />
								<div className="background__text for_research">
									<h2>
										소비트렌드를 주도하는 MZ세대를 반영한
										서비스 필요
									</h2>
									<h5>
										이들의 성향을 점검하기 위해 실제 MZ세대
										여성을 대상으로 설문을 실시한 결과,
										이들이 확실히 디지털 특히 모바일 환경에
										익숙한 세대이며, 소비에 있어 효율성,
										합리성에 초점을 맞추고 있고, 어떻게 하면
										더 편하고 합리적인 소비를 할 수 있을지
										고민이 많다는 점도 알 수 있었습니다.
									</h5>
								</div>
							</section>
							<section
								className="contents__item-5"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
								style={{ background: "#424242" }}
							>
								<h3>Persona</h3>
							</section>
							<section
								className="contents__item-4"
								s-padding="16px"
								s-position="relative"
								s-top="32px"
								style={{ background: "#868686" }}
							>
								<h3>service</h3>
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
