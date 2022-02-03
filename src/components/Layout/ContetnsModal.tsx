import React, { useEffect, useState, useRef } from "react"
import { useRecoilState } from "recoil"
import Icon from "../Element/Icon"
import {
	coreContentsModalAtom,
	coreCellabAtom,
} from "../../recoils/CommonAtoms"
import "../../styles/layout/_Modal.scss"

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

	const mainContentsRef = useRef<HTMLElement>(null)
	const contentsRef = useRef<HTMLDivElement>(null)
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
							<h5>{coreCellab.desc}</h5>
						</div>
					</section>
					<section
						className={
							mainTopState > 203
								? "contents__main scrolled start"
								: mainTopState > 8
								? "contents__main scrolled"
								: "contents__main"
						}
						ref={mainContentsRef}
					>
						<div
							className={
								mainTopState > 8 ? "item scrolled" : "item"
							}
							ref={contentsRef}
						></div>
					</section>
				</section>
			) : (
				""
			)}
		</>
	)
}

export default ContentsModal
