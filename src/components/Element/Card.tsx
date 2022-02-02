import React from "react"
import "../../styles/element/_Card.scss"

type CardType = {
	title?: string | undefined
	tags?: string[] | undefined
	image?: string | undefined
}

function Card({
	title = "undefined",
	image = undefined,
	tags = ["김", "수", "안"],
}: CardType) {
	return (
		<>
			<style jsx="true">{``}</style>

			<article className="card" s-radius="16px">
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

export default Card
