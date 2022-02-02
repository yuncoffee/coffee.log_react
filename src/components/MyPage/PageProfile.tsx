import React from "react"
import Button from "../Element/Button"
import Card from "../Element/Card"

function PageProfile() {
	return (
		<>
			<style jsx="true">
				{`
					section {
						height: 100%;
					}

					.wrap {
						max-width: 960px;
						height: calc(100%);
						margin: 0 auto;
					}
				`}
			</style>

			<section>
				<div
					className="wrap"
					s-display="flex"
					s-direction="column"
					s-gap="24px"
				>
					<h1>Page Profile</h1>
					<div
						className="cards"
						s-display="flex"
						s-gap="16px"
						s-flex-wrap="wrap"
					>
						<Card
							title="CELLAB 코스메슈티컬 플랫폼"
							image="url(/assets/images/cellab/thumbnail.jpg) no-repeat center / cover"
							tags={["2019", "졸업작품"]}
						/>
						<Card
							title="CELLAB 코스메슈티컬 플랫폼"
							image="url(/assets/images/cellab/thumbnail.jpg) no-repeat center / cover"
							tags={["2019", "졸업작품"]}
						/>
						<Card
							title="CELLAB 코스메슈티컬 플랫폼"
							image="url(/assets/images/cellab/thumbnail.jpg) no-repeat center / cover"
							tags={["2019", "졸업작품"]}
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default PageProfile
