import { Link } from "react-router-dom";
import styled from "styled-components";

type NavItemProps = {
	url: string;
	text: string;
};

const NavbarItem = styled(Link)`
	font-size: 1rem;
	text-decoration: underline;
	margin: 0 20px;
`;

function NavItem({ url, text }: NavItemProps) {
	return <NavbarItem to={url}>{text}</NavbarItem>;
}

export default NavItem;
