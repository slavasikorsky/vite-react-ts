import styled from "styled-components";
import LinkBlock from "../LinkElement";

type CTAProps = {
	heading: string;
	text: string;
	buttonUrl?: string;
	buttonLabel?: string;
};

const CTABlock = styled.div`
	margin: 20px;
	padding: 40px 20px;
	border: 1px solid #ccc;
	background-color: #646cff;
	text-align: center;
	border-radius: 5px;
`;

function CTA({ heading, text, buttonUrl, buttonLabel }: CTAProps) {
	return (
		<CTABlock>
			<h3>{heading}</h3>
			<p>{text}</p>
			<br />
			{buttonUrl && buttonLabel && (
				<LinkBlock link={buttonUrl}>{buttonLabel}</LinkBlock>
			)}
		</CTABlock>
	);
}

export default CTA;

CTA.defaultProps = {
	buttonUrl: null,
	buttonLabel: null,
};
