import React from "react"
import "../../styles/element/_Card.scss"
import { useRecoilState } from "recoil"
import { coreContentsModalAtom } from "../../recoils/CommonAtoms"
import { boolean } from "@storybook/addon-knobs"

type CardType = {
	title?: string | undefined
	tags?: string[] | undefined
	image?: string | undefined
	modalLoadingState?: any
}

function Card({
	title = "undefined",
	image = undefined,
	tags = ["김", "수", "안"],
	modalLoadingState = undefined,
}: CardType) {
	const [coreModal, setCoreModal] = useRecoilState(coreContentsModalAtom)

	return (
		<>
			<style jsx="true">{``}</style>

			<article
				className="card"
				s-radius="16px"
				onClick={(e: any) => {
					setCoreModal({ ...coreModal, visible: true })
				}}
			>
				{image ? (
					<div className="top">
						<div
							className="thumbnail"
							style={{ background: `${image}` }}
						></div>
					</div>
				) : (
					""
				)}
				<div
					className="btm"
					s-padding="16px"
					s-display="flex"
					s-direction="column"
					s-gap="4px"
				>
					<h3>{title}</h3>
					<div className="label-wrap" s-display="flex" s-gap="4px">
						{tags
							? tags.map((tag, i) => {
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
				</div>
			</article>
		</>
	)
}

type CardOnlyImageType = {
	image?: string | undefined
}

function CardOnlyImage({ image = undefined }: CardOnlyImageType) {
	return (
		<>
			<style jsx="true">{``}</style>

			<article className="card" s-radius="16px">
				<div className="top">
					<div
						className="thumbnail"
						style={{ background: `${image}` }}
					></div>
				</div>
			</article>
		</>
	)
}

export { Card, CardOnlyImage }
