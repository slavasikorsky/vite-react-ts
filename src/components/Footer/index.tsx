import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";

const FooterContainer = styled.div`
	margin: 30px 0 0;
	padding: 20px;
`;

function Footer() {
	return (
		<FooterContainer>
			<Container>
				<Wrapper>
					<p>© {new Date().getFullYear()}</p>
					<p>Copyright text here</p>
				</Wrapper>
			</Container>
		</FooterContainer>
	);
}

export default Footer;
