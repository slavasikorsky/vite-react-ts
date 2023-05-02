import styled from "styled-components";

type ContainerProps = {
	children: JSX.Element | JSX.Element[];
};

const Block = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`;

function Container({ children }: ContainerProps) {
	return <Block>{children}</Block>;
}

export default Container;
