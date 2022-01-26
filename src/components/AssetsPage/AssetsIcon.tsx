import React from "react"
import Icon from "../Element/Icon"

type ButtonProps = {
	lyTypes: string[]
	lyUses: string[]
}

function AssetsIcon({ lyTypes, lyUses }: ButtonProps) {
	return (
		<>
			<section
				className="main-contents assets-icon"
				s-display="flex"
				s-direction="column"
				s-gap="16px"
			>
				<h1>Icon</h1>
				<h4>size : XLarge</h4>
				<div s-display="flex" s-gap="8px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Icon type={lyType} size="xl" />
							</div>
						)
					})}
					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Icon size="xl" use={lyUse} />
							</div>
						)
					})}
					<div className="wrap">
						<h6>disabled : true</h6>
						<Icon size="xl" disabled={true} />
					</div>
				</div>
				<h4>size : Large</h4>
				<div s-display="flex" s-gap="8px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Icon type={lyType} size="lg" />
							</div>
						)
					})}
					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Icon size="lg" use={lyUse} />
							</div>
						)
					})}

					<div className="wrap">
						<h6>disabled : true</h6>
						<Icon size="lg" disabled={true} />
					</div>
				</div>
				<h4>size : MID</h4>
				<div s-display="flex" s-gap="8px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Icon type={lyType} size="mid" />
							</div>
						)
					})}

					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Icon size="mid" use={lyUse} />
							</div>
						)
					})}

					<div className="wrap">
						<h6>disabled : true</h6>
						<Icon size="mid" disabled={true} />
					</div>
				</div>
				<h4>size : SM</h4>
				<div s-display="flex" s-gap="16px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Icon type={lyType} size="sm" />
							</div>
						)
					})}

					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Icon size="sm" use={lyUse} />
							</div>
						)
					})}
					<div className="wrap">
						<h6>disabled : true</h6>
						<Icon size="sm" disabled={true} />
					</div>
				</div>
			</section>
		</>
	)
}

export default AssetsIcon
