import React from "react"
import Button from "../Element/Button"

type ButtonProps = {
	lyTypes: string[]
	lyUses: string[]
}

function AsstesButton({ lyTypes, lyUses }: ButtonProps) {
	return (
		<>
			<section
				className="main-contents assets-button"
				s-display="flex"
				s-direction="column"
				s-gap="16px"
			>
				<h1>Button</h1>
				<h4>size : XLarge</h4>
				<div s-display="flex" s-gap="8px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Button
									type={lyType}
									name="버튼 예시"
									size="xl"
								/>
							</div>
						)
					})}
					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Button
									use={lyUse}
									name="버튼 예시"
									size="xl"
								/>
							</div>
						)
					})}
					<div className="wrap">
						<h6>disabled : true</h6>
						<Button name="버튼 예시" size="xl" disabled={true} />
					</div>
					<div className="wrap">
						<h6>icon : true</h6>
						<Button
							name="버튼 예시"
							size="xl"
							icon={true}
							iconName="ri-cloud-fill"
						/>
					</div>
				</div>
				<h4>size : Large</h4>
				<div s-display="flex" s-gap="8px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Button
									type={lyType}
									name="버튼 예시"
									size="lg"
								/>
							</div>
						)
					})}
					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Button
									use={lyUse}
									name="버튼 예시"
									size="lg"
								/>
							</div>
						)
					})}
					<div className="wrap">
						<h6>disabled : true</h6>
						<Button name="버튼 예시" size="lg" disabled={true} />
					</div>
					<div className="wrap">
						<h6>icon : true</h6>
						<Button
							name="버튼 예시"
							size="lg"
							icon={true}
							iconName="ri-cloud-fill"
						/>
					</div>
				</div>
				<h4>size : Mid</h4>
				<div s-display="flex" s-gap="8px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Button
									type={lyType}
									name="버튼 예시"
									size="mid"
								/>
							</div>
						)
					})}
					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Button
									use={lyUse}
									name="버튼 예시"
									size="mid"
								/>
							</div>
						)
					})}
					<div className="wrap">
						<h6>disabled : true</h6>
						<Button name="버튼 예시" size="mid" disabled={true} />
					</div>
					<div className="wrap">
						<h6>icon : true</h6>
						<Button
							name="버튼 예시"
							size="mid"
							icon={true}
							iconName="ri-cloud-fill"
						/>
					</div>
				</div>
				<h4>size : SM</h4>
				<div s-display="flex" s-gap="8px" s-flex-wrap="wrap">
					{lyTypes.map((lyType, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{lyType}</h6>
								<Button
									type={lyType}
									name="버튼 예시"
									size="sm"
								/>
							</div>
						)
					})}
					{lyUses.map((lyUse, i) => {
						return (
							<div className="wrap" key={i}>
								<h6>{"use: " + lyUse}</h6>
								<Button
									use={lyUse}
									name="버튼 예시"
									size="sm"
								/>
							</div>
						)
					})}
					<div className="wrap">
						<h6>disabled : true</h6>
						<Button name="버튼 예시" size="sm" disabled={true} />
					</div>
					<div className="wrap">
						<h6>icon : true</h6>
						<Button
							name="버튼 예시"
							size="sm"
							icon={true}
							iconName="ri-cloud-fill"
						/>
					</div>
				</div>

				<Button
					name="myHello"
					// customColor={{ hue: 25, saturation: 30, lightness: 52 }}
				/>

				<Button
					name="test 버튼"
					customColor={{ hue: 215, saturation: 100, lightness: 36 }}
				/>
			</section>
		</>
	)
}

export default AsstesButton
