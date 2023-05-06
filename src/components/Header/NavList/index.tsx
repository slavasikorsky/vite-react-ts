import styled from "styled-components";
import NavItem from "./NavItem";

type NavListProps = {
	dataList: { url: string; text: string }[];
};

const NavListBlock = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
`;

function NavList({ dataList }: NavListProps) {
	return (
		<NavListBlock>
			{dataList.map((item) => (
				<NavItem url={item.url} text={item.text} />
			))}
		</NavListBlock>
	);
}

export default NavList;
