import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLink = styled(Link)`
	font-size: 1rem;
	text-decoration: underline;
	margin: 0 10px;
`;

function Menu() {
	return (
		<nav>
			<NavbarLink to="/">Home</NavbarLink>
			<NavbarLink to="/404">Not found</NavbarLink>
		</nav>
	);
}

export default Menu;
