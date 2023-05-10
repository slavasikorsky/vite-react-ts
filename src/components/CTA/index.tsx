import styled from "styled-components";
import { useState } from "react";
import Popup from "../Popup";
import Form from "../Form";

type CTAProps = {
	heading: string;
	text: string;
	buttonLabel?: string;
};

const CTABlock = styled.div`
	margin: 20px 0;
	padding: 40px 20px;
	border: 1px solid #ccc;
	background-color: #646cff;
	text-align: center;
	border-radius: 5px;
`;

function CTA({ heading, text, buttonLabel }: CTAProps) {
	const [openPopup, setOpenPopup] = useState(false);
	return (
		<>
			<CTABlock>
				<h3>{heading}</h3>
				<p>{text}</p>
				<br />
				{buttonLabel && (
					<button
						type="button"
						onClick={() => {
							setOpenPopup(!openPopup);
						}}
					>
						{buttonLabel}
					</button>
				)}
			</CTABlock>
			<Popup trigger={openPopup} setTrigger={setOpenPopup}>
				<Form />
			</Popup>
		</>
	);
}

export default CTA;

CTA.defaultProps = {
	buttonLabel: null,
};
