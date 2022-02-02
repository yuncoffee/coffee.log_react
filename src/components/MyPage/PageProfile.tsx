import React from "react"
import Button from "../Element/Button"

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
				<div className="wrap">
					<h1>Page Profile</h1>
				</div>
			</section>
		</>
	)
}

export default PageProfile
