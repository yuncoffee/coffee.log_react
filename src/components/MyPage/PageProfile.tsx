import React, { useEffect, useState } from "react"
import Button from "../Element/Button"
import Icon from "../Element/Icon"
import Card from "../Element/Card"
import { useRecoilState } from "recoil"
import {
	coreContentsModalAtom,
	coreCellabAtom,
} from "../../recoils/CommonAtoms"
import "../../styles/layout/_Modal.scss"
import ContentsModal from "../Layout/ContetnsModal"

function PageProfile() {
	const [coreCellab, setCoreCellab] = useRecoilState(coreCellabAtom)
	const [coreModal, setCoreModal] = useRecoilState(coreContentsModalAtom)
	const [modalLoadingState, setModalLoadingState] = useState(false)
	useEffect(() => {
		if (coreModal.visible) {
			const timer = setTimeout(() => {
				setModalLoadingState(true)
				clearTimeout(timer)
			}, 200)
		}

		return () => {
			console.log("useEffect 실행안됨")
		}
	}, [coreModal.visible])

	return (
		<>
			<style jsx="true">
				{`
					.wrap {
						max-width: 960px;
						height: calc(100%);
						margin: 0 auto;
					}
				`}
			</style>
			<article
				className={
					coreModal.visible ? "contentsModal show" : "contentsModal"
				}
				onClick={(e) => {
					console.log("어딜 누르시죠? 그건 제 잔상입니다만?")
					// setModalLoadingState(!modalLoadingState)
					if (e.target === e.currentTarget) {
						setCoreModal({ ...coreModal, visible: false })
					}
				}}
			>
				<ContentsModal
					modalLoadingState={modalLoadingState}
					setModalLoadingState={setModalLoadingState}
				/>
			</article>
			<section style={{ height: "100%" }}>
				<div
					className="wrap"
					s-display="flex"
					s-direction="column"
					s-gap="16px"
				>
					<h1>Page Profile</h1>
					<div
						className="cards"
						s-display="flex"
						s-gap="16px"
						s-flex-wrap="wrap"
						s-padding="4px"
						style={{ overflowY: "auto" }}
					>
						<Card
							title="CELLAB 코스메슈티컬 플랫폼"
							image="url(/assets/images/cellab/thumbnail.jpg) no-repeat center / cover"
							tags={coreCellab.tags}
							modalLoadingState={modalLoadingState}
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
